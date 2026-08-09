# Task Manager — Full-Stack MERN Application

_A production-oriented **Task Manager** application built with **React, Node.js, Express, MongoDB, and Mongoose**, containerized with Docker and deployed to **AWS EC2**._

_The project follows a clean backend MVC architecture and includes automated linting, formatting, Docker image builds, CI validation, and continuous deployment through GitHub Actions._

---

## 🚀 Project Overview

This project was built from the ground up with a focus on:

* RESTful API development
* MVC architecture
* MongoDB database integration
* React frontend development
* Responsive UI with Bootstrap
* User-friendly notifications with React Toastify
* Docker containerization
* ESLint and Prettier integration
* Git and GitHub workflow
* GitHub Actions CI/CD
* AWS EC2 deployment
* Automated Docker-based deployment
* Environment-based configuration
* Automated deployment on every Git push

The final application consists of two independently containerized applications:

* **Backend** — Node.js + Express + MongoDB/Mongoose
* **Frontend** — React + Bootstrap

Both applications are connected and deployed together using Docker Compose on an AWS EC2 instance.

---

## ✨ Application Features

| Feature                        | Description                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Create Task**                | Add new tasks through a simple and intuitive task creation interface.                                                                           |
| **Task List**                  | Displays all created tasks in an organized and easy-to-use list.                                                                                |
| **Complete / Uncomplete Task** | Mark tasks as completed or incomplete using the check/uncheck button. Completed tasks are visually indicated with a **strikethrough** effect.   |
| **Update Task**                | Edit an existing task using the pencil button. The selected task is loaded into the task form, allowing its details to be modified and updated. |
| **Delete Task**                | Permanently remove a task using the trash/delete button.                                                                                        |
| **Search Tasks**               | Quickly find specific tasks using the built-in search functionality.                                                                            |
| **Toast Notifications**        | Provides beautiful, real-time notifications for actions such as task creation, updates, completion, deletion, and errors.                       |
| **Responsive UI**              | Provides a clean and responsive interface that works across different screen sizes.                                                             |


---

## 🏗️ Architecture

```text
                        ┌─────────────────────┐
                        │      Developer      │
                        │   Git Push / PR     │
                        └──────────┬──────────┘
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │    GitHub Actions   │
                        │     CI Pipeline     │
                        └──────────┬──────────┘
                                   │
                 ┌─────────────────┴─────────────────┐
                 │                                   │
                 ▼                                   ▼
        ┌──────────────────┐               ┌──────────────────┐
        │ Backend Docker   │               │ Frontend Docker  │
        │      Image       │               │      Image       │
        └──────────────────┘               └──────────────────┘
                 │                                   │
                 └─────────────────┬─────────────────┘
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │      AWS EC2        │
                        │    Amazon Linux     │
                        └──────────┬──────────┘
                                   │
                            Docker Compose
                                   │
                 ┌─────────────────┴─────────────────┐
                 │                                   │
                 ▼                                   ▼
        ┌──────────────────┐               ┌──────────────────┐
        │ Backend Container│               │Frontend Container│
        │ Express + Node   │               │ React Application│
        └────────┬─────────┘               └─────────┬────────┘
                 │                                   │
                 ▼                                   │
        ┌──────────────────┐                         │
        │     MongoDB      │◄────────────────────────┘
        │    Database      │
        └──────────────────┘
```

---

# 🛠️ Tech Stack

## Backend

| Technology           | Use Case                                                                                      |
| -------------------- | --------------------------------------------------------------------------------------------- |
| **Node.js**          | JavaScript runtime used to build and run the backend server.                                  |
| **Express.js**       | Web framework used to create the server and REST API endpoints.                               |
| **MongoDB**          | NoSQL database used to store and persist task data.                                           |
| **Mongoose**         | ODM used to define schemas, validate data, and interact with MongoDB.                         |
| **MVC Architecture** | Separates models, controllers, and routes to maintain a clean and scalable backend structure. |
| **REST APIs**        | Provides CRUD operations for creating, retrieving, updating, and deleting tasks.              |
| **ESLint**           | Analyzes backend code and identifies potential code-quality issues.                           |
| **Prettier**         | Automatically formats backend code for consistency and readability.                           |
| **Docker**           | Containerizes the backend application for consistent development and deployment.              |


