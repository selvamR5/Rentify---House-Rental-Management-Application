# Rentify - House Rental Management Application

Rentify is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It is designed to facilitate the process of renting and managing properties. Users can browse available properties, submit rental applications, and property owners can manage their listings and rental applications.

This README file provides an overview of the Rentify application, its features, and instructions for setting up and running the application on a local development environment.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication (sign up, login, logout)
- Browse available properties with search and filter options
- Submit rental applications for desired properties
- Property owners can add, edit, and delete property listings
- Property owners can manage rental applications for their properties
- User dashboard with personalized property and application information
- Interactive and user-friendly interface

## Prerequisites

Before installing and running the Rentify application, make sure you have the following prerequisites installed on your system:

- Node.js (version >= 12.18.0)
- npm (version >= 6.14.4)
- MongoDB (version >= 4.4)
- Git

## Installation

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/jaysheri/house-rental-management-application.git
   ```

2. Navigate to the project's root directory:

   ```shell
   cd rentify
   ```

3. Install the server dependencies:

   ```shell
   npm install
   ```

4. Navigate to the client directory:

   ```shell
   cd client
   ```

5. Install the client dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the MongoDB server:

   ```shell
   mongod
   ```

2. In the project's root directory, start the server:

   ```shell
   npm run server
   ```

3. In a separate terminal, navigate to the client directory and start the client:

   ```shell
   cd client
   npm start
   ```

4. Open a web browser and visit `http://localhost:3000` to access the Rentify application.

## Contributing

We welcome contributions to enhance the Rentify application. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your modifications and commit changes.
4. Push your changes to the forked repository.
5. Submit a pull request.

## License

Rentify is released under the [MIT License](https://opensource.org/licenses/MIT).

Please note that this project is for educational purposes and should not be deployed in a production environment without proper security considerations.
