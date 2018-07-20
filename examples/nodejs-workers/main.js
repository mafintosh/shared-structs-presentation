const { Worker } = require('worker_threads')
const { shared } = require('./structs')

const struct = shared(Buffer.from(new SharedArrayBuffer(shared.bytes)))

const worker = new Worker('./worker.js')
worker.postMessage(struct.rawBuffer.buffer)

setInterval(function () {
  console.log('Update:')
  console.log('worker.threadId:', struct.threadId)
  console.log('worker.ticks:', struct.ticks)
  console.log('worker.random:', struct.random)
  console.log('worker.src:', struct.buffer.toString('utf-8', 0, struct.bufferLength))
}, 1000)
