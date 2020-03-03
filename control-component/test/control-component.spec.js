/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../control-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<control-component></control-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
