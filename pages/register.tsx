import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'

const Register = () => {
  return (
    <Layout>
      <div className="container">
        <p className="flow-text center white-text"> Register </p>
        <div className="row"></div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input
                id="username"
                type="text"
                className="validate white-text"
              />
              <label htmlFor="username"> Username </label>
            </div>
            <div className="input-field col s10">
              <input
                id="password"
                type="text"
                className="validate white-text"
              />
              <label htmlFor="password"> Password </label>
            </div>
            <div className="input-field col s10">
              <input id="confirm" type="text" className="validate white-text" />
              <label htmlFor="password"> Confirm your Password </label>
            </div>
            <div className="input-field col s6">
              <button className="btn " type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Register
