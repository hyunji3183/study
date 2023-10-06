import { queryExecute } from '../db'
//삭제
export async function DELETE(req, { params }) {
    await queryExecute(`delete from member where num=?`, [params.num])
    const data = await queryExecute('select * from member')
    return Response.json(data);

}


//수정
export async function PUT(req, { params }) {
    const data = await req.json();
    const q = await queryExecute(`update member set name=? where num=?`, [data.name, params.num])
    const getData = await queryExecute('select * from member')
    return Response.json(getData);

}


// //추가
// export async function PUT(req, { params }) {
//     const data = await req.json()
//     const q = await queryExecute(`update member set name='쪼현지' where num=?`, [params.num])
//     return Response.json(data);

// }