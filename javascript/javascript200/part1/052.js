/**
 * 클래스의 상속은 extends 키워드를 사용한다.
 * 상속을 하게 되면 생성자 함수에서 상속한 부모 클래스의 생성자를 호출해야 하는데
 * 이때 super 키워드를 사용한다. 즉, super가 부모 생성자 함수를 가리킨다.
 */
class Chart {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log('draw line');        
    }
}

class BarChart extends Chart {
    constructor(width, height) {
        super(width, height)
    }

    draw() {
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

const barChart1 = new BarChart(100, 100);
barChart1.draw();