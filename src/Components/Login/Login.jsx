import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState()




    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked

        setError('')

        console.log(email, password, terms)
        if (!terms) {
            setError("Please accept terms & conditions.");
            return;
        }

        if (password.length < 6) {
            setError("must be 6 chatacters")
            return;

        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)

                toast('Register successFully !');
            })
            .catch((error) => {
                console.log(error.message)

                setError(error.message)

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
                                <fieldset className="fieldset relative">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name="email" />
                                    <label className="label">Password</label>
                                    <input type={showPassword ? "text" : "password"} className="input" placeholder="Password" name="password" />
                                    <p onClick={() => setShowPassword(!showPassword)} className=" btn-xs absolute right-7 top-28">
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </p>
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>

                                    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">

                                        <label className="label">
                                            <input type="checkbox" className="checkbox" name="terms" />
                                            Accept trams & conditins
                                        </label>
                                    </fieldset>

                                    <div className="text-red-600 text-2xl">
                                        {
                                            error && <p>  {error}</p>
                                        }
                                    </div>

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