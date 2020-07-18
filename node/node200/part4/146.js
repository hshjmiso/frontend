/**
 * 설치했던 특정 모듈을 삭제할 수 있는 npm uninstall 명령이다.
 * 명령을 통해 제거 대상 패키지를 일일이 제거할 필요 없이 손쉽게 완전히 삭제할 수 있다.
 * npm uninstall [PACKAGE_NAME]
 * ex) npm uninstall request
 * npm install에서 사용했던 것처럼 --save 옵션을 함께 사용하여 package.json에 작성된 의존성을 제거할 수 있다.
 
 * package.json을 보면 dependencies 항목과 devDependencies 항목이 있다. 
 * --save 하위 옵션으로 --save-dev 옵션이 있다.
 * 이 옵션은 --save와 마찬가지로 만약 install 시 사용할 경우 pacakge.json에 의존성을 명시하지만,
 * devDependencies 항목에 패키지의 이름과 버전을 명시한다는 점이 다르다.
 
 * 특히 유닛 테스트용 패키지나, 프로젝트를 개발할 때만 필요한 패키지를 명시하는 경우 사용된다.
 * 따라서 삭제할 때 --save-dev 옵션을 주어 devDependendies 항목에 명시된 패키지 리스틀르 삭제하는 것도 가능하다.
 */
