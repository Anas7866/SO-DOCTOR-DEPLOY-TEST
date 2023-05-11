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
import OtpInput from 'react-otp-input'

export default function Mobileotp(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState('')
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

              <>
                <div className="col-md-8">
                  <div className="col-md-12 px-0 pt-3">
                    <h1>
                      <b className="name_Qa">Mobile Verification</b>
                    </h1>
                    <h6 className="py-3 subname_qa">
                      Enter Mobile Verification Code{' '}
                      <span className="code_exp_text">34s</span>
                    </h6>
                  </div>
                  <div className="col-md-12 ">
                    <form className="row">
                      <div className="col-md-9 background_color_otp pb-3 ">
                        <h6 className="py-3 subname_qa otp_field_label_text_color">
                          Enter Mobile Verification Code
                        </h6>
                        <div className="col-md-12 px-0">
                          <OtpInput
                            style={{ width: '100%' }}
                            value={otp}
                            onChange={setOtp}
                            className="input_style"
                            numInputs={6}
                            renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                            renderInput={(props) => <input {...props} />}
                          />
                        </div>
                      </div>
                      <div className="col-md-9 mt-3">
                        <Link to="/QA" className="link_style_noneactive">
                          <div className="row pt-2">
                            <button className="btn btn-info w-100 button_style_padding">
                              Continue
                            </button>
                          </div>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </>

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 display_sidepannel_none">
          <h1 className="pt-5">
            <b>Security Verification</b>
          </h1>
          <div className="row">
            <div className="col-md-6">
              <h6>
                Enter Security cord for registration. We will provide you
                assistance in all health related problems
              </h6>
            </div>
          </div>
          <div className="col-md-12 pt-3">
            <img className="img-fluid" src="../images/otp.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
