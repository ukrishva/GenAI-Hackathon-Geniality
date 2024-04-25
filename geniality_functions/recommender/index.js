/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");

exports.genialityRecommender = onRequest(
    {region: "asia-southeast1"},
    async (req, res) => {
      const token = req.get("authorization").split(" ")[1];
      const expectedToken = "geni@lity";
      if (token !== expectedToken) {
        res.status(403).send("Forbidden!");
        return;
      }

      const productPairsArray = [
        ["20008336", "8858998585076"],
        ["20006206", "7612100053812"],
        ["20006428", "8850007030744"],
      ];

      const randomIndex = Math.floor(Math.random() * productPairsArray.length);
      const randomPair = productPairsArray[randomIndex];

      const result = {
        articleNo: randomPair[0],
        barcode: randomPair[1],
      };
      res.json(result);
    });
