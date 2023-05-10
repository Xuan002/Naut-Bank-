import LoginForm from "../../components/LoginForm";
import LoginInfo from "../../components/LoginInfo";

import "./style.css"

const Login = () => {
  return ( 
    <div className="mainLogin">
      <section className="LoginInfo">
       <LoginInfo />
       <img className="Baleia" src="src\assets\logo\logo-removebg-preview.svg" alt="baleia do Naut'Bank" />
      </section>
      <section className="Login">
        <LoginForm />
      </section>
    </div>
   );
}
 
export default Login;