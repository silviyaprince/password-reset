import React ,{useState}from 'react'

export  function Forgotpasswordpage() {
  const [email, setEmail] = useState(""); // State to store the email input
  const [showAlert, setShowAlert] = useState(""); // State to handle alert messages

  const handleResetRequest = async () => {
    // Validate if email is provided
    if (!email) {
      setShowAlert("Please enter your email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8060/user/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - show message
        setShowAlert("Password reset email has been sent.");
      } else {
        // Error - show message
        setShowAlert(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setShowAlert("An error occurred. Please try again.");
    }
  };
  return (

    <div className='forgotpassword ' style={{position:"relative"}}>
<div className="card border border-5" id="pass" style={{width: "28rem",height:"38rem",position:"absolute",top:"90%",left:"50%",transform: 'translate(-50%, 50%)'}}>
    <img src="https://media.istockphoto.com/id/1500914761/vector/fitness-health-gym-trendy-icons-on-circles.jpg?s=612x612&w=0&k=20&c=MaSBJ-edgZ2Nm7utjZgYupCWAzhrcIek0Udz48L_JME=" style={{width:'100px',height:'100px',margin:'auto'}}/>
<p className="card-text " id="pass1">You forgot your password?Here you can easily retrieve a new password.</p>
  <div className="card-body">
  <input className="form-control me-2" type="email" placeholder="email" value={email} aria-label="email"  onChange={(e) => setEmail(e.target.value)}/>

    <h5 className="card-title"></h5>
    <p className="card-text"></p>
    <div class="d-grid gap-2 col-12 mx-auto mt-5">
  <button class="btn btn-primary" type="button" onClick={handleResetRequest}>Request new password</button>
  <div>or</div>
  <button class="btn btn-primary" type="button">Sign in</button>
  
  
</div>
{showAlert && (
            <div className="alert alert-info" role="alert">
              {showAlert}
            </div>
          )}
  </div>
</div>
    </div>
  )
}



{/* <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div> */}


//
