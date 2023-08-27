const { Kafka } = require("kafkajs");
const { getIpAddress } = require("./getIpAddress");
const IP = getIpAddress();
// console.log("IP Address: ", IP);
exports.kafka = new Kafka({
  // 9092 is the default port for Kafka
  brokers: [`${IP}:9092`],
  clientId: "my-app",
});
