import LoginForm from "../components/auth/LoginForm"
import RegisterForm from "../components/auth/RegisterForm"

const Auth = ({ authRoute }) => {
    let body

    body =  (
        <>
        {authRoute === 'login' && < LoginForm />}
        {authRoute === 'register' && < RegisterForm />}
        </>
    )



    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1>ToDo App</h1>
                    <h4>Keep Track Of What You Are Doing</h4>
                    {body}
                </div>
            </div>
        </div>

    )
}

export default Auth