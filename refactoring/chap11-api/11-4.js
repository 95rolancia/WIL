// 11.4 객체 통째로 넘기기
// 객체를 통째로 넘길 때 필요없는 값도 넘어가는 경우 자칫 위험할 수 있다.
// side effect, coupling

export function temperatureAlerts(room, plan) {
  const alerts = [];
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push("room temperature went outside range");
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange({ bottom, top }) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}
