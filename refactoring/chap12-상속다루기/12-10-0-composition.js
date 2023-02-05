class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader;
  }
  print() {
    this.#printerHeader
      ? this.#printerHeader.print()
      : console.log("기본적인 출력");
  }
}

class RedPrinterHeader {
  print() {
    console.log("빨간색 출력");
  }
}

class BlackPrinterHeader {
  print() {
    console.log("검은색 출력");
  }
}

const printers = [new Printer(), new RedPrinterHeader()];
printers.forEach((p) => p.print());

const printers2 = [new Printer(), new Printer(new RedPrinterHeader())];
printers2.forEach((p) => p.print());
