module.exports = require('shared-structs')(`
  struct shared {
    int ticks;
    double random;
    int threadId;
    char buffer[5000];
    uint32_t bufferLength;
  }
`)
