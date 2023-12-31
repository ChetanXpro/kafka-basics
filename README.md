# Kafka Basic Functionality Project

This project demonstrates the basic functionality of Apache Kafka, a distributed event streaming platform. It covers the creation of topics and partitions, as well as the setup of consumers and producers in a Node.js environment.


## Commands

- Start Zookeper Container and expose PORT 2181.

  ```docker run -p 2181:2181 zookeeper```

- Start Kafka Container, expose PORT 9092 and setup ENV variables.

``` 
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

## Getting Started

To get started with the project, follow these steps:

1. **Installation:** Make sure you have Node.js and Kafka installed on your machine. If not, refer to the official documentation for installation instructions.

2. **Clone the Repository:** Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/ChetanXpro/kafka-basics.git

## Admin
- The `admin.js` script is responsible for creating topics and partitions for those topics. The script uses the Kafka admin client to perform administrative tasks. It's an essential step to set up the topics before running consumers and producers.
- To execute the admin script:
- ``` node admin.js```



## Setting Up Consumers

- Run a consumer and specify a consumer group.
- ``` node consumer.js group-1```

## Producing Data

- Run the producer to send data to a Kafka topic.
```
node producer.js <name> <location>

EXAMPLE: node producer.js chetan delhi
```

