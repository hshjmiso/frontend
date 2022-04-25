import { useState } from 'react'

function MainHeader() {
    // 상태를 처리하는 함수
    // [상태 데이터, 상태를 위한 setter 함수]
    const [ text, setText ] = useState('Hello World!');
    return (
        <h1 onClick={() => {setText('Bye World!')}}>{text}</h1>
    )
}

export default MainHeader;