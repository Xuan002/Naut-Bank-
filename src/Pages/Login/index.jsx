import "./style.css"

const Login = () => {
    return ( 
        <div id="login">
            <h1 className="title">Login</h1>
            <form className="form">
                <div className="fild">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="fild">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
     );
}
 
export default Login;