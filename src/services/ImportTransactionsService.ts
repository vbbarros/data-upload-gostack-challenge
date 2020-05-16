import { getCustomRepository } from 'typeorm';
import path from 'path';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class ImportTransactionsService {
  async execute(): Promise<Transaction[]> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const csvFilePath = path.resolve(__dirname, 'import_template.csv');

    const data = transactionsRepository.loadCSV(csvFilePath);
    console.log('ImportTransactionsService -> data', data);

    return [];
  }
}

export default ImportTransactionsService;
