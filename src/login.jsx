import './login.css'
import PropTypes from 'prop-types';

export function Login({ onToggleComponent }){

    return (
        <>
            <div id='container'>
                <h2>Login</h2>

                <div className="loginInputs">
                    <h3>Email</h3>
                    <input></input>
                </div>

                <div className="loginInputs">
                    <h3>Password</h3>
                    <input></input>
                </div>
                <button id='sendButton'>Send</button>


                <a onClick={onToggleComponent} id='registerLink'>Register</a>
            </div>

        </>
    )
}

Login.propTypes = {
    onToggleComponent: PropTypes.func.isRequired,
  };