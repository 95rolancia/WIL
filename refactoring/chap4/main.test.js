import { Province } from "./main.js";

function sampleProvinceData() {
  return {
    name: "asia",
    producers: [
      {
        name: "byzantium",
        cost: 10,
        production: 9,
      },
      {
        name: "attalia",
        cost: 12,
        production: 10,
      },
      {
        name: "sinope",
        cost: 10,
        production: 6,
      },
    ],
    demand: 30,
    price: 20,
  };
}

describe("province", () => {
  let asia;

  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });
  it("shortfall", () => {
    expect(asia.shortfall).toBe(5);
  });

  it("profit", () => {
    expect(asia.profit).toBe(230);
  });
});
