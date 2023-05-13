import { dirname } from 'path';
import { fileURLToPath } from 'url';

const getCurrentDir = (url) => dirname(fileURLToPath(url));

export default getCurrentDir;
