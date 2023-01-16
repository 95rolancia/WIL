import { HeatingPlan, temperatureAlerts } from "./11-4";

describe("7-4 객체 통째로 넘기기", () => {
  let plan;
  let alerts;
  let room;
  beforeEach(() => {
    plan = new HeatingPlan({ low: 2, high: 28 });
  });

  it("방 온도가 계획 온도 최저, 최고 사이일 때", () => {
    room = { daysTempRange: { bottom: 12, top: 25 } };
    alerts = temperatureAlerts(room, plan);
    expect(alerts.length).toBe(0);
  });

  it("방 최저 온도가 계획 최저 온도보다 낮을 때 ", () => {
    room = { daysTempRange: { low: -1, high: 25 } };
    alerts = temperatureAlerts(room, plan);
    expect(alerts.length).toBe(1);
    expect(alerts[0]).toBe("room temperature went outside range");
  });

  it("방 최고 온도가 계획 최저 온도보다 높을 때", () => {
    room = { daysTempRange: { low: 5, high: 32 } };
    alerts = temperatureAlerts(room, plan);
    expect(alerts.length).toBe(1);
    expect(alerts[0]).toBe("room temperature went outside range");
  });
});