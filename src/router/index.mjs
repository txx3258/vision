import express from 'express';

const router = express.Router();

router.get('/index', (req, res, next) => {
    
    res.send('hello world');
});

export default router;