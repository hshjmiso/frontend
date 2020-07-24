const schedule = require('node-schedule');
// Cron-style Scheduling
// *     *     *     *     *     *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    |
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

// Runs every weekday (Monday through Friday)
// at 11:30:00 AM
const j = schedule.scheduleJob('00 30 11 * * 1-5', () => {
    console.log('Cron-style Schduling');
});

// Recurrence Rule Schduling
// 0 - Sunday ~ 6 - Saturday
// 월요일부터 일요일까지 17시 17분에 실행될 스케줄링
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = 17;
rule.minute = 17;

const k = schedule.scheduleJob(rule, () => {
    console.log('Recurrence Rule Scheduling');
});

// 작업 취소
// j.cancel();
// k.cancel();

// Object Literal Syntax
// 0 - Sunday ~ 6 - Saturday
// every Saturday at 21:10
const l = schedule.scheduleJob({ hour: 21, minute: 10, dayOfWeek: 6 }, () => {
    console.log('Object Literal Syntax');
});

// Set StartTime and EndTime
const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 5000);
const m = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *'},
() => {
    console.log('Set StartTime and EndTime');
});
/**
 * Cron은 소프트웨어 유틸리티로 유닉스(UNIX) 계열 컴퓨터 운영 체제(OS)의 시간 기반 잡 스케줄러이다.
 * 스케줄 작업을 고정된 시간, 날짜, 간격에 주기적으로 실행할 수 있도록 스케줄링하기 위해 cron을 사용한다.
 * https://github.com/node-schedule/node-schedule
 */