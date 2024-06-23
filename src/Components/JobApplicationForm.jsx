import React from 'react';
import useForm from '../Hooks/useForm';
import validate from '../Hooks/validateJob';
import Input from './Input';
import '../styles.css';

const JobApplicationForm = () => {
  const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    applyingForPosition: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: ''
  };

  const { values, errors, submittedData, handleChange, handleSubmit } = useForm(initialState, validate);

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="form-title">Job Application Form</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={values.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
          />
          <div className="form-group">
            <label className="form-label">Applying for Position</label>
            <select
              className="form-input"
              name="applyingForPosition"
              value={values.applyingForPosition}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.applyingForPosition && <p className="error-message">{errors.applyingForPosition}</p>}
          </div>
          {(values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') && (
            <Input
              label="Relevant Experience (years)"
              name="relevantExperience"
              type="number"
              value={values.relevantExperience}
              onChange={handleChange}
              error={errors.relevantExperience}
            />
          )}
          {values.applyingForPosition === 'Designer' && (
            <Input
              label="Portfolio URL"
              name="portfolioURL"
              type="text"
              value={values.portfolioURL}
              onChange={handleChange}
              error={errors.portfolioURL}
            />
          )}
          {values.applyingForPosition === 'Manager' && (
            <Input
              label="Management Experience"
              name="managementExperience"
              type="text"
              value={values.managementExperience}
              onChange={handleChange}
              error={errors.managementExperience}
            />
          )}
          <div className="form-group">
            <label className="form-label">Additional Skills</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="additionalSkills"
                  value="JavaScript"
                  checked={values.additionalSkills.includes('JavaScript')}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                JavaScript
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="additionalSkills"
                  value="CSS"
                  checked={values.additionalSkills.includes('CSS')}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                CSS
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="additionalSkills"
                  value="Python"
                  checked={values.additionalSkills.includes('Python')}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                Python
              </label>
              {/* Add more skills as needed */}
            </div>
            {errors.additionalSkills && <p className="error-message">{errors.additionalSkills}</p>}
          </div>
          <Input
            label="Preferred Interview Time"
            name="preferredInterviewTime"
            type="datetime-local"
            value={values.preferredInterviewTime}
            onChange={handleChange}
            error={errors.preferredInterviewTime}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {submittedData && (
          <div className="submitted-data">
            <h2>Submitted Data</h2>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplicationForm;
