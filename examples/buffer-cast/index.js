const binding = require('node-gyp-build')(__dirname)

const struct = Buffer.alloc(binding.sizeof_stuff)

console.log(binding.do_stuff(struct))
console.log(binding.do_stuff(struct))
