window.BENCHMARK_DATA = {
  "lastUpdate": 1651788045535,
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
      },
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
          "id": "96acaee3e3e57481ee298f8d6a9c62d9b3f36658",
          "message": "Do permissions work here?",
          "timestamp": "2022-05-05T21:37:50Z",
          "tree_id": "8decc06c022845bb2fd7b3c2e49ca799fe77bc2f",
          "url": "https://github.com/paradust7/benchmarks/commit/96acaee3e3e57481ee298f8d6a9c62d9b3f36658"
        },
        "date": 1651787255710,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.0115696,
            "range": "± 0.00109229",
            "unit": "us",
            "extra": "100 samples\n2418 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.858537,
            "range": "± 0.211241",
            "unit": "us",
            "extra": "100 samples\n38 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.516058,
            "range": "± 0.108016",
            "unit": "us",
            "extra": "100 samples\n58 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.40332,
            "range": "± 0.176399",
            "unit": "us",
            "extra": "100 samples\n23 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.25635,
            "range": "± 1.83785",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 246.177,
            "range": "± 28.5747",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 180.961,
            "range": "± 35.0109",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 504.314,
            "range": "± 69.6028",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.640002,
            "range": "± 0.0515145",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.95289,
            "range": "± 0.779825",
            "unit": "us",
            "extra": "100 samples\n17 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.67866,
            "range": "± 0.243333",
            "unit": "us",
            "extra": "100 samples\n46 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 2.03738,
            "range": "± 1.97215",
            "unit": "us",
            "extra": "100 samples\n17 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 196.517,
            "range": "± 32.8238",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 990.543,
            "range": "± 598.114",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 173.601,
            "range": "± 37.4684",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 890.784,
            "range": "± 85.2117",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.3493,
            "range": "± 0.446226",
            "unit": "us",
            "extra": "100 samples\n25 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.39349,
            "range": "± 3.49804",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.54778,
            "range": "± 4.54992",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.70855,
            "range": "± 2.3997",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 680.311,
            "range": "± 80.248",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6366.52,
            "range": "± 379.226",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 537.329,
            "range": "± 72.5686",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4632.55,
            "range": "± 260.238",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
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
          "id": "7e322f5e7c6f8dedf734a6eacb04b36f5e5c61f0",
          "message": "quick check to make sure permissions are strict enough",
          "timestamp": "2022-05-05T21:51:52Z",
          "tree_id": "3c3383f1bb7fc774de596483ec3f2f1d06937791",
          "url": "https://github.com/paradust7/benchmarks/commit/7e322f5e7c6f8dedf734a6eacb04b36f5e5c61f0"
        },
        "date": 1651788044480,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013638,
            "range": "± 0.002533",
            "unit": "us",
            "extra": "100 samples\n2490 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.792978,
            "range": "± 0.020322",
            "unit": "us",
            "extra": "100 samples\n36 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.545916,
            "range": "± 0.025626",
            "unit": "us",
            "extra": "100 samples\n57 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.398692,
            "range": "± 0.028847",
            "unit": "us",
            "extra": "100 samples\n22 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.896003,
            "range": "± 0.135684",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 240.13312,
            "range": "± 14.281226",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 179.02336,
            "range": "± 16.934011",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 495.65178,
            "range": "± 75.668645",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.696744,
            "range": "± 0.127969",
            "unit": "us",
            "extra": "100 samples\n46 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.899083,
            "range": "± 0.338031",
            "unit": "us",
            "extra": "100 samples\n16 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.68792,
            "range": "± 0.140471",
            "unit": "us",
            "extra": "100 samples\n46 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.89355,
            "range": "± 0.305386",
            "unit": "us",
            "extra": "100 samples\n17 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 196.81206,
            "range": "± 87.576590",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 886.91914,
            "range": "± 135.246020",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 184.89694,
            "range": "± 28.157347",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 828.32954,
            "range": "± 64.133166",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.19225,
            "range": "± 0.197057",
            "unit": "us",
            "extra": "100 samples\n25 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 7.263654,
            "range": "± 1.417857",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.110709,
            "range": "± 0.525276",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.353877,
            "range": "± 0.724506",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 671.53124,
            "range": "± 79.756388",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 6384.9706,
            "range": "± 406.512518",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 486.64995,
            "range": "± 50.393053",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4560.06757,
            "range": "± 333.094305",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}