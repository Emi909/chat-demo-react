# 💬 Chat Application Demo with React and Socket.IO

This repository showcases a real-time chat application built using [React](https://reactjs.org/) for the frontend and [Socket.IO](https://socket.io/) for real-time bidirectional event-based communication between clients and servers. The project serves as a demonstration for Becode.

## 🚀 Features

- **Real-time Communication**: Instant messaging between connected users leveraging WebSockets.
- **React Frontend**: A responsive and dynamic user interface built with React.
- **Node.js Backend**: A lightweight server powered by Node.js and Express.
- **Socket.IO Integration**: Efficient real-time event handling between client and server.

## 🧰 Technologies Used
- **Frontend**:
  - React
  - CSS (for basic styling)

- **Backend**:
  - Node.js
  - Express
  - Socket.IO


## 📁 Project Structure
```bash
chat-demo-react/
├── client/      # React frontend source code
└── server/      # Node.js and Express backend source code
```

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## 🛠️ Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/NicolasJamar/chat-demo-react.git
   ```

2. **Navigate to the Project Directory**:

```bash
cd chat-demo-react
```

3. **Install Dependencies**:

For the server:

```bash
cd server
npm install
```

For the client:

```bash
cd ../client
npm install
```

## ▶️ Running the Application
1.**Start the Server**:

```bash
cd server
npm start
```
The server will run on `http://localhost:3500`.

2. **Start the Client**:

Open a new terminal window and run:

```bash
cd client
npm start
```
The client will open in your default web browser at `http://localhost:5173`.

## 📦 Usage
- Open multiple browser tabs or separate browsers and navigate to `http://localhost:5173` to simulate multiple users.

- Enter a username when prompted.

- Start sending messages, and observe them appear in real-time across all connected clients.






