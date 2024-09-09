
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

export default function Registration() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
    
  return (
    <div className='registration-form-container'>
    <div className="registration-form">
      <h1>Register</h1>
      <Formik
          initialValues={{
            organizationType: '',
            subOrganizationType: '',
            firstName: '',
            lastName: '',
            organizationName: '',
            gender: '',
            contactNumber: '',
            state: '',
            district: '',
            address: '',
            pincode: '',
            mobileNumber: '',
            email: '',
            establishmentCopy: null,
            headOfOrganization: '',
            orgAddress: '',
            orgContactNumber: '',
            orgEmailID: '',
            coordinatorName: '',
            coordinatorContactNumber: '',
            coordinatorEmailID: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.organizationType) errors.organizationType = 'Required';
            if (!values.lastName) errors.lastName = 'Required';
            if (!values.organizationName) errors.organizationName = 'Required';
            if (!values.contactNumber) errors.contactNumber = 'Required';
            if (!values.mobileNumber) errors.mobileNumber = 'Required';
            if (!values.email) errors.email = 'Required';
            if (!values.establishmentCopy) errors.establishmentCopy = 'Required';
            if (!values.headOfOrganization) errors.headOfOrganization = 'Required';
            if (!values.orgContactNumber) errors.orgContactNumber = 'Required';
            if (!values.orgEmailID) errors.orgEmailID = 'Required';
            if (!values.coordinatorName) errors.coordinatorName = 'Required';
            if (!values.coordinatorContactNumber) errors.coordinatorContactNumber = 'Required';
            if (!values.coordinatorEmailID) errors.coordinatorEmailID = 'Required';

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
              formData.append(key, values[key]);
            });
          
            // Retrieve JWT token from local storage
            const token = localStorage.getItem('token');
          
            axios.post('http://localhost:4001/register', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`, // Send JWT token
              },
            })
            .then((response) => {
              console.log('Success:', response.data);
              alert('Registration successful!');
            })
            .catch((error) => {
              console.error('Error:', error);
            })
            .finally(() => {
              setSubmitting(false);
            });
          }}
          
        >
          {({ isSubmitting, errors, touched, setFieldValue }) => (
            <Form>
              {step === 1 && (
                <>
                  <h2>Basic Registration</h2>
                  <div className="form-group">
                    <label>Organization Type:</label>
                    <Field
                      as="select"
                      name="organizationType"
                      className={`form-control ${errors.organizationType && touched.organizationType ? 'error' : ''}`}
                    >
                      <option value="">Select Organization Type</option>
                      <option value="Govt">Govt. Organisations</option>
                      <option value="Private">Private Organisations</option>
                      <option value="NonProfit">Non-Profit Non-Govt. Organisations</option>
                      <option value="Individual">Individual</option>
                      <option value="Autonomous">Autonomous Body</option>
                    </Field>
                    <ErrorMessage name="organizationType" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="subOrganizationType"
                      placeholder={errors.subOrganizationType && touched.subOrganizationType ? errors.subOrganizationType : 'Sub Organization Type'}
                      className={`form-control ${errors.subOrganizationType && touched.subOrganizationType ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder={errors.firstName && touched.firstName ? errors.firstName : 'First Name'}
                      className={`form-control ${errors.firstName && touched.firstName ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder={errors.lastName && touched.lastName ? errors.lastName : 'Last Name'}
                      className={`form-control ${errors.lastName && touched.lastName ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="organizationName"
                      placeholder={errors.organizationName && touched.organizationName ? errors.organizationName : 'Organization Name'}
                      className={`form-control ${errors.organizationName && touched.organizationName ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="gender"
                      placeholder={errors.gender && touched.gender ? errors.gender : 'Gender of the Owner'}
                      className={`form-control ${errors.gender && touched.gender ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="contactNumber"
                      placeholder={errors.contactNumber && touched.contactNumber ? errors.contactNumber : 'Contact Number'}
                      className={`form-control ${errors.contactNumber && touched.contactNumber ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="state"
                      placeholder={errors.state && touched.state ? errors.state : 'State'}
                      className={`form-control ${errors.state && touched.state ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="district"
                      placeholder={errors.district && touched.district ? errors.district : 'District'}
                      className={`form-control ${errors.district && touched.district ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="address"
                      placeholder={errors.address && touched.address ? errors.address : 'Address'}
                      className={`form-control ${errors.address && touched.address ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="pincode"
                      placeholder={errors.pincode && touched.pincode ? errors.pincode : 'Pincode'}
                      className={`form-control ${errors.pincode && touched.pincode ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="mobileNumber"
                      placeholder={errors.mobileNumber && touched.mobileNumber ? errors.mobileNumber : 'Mobile Number'}
                      className={`form-control ${errors.mobileNumber && touched.mobileNumber ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      placeholder={errors.email && touched.email ? errors.email : 'Email'}
                      className={`form-control ${errors.email && touched.email ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <label>Copy of Establishment:</label>
                    <input
                      type="file"
                      name="establishmentCopy"
                      onChange={(event) => {
                        setFieldValue('establishmentCopy', event.currentTarget.files[0]);
                      }}
                    />
                    <ErrorMessage name="establishmentCopy" component="div" className="error-message" />
                  </div>

                  <button type="button" onClick={nextStep}>Next</button>
                </>
              )}

              {step === 2 && (
                <>
                  <h2>Organization Details</h2>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="headOfOrganization"
                      placeholder={errors.headOfOrganization && touched.headOfOrganization ? errors.headOfOrganization : 'Head of the Organization'}
                      className={`form-control ${errors.headOfOrganization && touched.headOfOrganization ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="orgAddress"
                      placeholder={errors.orgAddress && touched.orgAddress ? errors.orgAddress : 'Address'}
                      className={`form-control ${errors.orgAddress && touched.orgAddress ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="orgContactNumber"
                      placeholder={errors.orgContactNumber && touched.orgContactNumber ? errors.orgContactNumber : 'Organization Contact Number'}
                      className={`form-control ${errors.orgContactNumber && touched.orgContactNumber ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="email"
                      name="orgEmailID"
                      placeholder={errors.orgEmailID && touched.orgEmailID ? errors.orgEmailID : 'Email ID'}
                      className={`form-control ${errors.orgEmailID && touched.orgEmailID ? 'error' : ''}`}
                    />
                  </div>

                  <button type="button" onClick={prevStep}>Back</button>
                  <button type="button" onClick={nextStep}>Next</button>
                </>
              )}

              {step === 3 && (
                <>
                  <h2>Project Details</h2>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="coordinatorName"
                      placeholder={errors.coordinatorName && touched.coordinatorName ? errors.coordinatorName : 'Programme Coordinator'}
                      className={`form-control ${errors.coordinatorName && touched.coordinatorName ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="coordinatorContactNumber"
                      placeholder={errors.coordinatorContactNumber && touched.coordinatorContactNumber ? errors.coordinatorContactNumber : 'Contact Number'}
                      className={`form-control ${errors.coordinatorContactNumber && touched.coordinatorContactNumber ? 'error' : ''}`}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="email"
                      name="coordinatorEmailID"
                      placeholder={errors.coordinatorEmailID && touched.coordinatorEmailID ? errors.coordinatorEmailID : 'Email ID'}
                      className={`form-control ${errors.coordinatorEmailID && touched.coordinatorEmailID ? 'error' : ''}`}
                    />
                  </div>

                  <button type="button" onClick={prevStep}>Back</button>
                  <button type="submit" disabled={isSubmitting}>Submit</button>
                </>
              )}
            </Form>
          )}
        </Formik>
    </div>
    </div>
  );
}
           