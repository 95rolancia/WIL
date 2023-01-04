// 9.3 파생 변수를 질의 함수로 바꾸기 After

// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._basePrice - this._discount;
  }

  set discount(value) {
    const old = this._discount;
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    // assert(this._production === this.calculateProduction); [3] 검증
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
