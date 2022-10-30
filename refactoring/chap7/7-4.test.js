import { Order } from "./7-4-after";

describe("7-4 임시 변수를 질의 함수로 바꾸기 - 1(basePrice가 1000보다 높은 경우)", () => {
  let order;

  beforeEach(() => {
    order = new Order(10, { price: 2000 });
  });

  it("TOBE Order basePrice", () => {
    expect(order.basePrice).toBe(20000);
  });

  it("TOBE Order discount", () => {
    expect(order.discountFactor).toBe(0.95);
  });

  it("TOBE Order price", () => {
    expect(order.price).toBe(19000);
  });

});

describe("7-4 임시 변수를 질의 함수로 바꾸기 - 2(basePrice가 1000보다 낮은 경우)", () => {
  let order;

  beforeEach(() => {
    order = new Order(5, { price: 150 });
  });

  it("TOBE Order basePrice", () => {
    expect(order.basePrice).toBe(750);
  });

  it("TOBE Order discount", () => {
    expect(order.discountFactor).toBe(0.98);
  });

  it("TOBE Order price", () => {
    expect(order.price).toBe(735);
  });

});
