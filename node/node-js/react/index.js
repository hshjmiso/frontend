// import React from 'react';
// import ReactDOM from 'react-dom';

// 함수형 컴포넌트
function hellowWorldButton() {
    // 비구조화 할당
    const [isClick, setClickState] = React.useState(false); // 컴포넌트의 상태를 설정하는 메서드, 파라미터는 초기값

    // 삼항연산자
    const text = isClick ? "Bye world!" : "Hello world!"

    return (
        <button onClick={setClickState()} >
            <div>
                <span>Hello world!</span>
            </div>
        </button>
    )
}

const rootContainer = document.getElementById('react-root');
ReactDOM.render(React.createElement(hellowWorldButton), rootContainer);