## Frontend

| Technology               | Use Case                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------- |
| **React**                | Builds the interactive user interface using reusable components.                      |
| **Bootstrap**            | Provides responsive layouts and ready-to-use UI styling.                              |
| **React Toastify**       | Displays user-friendly success, error, and status notifications.                      |
| **REST API Integration** | Connects the React application with the backend to perform task CRUD operations.      |
| **ESLint**               | Analyzes frontend code and helps maintain code quality and consistency.               |
| **Prettier**             | Automatically formats frontend code for consistent styling.                           |
| **Docker**               | Containerizes the frontend application for consistent deployment across environments. |


## DevOps / Infrastructure

| Technology         | Use Case                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| **Git**            | Tracks source-code changes and maintains version history.                                        |
| **GitHub**         | Hosts the source code and manages repository collaboration.                                      |
| **GitHub Actions** | Automates linting, Docker image builds, CI validation, and deployment.                           |
| **Docker**         | Packages applications into portable and reproducible containers.                                 |
| **Docker Compose** | Orchestrates the frontend and backend containers as a multi-service application.                 |
| **AWS EC2**        | Hosts and runs the containerized application in the cloud.                                       |
| **Amazon Linux**   | Provides the operating system environment for the EC2 deployment server.                         |
| **SSH**            | Provides secure remote access to the EC2 instance and enables automated deployment.              |
| **GitHub Secrets** | Securely stores SSH keys, server credentials, and other sensitive deployment configuration.      |
| **CI/CD**          | Automates code validation, Docker builds, and deployment of new changes to the live application. |

---   

# 📁 Project Structure

The project is organized into separate frontend and backend applications.

```text
task-manager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── taskModel.js
│   ├── node_modules/
│   ├── routes/
│   │   └── taskRoute.js
│   ├── .dockerignore
│   ├── .env
│   ├── .prettierrc
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.js
│   ├── package.json
│   └── package.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── api.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── Taskmanager.jsx
│   │   └── utils.js
│   │  
│   ├── .dockerignore
│   ├── .env
│   ├── .prettierrc
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── ...
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

# 🔧 Backend Development

The backend was developed first using **Node.js and Express.js**.

The application follows the **MVC (Model-View-Controller)** pattern to keep database logic, business logic, and routing responsibilities separated.

## Backend Flow

```text
Client Request
      │
      ▼
   Route
      │
      ▼
 Controller
      │
      ▼
   Model
      │
      ▼
   MongoDB
```

### Backend Components

### Model

`models/taskmodel.js`

The task schema is defined using Mongoose.

The schema establishes the structure and validation rules for task documents stored in MongoDB.

### Controller

`controllers/taskcontroller.js`

The task controller contains the application's task-related business logic.

Implemented operations:

* Create task
* Fetch all tasks
* Update task
* Delete task

### Routes

`routes/taskroute.js`

The route layer exposes the REST API endpoints and maps incoming requests to the appropriate controller functions.

---

# 🔌 REST API

The backend exposes CRUD APIs for task management.

| Method   | Endpoint         | Description       |
| -------- | ---------------- | ----------------- |
| `POST`   | `/api/tasks`     | Create a new task |
| `GET`    | `/api/tasks`     | Fetch all tasks   |
| `PUT`    | `/api/tasks/:id` | Update a task     |
| `DELETE` | `/api/tasks/:id` | Delete a task     |

> Adjust the API prefix if your application uses a different route configuration.

The APIs were manually tested during development using **Thunder Client** to verify request handling, database operations, responses, and CRUD functionality.

---

# 🗄️ MongoDB Integration

MongoDB was integrated into the backend using **Mongoose**.

The database setup follows this sequence:

```text
Start Express Server
        │
        ▼
