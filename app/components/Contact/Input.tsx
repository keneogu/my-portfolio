import React from 'react';
export interface IInput {
  labelName?: string;
  placeholder?: string;
  className?: string;
  style?: string;
  type?: string;
  required?: boolean;
  name: string;
  value: string | number;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  error?: {
    [field: string]: any;
  };
  touched?: {
    [key: string]: any;
  };
}

const Input: React.FC<IInput> = ({
  labelName,
  placeholder,
  className,
  style,
  type,
  required,
  name,
  value,
  onFocus,
  onBlur,
  onChange,
  onKeyUp,
  disabled,
  autoFocus,
  error,
  touched,
}) => {
  return (
    <div className={`w-full ${style}`}>
      <label className="block mb-2 text-base font-normal">
        {labelName}
      </label>
      <input
        type={type}
        className={`bg-white border border-light-red text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 ${className}`}
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onKeyUp={onKeyUp}
        disabled={disabled}
        autoFocus={autoFocus}
      />
      {error && error[name] && touched && touched[name] && (
        <p className="mt-2 text-base font-normal text-red">{error[name]}</p>
      )}
    </div>
  );
};

export default Input;
