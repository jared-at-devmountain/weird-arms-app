const express = require('express')
const path = require('path')
const cors = require('cors')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'e239878d092849c598943b1ee9ac83e6',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/index.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.css'))
})

app.get('/get-jareds-name', (req, res) => {
    res.send('jared')
    rollbar.info('someone wanted to know Jared\'s name')
})

const port = process.env.PORT || 4004

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})