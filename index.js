const express = require('express');
const path = require('path');
const coursesData = require('./data/courses.json');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Home Page
app.get('/', (req, res) => {
    res.render('index', { courses: coursesData });
});

// Course Detail Page
app.get('/course/:id', (req, res) => {
    const course = coursesData[req.params.id];
    if (course) {
        res.render('course-detail', { course });
    } else {
        res.status(404).send('Course not found');
    }
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = app; // Required for Vercel
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));