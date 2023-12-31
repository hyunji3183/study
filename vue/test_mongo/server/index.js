const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { MongoClient } = require('mongodb');
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const url = "mongodb+srv://chj3183:91zTRqusv439uApg@cluster.uflsatb.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);

let collection;

const dbConnect = async () => {
    await client.connect();
    const db = client.db('clone_project');
    console.log('접속 성공!!!!')
    collection = db.collection('count_collection');
}

app.get('/api', async function (req, res) {
    const result = await collection.find().toArray();
    res.send(result)
})

app.post('/api/insert', async function (req, res) {
    await collection.insertOne(req.body);
    const result = await collection.find().toArray();
    res.send(result)
})

app.delete('/api/delete', async function (req, res) {
    const { date } = req.query
    await collection.deleteOne({ date: Number(date) });
    const result = await collection.find().toArray();
    res.send(result)
})

app.put('/api/update', async function (req, res) {
    const { date, count } = req.query;
    await collection.updateOne({ date: Number(date) }, { $set: { count: Number(count) + 1 } });
    const result = await collection.find().toArray();
    res.send(result)
})

app.listen(3000, dbConnect)