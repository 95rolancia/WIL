import { Order } from "./11-5-매개변수를-질의함수로-바꾸기";

describe("11-5 매개변수를 질의함수로 바꾸기", () => {
  let order;

  it("수량이 100개 미만일 때", () => {
    order = new Order(5, 55);
    const price = order.finalPrice;
    console.log(price)
    expect(price).toBe(261.25);
  });

  it("수량이 100개 이상일 때", () => {
    order = new Order(5, 101)
    const price = order.finalPrice;
    console.log(price)
    expect(price).toBe(479.75);
  });

});