# 🎓 Student Management System API

A simple, lightweight, and efficient **REST API** built with **Node.js** and **Express.js** to manage student records. It performs full CRUD (Create, Read, Update, Delete) operations using an in-memory database array.

---

## ✨ Features
* 📝 **Create Student (POST):** Add a new student record with an auto-incrementing ID.
* 📋 **Read All Students (GET):** Retrieve a complete list of all registered students.
* 🔍 **Read Student by ID (GET):** Search and find a specific student using their unique ID.
* 🔄 **Update Student (PUT):** Modify a student's name, age, or course details dynamically.
* ❌ **Delete Student (DELETE):** Remove a student completely from the list.

---

## 🛠️ Tech Stack
* **Runtime Environment:** Node.js
* **Backend Framework:** Express.js
* **Database:** In-Memory Array (JavaScript Objects)

---

## 💻 How to Run Locally

1. **Navigate to the project folder:**
   ```bash
   cd student-api
   ```

2. **Initialize and install Express:**
   ```bash
   npm init -y
   npm install express
   ```

3. **Start the local server:**
   ```bash
   node server.js
   ```
   *The server will start running successfully on `http://localhost:3002`*

---

## 🔌 API Endpoints

### 1. Read All Students
* **Method:** `GET`
* **URL:** `http://localhost:3002/students`
* **Response (200 OK):**
  ```json
  [
    { "id": 1, "name": "Rahul", "age": 21, "course": "BCA" }
  ]
  ```

### 2. Read Student by ID
* **Method:** `GET`
* **URL:** `http://localhost:3002/students/1`

### 3. Create a Student
* **Method:** `POST`
* **URL:** `http://localhost:3002/students`
* **Request Body (JSON):**
  ```json
  {
    "name": "Amit",
    "age": 23,
    "course": "MCA"
  }
  ```

### 4. Update Student Details
* **Method:** `PUT`
* **URL:** `http://localhost:3002/students/1`
* **Request Body (JSON):**
  ```json
  {
    "name": "Rahul Sharma",
    "age": 22,
    "course": "MCA"
  }
  ```

### 5. Delete a Student
* **Method:** `DELETE`
* **URL:** `http://localhost:3002/students/1`
* **Response (200 OK):**
  ```json
  { "message": "Student deleted successfully" }
  ```

---

## 🧪 Testing the API
You can quickly test the `GET` endpoints directly in your web browser. For `POST`, `PUT`, and `DELETE` methods, use tools like **Postman** or the **Thunder Client** extension inside VS Code.
