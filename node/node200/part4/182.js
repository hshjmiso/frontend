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

// Delete 쿼리문 사용
connection.query(`delete from books where number = 2 and writer = 'JI';`,
    (error, results, fields) => {
        if (error) throw error;
        console.log(results);
    });

// Select 쿼리문 사용
connection.query(`SELECT * from books`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 연결 종료
connection.end();

/**
 * 데이터를 삭제하기 위해서는 DELETE문을 사용한다.
 * delete from TABLENAME() where 조건
 * WHERE절을 사용하지 않으면 테이블 내의 모든 데이터가 삭제될 수 있으니 꼭 WHERE절을 사용해서 안전하게 데이터를 삭제해야 한다.
 */