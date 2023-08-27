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
confluentinc/cp-kafka ```

