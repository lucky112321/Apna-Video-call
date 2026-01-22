import React, { useState, useEffect, useContext } from "react"
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
// import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from "../contexts/Authcontext";

function HomeComponent() {

    let Navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        Navigate(`/${meetingCode}`)
    }

    return (
        <>
            <div className="navBar">
                <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>

                    <h2 style={{ color: "#FF9839" }}> Apna video call</h2>

                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: "20px", }}  >
                    <IconButton onClick={
                        () => {
                            Navigate("/history")
                        }
                    }>
                        <RestoreIcon style={{ color: "white" }} />

                    </IconButton>
                    <p style={{ cursor: "pointer", marginRight: "10px" }}>History</p>
                    <Button onClick={
                        () => {
                            localStorage.removeItem("token")
                            Navigate("/auth")
                        }
                    } style={{ backgroundColor: " red", color: "white", marginLeft: "10px" }}>     Logout </Button>
                </div>



            </div>

            <div className="meetContainer" style={{ marginBottom: "300px" }}>
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>

                        <div style={{ display: "flex" }}>
                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant="contained"> Join</Button>
                        </div>
                    </div>
                </div>
                <div className="rightPanel">
                    <img src="/logo3.png" alt="" />
                </div>
            </div>



        </>
    )
}

export default withAuth(HomeComponent);