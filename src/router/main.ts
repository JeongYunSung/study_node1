import * as express from 'express';

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome To Main');
});

export default router;