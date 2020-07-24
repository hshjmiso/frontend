const schedule = require('node-schedule');

// 특정 시간에 한번
const date = new Date(2020, 6, 24, 23, 10);

console.log(date);

const j = schedule.scheduleJob(date, () => {
    console.log('no pain, no gain');
});

// 매 시간마다 한 번
const rule = new schedule.RecurrenceRule(); // RecurrenceRule() 객체 인스턴스를 생성해서 schedule.scheduleJob()에 전달한다.
// 또한 j.cancel();를 통해 작업 취소를 할 수 있다.
rule.minute = 10;

const k = schedule.scheduleJob(rule, () => {
    console.log('Laziness is nothing more than the habit of resting before you get tired.');
});
/**
 * node-schedule 모듈은 유용한 Job scheduler 외부 모듈이다.
 * 이 모듈을 통해서 특정 날짜 및 시간에 scheduled job을 실행할 수 있다.
 * 해당 Job을 한 번 또는 반복으로 설정해서 사용할 수 있다.
 * 또한 interval-bases scheduling이 아닌 time-based scheduling이다.
 
 * node-schedule 모듈은 예를 들어 30분 또는 17시 20분 등과 같이 특정 시간에 실행되어야 할 때 사용하는 것이 더 적합하다.
 * 만약 어떤 schedule job이 script가 실행되지 않을 때도 지속되어야 한다면 node-cron 모듈을 사용하는 것을 고려하는 것이 좋다.
 * https://github.com/kelektiv/node-cron
 */