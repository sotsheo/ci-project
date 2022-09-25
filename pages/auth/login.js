import Auth from '../../components/layouts/auth'
import Image from 'next/future/image'
export default function Login() {
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        console.log(1)
        // // Get data from the form.
        // const data = {
        //     first: event.target.first.value,
        //     last: event.target.last.value,
        // }
       
    }
    return <div className="landing">
        <div className="landing-decoration"></div>
        <div className="landing-info">
            <div className="logo">
                <svg className="icon-logo-vikinger">
                    {/* <use xlink:href="#svg-logo-vikinger"></use> */}
                </svg>
            </div>
            <h2 className="landing-info-pretitle">Welcome to 1</h2>
            <h1 className="landing-info-title">Vikinger</h1>
            <p className="landing-info-text">The next generation social network &amp; community! Connect with your friends and play with our quests and badges gamification system!</p>
            <div className="tab-switch">
                <p className="tab-switch-button login-register-form-trigger">Login</p>
                <p className="tab-switch-button login-register-form-trigger">Register</p>
            </div>
        </div>

        <div className="landing-form">
            <div className="form-box login-register-form-element">
                <Image className="form-box-decoration overflowing" src="/img/landing/rocket.png" alt="rocket" width="150" height="150" layout="responsive"/>

                <h2 className="form-box-title">Account Login</h2>
                <form className="form">

                    <div className="form-row">
                        <div className="form-item">
                            <div className="form-input">
                                <label htmlFor="login-username">Username or Email</label>
                                <input type="text" id="login-username" name="login_username" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-item">
                            <div className="form-input">
                                <label htmlFor="login-password">Password</label>
                                <input type="password" id="login-password" name="login_password" />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <button class="button medium secondary">Login to your Account!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
Login.getLayout = (page) => {
    return (
        <Auth>
            {page}
        </Auth>
    )
}