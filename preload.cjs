"use strict";

const { writeFileSync } = require("node:fs");

writeFileSync(
  "preload-marker.json",
  '{"marker":"DFDC_HOSTED_PRELOAD_261025A_7F8D0C13AB62E451"}\n',
  { encoding: "utf8" },
);
