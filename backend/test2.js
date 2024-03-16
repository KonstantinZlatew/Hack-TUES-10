const schedule = require("node-schedule");

const user = await db.findUserById(id);
const plants = user.plants;

for(var plant_id = 0; plant_id < plants.length; plant_id = plant_id + 1){
    const char_days = plants[plant_id].watering_general_benchmark_value;
    const days = parseInt(char_days, 10);

    //const date = new Date('2024-03-14T13:10:00.000+5:30')

    var time;

    if (days == 1) {time = '0 0 * * *';}
    if (days > 1 && days < 7) {time = `0 0 */${days} * *`;}
    if (days == 7) {time = '0 0 * * 0';}

    schedule.scheduleJob(time, () =>{
        api.get('/', (req, res) => {
            res.send(`Water your ${plants[plant_id].scientific_name}`);
        });
    });
}