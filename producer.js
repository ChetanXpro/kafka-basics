const { kafka } = require("./config/kakfaClient");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//  producer task: send messages to the topic
async function init() {
  const producer = kafka.producer();
  console.log("Producer Connecting ...");
  await producer.connect();
  console.log("Producer Connected!");

  // take input name and location , user location
  rl.setPrompt("Enter Name and Location > ");
  rl.prompt();
  rl.on("line", async (line) => {
    const [name, location] = line.split(" ");
    if (!name || !location) {
      return rl.prompt();
    }
    await producer.send({
      topic: "rider-updated",
      messages: [
        {
          partition: location.toLowerCase() === "south" ? 1 : 0,
          key: "location-updated",
          value: JSON.stringify({ name, location }),
        },
      ],
    });
    console.log("Messages Sent!");
  }).on("close", async () => {
    await producer.disconnect();
    console.log("Producer Disconnected!");
  });
}

init().catch(console.error);
