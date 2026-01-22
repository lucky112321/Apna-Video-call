import React from "react";
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';



export default function LandingPage() {

    const router = useNavigate();
    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader"><h2>Apna video call</h2></div>
                <div className="navlist">
                    <p onClick={() => {
                        router("/jei393")
                    }}>Join as Guest</p>
                    <p onClick={() => router("/auth")}>Register</p>
                    <div role="button">
                        <p onClick={() => router("/auth")}>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div><h2><span style={{ color: "#FF9839" }}>Connect </span>with your loved Once</h2>

                    <p>Cover a distanc by Apna Video Call</p>
                    <div role=" button">
                        <Link to="/auth" style={{ color: "#D97500" }}>Get started</Link>
                    </div>
                </div>

                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>

        </div>
    )
}


