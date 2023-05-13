import { bootstrap } from './server.js';

const SERVER_PORT = process.env.PORT || 8000;
console.clear();
bootstrap(SERVER_PORT);
