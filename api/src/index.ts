import * as functions from 'firebase-functions';

const express = require('express');
const app = express()
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

app.get('/data', (request: any, response: any) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.json({value: "Hello World !"});

});

exports.api = functions.https.onRequest(app);