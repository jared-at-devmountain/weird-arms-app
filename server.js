const express = require('express')
const path = require('path')
const cors = require('cors')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '49a28848f7fa41edbb45561ef19ccfaa',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.js'))
})

app.get('/get-jareds-name', (req, res) => {
    res.send('jared')
    rollbar.info('someone wanted to know Jared\'s name')
})

app.get('/must-put-hunter', (req, res) => {
    let input = req.body.input

    if (input === "hunter") {
        rollbar.log('Hunter\'s info put')
    } else if (input === "") {
        rollbar.critical("THEY DIDNT DO ANY INPUT!")
    } else if (input === "rick") {
        rollbar.warning("Dont you rr me!")
    } else {
        rollbar.error("Didnt put the word hunter in")
    }

    res.send('input received')
})

const port = process.env.PORT || 4004

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})