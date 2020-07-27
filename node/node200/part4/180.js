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
connection.query(`select * from books;`, (error, results, fields) => {
    if (error) throw error;
    console.dir(results);
});

// Select 쿼리문 (각각의 필드 명칭) 사용
connection.query(`select number, genre, name, writer, releasedate from books;`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// Select 쿼리문 (where문 사용)
connection.query(`select * from books where genre = 'action';`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// Select 쿼리문 (where문 사용 - or)
connection.query(`select * from books where genre = 'action' or genre = 'comedy';`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// Select 쿼리문 (like 사용)
connection.query(`select * from books where releasedate LIKE '2017%';`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// Select 쿼리문 (order by)
connection.query(`select number, genre, name, writer, releasedate from books order by releasedate;`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// Select 쿼리문 (order by desc)
connection.query(`select number, genre, name, writer, releasedate from books order by releasedate desc;`, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 연결 종료
connection.end();

/**
 * 데이터 조회를 위해서는 'select * from TABLENAME' 또는 'select field, field, field from TABLENAME'의 쿼리문을 사용한다.
 * select *으로 조회했을 경우 테이블에 존재하는 필드 데이터가 조회되기 때문에 필드를 지정해서 조회했을 때보다 오래 걸린다.
 * 따라서 실무에서는 퍼포먼스 측면에서 지양해야 한다.
 * 특정 데이터 조회를 위해서는 'select field, field, field from TABLENAME where CASE'의 쿼리문을 사용한다.
   * OR - 여러 가지 조건에서 하나 이상의 조건이 만족하면 데이터 출력
   * AND - 여러 가지 조건에서 모든 조건이 만족해야 데이터 출력
 * 특정 데이터 부분만 일치하는 데이터를 조회하기 위해서는 'select field, field, field from TABLENAME where LIKE CASE'의 쿼리문을 사용한다.
 * 데이터를 정렬할 때는 order by 명령어를 사용한다.
 * 'select field, field, field from TABLENAME order by 정렬 기준이 될 field'의 쿼리문을 사용한다.
 * order by만 입력할 경우 오름차순으로 정렬되며 order by asc(오름차순) order by desc(내림차순)을 통해 정렬의 기준을 정할 수도 있다.
 */