import React, {useState} from "react";
import axios from "axios";


const Register = () => {
    const[formData, setFormData] = useState({username : "", email : "", password : ""});
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e. target;
        setFormData({...FormData, [name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/register", formData);
            setMessage(response.data.message);
        } catch (error){
            setMessage(error.response?.data?.message || "Щось сталося не те");
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Userame</label>
                    <input
                    type = "text"
                    name="=username"
                    value={formData.username}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                    />
                </div>
            
            </form>

        </div>
        </div>
    )
}

export default Register;
