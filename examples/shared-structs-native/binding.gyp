{
  "targets": [{
    "target_name": "buffer_cast",
    "include_dirs": [
      "<!(node -e \"require('napi-macros')\")"
    ],
    "sources": [
      "buffer_cast.c"
    ]
  }]
}
