// 11.3 플래그 인수 제거하기

// 이렇게 함수를 작성하는게 맞나? 라고 생각이 되면 대체로 틀렸다.
// 플래그 인수를 두 개의 다른 인수로 분리

// 예제 1
function setWidth(value) {
  this._width = value;
}

function setHeight(value) {
  this._height = value;
}

// 내가 어떤 것을 만드는지 명료하게 나타내야한다
// 중복되는 코드 발생! 
// -> 외부에서 사용하는 함수는 개별로 놔두고
// -> 내부 로직은 나누어서 둔다. 다만 private 접근자 사용
// 예제 2
class Concert {
  regularBook(customer){}
  premiumBook(cutsomer){}
  #book(customer, isPremium) {}
}


// 명령문으로, 문장을 읽어나가듯이 이해력을 높인다. 
// 예제 3
function switchOn();
function switchOff();
