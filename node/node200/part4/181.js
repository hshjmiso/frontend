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

// Update 쿼리문 사용, 한 필드 수정 (genre 변경)
connection.query(`update books set genre = 'action' where number = 2 and name = 'Mygiant Nerd Boyfriend';`,
(error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// Update 쿼리문 사용, 여러 필드 수정 (genre, writer 변경)
connection.query(`update books set genre = 'romance', writer = 'JI' where number = 2 and name = 'Mygiant Nerd Boyfriend';`,
(error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 연결 종료
connection.end();

/**
 * 데이터를 수정하기 위해서는 'UPDATE'문을 사용한다.
 * update TABLENAME() set 변경할 필드 = 값 where 조건
 */