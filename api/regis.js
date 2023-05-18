const express = require('express');
const router = express.Router();
const pool =require("../db/config")


router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const { username, password } = req.body;
        const connection = await pool.getConnection();
        try {
            await connection.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, password]);
            res.send('注册成功');
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error(`插入数据失败：${error}`);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
