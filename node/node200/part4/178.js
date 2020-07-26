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
connection.query(`create table books (number INT NOT NULL AUTO_INCREMENT 
PRIMARY KEY, genre VARCHAR(20) NOT NULL,
name VARCHAR(50) NOT NULL, writer VARCHAR(30) NOT NULL,
releasedate date NOT NULL);`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

connection.query('describe books', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 연결 종료
connection.end();

/**
 * 테이블은 만화책의 정보를 저장할 수 있는 표이다.
 * 세로 열을 필드, 가로 행을 레코드라고 명한다.
 * 테이블 각각의 필드에는 어떤 데이터 타입이 사용될지 정해야 한다.
   * int - 정수형 데이터 타입
   * varchar - 문자형 데이터 타입
   * date - 날짜형 데이터 타입
 * 필드 속성
   * PRIMARY KEY - 기본 키 지정
   * AUTO_INCREMENT - 숫자가 자동으로 증가
   * NOT NULL - 빈 값(NULL)이 들어가지 않게 반드시 값을 입력해야함
 */

 // describe books;