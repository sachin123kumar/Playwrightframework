import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'csv-parse/sync';

export function readCSV() {
  const filePath = path.join(
    process.cwd(),
    'testdata',
    'data.csv'
  );

  const fileContent = readFileSync(filePath, 'utf-8');

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true
  });

  return records;
}