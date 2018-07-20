const sharedStructs = require('shared-structs')

const structs = sharedStructs(`
  struct stuff {
    int ticks;
  };
`)

const struct = structs.stuff()

console.log(struct.rawBuffer)
struct.ticks = 42
console.log(struct.rawBuffer)
