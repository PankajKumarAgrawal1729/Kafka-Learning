const {kafka} = require("./client");
const group = process.argv[2];

async function init(){
    const consumer = kafka.consumer({groupId: group});
    console.log("Consumer connecting..");
    consumer.connect();
    console.log("Consumer connecting successfully");
    await consumer.subscribe({topics: ['rider-update'], fromBeginning: true});
    await consumer.run({
        eachMessage: async({topic, partition, message, heartbeat, pause}) =>{
            console.log(`${group}: [${topic}]: Part: ${partition}}`, message.value.toString())
        }
    });
}
init();