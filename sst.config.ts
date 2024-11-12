/// <reference path="./.sst/platform/config.d.ts" />
//testing

export default $config({
  app(input) {
    return {
      name: "MY_APP",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
  },
});
