import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = (props) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        props.context.actions.signIn(username, password)
            .then(res => {
                if (res !== null) {
                    console.log('Sign in successful');
                    navigate("/")
                } else {
                    setError("Sign in was unsuccessful")
                    console.log("Sign in was unsuccessful");
                }
            })
    }

    return (
        <React.Fragment>
            {
                !error ? (
                    <React.Fragment></React.Fragment>
                ) : (
                    <div className="validationErrors">
                        <h3>{error}</h3>
                    </div>
                )
            }
            <div className="signInDiv">
                <form className="signInForm" onSubmit={(e) => submit(e)}>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </React.Fragment>
        
    )
}

export default SignIn;