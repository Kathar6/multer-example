import { Router } from 'express';
import multer from 'multer';
import { extname, join } from 'path';
import getCurrentDir from '../utils/getCurrentDir.js';

// Controllers
import UploadController from '../controllers/uploadController.js';

const router = Router();

const CURRENT_DIR = getCurrentDir(import.meta.url);
const MIME_TYPES = ['image/jpeg', 'image/png'];

const multerUpload = multer({
    fileFilter: (req, file, cb) => {
        if (MIME_TYPES.includes(file.mimetype)) cb(null, true);
        else cb(new Error('Invalid file type'), false);
    },
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR, '../../uploads'),
        filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
            const fileWithoutExtension =
                file.originalname.split(fileExtension)[0];
            const filename = `${fileWithoutExtension}_${Date.now()}${fileExtension}`;
            cb(null, filename);
        },
    }),
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
});

router.post('/', multerUpload.single('file'), UploadController.upload);

export default router;
