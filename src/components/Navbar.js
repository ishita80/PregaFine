import React, { useState } from 'react'
import { Link } from "react-router-dom";
import icon from './icon.png';


export default function Navbar() {
    //const[dropdownClick,setDropdownClick]=useState(false);
   // const[dropdownHover,setDropdownHover]=useState(false);

    const[isHoverFirst,setIsHoverFirst]=useState(false);
    const[isHoverSecond,setIsHoverSecond]=useState(false);
    const[isHoverThird,setIsHoverThird]=useState(false);
    const[isHoverHome,setIsHoverHome]=useState(false);
    const[isHoverHandF,setIsHoverHandF]=useState(false);
    const[isHoverMyths,setIsHoverMyths]=useState(false);
    const[isHoverDadsGuide,setIsHoverDadsGuide]=useState(false);
    const[isHoverContactUs,setIsHoverContactUs]=useState(false);

    // const setBg = () => {
    //     setDropdownClick(true)
    //     console.log("clicked")
    // }

  return (
    <div className="container-fluid sticky-top bg-primary shadow-sm">
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-primary navbar-light py-3 py-lg-0">

        <img src={icon} style={{height: "3vw",width: "2vw"}} alt="i"/><h1 className="m-1 text-white">PregaFine</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse" style={{width: '100%'}}>
                <div className="navbar-nav ms-auto py-0">
                   <Link to="/" className="nav-item nav-link active text-white rounded-2" onMouseEnter={()=>setIsHoverHome(true)} onMouseLeave={()=>setIsHoverHome(false)} style={{backgroundColor: isHoverHome?'#0a4498':'#0d6efd'}}>Home</Link>
                   <div className="nav-item dropdown">
                       <button className="btn btn-primary dropdown-toggle rounded-2 py-2  text-white border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" onMouseEnter={()=>setIsHoverHandF(true)} onMouseLeave={()=>setIsHoverHandF(false)} style={{backgroundColor: isHoverHandF?'#0a4498':'#0d6efd'}}>
    Health & Fitness
  </button>
                        <div className="dropdown-menu m-2 border-1 rounded-0 bg-primary">
                           <Link to="/firstTrimester" className="dropdown-item text-white" onMouseEnter={()=>setIsHoverFirst(true)} onMouseLeave={()=>setIsHoverFirst(false)} style={{backgroundColor: isHoverFirst?'#0a4498':'#0d6efd'}}>First Trimester</Link>
                           <Link to="/secondTrimester" className="dropdown-item text-white" onMouseEnter={()=>setIsHoverSecond(true)} onMouseLeave={()=>setIsHoverSecond(false)} style={{backgroundColor: isHoverSecond?'#0a4498':'#0d6efd'}}>Second Trimester</Link>
                           <Link to="/thirdTrimester" className="dropdown-item text-white" onMouseEnter={()=>setIsHoverThird(true)} onMouseLeave={()=>setIsHoverThird(false)} style={{backgroundColor: isHoverThird?'#0a4498':'#0d6efd'}}>Third Trimester</Link>
                        </div>
                    </div>

                   {/* <Link to="/dietChart" className="nav-item nav-link text-white">Diet Chart</Link>
                   <Link to="/workoutRoutine" className="nav-item nav-link text-white">Workout Routine</Link> */}
                    {/*<Link to="/checkupReminder" className="nav-item nav-link">Checkup Reminder</Link> */}
                    {/*<Link to="/awarenessProgramme" className="nav-item nav-link">Awareness Programme</Link> */}
                    <Link to="/myths" className="nav-item nav-link text-white rounded-2" onMouseEnter={()=>setIsHoverMyths(true)} onMouseLeave={()=>setIsHoverMyths(false)} style={{backgroundColor: isHoverMyths?'#0a4498':'#0d6efd'}}>Myths</Link>
                   <Link to="/dad'sGuide" className="nav-item nav-link text-white rounded-2" onMouseEnter={()=>setIsHoverDadsGuide(true)} onMouseLeave={()=>setIsHoverDadsGuide(false)} style={{backgroundColor: isHoverDadsGuide?'#0a4498':'#0d6efd'}}>Dad's Guide</Link>
                    {/*<Link to="/emergency" className="nav-item nav-link">Emergency contacts</Link> */}
                   <Link to="/contactUs" className="nav-item nav-link text-white rounded-2" onMouseEnter={()=>setIsHoverContactUs(true)} onMouseLeave={()=>setIsHoverContactUs(false)} style={{backgroundColor: isHoverContactUs?'#0a4498':'#0d6efd'}}>Contact us</Link>


                   {/* Dropdown: Nutrition and Fitness */}
                </div>
            </div>
        </nav>
    </div>
</div>
  )
}
