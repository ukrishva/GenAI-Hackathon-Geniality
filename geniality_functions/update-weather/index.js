/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {onRequest} = require("firebase-functions/v2/https");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

exports.genialityUpdateWeather = onRequest(
    {region: "asia-southeast1"},
    async (req, res) => {
      const token = req.get("authorization").split(" ")[1];
      const expectedToken = "geni@lity";
      if (token !== expectedToken) {
        res.status(403).send("Forbidden!");
        return;
      }

      const storeCode = req.body.storeCode;
      const weather = req.body.weather;
      const db = getFirestore();
      // Query Firestore
      const querySnapshot = await db.collection("geniality_store")
          .where("storeCode", "==", storeCode)
          .get();

      if (!querySnapshot.empty) {
        const docId = querySnapshot.docs[0].id;
        const storeDocRef = db.collection("geniality_store").doc(docId);
        storeDocRef.update({
          weather: weather,
        }).then(() => {
          console.log("Weather updated for storeCode: ${storeCode}");
        });
      }
      res.send("Success");
    });
