// 10.7 제어 플래그를 탈출문으로 바꾸기 After

for (const p of people) {
  if (p === "Don") {
    sendAlert();
    break;
  }
}
