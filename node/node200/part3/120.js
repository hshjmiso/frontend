const printSomething = require('./119');

printSomething.printHello();
printSomething.printMessage('bye');
/**
 * require()를 이용하면 다른 모듈을 불러올 수 있다. 내가 직접 만든 모듈뿐만 아니라 fs, http등 내장 모듈도 불러 올 수 있다.
 * const 이름 = require('경로/파일명');
 * const fs = require('fs');
 * 이름.exports_할_ 때_정한 이름
 * require()에 위치를 지정해주면 분리한 모듈을 불러올 수 있다. 
 * fs등과 같은 node.js 내장 모듈이나 npm install로 설치한 모듈을 불러올 때는 경로를 지정해주지 않아도 된다.
 */
