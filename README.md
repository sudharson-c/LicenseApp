# LicenseApp
A simple file storage web application built with Node.js, Express, MongoDB, and EJS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction

The LicenseApp is a web application that allows users to upload, store, and manage files securely. Users can upload files, view file details, and delete files as needed. The application provides a simple and intuitive user interface for managing files effectively.

## Features

- User-friendly interface for uploading files
- Secure storage of files in MongoDB database
- View file details such as title, description, and file path
- Delete files with ease

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/file-storage-app.git
```

2. Navigate to the project directory:

```bash
cd file-storage-app
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following environment variables:

   ```plaintext
   DATABASE_URL=your_mongodb_connection_string
   PORT=3000
   ```

## Usage

1. Start the server:

```bash
npm start
```

2. Open a web browser and go to `http://localhost:3000` to access the application.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript)
- Multer (Middleware for handling file uploads)
- Mongoose (MongoDB object modeling tool)
- Bootstrap (Front-end framework)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
