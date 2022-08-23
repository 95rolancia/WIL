// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}

console.log(rating({ numberOfLateDeliveries: 7 }));
console.log(reportLines({ name: "jjh", location: "jeju" }));
