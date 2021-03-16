<h1 align="center">
  <br>
  <a href="https://github.com/jmlxxvi">
  <img src="https://www.amd.com/system/files/2019-11/343814-tensorflow-logo-1260wide.png" alt="TensorFlow" width="250">
  </a>
  <br>
  TensorFlow image recognition in Node
  <br>
</h1>
<div align="center">
  With Rust and WebAssembly
</div>

<br />

<div align="center">
  <sub>This demo is shared by
  <a href="https://github.com/jmlxxvi">
  Juan Martin Guillén
  </a>
</div>

<br />
<br />

## Table of Contents
- [Intro](#Intro)
- [Project](#Project)
- [Details](#Details)
- [Testing](#Testing)

## Intro
Deep learning is one of the most important advances in computer science in the last decade. Using trained deep neural networks, artificial intelligence (AI) inference algorithms can perform a variety of very useful tasks, such as image, speech, and facial recognition, natural language processing, image and video search, at unprecedented accuracy.

Rust allows us to write high performance AI inference functions. Those Rust functions can be compiled into WebAssembly bytecode for runtime safety, cross-platform portability, and capability-based security. Developers can then access those functions from an easy-to-use JavaScript API in the Node.js environment.

In this project we create a Tensorflow-based image recognition function in Rust, deploy it as WebAssembly, and use it from a Node.js app. 

## Project

### Requirements
- [Node v14+](https://nodejs.org/en/)
- [Rust 1.5](https://www.rust-lang.org/)
- [Tract crate](https://github.com/sonos/tract)
- [ImageNet-v2](https://www.tensorflow.org/datasets/catalog/imagenet_v2)

### How to use it
Clone repo
```bash
git clone https://github.com/jmlxxvi/wasm_node_tensorflow_demo
```

Install dependencies
```bash
npm install
```

Start the server
```bash
node server.js
```

You'll see something like
```bash
Listening at http://0.0.0.0:8080
```

Then use your browser to open `http://0.0.0.0:8080`

In the web  interface just select a picture and press the *Recognize* button to make the model infere what's in the picture. 
After a couple of minutes (if using the example image) you'll get a result similar to:

 `Detected Egyptian cat with high confidence.`

## Details

### How it works
At a high level what we do is using the ImageNet-v2 TensorFlow model (the file `mobilenet_v2_1.4_224_frozen.pb`) to infer what is on a picture.

To do that we create a Rust library (`src/lib.rs`) to receive the picture, format it and load the model to apply it to the picture.

To be able to run this compute intensive task on Node, we compile the Rust code into a WebAssembly module (`csdn_ai_demo_lib_bg.wasm`) and use that module on Node (with the file `csdn_ai_demo_lib.js`) via the Node WebAssembly System Interface (WASI) .

## Testing

There is no need to use the web server in Node to run the model on a picture. Check the file `test.js` for an example of infering the contents of a picture without using the web interface.

To check the example file on *public/images/* just run:

```bash
npm run test

> node@1.0.0 test /path/wasm_node_tensorflow_demo
> node test.js

Detected object id 284 with probability 0.284068
```

To find out what the object id represents, check the file `imagenet_slim_labels.txt`.

For example the line 284 on that file contains *Persian cat*





