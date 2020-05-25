/**
 * cmd > node, REPL 환경이 실행된다.
 * REPL(Read-Eval-Print-Loop)의 약자로, 사용자가 입력한 결과를 바로 반환하는 대화형 Shell 환경을 의미한다.
   * Read - 사용자의 명령어를 입력받으면 메모리에 자바스크립트 데이터 구조로 분석(Read)한다.
   * Eval - 분석한 명령어를 내부 데이터 구조로 가져와서 평가(Evaluate)한다. 여기서 "평가"란 해당 명령어를 실행하는 것을 의미한다.
   * Print - Eval에 의해 얻어진 결과를 받아서 사용자에게 출력(Print)한다.
   * Loop - Print까지 완료된 다음, 다시 Read 상태로 돌아가는 환경이 반복(Loop)된다. Ctrl + C를 입력하면 루프를 종료한다.
 */

1+12;
x = 5;
var foo = 'hello';
console.log(foo);