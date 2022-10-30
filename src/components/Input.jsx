import React from "react";
import { Field } from "formik";

const Input = ({ name, id, label, errors, touched, ...rest }) => (
  <div className="relative z-0 mb-4 w-full group">
    <Field
      name={name}
      id={id}
      placeholder=" "
      data-np-invisible="1"
      data-np-checked="1"
      {...rest}
      className={`${
        errors && touched ? "border-red-600 focus:border-red-600" : "focus:border-blue-600"
      } block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer`}
    />
    <label
      htmlFor={id}
      className={`${
        errors && touched ? "peer-focus:text-red-600" : "peer-focus:text-blue-600"
      } peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>
      {label}
    </label>
    {errors && touched && (
      <span className="text-sm fixed m-0 p-0 mt-1 text-red-500">{errors}</span>
    )}
  </div>
);

export default Input;
