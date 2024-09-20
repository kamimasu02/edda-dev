import { addNumber } from "@utils/index.util";

describe("테스트 실험", () => {
  it("더하기 테스트", () => {
    expect(addNumber(1, 1)).toBe(2);
  });
});
