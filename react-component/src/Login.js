import './Login.css';

const Login = () => {
    return (
        <div className='login-creen'>
            <div className='login-box'>
                <div className='title-box'>
                    <h2>Form Login</h2>
                    <h3>Tugas Pertemuan 3</h3>
                </div>
                <div className='form-box'>
                    <form method='post' action id='form-login'>
                        <label for='username'>Username :</label>
                        <input type='text' id='username' placeholder='Enter username here . . .'></input>
                        <label for='password'>Password :</label>
                        <input type='Password' id='password' placeholder='Enter username here . . .'></input>
                    </form><br></br><br></br>
                </div>
                <div className='button-box'>
                    <button type='button' className='login-button'>Login</button><br></br>
                    <center>
                        <input type='checkbox' name='remember_me' id='remember_me'></input>
                            <label for='remembder_me'>Remember Me</label>
                    </center><br></br>
                    <button type='button' className='cancel-button'>Cancel</button>
                </div>
            </div>
        </div>
    );

}

export default Login;
