import React from "react"
import { Link } from "react-router-dom"
import {
  FormButton,
  FormH1,
  FormInput,
  FormWrap,
  Container,
  Icon,
  FormContent,
  Form,
  FormLabel,
  Text,
} from "./SigninElements"

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            Bitmine{" "}
            <span
              style={{
                color: "#000",
                fontWeight: "400",
              }}
            >
              Afrika
            </span>
          </Icon>

          <FormContent>
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
                    <div className="text-white mt-4 text-center font-bold text-2xl">
                      <small>Sign up </small>
                    </div>
                    <div className="rounded-t mb-0 px-6 py-6">
                      <hr className=" border-b-1 border-blueGray-300" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <form>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2 pr-2"
                            htmlFor="grid-password"
                          >
                            Full Names
                          </label>
                          <div className="flex">
                            <input
                              type="text"
                              className=" mr-2 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="First Name"
                            />

                            <input
                              type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Second Name"
                            />
                          </div>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            UserName
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="UserName"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            County
                          </label>
                          <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                            <option>Kenya</option>
                            <option>Tanzania</option>
                            <option>Uganda</option>
                          </select>
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Password
                          </label>
                          <div className="flex">
                            <input
                              type="password"
                              className=" mr-2 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Password"
                            />
                            <input
                              type="password"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Repeat Password"
                            />
                          </div>
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            PIN
                          </label>
                          <input
                            type="password"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="PIN : 1234"
                          />
                        </div>

                        <div className="text-center mt-6">
                          <Link to="/dashboard">
                            <button
                              className="bg-black text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                              type="button"
                            >
                              Register
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="text-right p-2 flex-end mr-2 mb-2">
                      <Link to="/signin" className="text-black font-bold">
                        <small>Sign In Instead</small>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp
