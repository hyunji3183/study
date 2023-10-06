import { queryExecute } from './db'

export async function GET() {

    //멤버테이블의 모든 정보를 가져옴
    const data = await queryExecute('SELECT * from member')
    return Response.json(data);

    //값추가
    // const data = await queryExecute("insert into member(id,name,email)values('abc','홍길순','honggil@gmail.com')") 
    // member(name<이라는 레코드에)values(홍길동<이라는 값을 넣는다) 로 해석

    //특정데이터 수정
    // const data = await queryExecute(`update member set name='쪼현지' where num=1`) 

    //데이터삭제
    // const data = await queryExecute(`delete from member where num=3`) //일부
    // const data = await queryExecute(`delete from member`)  //전체

    //테이블생성
    // const data = await queryExecute(`create table contact(
    //     name varchar(30), 
    //     email varchar(100), 
    //     contents text,
    //     num int not null auto_increment,
    //     primary key(num) 
    //     )
    //     `)

    //테이블 삭제
    // const data = await queryExecute(`drop table contact`)


}

export async function POST(req) {
    const { name, email, id } = await req.json()

    const data = await queryExecute(`insert into member(id,name,email)values(?,?,?)`, [id, name, email])

    return Response.json([]);
}







