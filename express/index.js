const express = require('express');
const app = express();
app.use(express.json());

let courses = [
    {id:1, name: "java"},
    {id:2, name: "javascript"},
    {id:3, name: "python"},
];
app.get('/courses',(req,res)=>{
    res.json(courses);
});

app.post('/courses', (req, res) => {
    console.log(req.body)
    let newCourse = { id: courses.length+1, name: req.body.name };
    courses.push(newCourse);
    res.send(courses);
});

app.put('/courses', (req, res) => {
    const courseId = parseInt(req.body.id);
    const updatedData = req.body;

    const course = courses.find(c => c.id === courseId);
    course.name = updatedData.name || course.name;

    res.json({ data: course });
});

app.delete('/courses', (req, res) => {
    const courseId = parseInt(req.body.id);

    const courseIndex = courses.findIndex(c => c.id === courseId);

    courses.splice(courseIndex, 1);

    res.json({ data: courses });
});
const PORT = 3000;
app.listen(PORT, () => {app.put('/courses', (req, res) => {
    courses = courses.map(course => {
        course.id += 5;
        return course;
    });
    res.json(courses);
});

    console.log(`Server is running on http://localhost:${PORT}`);
});

