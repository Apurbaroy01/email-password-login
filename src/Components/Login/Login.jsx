import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [success, setSuccess]= useState()



    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        setError ('')
        setSuccess('')
        console.log(email, password)
        if (password.length < 6) {
            setError("must be 6 chatacters")

        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
                setSuccess(true)
            })
            .catch((error) => {
                console.log(error.message)
                setSuccess(false)

            })
    };
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch((error) => {
                console.log(error)
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
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name="email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name="password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                    {
                                        error && <p>{error}</p>
                                    }
                                    {
                                        success && <p>Succcess</p>
                                    }
                                </fieldset>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            {
                user && <div>

                    <h1>{user.email}</h1>
                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                </div>
            }
        </div>
    );
};

export default Login;