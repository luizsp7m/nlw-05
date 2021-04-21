import express from 'express';

/**
 * Vai dar erro aqui se tentar executar sem o Typescript.
 * Para resolver tem que instalar o Typescript (yarn add typescript -D) e depois yarn tsc --init para 
 * gerar o arquivo tsconfig.json
 * yarn add ts-node-dev -D
 */

import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3030, () => {
  console.log('Server is running on port 3030');
})