Load Environment Variables
        │
        ▼
Connect to MongoDB using Mongoose
        │
        ▼
Initialize Task Schema
        │
        ▼
Register Routes
        │
        ▼
Start Application
```

Environment-specific configuration is kept outside the source code using environment variables.

Example:

```env
PORT=8000
MONGO_URI=mongodb_connection_string
```

Sensitive values should never be committed to Git.

---

# 🎨 Frontend Development

The frontend was developed using **React**.

The frontend communicates with the backend REST APIs and provides the user interface for managing tasks.

## Frontend Components

### `Taskmanager.jsx`

The primary task-management component responsible for interacting with the task APIs and displaying/managing tasks.

### `api.js`

Centralizes API communication between the React frontend and Express backend.

This keeps HTTP/API-related logic separated from UI components.

### `utils.js`

Contains reusable utility/helper functionality used throughout the frontend.

---

# 🎨 UI & Notifications

The frontend uses:

### Bootstrap

Used for responsive styling and UI layout.

### React Toastify

Used to provide clear and user-friendly feedback for operations such as:

* Task creation
* Task updates
* Task deletion
* API errors
* Successful operations

The frontend and backend were tested together to verify the complete request/response flow.

---

# 🐳 Dockerization

Both frontend and backend applications are independently containerized.

Separate Dockerfiles were created for:

```text
backend/Dockerfile
frontend/Dockerfile
```

This allows each application to be built, versioned, and executed independently.

## Backend Container

The backend Docker image contains:

* Node.js runtime
* Backend dependencies
* Express application
* Application source code
* Required environment configuration at runtime

## Frontend Container

The frontend Docker image contains:

* Node.js/build environment
* Frontend dependencies
* React application
* Production-ready frontend assets

---

# 🐳 Docker Compose

Docker Compose is used to run the application stack together.

Conceptually, the deployment consists of:

```text
Docker Compose
      │
      ├── Backend Container
      │
      └── Frontend Container
```

This simplifies local development and deployment by allowing the services to be started together.

```bash
docker compose up -d --build
```

To stop the application:

```bash
docker compose down
```

To view running containers:

```bash
docker compose ps
```

To view logs:

```bash
docker compose logs -f
```

---

# 🔍 Code Quality

Code quality and consistency are enforced using:

* **ESLint** — static code analysis
* **Prettier** — consistent code formatting

Both tools are configured for:

* Backend
* Frontend

This helps maintain consistent coding standards across the project.

---

# 🔄 CI Pipeline

A GitHub Actions workflow was implemented using:

```text
.github/workflows/ci.yml
```

The CI pipeline automatically validates the project whenever changes are pushed to GitHub.

## CI Workflow

```text
Checkout Repository
        │
        ▼
Setup Node.js
        │
        ▼
Install Backend Dependencies
        │
        ▼
Lint Backend
        │
        ▼
Install Frontend Dependencies
        │
        ▼
Lint Frontend
        │
        ▼
Build Backend Docker Image
        │
        ▼
Build Frontend Docker Image
```

The pipeline ensures that:

1. The repository can be checked out successfully.
2. Node.js dependencies can be installed.
3. Backend code passes ESLint validation.
4. Frontend code passes ESLint validation.
5. Backend Docker image can be built successfully.
6. Frontend Docker image can be built successfully.

This prevents broken code or invalid Docker builds from moving further through the deployment process.

---

# ☁️ AWS Deployment

The application is deployed to an **AWS EC2 instance** running **Amazon Linux**.

## EC2 Setup

The deployment environment was configured manually initially to establish the infrastructure.

The following steps were performed:

1. Launch an EC2 instance using an Amazon Linux AMI.
2. Connect to the instance through SSH.
3. Update system packages.
4. Install Docker.
5. Add `ec2-user` to the Docker group.
6. Enable Docker.
7. Start Docker.
8. Install Git.
9. Install Docker Compose CLI plugin.
10. Clone the application repository.
11. Configure environment variables.
12. Start the application with Docker Compose.

---

# ⚙️ EC2 Setup Script

A shell script was created to automate the initial server setup.

The script handles tasks such as:

```text
Update system packages
        │
        ▼
