import React from "react";
import { render } from 'react-dom';
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import TextFormField from './components/FormFields/TextFormField';


const schema = yup.object({
  username: yup
    .string()
    .required()
    .min(3),
  email: yup.string().email().required()
});

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 200, margin: "auto" }}>
        <Formik
          validationSchema={schema}
          initialValues={{ username: "", email: "" }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <div>
                <Field
                  label="Username"
                  name="username"
                  component={TextFormField}
                />
              </div>
               <div>
                <Field
                  label="Email"
                  name="email"
                  component={TextFormField}
                />
              </div>
             
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;

render(<App />, document.getElementById('root'));
