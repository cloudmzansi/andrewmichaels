// Form utilities for the application

export const formValidation = {
  // Email validation
  isValidEmail: email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Phone validation
  isValidPhone: phone => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  // Required field validation
  isRequired: value => {
    return value && value.trim().length > 0;
  },

  // Minimum length validation
  hasMinLength: (value, minLength) => {
    return value && value.length >= minLength;
  },

  // Maximum length validation
  hasMaxLength: (value, maxLength) => {
    return value && value.length <= maxLength;
  },
};

export const formHelpers = {
  // Get form data as object
  getFormData: formElement => {
    const formData = new FormData(formElement);
    const data = {};

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    return data;
  },

  // Reset form
  resetForm: formElement => {
    formElement.reset();
  },

  // Set form field value
  setFieldValue: (formElement, fieldName, value) => {
    const field = formElement.elements[fieldName];
    if (field) {
      field.value = value;
    }
  },

  // Get form field value
  getFieldValue: (formElement, fieldName) => {
    const field = formElement.elements[fieldName];
    return field ? field.value : '';
  },
};

export const formStyles = {
  // Input styles
  input: {
    width: '100%',
    padding: 'var(--space-sm)',
    border: 'var(--border-thickness) solid var(--border-and-outline)',
    borderRadius: 'var(--border-radius)',
    backgroundColor: 'var(--background-primary)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    fontFamily: 'Inter, sans-serif',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Textarea styles
  textarea: {
    width: '100%',
    padding: 'var(--space-sm)',
    border: 'var(--border-thickness) solid var(--border-and-outline)',
    borderRadius: 'var(--border-radius)',
    backgroundColor: 'var(--background-primary)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    fontFamily: 'Inter, sans-serif',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Label styles
  label: {
    display: 'block',
    marginBottom: 'var(--space-xs)',
    fontWeight: '600',
    color: 'var(--text-primary)',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  // Form group styles
  formGroup: {
    marginBottom: 'var(--space-md)',
  },

  // Error message styles
  error: {
    color: 'var(--accent-red)',
    fontSize: '0.875rem',
    marginTop: 'var(--space-xs)',
    fontWeight: '500',
  },

  // Success message styles
  success: {
    color: 'var(--accent-green)',
    fontSize: '0.875rem',
    marginTop: 'var(--space-xs)',
    fontWeight: '500',
  },
};

export const getFormFieldStyles = (type = 'input', hasError = false) => {
  const baseStyles =
    type === 'textarea' ? formStyles.textarea : formStyles.input;

  return {
    ...baseStyles,
    ...(hasError && {
      borderColor: 'var(--accent-red)',
      boxShadow: '0 0 0 1px var(--accent-red)',
    }),
  };
};
