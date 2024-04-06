import React, { useEffect, useState } from 'react'
import { Card, Form, Input, Button, Checkbox, Row, Col, Alert } from 'antd';
import { GoogleOutlined, GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import usecustomStyles from '../../Common/customStyles';
import { Facebook } from 'lucide-react';
import ParticleAuth from '../../Common/ParticleAuth';
import { useFormik } from 'formik';
import styled from 'styled-components';

// actions
import { loginUser, socialLogin, resetLoginFlag } from "../../slices/thunk";
import { useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import withRouter from '../../Common/withRouter';
import { Link } from 'react-router-dom';

const customStyles = usecustomStyles();

const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const Signin = (props) => {

    // page title
    document.title = "Sign In" + process.env.REACT_APP_PAGE_TITLE;

    const dispatch = useDispatch();
    const selectAccountAndLogin = createSelector(
        (state) => state.Account,
        (state) => state.Login,
        (account, login) => ({
            user: account.user,
            error: login.error,
            loading: login.loading,
            errorMsg: login.errorMsg,
        })
    );

    const { user, error, loading, errorMsg } = useSelector(selectAccountAndLogin);

    const [isLoading, setLoading] = useState(loading)

    const [userLogin, setUserLogin] = useState([]);

    useEffect(() => {
        if (user && user) {
            const updatedUserData = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.email;
            const updatedUserPassword = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? "" : user.password;
            setUserLogin({
                email: updatedUserData,
                password: updatedUserPassword
            });
        }
    }, [user]);

    // Validation

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "admin@themesbrand.com" || '',
            password: userLogin.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(loginUser(values, props.router.navigate));
            setLoading(true)
        }
    });

    const signIn = (type) => {
        dispatch(socialLogin(type, props.router.navigate));
    };

    //for facebook and google authentication
    const socialResponse = (type) => {
        signIn(type);
    };

    useEffect(() => {
        if (errorMsg) {
            setTimeout(() => {
                dispatch(resetLoginFlag());
            }, 3000);
        }
    }, [dispatch, errorMsg]);

    return (
        <React.Fragment>
            <StyleWrapper className="auth-page-wrapper">
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} lg={14} >
                        <Card>
                            <Row gutter={[16, 24]}>
                                <ParticleAuth />
                                <Col xs={24} lg={12} >
                                    <div style={{ border: "0px" }}>
                                        <div className="text-center" style={{ margin: "20px" }}>
                                            <h5 style={{ fontSize: "20px", color: customStyles.colorPrimary }}>Welcome Back!</h5>
                                            <p>Sign in to continue to Lizant.</p>
                                        </div>
                                        <div style={{ marginTop: "30px", padding: "40px" }} >
                                            {error && error ? (<Alert type="error" message={error} ></Alert>) : null}
                                            <Form onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                            }}>
                                                <div>
                                                    <label style={{display:'block', marginBottom:'4px'}}>Username</label>
                                                    <Input
                                                        name="email"
                                                        style={{ margin: "10px 0px", boxShadow:'none', outline:'none' }}
                                                        type="email"
                                                        value={validation.values.email || ""}
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        onInvalid={validation.touched.email && validation.errors.email ? validation.touched.email : undefined}
                                                        status={validation.touched.email && validation.errors.email ? "error" : true} />
                                                    {validation.touched.email && validation.errors.email &&
                                                        <p style={{ color: customStyles.colorDanger }}>{validation.errors.email}</p>}
                                                </div>
                                                <div>
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <label style={{display:'block', marginBottom:'4px'}}>Password</label>
                                                        <Link to="/forgot-password" style={{fontSize:'11px'}}>Forgot password?</Link>
                                                    </div>
                                                    <Input.Password
                                                        name="password"
                                                        value={validation.values.password || ""}
                                                        onChange={validation.handleChange}
                                                        style={{boxShadow:'none', outline:'none' }}
                                                        onBlur={validation.handleBlur}
                                                        onInvalid={validation.touched.password && validation.errors.password ? validation.touched.password : undefined}
                                                        status={validation.touched.password && validation.errors.password ? "error" : true}
                                                    />
                                                    {validation.touched.password && validation.errors.password &&
                                                        <p style={{ color: customStyles.colorDanger }}>{validation.errors.password}</p>}
                                                </div>

                                                <Form.Item>
                                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                                        <Checkbox style={{marginTop:'10px'}}>Remember me</Checkbox>
                                                    </Form.Item>
                                                </Form.Item>
                                                <div>
                                                    <Button htmlType="submit" type='primary'
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            validation.handleSubmit();
                                                            return false;
                                                        }}
                                                        style={{ width: "100%" }} loading={isLoading}>
                                                        {" "}  Sign In
                                                    </Button>
                                                </div>

                                                <div style={{ paddingTop: "18px" }} className="text-center">
                                                    <div className="signin-other-title">
                                                        <h5 style={{ fontSize: "13px" }}>Sign In with</h5>
                                                    </div>
                                                    <div style={{ paddingTop: "25px" }}>
                                                        <Button
                                                            style={{ height: "50px", width: "50px", backgroundColor: customStyles.colorPrimaryBg, marginRight: "8px", color: customStyles.colorPrimary, border: "0px" }}
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                socialResponse("facebook");
                                                            }}
                                                        ><Facebook size={14} /></Button>
                                                        <Button
                                                            style={{ height: "50px", width: "50px", backgroundColor: customStyles.colorDangerBg, marginRight: "8px", color: customStyles.colorDanger, border: "0px" }}
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                socialResponse("google");
                                                            }}
                                                        ><GoogleOutlined /></Button>
                                                        <Button style={{ height: "50px", width: "50px", backgroundColor: "rgba(20,24,33,.1)", marginRight: "8px", border: "0px" }}><GithubOutlined /></Button>
                                                        <Button style={{ height: "50px", width: "50px", backgroundColor: customStyles.colorInfoBg, marginRight: "8px", color: customStyles.colorInfo, border: "0px" }}><TwitterOutlined /></Button>
                                                    </div>
                                                </div>
                                            </Form>
                                            <div style={{ marginTop: "50px" }} className="text-center">
                                                <p>Don't have an account?  <Link to="/register" style={{ marginRight: "5px", textDecoration: "underline", color: customStyles.colorSecondary, fontWeight: "bold" }}>Sign Up</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </StyleWrapper>

        </React.Fragment>
    )
}

export default withRouter(Signin)