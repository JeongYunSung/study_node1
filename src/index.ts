import * as express from 'express';
import main from './router/main'

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello ~!");
});

router.use('/main', main);

export default router;