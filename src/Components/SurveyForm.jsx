import React, { useEffect } from "react";
import Input from "./Input";
import useForm from "../Hooks/useForm";
import validate from "../Hooks/validateSurvey";
import "../styles.css";

const SurveyForm = () => {
  const initialState = {
    fullName: "",
    email: "",
    surveyTopic: "",
    technologySection: {
      favoriteProgrammingLanguage: "",
      yearsOfExperience: "",
    },
    healthSection: {
      exerciseFrequency: "",
      dietPreference: "",
    },
    educationSection: {
      highestQualification: "",
      fieldOfStudy: "",
    },
    feedback: "",
  };

  const { values, errors, submittedData, handleChange, handleSubmit } = useForm(
    initialState,
    validate
  );

  useEffect(() => {
    const fetchAdditionalQuestions = (topic) => {
      let questions = [];
      if (topic === "Technology") {
        questions = [
          "Do you prefer front-end or back-end development?",
          "What is your favorite IDE?",
        ];
      } else if (topic === "Health") {
        questions = [
          "How many hours do you sleep per night?",
          "Do you practice any sports?",
        ];
      } else if (topic === "Education") {
        questions = [
          "Was your education helpful in your career?",
          "What was your favorite subject?",
        ];
      }

      console.log("Fetching additional questions for topic:", topic);
    };

    if (values.surveyTopic) {
      fetchAdditionalQuestions(values.surveyTopic);
    }
  }, [values.surveyTopic]);

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="form-title">Survey Form</h1>
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
          <div className="form-group">
            <label className="form-label">Survey Topic</label>
            <select
              className="form-input"
              name="surveyTopic"
              value={values.surveyTopic}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && (
              <p className="error-message">{errors.surveyTopic}</p>
            )}
          </div>

          {values.surveyTopic === "Technology" && (
            <div>
              <Input
                label="Favorite Programming Language"
                name="favoriteProgrammingLanguage"
                type="select"
                value={values.technologySection.favoriteProgrammingLanguage}
                onChange={handleChange}
                options={["JavaScript", "Python", "Java", "C#"]}
                error={errors.favoriteProgrammingLanguage}
              />
              <Input
                label="Years of Experience"
                name="yearsOfExperience"
                type="number"
                value={values.technologySection.yearsOfExperience}
                onChange={handleChange}
                error={errors.yearsOfExperience}
              />
            </div>
          )}

          {values.surveyTopic === "Health" && (
            <div>
              <Input
                label="Exercise Frequency"
                name="exerciseFrequency"
                type="select"
                value={values.healthSection.exerciseFrequency}
                onChange={handleChange}
                options={["Daily", "Weekly", "Monthly", "Rarely"]}
                error={errors.exerciseFrequency}
              />
              <Input
                label="Diet Preference"
                name="dietPreference"
                type="select"
                value={values.healthSection.dietPreference}
                onChange={handleChange}
                options={["Vegetarian", "Vegan", "Non-Vegetarian"]}
                error={errors.dietPreference}
              />
            </div>
          )}

          {values.surveyTopic === "Education" && (
            <div>
              <Input
                label="Highest Qualification"
                name="highestQualification"
                type="select"
                value={values.educationSection.highestQualification}
                onChange={handleChange}
                options={["High School", "Bachelor's", "Master's", "PhD"]}
                error={errors.highestQualification}
              />
              <Input
                label="Field of Study"
                name="fieldOfStudy"
                type="text"
                value={values.educationSection.fieldOfStudy}
                onChange={handleChange}
                error={errors.fieldOfStudy}
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Feedback</label>
            <textarea
              className="form-input"
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
              rows="4"
            ></textarea>
            {errors.feedback && (
              <p className="error-message">{errors.feedback}</p>
            )}
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="submitted-data">
            <h2 className="submitted-title">Submitted Data</h2>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyForm;
