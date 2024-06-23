// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventRegistrationForm from './Components/EventRegistrationForm';
import JobApplicationForm from './Components/JobApplicationForm';
import SurveyForm from './Components/SurveyForm';
import FormSelector from './Components/FormSelector';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FormSelector />} />
          <Route path="/event-registration" element={<EventRegistrationForm />} />
          <Route path="/job-application" element={<JobApplicationForm />} />
          <Route path="/survey" element={<SurveyForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
