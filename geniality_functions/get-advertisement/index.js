/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {onRequest} = require("firebase-functions/v2/https");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const {getStorage, getDownloadURL} = require("firebase-admin/storage");
const axios = require("axios");

initializeApp();

exports.genialityGetAdvertisement = onRequest(
    {region: "asia-southeast1"},
    async (req, res) => {
      const token = req.get("authorization").split(" ")[1];
      const expectedToken = "geni@lity";
      if (token !== expectedToken) {
        res.status(403).send("Forbidden!");
        return;
      }

      const storeCode = req.body.storeCode;
      const memberId = req.body.memberId;
      const basket = req.body.basket;

      const db = getFirestore();
      const storage = getStorage();

      try {
        // get member name, age, job and gender
        const memberQuerySnapshot = await db.collection("geniality_member")
            .where("memberId", "==", memberId)
            .get();
        if (memberQuerySnapshot.empty) {
          res.status(500).send("Internal Error");
        }
        const memberDoc = memberQuerySnapshot.docs[0].data();
        const memberAge = memberDoc.age;
        const memberJob = memberDoc.job;
        const memberGender = memberDoc.gender;

        // get weather and region
        const storeQuerySnapshot = await db.collection("geniality_store")
            .where("storeCode", "==", storeCode)
            .get();
        if (storeQuerySnapshot.empty) {
          res.status(500).send("Internal Error");
          return;
        }
        const storeDoc = storeQuerySnapshot.docs[0].data();
        const weather = storeDoc.weather;
        const region = storeDoc.region;

        // get recommend product
        const recommenderApi = "https://asia-southeast1-geniality.cloudfunctions.net/genialityRecommender";
        const response = await axios.post(recommenderApi, basket, {
          headers: {
            "Authorization": "Bearer geni@lity",
            "Content-Type": "application/json",
          },
        });
        const recommendProduct = response.data;
        console.log("recommend product: " + recommendProduct);

        // get advertisement
        const advertisementQuerySnapshot =
          await db.collection("geniality_advertisement")
              .where("articleNo", "==", recommendProduct.articleNo)
              .where("barcode", "==", recommendProduct.barcode)
              .where("weather", "==", weather)
              .where("region", "==", region)
              .where("gender", "==", memberGender)
              .where("age", "==", memberAge)
              .where("job", "==", memberJob)
              .get();
        if (advertisementQuerySnapshot.empty) {
          console.log("advertisementQuerySnapshot empty");
          res.status(500).send("Internal Error. No Advertisement");
        }
        const adDoc = advertisementQuerySnapshot.docs[0].data();
        const advertisementDescription = adDoc.description;
        const advertisementPath = adDoc.storagePath;

        // get advertise images, description and audio
        const images = [];
        let audio = null;
        const bucket = storage.bucket("geniality.appspot.com");
        const [files] = await bucket.getFiles({
          prefix: advertisementPath,
        });
        for (const file of files) {
          const fileName = file.name;
          const fileType = fileName.split(".").pop().toLowerCase();
          const fileRef = bucket.file(fileName);
          const downloadURL = await getDownloadURL(fileRef);

          if (fileType === "jpg" || fileType === "png") {
            images.push(downloadURL);
          } else if (fileType === "mp3") {
            audio = downloadURL;
          }
        }

        const result = {
          advertisement: {
            images: images,
            description: advertisementDescription,
            audio: audio,
          },
        };
        res.json(result);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Error");
        return;
      }
    });
