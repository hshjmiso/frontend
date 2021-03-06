/**
 * Node.js의 가장 큰 장점은 npm을 이용해 라이브러리를 쉽게 관리할 수 있다는 것이다.
 
 * 프로그래밍을 하다보면 자주 반복되는 패턴이 있고 자주 쓰는 기능들이 있다. 
 * 과거 그리고 지금도 마찬가지로 framework(프레임워크)라고 자주 쓰는 코드들을 모아놓은 코드가 오픈 소스 형태로 많이 존재하고 많이 사용된다.
 
 * 프레임워크가 자주 사용하는 코드들을 모아놓은 것이라면 npm 라이브러리, 패키지 등은 직접 구현해 놓은 형태라고 볼 수 있다.
 * 이런 코드들을 구조적으로 잘 연결해 주면 하나의 애플리케이션을 비교적 빨리 만들어 낼 수 있다.
 
 * 사용 방법은 npm install 패키지명 --save이다
 * --save 옵션을 사용하지 않으면 package.json에 등록이 되지 않기 때문에 git 등을 이용해 공동 작업을 하거나 소스코드를 다른 곳에서 개발해야 할 때 불편한다.
 * 그렇기 때문에 가급적이면 처음에는 --save 옵션을 사용해 설치하는 것을 권장한다.
 */