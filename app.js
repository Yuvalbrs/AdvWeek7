
const express = require('express')
const app = express()
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/login', function (req, res) {
    var user = req.query.username
    var pass = req.query.password
    if ((user == 'guest') & (pass == '1234')) 
        res.end('Welcome guest')
    else
    res.end('Invalid username and or password')
res.end(`<html>
 <body>
 The answer is ${result}.
 <a href="/index.html">reset</a>
 </body>
 </html>`)
})
app.post('/login', function (req, res) {
  const user = req.body.username;
  const pass = req.body.password;
  if (user === 'guest' && pass === '1234') {
    res.end('Welcome guest');
  } else {
    res.end('Invalid username and/or password');
  }
});
app.listen(8080)
