import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2 style={{ color: "#5d39ff" }} ><b>ApnazoomCall</b></h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}><b>Join as Guest</b></p>
                    <p onClick={() => {
                        router("/auth")

                    }}><b>Register</b></p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p style={{ color: "#5d39ff" }} ><b>Login |</b></p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#5d39ff" }}>Connect</span> with your loved Ones</h1>

                    <p className='cover'>Cover a distance by Apna Video Call</p>
                    <div role='button' className='startbtn'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
            </div>



        </div>
    )
}