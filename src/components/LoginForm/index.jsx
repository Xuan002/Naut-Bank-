import CampoTexto from "../campoTexto"
import Botao from "../Botao"
import RedesSocial from "../redesSocial"
import "./loginForm.css"
const LoginForm = () => {
    return ( 
        <div className="loginForm">
            <h2>Entrar</h2>
            <CampoTexto className="CampoEmail" type="text" placeholder="Digite o seu E-mail"/>
            <CampoTexto className="CampoSenha" type="password" placeholder="Digite a sua senha"/>
            <a href="http://">Esqueceu sua senha?</a>
            <Botao texto="Entrar"/>
            <p>ou continue com</p>
            <RedesSocial/>
        </div>
     );
}
 
export default LoginForm;