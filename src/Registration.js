function Registration(){
    let title = "Registration";
    function regIn(){
        alert("Registration Completed");
    }
    return (
        <div className="App-Register">
            <form onSubmit={regIn}>
                <h1 className = "App-heading">{title}</h1>
                <b>First Name: </b><input type="text" name="firstname" placeholder="Enter First Name" /><br /><br />
                <b>Last Name : </b><input type="text" name="lastname" placeholder="Enter Last Name"/><br /><br />
                <b>Email Id : </b><input type="email" name="email" placeholder="Enter Email"/><br /><br />
                <b>Username : </b><input type="text" name="username" placeholder="Enter Username"/><br /><br />
                <b>Age : </b><input type="number" name="age" placeholder="Enter Age"/><br /><br />
                <div className="App-Button">
                    <button  onClick={regIn}>Register</button><br /><br />
                </div>   
            </form>
        </div>
    );
}
export default Registration;