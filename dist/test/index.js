"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const anvil_service_1 = require("../src/anvil-service");
const helpers_1 = require("./helpers");
// describe("Anvil plugin with empty configs", function () {
//   useEnvironment("hardhat-project", "anvil");
//   it("Should add anvil network to the config", function () {
//     assert.isDefined(this.env.config.networks.anvil);
//   });
//   it("Should expose anvil defaults configs in hardhat's config", function () {
//     assert.isDefined(this.env.config.networks.anvil);
//     const defaultOptions = AnvilService.getDefaultOptions() as any;
//     const options = this.env.config.networks.anvil as any;
//     // Iterate over all default options and assert equality
//     for (const [key, value] of Object.entries(defaultOptions)) {
//       assert.equal(options[key], value);
//     }
//   });
//   it("Should run Hardhat TEST task using Anvil", async function () {
//     const failures = await this.env.run("test", {
//       testFiles: [],
//     });
//     assert.equal(failures, 0);
//   });
//   it("Should run Hardhat RUN task 'accounts-sample.js' using Anvil", async function () {
//     await this.env.run("run", {
//       noCompile: true,
//       script: "scripts/accounts-sample.js",
//     });
//     assert.equal(process.exitCode, 0);
//   });
//   it("Should run Hardhat RUN task 'delayed-sample.js' using Anvil", async function () {
//     await this.env.run("run", {
//       noCompile: true,
//       script: "scripts/delayed-sample.js",
//     });
//     assert.equal(process.exitCode, 0);
//   });
// });
describe("Anvil plugin with custom configs", function () {
    (0, helpers_1.useEnvironment)("hardhat-project-with-configs", "anvil");
    it("Should add anvil network to hardhat's config", function () {
        chai_1.assert.isDefined(this.env.config.networks.anvil);
    });
    it("Should load custom configs in hardhat's config'", function () {
        chai_1.assert.isDefined(this.env.config.networks.anvil);
        const customConfigs = require("./fixture-projects/hardhat-project-with-configs/hardhat.config.ts").default;
        chai_1.assert.isDefined(customConfigs.networks.anvil);
        const customOptions = customConfigs.networks.anvil;
        const options = this.env.config.networks.anvil;
        // Iterate over all custom options and assert equality
        for (const [key, value] of Object.entries(customOptions)) {
            chai_1.assert.equal(options[key], value);
        }
    });
    it("Should expose merged (custom + defaults) configs in hardhat's config", function () {
        chai_1.assert.isDefined(this.env.config.networks.anvil);
        const customConfigs = require("./fixture-projects/hardhat-project-with-configs/hardhat.config.ts").default;
        const defaultOptions = anvil_service_1.AnvilService.getDefaultOptions();
        chai_1.assert.isDefined(customConfigs.networks.anvil);
        const customOptions = customConfigs.networks.anvil;
        const mergedOptions = Object.assign(Object.assign({}, defaultOptions), customOptions);
        const options = this.env.config.networks.anvil;
        // Iterate over all custom options and assert equality
        for (const [key, value] of Object.entries(mergedOptions)) {
            chai_1.assert.equal(options[key], value);
        }
    });
    // it("Should run Hardhat RUN task using Anvil with custom configs", async function () {
    //   await this.env.run("run", {
    //     noCompile: true,
    //     script: "scripts/custom-accounts-sample.js",
    //   });
    //   assert.equal(process.exitCode, 0);
    // });
});
//# sourceMappingURL=index.js.map