import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const adminEmail = "dhinakar4334@gmail.com";
    const adminPassword = "Dhina@43";

    const validate = () => {
        let valid = true;
        const newErrors = { email: "", password: "" };
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;


        if (!email) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/^[a-zA-Z][\w.-]*@[a-zA-Z0-9-]+\.(com)$/.test(email)) {
            newErrors.email = "Enter valid email address!";
            valid = false;
        }


        if (!password) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (!passwordRegex.test(password)) {
            newErrors.password = "Enter Strong Password!";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            if (email === adminEmail && adminPassword) {
                navigate("/dashboard");
                // alert("Login Successfully!")
            } else {
                alert("Invalid Email or Password!");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-indigo-700 p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Admin Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Enter the email*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Enter your password*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"

                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-3">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-600 font-medium hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
