import CampoTexto from "../campoTexto"
import Botao from "../Botao"
import RedesSocial from "../redesSocial"
import "./cadastroForm.css"

const CadastroForm = () => {
    return ( 
        <div className="cadastroForm">
            <h2>Cadastra-se</h2>
            <CampoTexto className="CampoTexto" type="text" placeholder="E-mail"/>
            <CampoTexto className="CampoTexto" type="text" placeholder="nome e sobrenome"/>
            <CampoTexto className="CampoTexto" type="text" placeholder="CPF"/>
            <CampoTexto className="CampoTexto" type="text" placeholder="senha"/>
            <CampoTexto className="CampoTexto" type="text" placeholder="Confirme a senha"/>
            <Botao texto="Registrar"/>
            <p>ou continue com</p>
            <RedesSocial/>
        </div>
     );
}
 
export default CadastroForm;