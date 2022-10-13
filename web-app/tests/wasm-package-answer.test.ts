import { getAnswer } from "wasm-package";

describe("wasm-package", () => {
  it("gives the right answer", () => {
    expect(getAnswer()).toEqual(42);
  });
});

export {};
