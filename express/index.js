const express = require('express');
const app = express();
app.use(express.json());
app.use(middleware);
app.use(logger);
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

app.put('/courses/:id', (req, res) => {
    try{
        let singleCourse = courses.find(course => course.id === ++req.params.id);
        if(singleCourse){
            res.status(404).send('Course does not exist');
        }
        singleCourse.name = req.body.name;
        res.send(singleCourse);
    }catch(err){
        res.status(500).send(err);
    }

});

app.delete('/courses', (req, res) => {
    const courseId = parseInt(req.body.id);

    const courseIndex = courses.findIndex(c => c.id === courseId);

    courses.splice(courseIndex, 1);

    res.json({ data: courses });
});

function middleware(req, res, next) {
    console.log("called middleware");
    next();
}
function logger(req, res, next) {
    const method = req.method;
    const ip = req.ip;
    const hostname = req.hostname;
    const date = new Date().toISOString();
    console.log(`${method} request from ${ip}  hostname: ${hostname} at Date : ${date} `);
    next();
}
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

