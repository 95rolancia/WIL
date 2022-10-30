import { Order, Priority } from "./7-3-after";

describe("7-3 기본형을 객체로 바꾸기", () => {
  let orders;

  beforeEach(() => {
    orders = [
      new Order(new Priority("normal")),
      new Order(new Priority("high")),
      new Order(new Priority("rush")),
    ];
  });

  it("TOBE Order > isHighPriority count", () => {
    const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
    expect(highPriorityCount).toBe(2);
  });
});
