class Printer {
  private printerHeader: PrinterHeader;
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader ? printerHeader : new DefaultPrintHeader()
  }
  print() {
    this.printerHeader.print();
  }
}

interface PrinterHeader {
  print(): void;

}

class DefaultPrintHeader implements PrinterHeader {
  print() {
    console.log("기본적인 출력");
  }
}

class RedPrinterHeader implements PrinterHeader {
  print() {
    console.log("빨간색 출력");
  }
}

class BlackPrinterHeader implements PrinterHeader {
  print() {
    console.log("검은색 출력");
  }
}

const printers = [new Printer(), new RedPrinterHeader()];
printers.forEach((p) => p.print());

const printers2 = [new Printer(), new Printer(new RedPrinterHeader())];
printers2.forEach((p) => p.print());
