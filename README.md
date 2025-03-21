# Vue Social Network

This project is a simple social network application built with **Vue 3**, **Pinia** for state management, and **Tailwind CSS** for styling. The backend is powered by a **JSON server**.

## Project Structure

```
vue_social-network/
├── client/   # Frontend application
│   ├── src/
│   │   ├── components/      # Vue components
│   │   ├── views/           # Application views/pages
│   │   ├── stores/          # Pinia stores for state management
│   │   ├── router/          # Vue Router setup
│   │   ├── assets/          # Static assets
│   │   ├── App.vue          # Main application file
│   │   ├── main.js          # Entry point for Vue app
│   ├── public/              # Public assets
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   └── README.md            # Frontend README
├── server/   # Backend JSON Server
│   ├── db.json              # JSON database
│   ├── server.js            # JSON Server configuration
│   ├── package.json         # Backend dependencies
│   └── README.md            # Backend README
└── README.md                # Project documentation
```

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/your-username/vue_social-network.git
cd vue_social-network
```

### Install Dependencies

#### Client (Frontend)

```sh
cd client
npm install
```

#### Server (Backend)

```sh
cd server
npm install
```

## Running the Application

### Start the Backend Server

Navigate to the **server** directory and start the JSON server:

```sh
cd server
npm start
```

The server will be running at **[http://localhost:3000](http://localhost:3000)**.

### Start the Frontend Application

Navigate to the **client** directory and start the development server:

```sh
cd client
npm run dev
```

The client will be running at **[http://localhost:5173](http://localhost:5173)**.

## Features

- User authentication (mocked via JSON server)
- Posting and liking content
- Fetching posts dynamically from the backend
- State management with Pinia
- Responsive UI with Tailwind CSS

---

Made with ❤️ using Vue 3, Pinia, and Tailwind CSS.
