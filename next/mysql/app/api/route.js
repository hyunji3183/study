var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'svc.sel5.cloudtype.app',
    user: 'root',
    password: '1234',
    database: 'mysql_test',
    port: '32533'
});



connection.connect();


async function queryExecute(str) {

    let data = await new Promise((resolve, reject) => {
        connection.query(str, function (error, results) {
            resolve(results);
        });
    });
    return data;
}


export async function GET() {

    // const data = await queryExecute('SELECT * from member') //멤버테이블의 모든 정보를 가져옴

    // const data = await queryExecute("insert into member(id,name,email)values('abc','홍길순','honggil@gmail.com')") //값추가
    // member(name<이라는 레코드에)values(홍길동<이라는 값을 넣는다) 로 해석

    // const data = await queryExecute(`update member set name='쪼현지' where num=1`) //특정데이터 수정

    // const data = await queryExecute(`delete from member where num=3`) //일부데이터삭제
    // const data = await queryExecute(`delete from member`)  //전체데이터삭제
    const data = await queryExecute(`create table contact(
        name varchar(30), 
        email varchar(100), 
        contents text,
        num int not null auto_increment,
        primary key(num) 
        )
        `)

    return Response.json(data);

}

export function POST() {

    return Response.json();
}