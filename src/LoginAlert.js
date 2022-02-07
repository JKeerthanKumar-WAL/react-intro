function LoginAlert(){
    let title = "Login Page";
    function logIn(){
        alert("you are logged in ");
    }
    return (
        <div className="App-login">
            <h1>{title}</h1>
            <b>Email Id : </b><input type="email" name="email" /><br /><br />
            <b>Password : </b><input type="password" name="password" /><br /><br />
            <button onClick={logIn}>Sign In</button><br /><br />
        </div>
    );
}
export default LoginAlert;