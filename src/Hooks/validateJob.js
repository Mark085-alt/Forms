const validate = (values) => {
    let errors = {};
  
    // Full Name validation
    if (!values.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
  
    // Email validation
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    // Phone Number validation
    if (!values.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (isNaN(values.phoneNumber)) {
      errors.phoneNumber = 'Phone Number must be a valid number';
    }
  
    // Applying for Position validation
    if (!values.applyingForPosition) {
      errors.applyingForPosition = 'Applying for Position is required';
    }
  
    // Relevant Experience validation
    if ((values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') && !values.relevantExperience.trim()) {
      errors.relevantExperience = 'Relevant Experience is required';
    } else if ((values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') && isNaN(values.relevantExperience)) {
      errors.relevantExperience = 'Relevant Experience must be a number';
    } else if ((values.applyingForPosition === 'Developer' || values.applyingForPosition === 'Designer') && Number(values.relevantExperience) <= 0) {
      errors.relevantExperience = 'Relevant Experience must be greater than 0';
    }
  
    // Portfolio URL validation
    if (values.applyingForPosition === 'Designer' && !values.portfolioURL.trim()) {
      errors.portfolioURL = 'Portfolio URL is required';
    } else if (values.applyingForPosition === 'Designer' && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioURL)) {
      errors.portfolioURL = 'Portfolio URL is invalid';
    }
  
    // Management Experience validation
    if (values.applyingForPosition === 'Manager' && !values.managementExperience.trim()) {
      errors.managementExperience = 'Management Experience is required';
    }
  
    // Additional Skills validation
    if (!values.additionalSkills || values.additionalSkills.length === 0) {
      errors.additionalSkills = 'At least one skill must be selected';
    }
  
    // Preferred Interview Time validation
    if (!values.preferredInterviewTime.trim()) {
      errors.preferredInterviewTime = 'Preferred Interview Time is required';
    }
  
    return errors;
  };
  
  export default validate;
  