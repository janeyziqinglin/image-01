# 3-Tier Web Application comparing bare metal and containers

## Overview

This project showcases a 3-tier web application built with a React front-end client, two APIs (Node.js and Golang), and a database. The aim of this project is to create a simple yet realistic microservices system that can be containerized, providing insights into the advantages and trade-offs of using containerization over traditional bare-metal deployment.

![Screenshot 2023-11-20 at 12 14 39 PM](https://github.com/janeyziqinglin/image-01/assets/105125897/a705cc15-96de-4bca-bd34-c54ad228fc3e)

*Graphical Illustration of Research Computing Webpage*


## Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine.

2. Install the necessary dependencies for the front-end and back-end components.

3. Start the React front-end client.

4. Launch the Node.js and Golang APIs.

5. Connect to the database.

## Containerization vs. Bare-Metal

One of the key aspects of this project is to explore the differences and trade-offs between deploying a microservices application using containerization (e.g., Docker) compared to traditional bare-metal deployment. We have analyzed and compared the following factors:

- **Scalability:** Containerization offers dynamic scalability, whereas bare-metal requires manual provisioning and scaling.

- **Isolation:** Containers provide better isolation between services, minimizing potential conflicts.

- **Resource Utilization:** Containers are lightweight and more efficient in resource utilization compared to dedicated bare-metal servers.

- **Deployment Speed:** Containers enable rapid deployment and updates, reducing downtime.

- **Management:** Container orchestration tools (e.g., docker) simplify management compared to traditional server administration.

### Bare-Metal

- Requires manual setup of individual components (PostgreSQL, Node.js, Golang).
- Components need independent configuration, maintenance, and monitoring.
- Environments can vary, leading to compatibility and configuration challenges.
- Scaling and replicating services can be complex and time-consuming.
- Deployment across different environments requires additional setup.
- Limited isolation between components can lead to conflicts and resource issues.
- Debugging can be challenging due to the complexity of the setup.

### Containerized (Docker Compose)

- Provides a consistent and reproducible environment for the entire stack.
- All components, dependencies, and configurations are defined in Docker Compose files, simplifying setup.
- Ensures consistency across environments (development, testing, production).
- Scalability is simplified with Docker Compose, allowing easy scaling of services.
- Portability: Containerized apps can be easily deployed to different environments.
- Isolation: Containers isolate components, reducing conflicts and resource allocation issues.
- Debugging and troubleshooting are streamlined with containerization tools and logs.

## Features

- **React Front-End Client:** The front-end is built using React, providing a responsive and interactive user interface.

- **Node.js and Golang APIs:** We have implemented two APIs, one using Node.js and the other using Golang, to handle various backend functionalities.

- **Database:** A database system is integrated to store and manage data efficiently.
  

## License

This project is licensed under the MIT License
