import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="flex text-3xl justify-between p-3  border-b" >
            
            <NavLink to="/">Home</NavLink>
            <div className="space-x-10">
                
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register 1</NavLink>
                <NavLink to="/register2">Register 2</NavLink>
                
            </div>
            
        </nav>
    );
};

export default Navbar;