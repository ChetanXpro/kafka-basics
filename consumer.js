const { kafka } = require("./config/kakfaClient");
const group = process.argv[2] || "rider-group";

//  consumer task: consume messages from the topic
async function init() {
  const consumer = kafka.consumer({ groupId: group });
  console.log("Consumer Connecting ...");
  await consumer.connect();
  console.log("Consumer Connected!");
  await consumer.subscribe({ topic: "rider-updated", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        "Group ID": group,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
}

init().catch(console.error);
