const express = require('express')
const app = express()
app.use(express.json())

app.get('/hello', function (req, res) {
  res.send('Hello World! Ourdia')
})

app.get('/', function (req, res) {
res.sendfile('formulaire.html');  
})

app.post('/chat', function (req, res) {
	 const name = req.body.msg
	 if(name=="demain"){
	 	res.send("paris");
	 }
	
	 
  
})


app.listen(process.env.PORT || 3000, function () {
  console.log(' listening on port 3000!')
})
