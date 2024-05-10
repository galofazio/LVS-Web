import './register.css'

export function Register() {


    return(
        <>
            <div id='container'>
                <h2>Register</h2>

                <div className="registerInputs">
                    <h3>Name</h3>
                    <input></input>
                </div>

                <div className="registerInputs">
                    <h3>Lastname</h3>
                    <input></input>
                </div>

                <div className="registerInputs">
                    <h3>Email</h3>
                    <input></input>
                </div>

                <div className="registerInputs">
                    <h3>Password</h3>
                    <input></input>
                </div>
                <button id='sendButton'>Send</button>

            </div>
        
        
        
        </>
    )
}