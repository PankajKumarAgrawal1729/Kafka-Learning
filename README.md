# Kafka-Learning

## Prerequisite
- Knowledge
  - Node.JS Intermediate level
  - Experience with designing distributed systems
- Tools
  - Node.js: [Download Node.JS](https://nodejs.org/en)
  - Docker: [Download Docker](https://www.docker.com)
  - VsCode: [Download VSCode](https://code.visualstudio.com)
## Commands for Running a Kafka Broker with Docker
- Start Zookeper Container and expose PORT `2181`.
```bash
docker run -p 2181:2181 zookeeper
```
- Start Kafka Container, expose PORT `9092` and setup ENV variables.
```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

#### Command Explanation

- `docker run`: This is the command used to run a new container.

- `-p 9092:9092`: The `-p` option is used to map the container port to the host port. In this case, the Docker host's port `9092` is mapped to the container's port `9092`, which is the default port that Kafka uses to listen for connections.

- `-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181`: This sets an environment variable within the container. `KAFKA_ZOOKEEPER_CONNECT` specifies the address of the ZooKeeper service that Kafka will use for cluster management. You should replace `<PRIVATE_IP>` with the private IP address of your ZooKeeper server.

- `-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092`: Another environment variable that tells Kafka how to advertise itself to clients and other brokers in the cluster. Again, replace `<PRIVATE_IP>` with the actual IP address of the Kafka broker.

- `-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1`: This environment variable sets the replication factor for the offsets topic to `1`, which is suitable for a single-node Kafka setup. In a production environment, you'd typically have a higher replication factor for fault tolerance.

- `confluentinc/cp-kafka`: This specifies the Docker image to use. In this case, it's using the official Confluent Platform image for Kafka.

#### Notes for Users

- Replace `<PRIVATE_IP>` with the actual private IP address of your server.
- The configuration provided is suitable for development purposes but should not be used as-is in a production environment.
- Make sure that the ZooKeeper service is running and accessible at the specified IP address and port.
- The `KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1` setting assumes a single-node Kafka cluster. For production, you'll need to run multiple Kafka nodes and set a higher replication factor.

## Running Locally
- Run Multiple Consumers
```bash
node consumer.js <GROUP_NAME>
```
- Create Producer
```bash
node producer.js
```
```bash
> gojo south
> gojo north
```
