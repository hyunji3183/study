const express = require('express') //모듈을 express에 정의
const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express() //반환값을 app에 정의

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/json', function (req, res) {
    // console.log(req.query);
    const jsonData = fs.readFileSync('./test.json')
    res.send(JSON.parse(jsonData))
})

app.get('/json/:id', function (req, res) {
    const jsonData = fs.readFileSync('./test.json');
    const data = JSON.parse(jsonData)
    const { id } = req.params;
    const aaa = data.filter(n => n.id == id)
    res.send(aaa)
})


app.post('/insert', function (req, res) {
    console.log(req.body);
    fs.writeFileSync('./test.json', JSON.stringify(req.body))
    res.send('OK')
})





app.listen(3030)

//server terminal
//npm init -y (노드환경구축)
//npm i express cors(서버설치)
//index.js (express 모듈활용, cors활용)
//node index.js(서버구동-localhost:3030)
//npm install -g nodemon (nodemon 설치)
//npx nodemon index.js(실시간업데이트)

//json 파일 생성
//index.js (fs 모듈활용 -readFileSync(), writeFileSync() )


//write
//npm i body-parser

//front terminal
//axios(http://localhost:3030)  서버요청


//get방식과 post방식의 차이 확인해야함
//post= 전송할 데이터를http메세지의 body에 담아서 전송함