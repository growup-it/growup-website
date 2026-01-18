const express = require('express');
const path = require('path');
const coursesData = require('./data/courses.json');

const app = express();

// MANDATORY FIX FOR VERCEL PATH RESOLUTION
app.set('views', path.join(__dirname, 'views'));
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

// Contact Page
app.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = app;