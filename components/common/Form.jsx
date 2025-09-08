import React, { useState } from 'react';
import { generateAnimationData } from './BaseComponent';
import { UI_CONFIG } from '@/constants/config';

/**
 * Standardized Form Component
 * Provides consistent form structure and validation
 */
export const Form = ({ 
  className = '',
  children,
  onSubmit,
  animate = true,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'form';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form 
      className={`${baseClasses} ${className}`}
      data-anime={animationData}
      onSubmit={handleSubmit}
      {...props}
    >
      {children}
    </form>
  );
};

/**
 * Standardized Form Group Component
 * Provides consistent form group structure
 */
export const FormGroup = ({ 
  className = '',
  children,
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'form-group mb-3';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <div 
      className={`${baseClasses} ${className}`}
      data-anime={animationData}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Standardized Input Component
 * Provides consistent input structure
 */
export const Input = ({ 
  type = 'text',
  className = '',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  required = false,
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'form-control';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <input 
      type={type}
      className={`${baseClasses} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      data-anime={animationData}
      {...props}
    />
  );
};

/**
 * Standardized Textarea Component
 * Provides consistent textarea structure
 */
export const Textarea = ({ 
  className = '',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  required = false,
  rows = 4,
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'form-control';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <textarea 
      className={`${baseClasses} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      rows={rows}
      data-anime={animationData}
      {...props}
    />
  );
};

/**
 * Standardized Select Component
 * Provides consistent select structure
 */
export const Select = ({ 
  className = '',
  value,
  onChange,
  disabled = false,
  required = false,
  options = [],
  placeholder = 'Select an option',
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'form-select';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <select 
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      data-anime={animationData}
      {...props}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

/**
 * Standardized Label Component
 * Provides consistent label structure
 */
export const Label = ({ 
  className = '',
  children,
  htmlFor,
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'form-label';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <label 
      className={`${baseClasses} ${className}`}
      htmlFor={htmlFor}
      data-anime={animationData}
      {...props}
    >
      {children}
    </label>
  );
};

/**
 * Standardized Checkbox Component
 * Provides consistent checkbox structure
 */
export const Checkbox = ({ 
  className = '',
  checked = false,
  onChange,
  disabled = false,
  required = false,
  label,
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'form-check-input';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <div className="form-check">
      <input 
        type="checkbox"
        className={`${baseClasses} ${className}`}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        data-anime={animationData}
        {...props}
      />
      {label && (
        <label className="form-check-label" htmlFor={props.id}>
          {label}
        </label>
      )}
    </div>
  );
};

/**
 * Standardized Radio Component
 * Provides consistent radio structure
 */
export const Radio = ({ 
  className = '',
  checked = false,
  onChange,
  disabled = false,
  required = false,
  label,
  name,
  value,
  animate = false,
  animationConfig = {},
  ...props 
}) => {
  const baseClasses = 'form-check-input';
  const animationData = animate ? generateAnimationData(animationConfig) : undefined;

  return (
    <div className="form-check">
      <input 
        type="radio"
        className={`${baseClasses} ${className}`}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        data-anime={animationData}
        {...props}
      />
      {label && (
        <label className="form-check-label" htmlFor={props.id}>
          {label}
        </label>
      )}
    </div>
  );
};

/**
 * Standardized Form Validation Hook
 * Provides consistent form validation logic
 */
export const useFormValidation = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setValues(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate field on blur
    validateField(name, values[name]);
  };

  const validateField = (name, value) => {
    const rule = validationRules[name];
    if (rule) {
      const error = rule(value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(name => {
      const rule = validationRules[name];
      const error = rule(values[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setValues,
  };
};
