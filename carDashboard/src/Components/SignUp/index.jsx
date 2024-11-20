import './signUP.scss'
import Google from '../../assets/LogoGoogle.svg'
import Facebook from '../../assets/LogoFacebook.svg'
import { Outlet, Link } from "react-router-dom";
const SignUP = () => {
    return(
        <>
            <div className="singUp-main">
                <div className="signIn-with">
                    <h1>Get’s started.</h1>
                    <p>Don’t have an account? <span><Link to="/">Sign in</Link></span></p>
                    <div className="signIn-with-buttons">
                        <button>
                            <img src={Google} alt="" width={20}/> 
                            Sign in with Google
                        </button>
                        <button>
                            <img src={Facebook} alt="" width={20} /> 
                             Sign in with Facebook
                        </button>
                    </div>
                    <div className="lines-break">
                        <div className="line"></div>
                        <span>or</span>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="signUp-form">
                    <form action="">
                        <label htmlFor="">First name</label>
                        <input type="email" placeholder='Delowar' required/>

                        <label htmlFor="">Last name</label>
                        <input type="password" placeholder='Hossen' required/>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='uistore@gmail.com' required/>

                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='******' required/>
                    </form>
                </div>
                    <div className="password">
                        <div>
                            <input type="checkbox" /> 
                            <label htmlFor="">Remember me</label>
                        </div>
                        <span>Forgot your password?</span>
                    </div>
                    <div className="signIn-button">
                        <button>Sign in</button>
                    </div>
            </div>   
        </>
    )
}

export default SignUP