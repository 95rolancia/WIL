
/**
 * 11.9 함수를 명령으로 바꾸기
 * 
 * 소프트웨어 구조가 복잡할수록 절차지향보다 객체지향으로 만들게되면 조금 더 독립된 모듈로 만들어 나갈 수 있어
 * 유지 보수가 간편해진다.
 * 
 * 딱 한 가지의 명령을 수행하는 함수를 가진 객체를 명령 객체, 커맨드 객체라고 한다.
 * 이 커맨드 객체를 사용하는 디자인 패턴을 커맨드 패턴이라 한다.
 * 커맨드 패턴의 유용한 점은 do, undo 두 가지를 활용할 수 있다는 것이다.
 */

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate;
    this.medicalExam = medicalExam;
    this.scoringGuide = scoringGuide;
  }

  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this.medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = "regular";
    if (
      this.scoringGuide.stateWithLowCertification(this.candidate.originState)
    ) {
      certificationGrade = "low";
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}

export function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}
