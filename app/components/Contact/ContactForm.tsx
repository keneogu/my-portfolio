import React from "react";
import { FormikProps } from "formik";
import Input from "./Input";
import Textarea from "./Textarea";

export interface IContact {
  name: string;
  email: string;
  message: string;
}

export interface IContactForm {
  formik: FormikProps<IContact>;
}

const ContactForm: React.FC<IContactForm> = ({ formik }) => {
  return (
    <div className="w-full">
      <Input
        labelName="Name"
        placeholder="Please enter your name"
        style="mb-3"
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors}
        touched={formik.touched}
      />
      <Input
        labelName="Email"
        placeholder="your email..."
        style="mb-3"
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors}
        touched={formik.touched}
      />
      <Textarea
        labelName="Messages"
        name="message"
        id="message"
        cols={40}
        rows={10}
        placeholder="Messages..."
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.errors}
        touched={formik.touched}
      />
    </div>
  );
};

export default ContactForm;
