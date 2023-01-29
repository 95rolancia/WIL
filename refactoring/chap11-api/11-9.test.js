import { ScoringGuide, score } from "./11-9-함수를-명령으로-바꾸기";
describe("11-9 함수를 명령으로 바꾸기", () => {
  let candidate;
  let medicalExam;
  let scoringGuide;

  describe("isSmoker true", () => {
    beforeEach(() => {
      medicalExam = { isSmoker: true };
    })

    it("candidate state < 5", () => {
      candidate = { state: 4 };
      scoringGuide = new ScoringGuide();
      const sco = score(candidate, medicalExam, scoringGuide);
      expect(sco).toBe(-5);
    });

    it("candidate state > 5", () => {
      candidate = { state: 10 };
      scoringGuide = new ScoringGuide();
      const sco = score(candidate, medicalExam, scoringGuide);
      expect(sco).toBe(-5);
    });
  });

  describe("isSmoker false", () => {
    beforeEach(() => {
      medicalExam = { isSmoker: false };
    })

    it("candidate state < 5", () => {
      candidate = { state: 4 };
      scoringGuide = new ScoringGuide();
      const sco = score(candidate, medicalExam, scoringGuide);
      expect(sco).toBe(0);
    });

    it("candidate state > 5", () => {
      candidate = { state: 10 };
      scoringGuide = new ScoringGuide();
      const sco = score(candidate, medicalExam, scoringGuide);
      expect(sco).toBe(0);
    });
  });
});
