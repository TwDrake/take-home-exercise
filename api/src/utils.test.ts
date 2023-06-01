import { reverseString } from "./utils";

describe("utils", () => {
  describe("reverseString", () => {
    it("reverses word order", () => {
      expect(reverseString("test this")).toEqual("this test");
      expect(reverseString("three words here")).toEqual("here words three");
      expect(reverseString("The cow jumped over the moon")).toEqual(
        "moon the over jumped cow The"
      );
    });

    it("does not reverse words", () => {
      expect(reverseString("test")).toEqual("test");
      expect(reverseString("test-case")).toEqual("test-case");
      expect(reverseString("Testing")).toEqual("Testing");
    });
  });
});
