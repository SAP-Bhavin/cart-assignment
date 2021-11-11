import { Button, Col, Container, Row } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

let Signup = () => {
    let initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
        validationSchema = Yup.object().shape({
            firstName: Yup.string()
                .required('First Name is required'),
            lastName: Yup.string()
                .required('Last Name is required'),
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required')
        });
    return (
        <Container className="mt-2 mb-2">
            <Row>
                <Col md={4} lg={4} xs={12} sm={12} className="auth-content">
                    <h3>Signup</h3>
                    <p>We do not share personal detail anywhere</p>
                </Col>
                <Col md={4} lg={4} xs={12} sm={12}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={fields => { alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4)) }} render={({ errors, status, touched }) => (
                        <Form className="sign-up-form">
                            <div className="form-group form-floating">
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} placeholder="Enter First Name" />
                                <label htmlFor="firstName">First Name</label>
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group form-floating">
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} placeholder="Enter Last Name" />
                                <label htmlFor="lastName">Last Name</label>
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group form-floating">
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="Enter Email" />
                                <label htmlFor="email">Email</label>
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group form-floating">
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Enter Password" />
                                <label htmlFor="password">Password</label>
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group form-floating">
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} placeholder="Enter Confirm Password" />
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group mt-1 d-grid gap-2">
                                {/*  <button type="submit" className="btn btn-primary" size="lg">Signup</button> */}
                                <Button variant="danger" size="lg" type="submit">
                                    Signup
                                </Button>
                            </div>
                        </Form>
                    )}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;