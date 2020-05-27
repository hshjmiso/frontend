/**
 * 객체(Object)는 값들을 그룹으로 묶은 데이터 모음이다. 객체를 만드는 방법은 표현식으로 중괄호{}를 사용하면 된다.
 * 중괄호 안에 여러 값들을 넣을 수 있는데, 키(Key)와 값(Value)을 한 쌍으로 정의하며 이를 속성(Properties)이라 부른다.
 * 하나의 키(key)에는 하나의 값이 매핑된다. 객체 안에 중복된 키 이름은 허용하지 않으며, 
 * 두 줄 이상의 속성을 정의할 때는 콤마 ,를 사용하여 구분한다.
 * 
 * JSON(Javascript Object Notation)은 자바스크립트의 객체와 매우 유사한 구조를 지닌 데이터 교환 형식(format)이다.
 * 그러나 반드시 속성 키 이름은 큰따옴표 ""로 표시된 문자열이어야 하고, 
 * 값은 오직 문자열, 숫자, 배열, true, false, null 또는 다른 JSON 객체만 가능하다.
 */
let family = {
    'address': 'Seoul',
    members: {},
    addFamily: function(age, name, role) {
        this.members[role] = { age, name };
    },
    getHeadCount: function() {
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'chole', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadCount());
console.log(family);