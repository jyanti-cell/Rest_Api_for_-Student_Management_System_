const express = require("express");
const app = express();

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Rahul",
    age: 21,
    course: "BCA"
  }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id == id);
  res.json(student);
});

app.post('/students', (req, res) => {
  const nextId = students.length > 0 ? students[students.length - 1].id + 1 : 1;

  const newStudent = {
    id: nextId,
    name: req.body.name,
    age: Number(req.body.age),
    course: req.body.course
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id == id);

  student.name = req.body.name;
  student.age = Number(req.body.age);
  student.course = req.body.course;

  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  students = students.filter(s => s.id != id);
  res.json({ message: "Student deleted successfully" });
});

app.listen(3002, () => {
  console.log("Server is running on 3002");
});