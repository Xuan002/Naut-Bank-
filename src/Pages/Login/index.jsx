import LoginForm from "../../components/LoginForm";
import LoginInfo from "../../components/LoginInfo";

import "./style.css"

const Login = () => {
  return ( 
    <div className="mainLogin">
      <section className="LoginInfo">
       <LoginInfo />
       <img className="Baleia" src="https://raw.githubusercontent.com/Xuan002/Naut-Bank-/main/src/assets/logo/logo-removebg-preview.svg" alt="baleia do Naut'Bank"  />
      </section>

      <div class="linha-vertical2"></div>
    <div class="container">
      <section className="Login">
        <LoginForm />
      </section>
      </div>
    </div>
   );
}
 
export default Login;