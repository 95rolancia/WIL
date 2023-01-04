// 9.3 파생 변수를 질의 함수로 바꾸기 Before

// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._discountedTotal;
  }
  set discount(value) {
    const old = this._discount;
    this._discount = value;
    this._discountedTotal += old - value;
    // _discount뿐만 아니라 discountedTotal도 수정하고 있는 문제
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._production;
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}
