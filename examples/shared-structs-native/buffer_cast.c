#include <node_api.h>
#include <napi-macros.h>

struct stuff {
  int ticks;
};

NAPI_METHOD(do_stuff) {
  NAPI_ARGV(1)
  NAPI_ARGV_BUFFER_CAST(struct stuff *, s, 0)

  s->ticks++;

  NAPI_RETURN_INT32(s->ticks)
}

NAPI_INIT() {
  NAPI_EXPORT_FUNCTION(do_stuff)
  NAPI_EXPORT_SIZEOF_STRUCT(stuff)
}
