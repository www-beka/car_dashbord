import './signIn.scss'
import Google from '../../assets/LogoGoogle.svg'
import Facebook from '../../assets/LogoFacebook.svg'

const SignIn = () => {
    return(
        <>
            <div className="singIn-main">
                <div className="signIn-with">
                    <h1>Get’s started.</h1>
                    <p>Don’t have an account? <span>Sign up</span></p>
                    <button><img src={Google} alt="" /> Sign in with Google</button>
                    <button><img src={Facebook} alt="" /> Sign in with Facebook</button>
                    <div className="lines-break">
                        <div className="line"></div>
                        <span>or</span>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="signIn-form">
                    <form action="">
                        <label htmlFor="">Email</label>
                        <input type="email" />

                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </form>
                    <div className="password">
                        <div>
                            <input type="checkbox" /> 
                            <label htmlFor="">Remember me</label>
                        </div>
                        <span>Forgot your password?</span>
                    </div>
                    <button>Sign in</button>
                </div>
            </div>   
        </>
    )
}

export default SignIn