import React from 'react';

const Input = ({ label, name, type, value, onChange, error, options }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {type === 'select' ? (
        <select className="form-input" name={name} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input className="form-input" type={type} name={name} value={value} onChange={onChange} />
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;

