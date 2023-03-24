import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-phone-input-2/lib/style.css";
// import Form from "react-bootstrap/Form";
export default function ContactForm({ closeModal, border }) {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState("");

  // function handleOnsubmit(e) {
  //   const post = {
  //     // name: name,
  //     // mobile: mobile,
  //     // email: email,
  //     // message: message,
  //     name: "sriharan",
  //     status: "active",
  //     email: "erthj@mail.com",
  //     gender: "male",
  //   };
  //   const API = axios.create({
  //     baseURL: "https://gorest.co.in/public/v2/users",
  //     timeout: 10000,
  //     headers: {
  //       Authorization:
  //         "Bearer 4c170d08314287840b38d2a60504ceea9eaaf53870870f5d6009c6c4d1e8e09d",
  //     },
  //   });

  //   API.post(post).then((res) => {
  //     console.log(res);
  //   });
  //   if (checkValidation(e)) {
  //     setName("");
  //     setEmail("");
  //     setMobile("");
  //     setMessage("");
  //     // closeModal();
  //     console.log("values------->", email, name, mobile, message);
  //   }

  //   //return false;
  // }

  function checkValidation(e) {
    if (!name) {
      setNameErr("Please enter your name.");
      // return false
    }
    e.preventDefault();
    let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if (!reg.test(email)) {
      setEmailErr("Please Enter Valid E-Mail.");
      // return false
    }
    
    if (!message) {
      setMessageErr("Please leave your message");
      // return false
    }
    return true;
  }
  
  return (
    <>
      <Formik
        initialValues={{ email: "", msgtext: "", name: "", }}
        validate={(values) => {
          const errors = {};
          // if (!values.phone || values.phone.length < 11) {
          //   errors.phone = "Please enter valid mobile number.";
          // }
          if (!mobile || mobile.length < 9) {
            setMobileErr("Please enter valid mobile number.");
          }
          if (!values.name) {
            errors.name = "Please enter your name.";
          }
          if (!values.msgtext) {
            errors.msgtext = "Please leave your message";
            // return false
          }
          if (!values.email) {
            errors.email = "Please Enter Valid E-Mail.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          // console.log("Values----->", values.msgtext);
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // console.log("Values bef----->", values);
          values.phone=mobile;

          console.log("Values aft----->", values);
          closeModal()
        }}
       
        
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control "
                  placeholder="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p className="validation_error">
                  {errors.name && touched.name && errors.name}
                </p>
              </div>
              <div>
                <input
                  type="email"
                  className="form-control "
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="E-mail Address"
                />
                <p className="validation_error">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div>
                <PhoneInput
                  inputStyle={{
                    width: "100%",
                    paddingTop: "12px",
                    height: "50px",
                    borderColor: "#ced4da",
                    paddingLeft: 55,
                  }}
                  country={"in"}
                  enableSearch={true}
                  disableSearchIcon={true}
                  value={mobile}
                  defaultErrorMessage="Enter valid mobile number"
                  // onChange={(e) => setMobile(e.target.value)}
                  onChange={(mobile) => setMobile(mobile)}
                />

                <p className="validation_error">{mobileErr}</p>
              </div>
              <div className="col-lg-12">
                <textarea
                  className="form-control message"
                  type="text"
                  id="msgtext"
                  name="msgtext"
                  placeholder="Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.msgtext}
                ></textarea>
                <p className="validation_error">
                  {errors.msgtext && touched.msgtext && errors.msgtext}
                </p>
              </div>
              <Button
                style={{borderColor:border}}
                className="dark-button"
                variant="dark"
                size="sm"
                type="submit"
              >
                Submit
              </Button>
          </form>
        )}
      </Formik>
    </>
  );
}
