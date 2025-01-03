
# Flashcard Application

A full-stack flashcard application designed for interactive learning through questions and answers. The app supports both **Objective** and **Multiple Choice Questions (MCQs)** flashcards, and it comes with admin functionalities for managing content. Multiple admins can collaboratively manage the system.

---

## Hosted Application

The project is hosted on vercel
Access the application(project) from here: [Flashcard App](https://flash-card-learning-tool-wvhm.vercel.app/)

---

## Test Admin Login Details

To test admin functionalities, you can use the following credentials:

|          **Email**           |  **Password**  |  **Key**   |
|------------------------------|----------------|------------|
|  rohan.sharma@example.com    |  password123   |  987654    |
|  james.anderson@example.com  |  adminJames78  |  456789    |

---

## Features

### **User Features**
- View flashcards categorized by **Objective** and **MCQs** types.
- Interact with flashcards to view questions and reveal answers.
- Choose number of questions as 5, 10, 20 of particular type.

### **Admin Features**
- Add new flashcards with question, answer, and type (Objective or MCQ).
- Update existing flashcards.
- Delete flashcards.
- Manage multiple admin accounts.
- Search and filter flashcards for efficient management.

---

## Tech Stack

- **Frontend**: React.
- **Backend**: Node.js with Express.js.
- **Database**: MongoDB.
- **Authentication**: JWT for secure multi-admin functionality.
- **Styling**: custom or raw CSS.
- **API Communication**: RESTful API for seamless data exchange.

---

## Installation and Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (Ensure MongoDB is running locally or via a cloud provider like MongoDB Atlas)
- A package manager like `npm` or `yarn`

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh-Agrawal96/Flash-Card-Learning-Tool.git
   ```

2. Install backend dependencies:
   ```bash
   cd Flash-Card-Learning-Tool/Server
   npm install
   ```
   
3. Back to directory(where project were cloned):
    ```bash
    cd ../../
    ```

4. Install fronted dependencies:
   ```bash
   cd Flash-Card-Learning-Tool/Client/flashcard
   npm install
   ```

5. Set up backend environment variables:
   Back to directory (where project were clone)
   Go to server directory
   ```bash
   cd Flash-Card-Learning-Tool/Server
   ```
   Create a `.env` file in the server directory and add the variable values which are present in .env.example file like below:
   ```env
   PORT=3000
   DatabaseURL=mongodb://localhost:27017/flashcards
   JWT_SECRET=your-secret-key
   ```

6. Start the backend server:
   ```bash
   npm start
   ```

7. set up frontend environment variables:
   Back to directory (where project were clone)
   Go to client directory
   ```bash
   cd Flash-Card-Learning-Tool/Client/flashcard
   ```
   Create a `.env` file in the flashcard directory and add the variable values which are present in .env.example file like below:
   ```env
   BackendURL=Your-backend-url
   ```

8. Start the application server:
   ```bash
   npm start
   ```

9. Access the app:
   Open your browser and navigate to `http://localhost:3000`.

---

## API Endpoints

### **Public Endpoints**
| Method | Endpoint           | Description                                             |
|--------|--------------------|---------------------------------------------------------|
| GET    | `/give/cards`      | Retrieve the particular question types of flashcards    |

### **Admin Endpoints**
| Method | Endpoint           | Description                                                |
|--------|--------------------|------------------------------------------------------------|
| GET    | `/cards`           | Retrieve the cards or flashcards for a particular admin    |
| POST   | `/login`           | Admin login                                                |
| POST   | `/card/add`        | Add a new flashcard                                        |
| PUT    | `/card/update`     | Update an existing flashcard                               |
| DELETE | `/card/delete`     | Delete a flashcard                                         |


---

## Project Structure

```
flashcard-app/
├── client/
│   └── flashcard/               # React application
│       ├── src/                 # Source code for React
│       │   ├── backendApicall/  # React api for backend connect
│       │   ├── public/          # React static content
│       │   ├── utils/           # React usuable constants
│       │   ├── views/           # Pages for the app
│       │   └── index.js         # Entry point for React
│       ├── public/              # Contains the index.html with root div
│       ├── package.json         # Dependencies for React
│       ├── .env.example         # Variables that used in .env
│       ├── .gitignore           # files or folder that were ignored
│       └── README.md            # React README.md
│
├── server/
│   ├── src/
│   │   ├── config/              # Configurations logic
│   │   ├── controllers/         # Backend logic
│   │   ├── models/              # Mongoose models
│   │   ├── Routes/              # Express routes
│   │   ├── services/            # backend logic that work with db
│   │   └── utils/               # backend usuable constants
│   ├── package.json             # Dependencies for Node.js
│   ├── .env.example             # Conatains the variable that used in env
│   ├── .gitignore               # Contains the file or folder that were not pushed to github
│   ├── vercel.json              # Configuration for deployment
│   └──app.js                   # Main server file
│ 
└── README.md                    # Project documentation
```

---

## Contact

For any questions or feedback, please contact:
- **Harsh Agrawal**: [harshagrawal9650@gmail.com](mailto:harshagrawal9650@gmail.com)
- **GitHub**: [https://github.com/Harsh-Agrawal96](https://github.com/Harsh-Agrawal96)

