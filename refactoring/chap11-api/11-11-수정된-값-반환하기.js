/**
 * 11.11 수정된 값 반환하기
 *
 * 문제 : 중첩 함수(calculateAscent)에서 외부 변수(totalAscent)를 업데이트 하고 있다.
 */

export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  let totalAscent = calculateAscent();

  return totalAscent / totalMinutes;
}
