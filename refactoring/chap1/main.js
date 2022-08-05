import { invoices, plays } from './data.js';
import { htmlStatement } from './statement.js';

document.body.innerHTML = htmlStatement(invoices, plays);