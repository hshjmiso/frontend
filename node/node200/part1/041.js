/**
 * 예외가 날 것 같은 곳에 try catch를 걸어 프로그램이 멈추는 것을 예방한다.
 * 한 번 실행하고 끝나는 프로그램이라면 잘 느끼지 못할 수 있지만 1초에 한 번씩 계속 실행하는 프로그램이나 
 * 요청이 10초에 한 번씩 들어와서 계속 처리해야 하는 프로그램인 경우에는 프로그램이 죽지 않는 것이 중요하다.
 */
try {
    printMessage('hello');
} catch (e) {
    console.log('error', e);
}

console.log('program finished');