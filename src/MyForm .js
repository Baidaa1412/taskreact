import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  email: '',
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const MyForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
