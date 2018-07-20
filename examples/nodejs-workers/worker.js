const { shared } = require('./structs')
const { parentPort, threadId } = require('worker_threads')
const fs = require('fs')

parentPort.once('message', function (buf) {
  const struct = shared(Buffer.from(buf))

  struct.threadId = threadId

  setInterval(function () {
    struct.ticks++
    struct.random = Math.random()
  }, 250)

  setTimeout(function () {
    // read some data into the shared struct
    fs.open(__filename, 'r', function (err, fd) {
      if (err) throw err
      fs.read(fd, struct.buffer, 0, struct.buffer.length, 0, function (err, read) {
        if (err) throw err
        struct.bufferLength = read
      })
    })
  }, 2000)
})
