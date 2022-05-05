window.BENCHMARK_DATA = {
  "lastUpdate": 1651784127537,
  "repoUrl": "https://github.com/paradust7/benchmarks",
  "entries": {
    "Minetest Performance Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "committer": {
            "email": "102263465+paradust7@users.noreply.github.com",
            "name": "paradust7",
            "username": "paradust7"
          },
          "distinct": true,
          "id": "8346b6ccee1114e387b651f36081940d6c11def7",
          "message": "typo",
          "timestamp": "2022-05-05T20:48:24Z",
          "tree_id": "6e7827458c2c689a78f62c3c4294a94c5faee741",
          "url": "https://github.com/paradust7/benchmarks/commit/8346b6ccee1114e387b651f36081940d6c11def7"
        },
        "date": 1651784126858,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.0110608,
            "range": "± 0.000388812",
            "unit": "us",
            "extra": "100 samples\n2576 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.630713,
            "range": "± 0.029132",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.413354,
            "range": "± 0.0249951",
            "unit": "us",
            "extra": "100 samples\n72 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.16087,
            "range": "± 0.0597631",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.19042,
            "range": "± 0.12333",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 192.747,
            "range": "± 2.57307",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 143.736,
            "range": "± 5.65667",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 388.661,
            "range": "± 3.65471",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.530653,
            "range": "± 0.0295279",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.46393,
            "range": "± 0.0478563",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.533885,
            "range": "± 0.0260431",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.40393,
            "range": "± 0.058674",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 134.282,
            "range": "± 3.19624",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 657.144,
            "range": "± 6.93148",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 136.528,
            "range": "± 2.69682",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 679.254,
            "range": "± 13.5587",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.971532,
            "range": "± 0.0400732",
            "unit": "us",
            "extra": "100 samples\n31 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.0549,
            "range": "± 0.372498",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.813121,
            "range": "± 0.0397107",
            "unit": "us",
            "extra": "100 samples\n37 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.24635,
            "range": "± 0.207834",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 529.173,
            "range": "± 9.15437",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5083.91,
            "range": "± 26.0073",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 402.534,
            "range": "± 5.66633",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3683.16,
            "range": "± 27.7331",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}