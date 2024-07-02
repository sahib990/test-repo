const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/prt', (req, res) => {
    const p = parseInt(req.query.p)
    const r = parseInt(req.query.r)
    const t = parseInt(req.query.t)

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        return res.status(400).send('Invalid input')
    }

    const interest = (p * r * t) / 100;
    const total = p + interest;

    res.json({ interest: interest, total: total })
})

app.listen(3000, () => console.log("Started"))
