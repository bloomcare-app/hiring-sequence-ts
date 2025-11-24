import { readFileSync } from 'fs';
import { resolveTaskOrder } from './taskScheduler.js';

const input = readFileSync('input.txt', 'utf-8');
const result = resolveTaskOrder(input);

console.log('Result:', result);

