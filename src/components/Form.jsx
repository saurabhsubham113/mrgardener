import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { setUserDetail } from "../redux/features/userSlice";
import Input from "./Input";

const PhoneReg = /^[0]?[6789]\d{9}$/;
const PincodeReg = /^[1-9][0-9]{5}$/;

const CheckoutSchema = Yup.object().shape({
  firstName: Yup.string().required("first name is required"),
  lastName: Yup.string().required("last name is required"),
  mobile: Yup.string()
    .matches(PhoneReg, "enter a valid mobile no.")
    .required("mobile no. is required"),
  email: Yup.string()
    .email("enter a valid email")
    .required("email is required"),
  address1: Yup.string().required("address 1 is required"),
  address2: Yup.string().required("address 2 is required"),
  landMark: Yup.string().notRequired(),
  pincode: Yup.string()
    .matches(PincodeReg, "Enter a valid pin code")
    .required("Pin code is required"),
});

const FormComponent = ({ order }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        address1: "",
        address2: "",
        landMark: "",
        pincode: "",
      }}
      validationSchema={CheckoutSchema}
      onSubmit={(values) => {
        order(values);
      }}>
      {({ errors, touched }) => (
        <Form>
          <div className="grid md:grid-cols-2 md:gap-6">
            {/**********************  First Name ********************************/}
            <Input
              name="firstName"
              id="floating_first_name"
              errors={errors.firstName}
              touched={touched.firstName}
              label="First Name*"
            />
            {/**********************  Last Name ********************************/}
            <Input
              name="lastName"
              id="floating_last_name"
              errors={errors.lastName}
              touched={touched.lastName}
              label="Last Name*"
            />
            {/**********************  Mobile ********************************/}
            <Input
              name="mobile"
              id="floating_mobile"
              type="tel"
              errors={errors.mobile}
              touched={touched.mobile}
              label="Mobile No.*"
            />
            {/**********************  Email ********************************/}
            <Input
              name="email"
              id="floating_email"
              type="email"
              errors={errors.email}
              touched={touched.email}
              label="Email*"
            />
            {/**********************  Address 1 ********************************/}
            <Input
              name="address1"
              id="floating_address1"
              maxLength={50}
              errors={errors.address1}
              touched={touched.address1}
              label="Address 1*"
            />
            {/**********************  Address 2 ********************************/}
            <Input
              name="address2"
              id="floating_address2"
              errors={errors.address2}
              touched={touched.address2}
              label="Address 2*"
            />
            {/**********************  Landmark  ********************************/}
            <Input
              name="landMark"
              id="floating_landmark"
              errors={errors.landMark}
              touched={touched.landMark}
              label="LandMark (if any)"
            />
            {/**********************  Pin code  ********************************/}
            <Input
              name="pincode"
              id="floating_pincode"
              errors={errors.pincode}
              touched={touched.pincode}
              label="Pin Code*"
            />
          </div>
          <button
            type="submit"
            // disabled={submitting || pristine}
            className="disabled:bg-slate-400 text-white bg-darkGreen hover:bg-darkGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Checkout
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
