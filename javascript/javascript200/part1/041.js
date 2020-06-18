/**
 * ES6에서 let 키워드가 나오면서 변수 선언 시 변수의 유효 범위를 블록 범위로 지정할 수 있다.
 */

 if (true) {
     var functionScopeValue = 'global';
     let blockScopeValue = 'local';
 }
 console.log(functionScopeValue); // global
 console.log(blockScopeValue); // ReferenceError: blockScopeValue is not defined 