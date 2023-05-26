import CadastroForm from "../../components/cadastroForm";
import CadastroInfo from "../../components/cadastroInfo";
import "./style.css"

const Cadastro = () => {
  return ( 
    <div className="mainCadastro">
      <section className="CadastroInfo">
        <CadastroInfo/>
        <img className="Baleia" src="src\assets\logo\logo-removebg-preview.svg" alt="baleia do Naut'Bank" />
      </section>
      <section className="Cadastro">
        <CadastroForm/>
      </section>
    </div>
   );
}
 
export default Cadastro;