import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "./Login.scss";

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [tabswitch, setTabswitch] = useState(true);
  const dispatch = useDispatch();
  const handleclick = () => {
    setTabswitch(!tabswitch);
  };
  let history = useHistory();
  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: loginUserSchema,

    onSubmit: async (values) => {
      await dispatch(
        loginUser({
          email: values.email,
          password: values.password,
          resetForm: formik.resetForm,
          history: history,
          setIsLoading,
        })
      );
    },
  });
  return (
    <div className="col-sm-12 background_color_login_signup">
      <div className="col-sm-12">
        <Headerauth />
      </div>
      <div className="row">
        <div className="col-md-6 m-auto">
          {/* tab one  */}
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2"></div>
              {tabswitch ? (
                <>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6 col-6  text-center border_bottom_active">
                        <h2>
                          <b>Log In</b>
                        </h2>
                      </div>
                      <div
                        className="col-md-6 col-6 text-center"
                        onClick={handleclick}
                      >
                        <h2 className="color_unactive">
                          <b>Sign up</b>
                        </h2>
                      </div>
                    </div>
                    <FormikProvider value={formik}>
                      <Form
                        noValidate
                        onSubmit={formik.handleSubmit}
                        autoComplete="off"
                      >
                        <div className="row">
                          <div className="input-group input-group-lg pt-5 w-100">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-light button_style"
                                type="button"
                              >
                                <img
                                  className="img-fluid icon_width"
                                  src="../images/msg.png"
                                />
                              </button>
                            </div>
                            <input
                              autocomplete="off"
                              type="email"
                              required
                              className="form-control input_style_login"
                              placeholder="Enter your Email"
                              id="email"
                              name="email"
                              value={formik.values && formik.values.email}
                              onChange={formik.handleChange}
                              error={Boolean(
                                formik.touched.email && formik.errors.email
                              )}
                              helpertext={formik.errors.email}
                            />

                            {/* <span className="join_login  ">
                              <span>
                                <img
                                  src="../images/bulb.png"
                                  className="img-fluid img_bulb_width"
                                />
                              </span>
                              <span className="pt-2">
                                This email must remain accessible after selling
                              </span>
                            </span> */}
                          </div>
                          <div className="input-group input-group-lg pt-4">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-light button_style"
                                type="button"
                              >
                                <img
                                  className="img-fluid icon_width"
                                  src="../images/key.png"
                                />
                              </button>
                            </div>
                            <input
                              autocomplete="off"
                              required
                              type="password"
                              className="form-control input_style_login"
                              placeholder="Enter your Password"
                              id="password"
                              name="password"
                              value={formik.values && formik.values.password}
                              onChange={formik.handleChange}
                            />

                            {/* <InputField
                              type="password"
                              placeholder="Enter your password"
                              name="password"
                             
                              onHandleChange={formik.handleChange}
                              error={Boolean(
                                formik.touched.password &&
                                  formik.errors.password
                              )}
                              helpertext={formik.errors.password}
                            /> */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 px-0 pt-3">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input custom_radio"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 pt-3 px-0 text-right">
                            <h6 className="text_color_forget">
                              Forget Password
                            </h6>
                          </div>
                        </div>
                        <div className="row pt-2">
                          <button
                            type="submit"
                            className="btn btn-info w-100 button_style_padding"
                            isLoading={isLoading}
                            onHandleClick={formik.handleSubmit}
                          >
                            Login
                          </button>
                        </div>
                      </Form>
                    </FormikProvider>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-8">
                    <div className="row">
                      <div
                        className="col-md-6  col-6 text-center "
                        onClick={handleclick}
                      >
                        <h2 className="color_unactive">
                          <b>Log In</b>
                        </h2>
                      </div>
                      <div className="col-md-6  col-6 text-center border_bottom_active">
                        <h2>
                          <b>Sign up</b>
                        </h2>
                      </div>
                    </div>
                    <form className="row">
                      <div className="input-group input-group-lg pt-5">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-light button_style"
                            type="button"
                          >
                            <img
                              className="img-fluid icon_width"
                              src="../images/user.png"
                            />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control input_style_login"
                          placeholder="Enter your Name"
                          aria-label=""
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div className="input-group input-group-lg pt-4">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-light button_style"
                            type="button"
                          >
                            <img
                              className="img-fluid icon_width"
                              src="../images/msg.png"
                            />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control input_style_login"
                          placeholder="Enter your Email"
                          aria-label=""
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div className="input-group input-group-lg pt-4">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-light button_style"
                            type="button"
                          >
                            <img
                              className="img-fluid icon_width"
                              src="../images/key.png"
                            />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control input_style_login"
                          placeholder="Enter your mobile number"
                          aria-label=""
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-md-12 px-0 pt-3">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input custom_radio"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Agree with Terms And Conditions
                          </label>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/mobile-verification"
                      className="link_style_noneactive"
                    >
                      <div className="row pt-3">
                        <button className="btn btn-info w-100 button_style_padding">
                          Signup
                        </button>
                      </div>
                    </Link>
                  </div>
                </>
              )}

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 display_sidepannel_none">
          <h1 className="pt-5">
            <b>Welcome!</b>
          </h1>
          <div className="row">
            <div className="col-md-6">
              <h6>
                Welcome to Second Opinion app. We will provide you assistance in
                all health related problems
              </h6>
            </div>
          </div>
          <div className="col-md-12 pt-3">
            <img className="img-fluid" src="../images/people.png" />
          </div>
        </div>
      </div>

      {/* code to use later  */}
      {/* <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="col-sm-12 px-4">
                <h1 className="heading4_login m-0 pt-5 pb-5">
                  <b>Welcome back</b>
                </h1>
              </div>

              <div className="col-sm-12 px-4">
                <label className="label_login m-0">Email</label>
                <InputField
                  placeholder="Samantha_Nader@hotmail.com"
                  name="email"
                  value={formik.values && formik.values.email}
                  onHandleChange={formik.handleChange}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helpertext={formik.errors.email}
                />
                <span className="join_login  ">
                  <span>
                    <img
                      src="../images/bulb.png"
                      className="img-fluid img_bulb_width"
                    />
                  </span>
                  <span className="pt-2">
                    {" "}
                    This should be an email you can access post-acquisition{" "}
                  </span>
                </span>
              </div>
              <div className="col-sm-12 px-4 pt-4">
                <label className="label_login m-0">Password</label>
                <InputField
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formik.values && formik.values.password}
                  onHandleChange={formik.handleChange}
                  error={Boolean(
                    formik.touched.password && formik.errors.password
                  )}
                  helpertext={formik.errors.password}
                />
                <span className="join_login">
                  Forgot your password?
                  <span className="join2_login">
                    <Link to="/forget-password" className="link_decoration">
                      {" "}
                      <b>Reset </b>
                    </Link>
                  </span>
                </span>
              </div>
              <div className="col-sm-12 px-4">
                <Button
                  size={"sm"}
                  className=" button_style_login"
                  variant="outline"
                  isLoading={isLoading}
                  onHandleClick={formik.handleSubmit}
                >
                  Log in{" "}
                  <span className="right_arrow_login">
                    {" "}
                    <i className="fas fa-arrow-right"></i>{" "}
                  </span>
                </Button>
              </div>
              <div className="col-sm-12 mobile_padding_bottom px-4 py-2">
                <span className="join_login">
                  Do not have’n account?
                  <span className="join2_login">
                    <Link to="/signup" className="link_decoration">
                      {" "}
                      <b>Sign up</b>
                    </Link>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </Form>
      </FormikProvider> */}
    </div>
  );
}
