import './login.css'
import PropTypes from 'prop-types';

/* recibe la funcion toggleRegister */
export function Login({ toggleRegister }) {

    return (
        <>
            <div id='container'>
                <h2>Inicio de Sesion</h2>

                <div className="loginInputs">
                    <h3>Correo</h3>
                    <input></input>
                </div>

                <div className="loginInputs">
                    <h3>Contraseña</h3>
                    <input></input>
                </div>
                <button id='sendButton'>Enviar</button>

                {/* utiliza la funcion que recibio de App */}
                <a onClick={toggleRegister} id='registerLink'>Registro</a>
            </div>

        </>
    )
}

Login.propTypes = {
    toggleRegister: PropTypes.func.isRequired,
};

