const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => res.send(JSON.stringify('Hello from Express API!')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
