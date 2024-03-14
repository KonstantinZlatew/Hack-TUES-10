const schedule = require("node-schedule")

const date = new Date('2024-03-14T13:10:00.000+5:30')

schedule.scheduleJob('* * * * *', () =>{
    console.log('Water your plant');
})