const {kafka} = require("./client")

async function init(){
    const admin = kafka.admin();
    console.log("admin connected...")
    admin.connect();
    console.log("Admin Connecting Successfully!!");

    console.log("creating topic [rider-updated");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-update",
                numPartitions: 2,
            }
        ]
    });
    console.log("topic created successfully");

    console.log("disconnecting admin");
    await admin.disconnect();
}

init();