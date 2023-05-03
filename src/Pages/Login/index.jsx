import "./style.css"

const Login = () => {
    return ( 
        <div class="main_div">
          <div class="title">Login</div>
         

          <form action="#">
            <div class="input_box">
                
                <input type="text" placeholder="CPF ou RG" required/>
                <div class="icon"><i class="fa fa-user"></i></div>
            </div>

            <div class="input_box">
              <input type="password" placeholder="Senha" required/>
              <div class="icon"><i class="fa fa-lock"></i></div>
            </div>

            <div class="option_div">
              <div class="check_box">
                <input type="checkbox"/>
                <span>Lembrar de mim</span>
              </div>

            
            </div>

            <div class="input_box button">
              <input type="submit" value="Login"/>
            </div>

            <div class="sign_up">
              Não se cadastrou ainda? <a href="Cadastro.html">Se Cadastre aqui.</a>
            </div>
          </form>
        </div>

    );
}
 
export default Login;