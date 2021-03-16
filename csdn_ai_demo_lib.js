let vm;

/**
* @param {Uint8Array} model_data
* @param {Uint8Array} image_data
* @param {number} image_height
* @param {number} image_width
* @returns {string}
*/
module.exports.infer = function(model_data, image_data, image_height, image_width) {
    if (Buffer.isBuffer(model_data) && model_data.byteLength < Buffer.poolSize) model_data = new Uint8Array(model_data.buffer.slice(model_data.byteOffset, model_data.byteOffset + model_data.byteLength));
    if (Buffer.isBuffer(image_data) && image_data.byteLength < Buffer.poolSize) image_data = new Uint8Array(image_data.buffer.slice(image_data.byteOffset, image_data.byteOffset + image_data.byteLength));
    return vm.RunString('infer', model_data, image_data, image_height, image_width);
};

const path = require('path').join(__dirname, 'csdn_ai_demo_lib_bg.wasm');
const ssvm = require('ssvm');
vm = new ssvm.VM(path, { args:process.argv, env:process.env, preopens:{'/': __dirname} });

