const { infer } = require('./csdn_ai_demo_lib.js');

const fs = require('fs');
const data_model = fs.readFileSync("mobilenet_v2_1.4_224_frozen.pb");
const data_img_cat = fs.readFileSync("./public/images/cat.png");

const result = JSON.parse( infer(data_model, data_img_cat, 224, 224) );
console.log("Detected object id " + result[1] + " with probability " + result[0]);