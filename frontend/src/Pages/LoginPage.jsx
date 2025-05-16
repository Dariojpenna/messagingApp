import LoginComponent from "../components/auth/loginComponents/LoginComponent";

export default function LoginPage({setIsAuthenticated}) {
    return (
        <div className="login-component-container">
            <LoginComponent setIsAuthenticated = {setIsAuthenticated} />
        </div>
    )
}