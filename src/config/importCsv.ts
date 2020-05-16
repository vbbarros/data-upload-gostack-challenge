import csvParse from 'csv-parse';
import fs from 'fs';
import path from 'path';

const csvFilePath = path.resolve(__dirname, 'import_template.csv');

const readCSVStream = fs.createReadStream(csvFilePath);
