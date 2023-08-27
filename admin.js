const { kafka } = require("./config/kakfaClient");

//  admin task: create topics and partitions for the topics
async function init() {
  const admin = kafka.admin();
  console.log("Admin Connecting ...");
  await admin.connect();
  console.log("Admin Connected!");
  console.log("Creating Topics ...");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updated",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topics Created!");
  await admin.disconnect();
  console.log("Admin Disconnected!");
}

init().catch(console.error);
