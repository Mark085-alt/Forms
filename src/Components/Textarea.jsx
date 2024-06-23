import React from 'react';

const Textarea = ({ label, name, value, onChange, error }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <textarea
      className="form-textarea"
      name={name}
      value={value}
      onChange={onChange}
    />
    {error && <p className="error-message">{error}</p>}
  </div>
);

export default Textarea;
