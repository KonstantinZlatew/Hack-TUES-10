const schedule = require("node-schedule");

const date = new Date('2024-03-14T12:34:00.000+5:30')

schedule.scheduleJob(date, () =>{
    console.log('Job ran at', new Date().toString())
})