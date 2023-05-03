
import './style.css';

function Cadastro() {
  function confereSenha() {
    // Implementação da função confereSenha
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implementação do tratamento de envio do formulário
  }

  return (
    <div>
      <div className="title">Cadastro</div>
      <div className="content">
        <form id="cadform" onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Nome completo</span>
              <input type="text" placeholder="Coloque o seu Nome completo" required />
            </div>
            <div className="input-box">
              <span className="details">Data de Nascimento</span>
              <input id="date" type="date" required />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="email" name="email" placeholder="Coloque o seu Email" required />
              <div id="msgemail"></div>
            </div>
            <div className="input-box">
              <span className="details">Numero de Telefone</span>
              <input type="text" onKeyPress="$(this).mask('(00) 00000-0000')" placeholder="(00) 00000-0000" required />
            </div>
            <div className="input-box">
              <span className="details">RG</span>
              <input type="text" onKeyPress="$(this).mask('00.000.000-0')" placeholder="Digite o seu RG" required />
            </div>
            <div className="input-box">
              <span className="details">CPF</span>
              <input type="text" onKeyPress="$(this).mask('000.000.000-00')" placeholder="Digite o seu CPF" required />
            </div>
            <div className="input-box">
              <span className="details">Senha</span>
              <input type="password" name="senha" size="15" onChange={confereSenha} placeholder="Digite a sua senha" required /> 
            </div>
            <div className="input-box">
              <span className="details">Confirmar a sua senha</span>
              <input type="password" name="confirma" size="15" onChange={confereSenha} placeholder="Confirme a sua senha" required />
            </div>
          </div>
          <div className="button">
            <input id="btn-submit" type="submit" value="Cadastrar" />
          </div>
          <div className="sign_up">
            Ja possui uma conta? <a href="login.html">Clique Aqui para Entrar!</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
