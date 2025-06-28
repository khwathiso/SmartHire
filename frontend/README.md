# Applicant Tracking System (ATS) - Frontend

This is the **frontend** application for the Applicant Tracking System (ATS), designed to meet South African standards.  
The frontend is built with **React**, uses **standard CSS** with a dark theme (black, purple, white accents), and manages state with **Redux Toolkit**.

---

## Features

- Dark-themed UI with black background, purple primary color, and white text accents
- Modular and maintainable CSS, with styles split per component and page
- Job listings page displaying available job posts
- Job details page with more information about a selected job
- Application form for candidates to apply for jobs
- Client-side routing with React Router DOM
- Redux Toolkit for state management of jobs and applicants

---

## Tech Stack

- React (created with Create React App)
- Redux Toolkit and React-Redux
- React Router DOM
- Standard CSS (no CSS frameworks)
- JavaScript (ES6+)

---

## Project Structure
ats-frontend/
│
├── public/ # Static files (index.html)
│
├── src/
│ ├── components/ # Reusable UI components (Button, Header, JobCard, etc.)
│ ├── pages/ # Page components (Home, JobDetails, ApplicationForm)
│ ├── redux/ # Redux store setup and slices (jobs, applicants)
│ ├── styles/ # CSS files (global styles and theme variables)
│ ├── App.jsx # Main app component with routing
│ └── index.js # React entry point with Redux Provider
│
├── .gitignore # Git ignore file
├── package.json # Project dependencies and scripts
├── package-lock.json # Exact dependency versions
└── README.md # This file

