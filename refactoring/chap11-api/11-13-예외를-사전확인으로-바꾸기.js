/**
 * 예외라 하는 것은 Exception이다.
 * 정말 특이한 상황에 왔을 때 앱이 멈추지 않고 부가적으로 처리할 때
 * expected 에러라면 happy path, unhappy path
 * 네트워크 신호가 양호하지 않아서 발생한 예외
 *
 * 예상한 실패 케이스 vs 정말 예외 인지
 */

const values = [];
function getValueForPeriod(periodNumber) {
  return values[periodNumber] ?? 0;
}

getValueForPeriod(-10);
