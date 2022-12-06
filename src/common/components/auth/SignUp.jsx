import '../css/SignUp.css'

const SignUp = () => {
    return(
        <>
        <form action="action_page.php" style={{border:"1px solid #ccc"}}>
        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <label htmlFor="email"><b>Email</b></label>
            <input className='sinput_text' type="text" placeholder="Enter Email" name="email" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input className='s_input_password' type="password" placeholder="Enter Password" name="psw" required/>

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input className='s_input_password' type="password" placeholder="Repeat Password" name="psw-repeat" required />

            <label>
            <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}}/> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

            <div className="clearfix">
            <button type="button" className="s_cancelbtn s_button">Cancel</button>
            <button type="submit" className="s_signupbtn s_button">Sign Up</button>
            </div>
        </div>
        </form>
        </>
    )
}

export default SignUp;