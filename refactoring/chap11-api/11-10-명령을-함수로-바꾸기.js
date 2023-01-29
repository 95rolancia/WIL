/**
 * 11.10 명령을 함수로 바꾸기
 *
 * 어떤 특정한 데이터와 계산이 프로그램 전반적으로 중복되어 사용된다면
 * 클래스로 묶어서 필요한 데이터와 메소드로 간직하는 것이 좋지만
 * 단 한번만 사용되는 경우 클래스로 만들어두면 불필요한 비용이 발생한다.
 * new Math().max(1, 2) vs Math.max(1, 2)
 */

export function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
