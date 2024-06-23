// src/components/EventRegistrationForm.js
import React from "react";
import useForm from "../Hooks/useForm";
import validate from "../Hooks/validateEvent";
import Input from "./Input";
import "../styles.css";

const EventRegistrationForm = () => {
  const initialState = {
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "No",
    guestName: "",
  };

  const { values, errors, submittedData, handleChange, handleSubmit } = useForm(
    initialState,
    validate,
    "eventRegistration"
  );

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>Event Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
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
            label="Age"
            name="age"
            type="number"
            value={values.age}
            onChange={handleChange}
            error={errors.age}
          />
          <Input
            label="Are you attending with a guest?"
            name="attendingWithGuest"
            type="select"
            value={values.attendingWithGuest}
            onChange={handleChange}
            options={["No", "Yes"]}
          />
          {values.attendingWithGuest === "Yes" && (
            <Input
              label="Guest Name"
              name="guestName"
              type="text"
              value={values.guestName}
              onChange={handleChange}
              error={errors.guestName}
            />
          )}
          <button className="submit-button" type="submit">Submit</button>
        </form>
        {submittedData && (
          <div className="submitted-data">
            <h2 className="">Submitted Data</h2>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventRegistrationForm;
