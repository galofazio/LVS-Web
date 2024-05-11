import './register.css'

export function Register() {


    return (
        <>
            <div id='container'>
                <h2>Registro</h2>

                <div className="registerInputs">
                    <h3>Nombre</h3>
                    <input required></input>
                </div>

                <div className="registerInputs">
                    <h3>Apellido</h3>
                    <input required></input>
                </div>

                <div className="registerInputs">
                    <h3>Nombre de usuario</h3>
                    <input required></input>
                </div>

                <div className="registerInputs">
                    <h3>Correo</h3>
                    <input required></input>
                </div>

                <div className="registerInputs">
                    <h3>Contraseña</h3>
                    <input type='password' required></input>
                </div>
                <button id='sendButton'>Enviar</button>

            </div>



        </>
    )
}