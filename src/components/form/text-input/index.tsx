import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldProps } from 'formik';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = FieldProps & InputProps & { label?: string };

const TextInput: React.FC<Props> = ({ field, form, label, ...props }) => {
  const error = form.errors[field.name];
  
  return (
    <div className="text-input">
      {!!label && !!props.id && (
        <label htmlFor={props.id} className="text-input__label">
          {label}
        </label>
      )}
      
      <input {...field} {...props}/>
      
      {!!error && (
        <div className="text-input__error">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
