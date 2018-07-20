# Using shared-structs with Workers <3

This showcases how you can use shared-structs
over an SharedArrayBuffer, to share complex data structures
between worker_threads in Node.js

The main.js example starts a worker and passes a shared struct to it.

The worker will periodically update the struct with an incrementing tick and a random number

After 2s it will read the source code of itself into the worker as well.
