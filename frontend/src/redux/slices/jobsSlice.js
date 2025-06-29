import { createSlice } from '@reduxjs/toolkit';

//These dummy jobs to be deleted

const initialState = {
  jobsList: [

  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechFlow SA',
    location: 'Cape Town',
    salary: 'R40,000/mo',
    type: 'Full-time',
    posted: '2025-06-20'
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CodeBase Inc.',
    location: 'Johannesburg',
    salary: 'R50,000/mo',
    type: 'Full-time',
    posted: '2025-06-18'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Pixel Studio',
    location: 'Durban',
    salary: 'R35,000/mo',
    type: 'Contract',
    posted: '2025-06-15'
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Insight Analytics',
    location: 'Pretoria',
    salary: 'R45,000/mo',
    type: 'Remote',
    posted: '2025-06-12'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudBridge',
    location: 'Cape Town',
    salary: 'R55,000/mo',
    type: 'Full-time',
    posted: '2025-06-10'
  },
  {
    id: 6,
    title: 'QA Tester',
    company: 'BugSplat',
    location: 'Bloemfontein',
    salary: 'R30,000/mo',
    type: 'Part-time',
    posted: '2025-06-08'
  },
  {
    id: 7,
    title: 'Mobile App Developer',
    company: 'Appify',
    location: 'Johannesburg',
    salary: 'R48,000/mo',
    type: 'Full-time',
    posted: '2025-06-05'
  },
  {
    id: 8,
    title: 'Systems Administrator',
    company: 'SysServe',
    location: 'Polokwane',
    salary: 'R42,000/mo',
    type: 'Contract',
    posted: '2025-06-03'
  },
  {
    id: 9,
    title: 'Cybersecurity Analyst',
    company: 'SecureNow',
    location: 'Kimberley',
    salary: 'R60,000/mo',
    type: 'Remote',
    posted: '2025-06-01'
  },
  {
    id: 10,
    title: 'Junior Software Engineer',
    company: 'StartTech',
    location: 'Nelspruit',
    salary: 'R28,000/mo',
    type: 'Internship',
    posted: '2025-05-29'
  }

  ]
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobsList = action.payload;
    },
  },
});

export const { setJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
