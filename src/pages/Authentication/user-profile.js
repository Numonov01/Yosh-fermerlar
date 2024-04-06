import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb

import avatar from "../../assets/images/users/avatar-1.jpg";

// actions
import { editProfile, resetProfileFlag } from "../../slices/thunk";
import { createSelector } from "reselect";
import { Alert, Card, Col, Form, Input, Row, Button, Typography } from "antd";
import Breadcrumb from "../../Common/Breadcrumb";
import usecustomStyles from "../../Common/customStyles";
import withRouter from "../../Common/withRouter";

const customStyles = usecustomStyles();

const { Text } = Typography;

const UserProfile = () => {

    // page title
    document.title = "User Profile" + process.env.REACT_APP_PAGE_TITLE;

    const dispatch = useDispatch();

    const [email, setemail] = useState("admin@gmail.com");
    const [name, setname] = useState("Admin");
    const [idx, setidx] = useState(1);

    const selectProfile = createSelector(
        (state) => state.Profile,
        (profile) => ({
            user: profile.user,
            success: profile.success,
            error: profile.error,
        })
    );

    const { user, success, error } = useSelector(selectProfile);

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser") || "{}");

            if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
                obj.displayName = user.username;
                setname(obj.displayName || "Admin");
                setemail(obj.email);
                setidx(obj.uid);
            } else if (
                process.env.REACT_APP_DEFAULTAUTH === "fake" ||
                process.env.REACT_APP_DEFAULTAUTH === "jwt"
            ) {

                if (!isEmpty(user)) {
                    obj.data.displayName = user.username;
                    localStorage.removeItem("authUser");
                    localStorage.setItem("authUser", JSON.stringify(obj));
                }
                // setname(obj.data.displayName ? obj.data.displayName : "Admin");
                setname(user?.username || "Admin")
                setemail(obj.email || obj.data.email);
                setidx(obj.uid || obj.data._id);
            }


            setTimeout(() => {
                dispatch(resetProfileFlag());
            }, 3000);
        }
    }, [dispatch, user]);
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            username: name || 'Admin',
            idx: idx || '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your UserName"),
        }),
        onSubmit: (values) => {
            dispatch(editProfile(values));
        }
    });

    return (
        <React.Fragment>
            <div >
                {/* Render Breadcrumb */}
                <Breadcrumb mainTitle="Lizant" pageTitle="User Profile" />

                <Row>
                    <Col xxl={24}>
                        {error && error ? <Alert type="error" message={error}></Alert> : null}
                        {success ? <Alert type="success" message={`Username Updated To ${name}`}></Alert> : null}

                        <Card>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <img
                                        src={avatar}
                                        alt=""
                                        style={{ height: "72px", width: "72px", borderRadius: "50%", marginRight: "30px" }}
                                    />
                                </div>
                                <div>
                                    <div>
                                        <h5 style={{ fontWeight: "bold", fontSize: customStyles.h5, marginBottom: '6px' }}>{name}</h5>
                                        <Text type="secondary" style={{ marginBottom: '0' }}>{email}</Text>
                                    </div>
                                        <Text type="secondary">Id no: #{idx}</Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <div style={{ marginTop: '24px' }}>
                    <Text style={{ PaddingBottom: '8px', display: 'block', marginBottom: customStyles.marginSM }}>Change User Name</Text>

                    <Card>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}
                        >
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '4px' }}>User Name</label>
                                <Input
                                    name="username"
                                    placeholder="Enter User Name"
                                    style={{ boxShadow: 'none' }}
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.username || ""}
                                    onInvalid={validation.touched.username && validation.errors.username ? validation.touched.username : undefined} status={validation.touched.username && validation.errors.username ? "error" : true}

                                />
                                {validation.touched.username && validation.errors.username &&
                                    <p style={{ color: customStyles.colorDanger }}>{validation.errors.username}</p>}
                            </div>
                            <div style={{ marginTop: "30px" }} className="text-center">
                                <Button htmlType="submit" style={{ backgroundColor: customStyles.colorDanger, color: "white" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}>
                                    Update User Name
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default withRouter(UserProfile);
