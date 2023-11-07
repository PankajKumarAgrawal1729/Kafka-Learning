//admin creates topics
const { Kafka } = require('kafkajs');

//creating kafka client
exports.kafka = new Kafka({
    clientId: "my-app",
    brokers: ['172.20.10.3:9092']
});