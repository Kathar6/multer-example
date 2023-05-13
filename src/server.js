import express from 'express';

// Routes
import uploadRouter from './routes/upload.js';

// Utils
import { join } from 'path';
import getCurrentDir from './utils/getCurrentDir.js';

const server = express();

const CURRENT_DIR = getCurrentDir(import.meta.url);
server.use('/uploads', uploadRouter);
server.use('/public', express.static(join(CURRENT_DIR, '../uploads')));

export const bootstrap = (port) => {
    server.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
    });
};
