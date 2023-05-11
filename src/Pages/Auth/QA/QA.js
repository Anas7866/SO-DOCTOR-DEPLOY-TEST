import React, { useState } from 'react'
import { Form, FormikProvider, useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { loginUser } from '../../../Store/Auth/actions'
import Button from '../../../Shared/Button/Button'
import InputField from '../../../Shared/InputField'
import Headerauth from '../Headerauth/Headerauth'
import '../Login/Login.scss'

export default function QA(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [tabswitch, setTabswitch] = useState(true)
  const dispatch = useDispatch()
  const handleclick = () => {
    setTabswitch(!tabswitch)
  }
  let history = useHistory()
  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Please enter email address'),
    password: Yup.string().required('Please enter password'),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
        }),
      )
    },
  })
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

              <div className="col-md-8">
                <div className="col-md-12 px-0 pt-3">
                  <h1>
                    <b className="name_Qa">Hello! Zeeshan</b>
                  </h1>
                  <h6 className="py-3 subname_qa">
                    Please Answer Following Question.
                  </h6>
                </div>
                <form className="row">
                  <div className="col-md-12">
                    <h6 className="pb-2">
                      <b>What is your date of birth?</b>
                    </h6>
                    <input
                      type="text"
                      className="form-control form-control-lg input_style_login w-100"
                      placeholder="Enter your date of birth"
                      aria-label=""
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="col-md-12 pt-4">
                    <h6 className="pb-2">
                      <b>What is your designation?</b>
                    </h6>
                    <input
                      type="text"
                      className="form-control form-control-lg input_style_login w-100"
                      placeholder="Enter your designation"
                      aria-label=""
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="col-md-12 pt-4">
                    <h6 className="pb-2">
                      <b>From how long you are practicing?</b>
                    </h6>
                    <input
                      type="text"
                      className="form-control form-control-lg input_style_login w-100"
                      placeholder="Enter your practising years"
                      aria-label=""
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="col-md-12 pt-4">
                    <h6 className="pb-2">
                      <b>At which year you passed out?</b>
                    </h6>
                    <input
                      type="text"
                      className="form-control form-control-lg input_style_login w-100"
                      placeholder="Enter your year of passing"
                      aria-label=""
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="col-md-12 mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <button className="btn btn-info w-100 button_style_padding1">
                          Back
                        </button>
                      </div>
                      <div className="col-md-6">
                        <Link to="/uploaddoc" className="link_style_noneactive">
                          <button className="btn btn-info w-100 button_style_padding">
                            Next
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 display_sidepannel_none">
          <h1 className="pt-5">
            <b>Register as a Doctor</b>
          </h1>
          <div className="row">
            <div className="col-md-8">
              <h6>
                Create new Account on Second Opinion app. We will provide you
                assistance in all health related problems
              </h6>
            </div>
          </div>
          <div className="col-md-12 pt-3">
            <img className="img-fluid" src="../images/qa.png" />
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
                    <h1 className="heading4_login m-0 pt-5 pb-5"><b>Welcome back</b></h1>
                  </div>
                
                  <div className="col-sm-12 px-4">
                    <label className="label_login m-0">Email</label>
                    <InputField
                      placeholder="Samantha_Nader@hotmail.com"
                      name="email"
                      value={formik.values && formik.values.email}
                      onHandleChange={formik.handleChange}
                      error={Boolean(
                        formik.touched.email && formik.errors.email
                      )}
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
  )
}
