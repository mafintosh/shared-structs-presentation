const binding = require('node-gyp-build')(__dirname)
const sharedStructs = require('shared-structs')

const structs = sharedStructs(`
  struct stuff {
    int ticks;
  };
`)

const struct = structs.stuff()

struct.ticks = 42

console.log('do_stuff:', binding.do_stuff(struct.rawBuffer))
console.log('do_stuff:', binding.do_stuff(struct.rawBuffer))
console.log('struct.ticks:', struct.ticks)
