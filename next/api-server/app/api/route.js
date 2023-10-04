const fs = require('fs')

export async function GET() {

    const data = fs.readFileSync('./db/data.json')

    return Response.json(JSON.parse(data))
}


export async function POST(req) {

    let a = await req.json();
    
    const data = JSON.parse(fs.readFileSync('./db/data.json'))

    fs.writeFileSync('./db/data.json', JSON.stringify([...data, a]))

    return Response.json(a)
}
