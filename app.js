const PORT = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())
app.use('/',express.static('public'))
app.listen(PORT, () => { console.log("server is running...") })