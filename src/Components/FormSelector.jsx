// src/components/FormSelector.js
import React from 'react';
import { Link } from 'react-router-dom';

const FormSelector = () => {
  return (
    <div>
      <h1>Select a Form</h1>
      <ul>
        <li><Link to="/event-registration">Event Registration Form</Link></li>
        <li><Link to="/job-application">Job Application Form</Link></li>
        <li><Link to="/survey">Survey Form</Link></li>
      </ul>
    </div>
  );
};

export default FormSelector;
