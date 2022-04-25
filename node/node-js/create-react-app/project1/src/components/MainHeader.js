import { useState } from 'react';

function MainHeader() {
    // 상태를 처리하는 함수
    // [상태 데이터, 상태를 위한 setter 함수]
    const [text, setText] = useState('Hello world!');
    const bracket = '{'
    return (
        <h1 onClick={() => {setText('Bye world!')}}>{bracket + text + '}'}</h1>
    )
}

export default MainHeader;