import { Button, Col, Container, Row } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

let Signup = () => {
    let initialValues = { email: '', password: '' },
        validationSchema = Yup.object().shape({ email: Yup.string().email('Email is invalid').required('Email is required'), password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'), });
    return (
        <Container className="mt-2 mb-2">
            <Row>
                <Col md={4} lg={4} xs={12} sm={12} className="auth-content">
                    <h3>Login</h3>
                    <p>Get access to your Orders, Whishlist and Recommendations</p>
                </Col>
                <Col md={4} lg={4} xs={12} sm={12}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={fields => { alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4)) }} render={({ errors, status, touched }) => (
                        <Form className="sign-up-form">
                            <div className="form-group form-floating">
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="Enter Email" />
                                <label htmlFor="email">Email</label>
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group form-floating">
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Password" />
                                <label htmlFor="password">Password</label>
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group mt-1 d-grid gap-2">
                                <Button variant="danger" size="lg" type="submit">
                                    Login
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