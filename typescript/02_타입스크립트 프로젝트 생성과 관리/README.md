# 타입스크립트 프로젝트 생성과 관리

## 타입스크립트 프로젝트 만들기

### npm init 명령을 실행하여 package.json 파일 생성
```
npm init
```

### 프로젝트 생성자 관점에서 패키지 설치하기
package.json 파일을 만들면 프로젝트 구현에 필요한 다양한 오픈소스 패키지를 npm install 또는 간단한 npm i 명령으로 설치한다. 

패키지 설치 명령 옵션
* --save
  * 프로젝트를 실행할 때 필요한 패키지로 설치한다. 패키지 정보가 package.json 파일의 'dependencies'항목에 등록된다. 
  * 단축 명령 -S
* --save-dev
  * 프로젝트를 개발할 때만 필요한 패키지로 설치한다. 패키지 정보가 package.json 파일의 'devDependencies'항목에 등록된다.
  * 단축 명령 -D

### typescript와 ts-node 패키지를 설치
```
npm i -D typescript ts-node
```

### @types/nodes 설치
타입스크립트는 웹 브라우저나 nodejs가 기본으로 제공하는 타입들의 존재도 그냥 알지 못한다. 예를 들어, Promise와 같은 타입을 사용하려면 @types/node라는 패키지를 설치해야 한다.
```
npm i -D @types/node
```

### tsconfig.json 파일 만들기
타입스크립트 프로젝트는 타입스크립트 컴파일러의 설정 파일이 tsconfig.json 파일이 있어야 한다. 이 파일은 tsc --init 명령으로 만들 수 있다. 
```
tsc --init
```
책에서 기본으로 사용하는 tsconfig.json 파일
``` javascript
{
  "compilerOptions": {
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "target": "es5",                                
    "moduleResolution": "node",                     /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "outDir": "dist",                               /* Redirect output structure to the directory. */
    "baseUrl": ".",                                 /* Base directory to resolve non-absolute module names. */
    "sourceMap": true,                              /* Generates corresponding '.map' file. */
    "downlevelIteration": true,                     /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    "noImplicitAny": false,                         /* Raise error on expressions and declarations with an implied 'any' type. */
    "paths": { "*": ["node_modules/*"] },           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
  },
  "include": ["src/**/*"]
}

```

### src 디렉터리와 소스 파일 만들기
tsconfig.json 파일에서 includes 항목에 ["src/**/*"]라는 값이 설정되어 있는데, 이것은 ./src와 ./src/utils 디렉터리에 이 프로젝트의 모든 타입스크립트 소스 파일이 있다는 뜻이다.

```
mkdir -p src/utils
```

```
touch src/index.ts src/utils/makePerson.ts
```

### package.json 수정
```
"main": "src/index.js",
  "scripts": {
    "dev" : "ts-node src",
    "build" : "tsc && node dist"
  },
```
dev 명령은 개발 중에 src디렉터리에 있는 index.ts 파일을 실행하는 용도로 사용하며, build 명령은 개발이 완료된 후 프로그램을 배포하기 위해 dist 디렉터리에 ES5 자바스크립트 파일을 만들 때 사용한다.

## 모듈 이해하기
타입스크립트에서는 index.ts와 같은 소스 파일을 모듈(module)이라고 한다. index.ts와 makePerson.ts 등 두 개의 소스 파일을 만들었으므로 모듈을 두 개 만든 것이다. 소스 파일 하나로 구현해도 되지만, 보통은 코드 관리와 유지 · 보수를 편리하게 하려고 모듈마다 고유한 기능을 구현하는 방식으로 소스코드를 분할한다. 이러한 작업을 모듈화(modulization)라고 한다.

export는 기능을 제공하는 쪽에서 사용하고 import는 다른 모듈의 기능을 이용하는 쪽에서 사용하는 키워드이다.

### export 키워드
export 키워드는 function, interface, class, type, let, cont 키워드 앞에 붙일 수 있다.

### import 키워드
어떤 파일이 export 키워드로 내보낸 심벌을 받아서 사용하려면 import 키워드로 해당 심벌을 불러와야 한다. import 키워드를 사용하는 형식은 몇 가지 있지만, 가장 기본적인 형태는 다음과 같다.
``` javascript
import { 심벌 목록 } from '파일의 상대 경로'
```

### import * as 구문
import 구문의 또 다른 형태는 다음처럼 as키워드를 함께 사용하는 것이다.
``` javascript
import * as 심벌 from '파일의 상대 경로'
```

### export default 키워드
export default 키워드는 한 모듈이 내보내는 기능 중 오직 한개에만 붙일 수 있다.
export default가 붙은 기능은 import 문으로 불러올 때 중괄호 {} 없이 사용할 수 있다.
export default는 export 등이 있는 파일에서도 사용할 수 있다.

### 외부 패키지를 사용할 때 import 문
실습을 위해 chance와 ramda라는 패키지를 설치
```
npm i -S chance ramda
npm i -D @types/chance @types/ramda
```
chance 패키지는 그럴듯한 가짜 데이터(fake data)를 만들어 주는 데 사용되며, ramda는 함수형 유틸리티 패키지이다. 

## tsconfig.json 파일 살펴보기
```
$ tsc --help
Version 4.2.4
Syntax:   tsc [options] [file...] // tsc 명령 형식

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 -h, --help                                         Print this message.
 -w, --watch                                        Watch input files.
```
tsc 컴파일러는 컴파일 옵션과 대상 파일 목록 두 가지를 입력받는다.

