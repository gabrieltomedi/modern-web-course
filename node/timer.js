const schedule = require('node-schedule')

// 'second minute hour day month dayOfTheWeek' - */ to execute every five seconds
const job1 = schedule.scheduleJob('*/5 * 10 * * 3', function () {
    console.log('Executing Job 1 - ', new Date().getSeconds())
}) 

setTimeout(() => {
    job1.cancel()
    console.log('Canceling Job 1')
}, 20000);

// setImmediate
// setInterval

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)] //run from monday to friday
rule.hour = 10
rule.second = 30

const job2 = schedule.scheduleJob(rule, () => {
    console.log('Executing Job 2 - ', new Date().getSeconds())
})
