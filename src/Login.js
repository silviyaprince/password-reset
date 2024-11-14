import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
const Login = () => {
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [err,setErr]=useState("")


    const handleLogin=async()=>{
        const payload={
            email,
            password
        }

        const res=await fetch("http://localhost:8060/user/login",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        })
        const data=await res.json()
        if(data.token){
            setErr("")
            localStorage.setItem("token",data.token)
            navigate("/")
        }else{
            setErr(data.error)
        }
    }
  return (
    <div className="login">
        <h2>LOGIN</h2>
        <TextField fullWidth label="email" type="email" value={email} sx={{m:2}} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField fullWidth label="password" type="password" value={password} sx={{m:2}} onChange={(e)=>setPassword(e.target.value)}/>
        <Button type="submit" variant="contained" onClick={handleLogin}>
            LOGIN
        </Button>
        <p style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/forgotpassword")}>forgot password?</p>
        <br/>
        <br/>
        {err?<Typography color="warning">{err}</Typography>:""}
<div>Not a member?<span className="" style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/signup")}>SIGNUP</span></div>
    </div>


  )
}

export default Login