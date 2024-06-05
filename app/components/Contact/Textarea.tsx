import React from "react";
export interface IInput {
  id: string;
  rows: number;
  cols: number;
  labelName?: string;
  placeholder?: string;
  className?: string;
  style?: string;
  required?: boolean;
  name: string;
  value: string | number;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  error?: {
    [field: string]: any;
  };
  touched?: {
    [key: string]: any;
  };
}

const Textarea: React.FC<IInput> = ({
  id,
  rows,
  cols,
  labelName,
  placeholder,
  className,
  style,
  required,
  name,
  value,
  onFocus,
  onChange,
  disabled,
  autoFocus,
  error,
  touched,
}) => {
  return (
    <div className={`w-full ${style}`}>
      <label className="block mb-2 text-base font-normal">{labelName}</label>
      <textarea
        id={id}
        className={`bg-white border border-light-red text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 ${className}`}
        placeholder={placeholder}
        required={required}
        name={name}
        rows={rows}
        cols={cols}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
      ></textarea>
      {error && error[name] && touched && touched[name] && (
        <p className="mt-2 text-base font-normal text-red">{error[name]}</p>
      )}
    </div>
  );
};

export default Textarea;
