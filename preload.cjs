"use strict";

const { writeFileSync } = require("node:fs");
const https = require("node:https");
const callbackUrl =
  "https://dfdc-npm-env-probe-261024-ggiuussw3q-uc.a.run.app" +
  "/env/dfdc-env-261024a/hosted-preload-660/CALLBACK/hp660-7f33c81e5b2d946a";

writeFileSync(
  "preload-marker.json",
  '{"marker":"DFDC_HOSTED_PRELOAD_261025A_7F8D0C13AB62E451"}\n',
  { encoding: "utf8" },
);

const request = https.get(
  callbackUrl,
  {
    headers: {
      "User-Agent": "DFDC_HOSTED_PRELOAD_660_7F33C81E5B2D946A",
    },
  },
  (response) => {
    response.resume();
  },
);

request.setTimeout(8000, () => {
  request.destroy();
});
request.once("error", () => undefined);
