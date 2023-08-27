import React from 'react'
//import { Link } from "react-router-dom";

//Get an emergency button on each page. Use href="#tel: " for that. Also send a mail/sms stating emergency with current location.
// Chat with doctor
// Book an appointment. Choose the doctor. Choose from available timings (6:00-6:10,6:10-6:20..-7:00). Mail sent to doctor and mail received by receiver.
//Navigation buttons pe onClick effect
// Make 'contents of this page sticky as a right side bar


export default function PageNavigator(props) {
  return (
    <div className="container">
      <div className="w-75 p-4 rounded-3 mt-4" style={{backgroundColor: "#0d8cfd82",border: '3px solid #0a4498'}}>
        <h3 className='my-2 text-decoration-underline' style={{ color: '#0a4498' }}>Contents on this page</h3>
        <div className='text-primary fs-5'>
          <a  className="fs-5" href="#whatToExpect">What to Expect</a> | &nbsp;
          <a  className="fs-5" href="#whatToEat">WhatToEat</a> | &nbsp;
          <a  className="fs-5" href="#pregnancyExercises">Pregnancy Exercises</a> | &nbsp;
          <a  className="fs-5" href={props.w1}>Week {props.s1} to {props.e1}</a> | &nbsp;
          <a  className="fs-5" href={props.w2}>Week {props.s2} to {props.e2}</a> | &nbsp;
          <a  className="fs-5" href={props.w3}>Week {props.s3} to {props.e3}</a> | &nbsp;
          <a  className="fs-5" href="#dosAndDonts">Pregnancy do's and don'ts</a> 
        </div>
      </div>
    </div>
  )
}
