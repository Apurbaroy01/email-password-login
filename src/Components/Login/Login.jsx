import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { useState } from "react";


const Login = () => {
    const [success, setSuccess]=useState(false)
    const [error, setError]=useState('')
    const handleLogin=(e)=>{
        e.preventDefault();
        
        const email= e.target.email.value;
        const password=e.target.password.value;

        console.log(email,password)
        setSuccess(false)


        // ---------
        signInWithEmailAndPassword(auth, email,password)
        .then((result)=>{
            console.log(result.user)
            setSuccess(true)
        })
        .catch((error)=>{
            console.log(error.message)
            setError(error.message)
             
        })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" name="email" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" name="password" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        {
                            success && <p>Login Successfully</p>
                        }
                        {
                            error && <p>{error}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;