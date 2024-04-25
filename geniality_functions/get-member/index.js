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

exports.genialityGetMember = onRequest(
    {region: "asia-southeast1"},
    async (req, res) => {
      const token = req.get("authorization").split(" ")[1];
      const expectedToken = "geni@lity";
      if (token !== expectedToken) {
        res.status(403).send("Forbidden!");
        return;
      }

      const phoneNo = req.body.phoneNo;
      const db = getFirestore();
      // Query Firestore
      const querySnapshot = await db.collection("geniality_member")
          .where("phoneNo", "==", phoneNo)
          .get();

      if (querySnapshot.empty) {
        const result = {
          memberId: null,
          memberName: null,
        };
        res.json(result);
      } else {
        const doc = querySnapshot.docs[0].data();
        const result = {
          memberId: doc.memberId,
          memberName: doc.memberName,
        };
        res.json(result);
      }
    });
