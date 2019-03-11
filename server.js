const express = require('express')
const app = express()
app.use(express.json())

app.get('/hello', function (req, res) {
  res.send('Hello World! Ourdia')
})

app.post('/chat', function (req, res) {
	 const name = req.body.msg
	 if(name=="ville"){
	 	res.send("paris");
	 }
	 if(name=="météo"){
	 		res.send("Il fait beau");
	 }
	 
  
})
app.listen(process.env.PORT || 3000, function () {
  console.log(' listening on port 3000!')
})