Install Docker
        │
        ▼
Configure ec2-user
        │
        ▼
Enable Docker service
        │
        ▼
Start Docker service
```

This makes the EC2 provisioning process repeatable instead of requiring every configuration step to be performed manually.

---

# 🔐 Environment Configuration

Environment variables are configured separately for the backend and frontend.

Example structure:

```text
backend/
└── .env

frontend/
└── .env
```

Backend configuration includes:

```env
PORT=8000
MONGO_URI=mongodb_connection_string
```

Frontend configuration contains the backend API URL:

```env
VITE_API_URL=backend_api_url
```

> Environment variable names should match the names used by the application. Actual credentials and secrets must never be committed to Git.

---

# 🚀 Deployment on EC2

After the EC2 environment was configured, the repository was cloned into the application directory.

Example:

```bash
git clone <repository-url>
cd <project-directory>
```

The application can then be started using Docker Compose:

```bash
docker compose up -d --build
```

After successful startup, the application becomes accessible through the EC2 instance's public IPv4 address and configured ports.

---

# 🔁 Continuous Deployment

The deployment process was further automated by extending the GitHub Actions workflow.

GitHub repository **Secrets and Variables** were configured to securely provide the required deployment credentials and configuration.

The deployment job performs the following operations:

```text
Checkout Repository
        │
        ▼
Configure EC2 Known Host
        │
        ▼
Write SSH Private Key
        │
        ▼
Connect to EC2
        │
        ▼
Pull Latest Changes
        │
        ▼
Docker Compose Up
        │
        ▼
Rebuild Containers
        │
        ▼
Deploy Latest Version
```

The deployment process essentially performs:

```bash
git pull
docker compose up -d --build
```

on the EC2 server.

---

# 🔐 GitHub Secrets

Sensitive deployment information is stored using GitHub repository secrets rather than hard-coded in the workflow.

Examples of deployment configuration include:

```text
EC2_HOST
EC2_USER
EC2_SSH_KEY
```

The exact secret names can vary depending on the workflow configuration.

This approach keeps sensitive infrastructure credentials outside the source code.

---

# 🔄 Complete CI/CD Pipeline

The final automation flow is:

```text
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Checkout
    ├── Setup Node.js
    ├── Install Backend Dependencies
    ├── Lint Backend
    ├── Install Frontend Dependencies
    ├── Lint Frontend
    ├── Build Backend Docker Image
    ├── Build Frontend Docker Image
    │
    ▼
Deployment Job
    │
    ├── Configure SSH
    ├── Connect to EC2
    ├── Git Pull
    └── Docker Compose Up --build
    │
    ▼
AWS EC2
    │
    ├── Backend Container
    └── Frontend Container
    │
    ▼
Live Application
```

As a result, new changes can be deployed automatically after being pushed to the configured GitHub branch.

---

# 🧪 Testing & Verification

The application was tested at multiple levels during development.

### Backend API Testing

REST APIs were tested using **Thunder Client**.

Verified operations include:

* Creating tasks
* Fetching tasks
* Updating tasks
* Deleting tasks
* API request/response behavior
* MongoDB persistence

### Frontend Testing

The React application was tested against the running backend to verify:

* API connectivity
* Task creation
* Task retrieval
* Task updates
* Task deletion
* UI state updates
* Toast notifications

### Integration Testing

Frontend and backend were tested together to confirm the complete flow:

```text
React UI
   ↓
API Request
   ↓
Express Route
   ↓
Controller
   ↓
Mongoose
   ↓
MongoDB
   ↓
API Response
   ↓
React UI
```

### CI Testing

GitHub Actions validates:

* Backend linting
* Frontend linting
* Backend Docker build
* Frontend Docker build

---

# 📦 Running the Project Locally

## Prerequisites

Make sure the following tools are installed:

* Node.js
* npm
* Git
* Docker
* Docker Compose
* MongoDB or a MongoDB Atlas connection

---

## 1. Clone Repository

```bash
git clone <repository-url>

