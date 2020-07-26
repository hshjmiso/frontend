// mysql 모듈 사용
const mysql = require('mysql2');

// 연결할 DB 정보 입력
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1q2w3e4rA!',
    database: 'comicbook',
    port: '3306',
});

// 데이터베이스 연결
connection.connect();

// create 쿼리문 사용
connection.query(`select * from books`, (error, results, fields) => {
    if (error) throw error;
    console.dir(results);
});

// Select 쿼리문 (각각의 필드 명칭) 사용
connection.query(`select number, genre, name, writer, releasedate from books`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

connection.query(`select * from books where genre = 'action'`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 연결 종료
connection.end();

/**
 * 데이터 삽입을 위해서는 'insert into TABLENAME (field, field, field) value (data, data, data)'의 쿼리문을 사용한다.
 */