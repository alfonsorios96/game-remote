/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../screen-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<screen-component></screen-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
