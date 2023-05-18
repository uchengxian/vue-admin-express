// login.js

const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const { username, password } = req.body;
        const rows = await db.executeQuery('SELECT * FROM user WHERE username = ?', [username]);
        if (rows.length > 0) {
            const user = rows[0];
            if (user.password === password) {
                res.send('登录成功');
            } else {
                res.status(401).send('用户名或密码错误');
            }
        } else {
            res.status(404).send('用户不存在');
        }
    } catch (error) {
        console.error(`查询数据失败：${error}`);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