``` javascript
{
  "compilerOptions": {...생략...},
  "include": ["src/**/*"]
}
```
compilerOptions 항목은 tsc 명령 형식에서 옵션을 나타내고, include 항목은 대상 파일 목록을 나타낸다.
include 항목에서 src/**/*은 src 디렉터리는 물론 src의 하위 디렉터리에 있는 모든 파일을 컴파일 대상으로 포함한다는 의미이다.
'키'는 설정 항목을 의미하며 키에 설정하는 값을 '키값'이라고 한다. 둘은 콜론(:)을 기준으로 '키:키값' 형태로 작성한다.

``` javascript
{
  "compilerOptions": {
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "target": "es5",                                
    "moduleResolution": "node",                     /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "outDir": "dist",                               /* Redirect output structure to the directory. */
    "baseUrl": ".",                                 /* Base directory to resolve non-absolute module names. */
    "sourceMap": true,                              /* Generates corresponding '.map' file. */
    "downlevelIteration": true,                     /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    "noImplicitAny": false,                         /* Raise error on expressions and declarations with an implied 'any' type. */
    "paths": { "*": ["node_modules/*"] },           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
  },
  "include": ["src/**/*"]
}

```
### module 키
타입스크립트 소스코드가 컴파일되어 만들어진 ES5 자바스크립트 코드는 웹 브라우저와 nodejs 양쪽에서 모두 동작해야 한다. 그런데 웹 브라우저와 nodejs는 물리적으로 동작하는 방식이 달라서 여러 개의 파일(즉 모듈)로 분할된 자바스크립트 코드 또한 웹 브라우저와 nodejs 양쪽에서 각각 다르게 동작한다.
자바스크립트 모듈은 웹 브라우저에서는 AMD(asynchronous module definition) 방식으로 동작하고, nodejs처럼 웹 브라우저가 아닌 환경에서는 CommonJS 방식으로 동작한다. 
tsconfig.ts 파일에서 compilerOptions 항목의 module 키는 동작 대상 플랫폼이 웹 브라우저인지 nodejs인지를 구분해 그에 맞는 모듈 방식으로 컴파일하려는 목적으로 설정한다. 플랫폼에 따라 다음과 같은 값을 설정할 수 있다.
* 웹 브라우저에서 동작: amd
* nodejs에서 동작: commonjs

### moduleResolution 키
module 키의 값이 commonjs이면 nodejs에서 동작하는 것을 의미하므로, moduleResolution 키값은 항상 node로 설정한다. 반면에 module 키값이 amd이면 moduleResolution 키값은 classic으로 설정한다.

### target 키
target 키에는 트랜스파일할 대상 자바스크립트의 버전을 설정한다. 대부분 es5를 키값으로 설정한다. 만일, 최신 버전의 nodejs를 사용한다면 es6를 설정할 수 있다.

### baseUrl과 outDir 키
baseUrl과 outDir 키에는 트랜스파일된 ES5 자바스크립트 파일을 저장하는 디렉터리를 설정한다. tsc는 tsconfig.json 파일이 있는 디렉터리에서 실행된다. 따라서 현재 디렉터리(current directory)를 의미하는 "." baseUrl 키값을 설정하는 것이 보통이다. OutDir 키는 baseDir 설정값을 기준으로 했을 때 하위 디렉터리의 이름이다. 앞서 이 키는 dist라는 값을 설정했으므로 빌드된 결과가 dist 디렉터리에 만들어진다.

### paths 키
paths 키에는 소스 파일의 import 문에서 from 부분을 해석할 때 찾아야 하는 디렉터리를 설정한다. import 문이 찾아야 하는 소스가 외부 패키지이면 node_modules 디렉터리에서 찾아야 하므로 키값에 node_modules/*도 포함했다.

### esModuleInterop 키
오픈소스 자바스크립트 라이브러리 중에는 웹 브라우저에서 동작한다는 가정으로 만들어진 것이 있는데, 이를 CommonJS방식으로 동작하는 타입스크립트 코드에 혼란을 줄 수 있다. chance가 바로 AMD 방식을 전제로 해서 구현된 라이브러리이다. 따라서 chance 패키지가 동작하려면 esModuleInterop 키값을 반드시 true로 설정해야 한다.

### sourceMap 키
sourceMap 키값이 true이면 트랜스파일 디렉터리에는 .js파일 이외에도 .js.map 파일이 만들어진다. 이 소스맵 파일은 변환된 자바스크립트 코드가 타입스크립트 코드의 어디에 해당하는지를 알려준다. 소스맵 파일은 주로 디버깅할 때 사용된다.

### downlevelIteration 키
생성기(generator) 구문이 정상적으로 동작하려면 downlevelIteration 키값을 반드시 true로 설정해야 한다.

### noImplicitAny 키
타입스크립트 컴파일러는 기본적으로 f(a, b)처럼 매개변수 a, b에 타입을 명시하지 않은 코드일 경우 f(a: any, b: any)처럼 암시적으로 any 타입을 설정한 것으로 간주한다. 이런 형태의 코드는 타입스크립트 언어의 장점을 사용하는 것이 아니므로 코드에 문제가 있음을 알려준다.
false를 설정하면 타입을 지정하지 않더라도 문제로 인식하지 않는다. 
