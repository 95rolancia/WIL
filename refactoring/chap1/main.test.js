import createStatementData from './createStatementData.js';
import { invoices, plays } from './data.js';
import { renderPlainText } from './statement.js';

describe('test statement', () => {
  it('statement', () => {
    const data = createStatementData(invoices, plays);
    const result = renderPlainText(data);

    expect(result).toBe(
      `청구 내역 (고객명 : BigCo)\nHamlet: $650.00 (55석)\nAs You Like It: $580.00 (35석)\nOthello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n`
    );
  });
});
