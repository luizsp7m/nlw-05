import express from 'express';

/**
 * Vai dar erro aqui se tentar executar sem o Typescript.
 * Para resolver tem que instalar o Typescript (yarn add typescript -D) e depois yarn tsc --init para 
 * gerar o arquivo tsconfig.json
 * yarn add ts-node-dev -D
 */

const app = express();

/**
 * GET, POST, PUT, DELETE
 */

app.get('/', (request, response) => {
  return response.json({
    message: "Method get"
  });
});

app.post('/', (request, response) => {
  return response.json({
    message: "Method post"
  });
});

app.listen(3030, () => {
  console.log('Server is running on port 3030');
})