cd <project-directory>
```

---

## 2. Configure Backend

Create:

```text
backend/.env
```

Add the required backend environment variables.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 3. Configure Frontend

Create:

```text
frontend/.env
```

Add the backend API configuration required by the React application.

Example:

```env
VITE_API_URL=http://localhost:5000
```

---

## 4. Run with Docker Compose

From the project root:

```bash
docker compose up -d --build
```

Check running containers:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

Stop the application:

```bash
docker compose down
```

---

# 🧑‍💻 Development Workflow

The development workflow follows a structured process:

```text
1. Develop Feature
       ↓
2. Test Backend APIs
       ↓
3. Test Frontend Integration
       ↓
4. Run ESLint
       ↓
5. Format with Prettier
       ↓
6. Build Docker Images
       ↓
7. Commit Changes
       ↓
8. Push to GitHub
       ↓
9. GitHub Actions CI
       ↓
10. Automated EC2 Deployment
```

---

# 🌿 Git Workflow

Git is used for source control and GitHub is used as the central repository.

A typical workflow:

```bash
git status

git add .

git commit -m "feat: add task management functionality"

git push origin main
```

The push triggers the configured GitHub Actions workflow.

---

# 🚦 CI/CD Status

The project includes an automated pipeline covering both validation and deployment.

| Stage                            |  Status  |
| -------------------------------- |  ------  |
| Repository Checkout              | ✅      |
| Node.js Setup                    | ✅      |
| Backend Dependency Installation  | ✅      |
| Backend ESLint                   | ✅      |
| Frontend Dependency Installation | ✅      |
| Frontend ESLint                  | ✅      |
| Backend Docker Build             | ✅      |
| Frontend Docker Build            | ✅      |
| SSH Configuration                | ✅      |
| EC2 Deployment                   | ✅      |
| Git Pull on EC2                  | ✅      |
| Docker Compose Rebuild           | ✅      |
| Automated Deployment             | ✅      |
 
---

# 🎯 Key Engineering Practices Demonstrated

This project demonstrates practical experience across the full application lifecycle:

### Backend Engineering

* REST API development
* Express.js
* MVC architecture
* MongoDB/Mongoose
* CRUD operations
* Environment-based configuration

### Frontend Engineering

* React
* Component-based architecture
* REST API integration
* Bootstrap
* User notifications
* Utility abstraction

### Code Quality

* ESLint
* Prettier
* Git
* `.gitignore`
* Consistent project structure

### Containerization

* Dockerfiles
* Docker images
* Docker containers
* Docker Compose
* Multi-service application deployment

### CI/CD

* GitHub Actions
* Automated linting
* Automated Docker builds
* SSH-based deployment
* Git-based deployment
* Automated EC2 updates

### Cloud / DevOps

* AWS EC2
* Amazon Linux
* SSH
* Docker on EC2
* Docker Compose
* GitHub Secrets
* Automated deployments

---

# 🏁 Final Result

The project evolved from a locally developed CRUD application into a containerized and continuously deployed full-stack system.

The final workflow is:

```text
Code Change
    ↓
Git Commit
    ↓
Git Push
    ↓
GitHub Actions
    ↓
Lint Backend + Frontend
    ↓
Build Docker Images
    ↓
SSH into EC2
    ↓
Pull Latest Code
    ↓
Docker Compose Rebuild
    ↓
Containers Restart
    ↓
Updated Application Live
```

This provides a repeatable development and deployment workflow where changes pushed to the configured GitHub branch are automatically validated and deployed to the AWS EC2 environment.

---

## 👨‍💻 Project Summary

**Task Manager** is a full-stack application demonstrating the implementation of a modern development workflow — from **REST API and React development** through **containerization, CI automation, AWS infrastructure, and continuous deployment**.

The project focuses not only on application functionality but also on maintainability, reproducibility, code quality, deployment automation, and practical DevOps practices.
