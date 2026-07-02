import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-[#2563EB] border-4 border-[#3B82F6]  rounded-lg w-72 text-[#FFFFFF] px-4 py-10">
                <h1 className=" font-bold text-lg">Login</h1>
                <h1 className="font-bold mt-5">Username or Email:</h1>
                <input className="bg-[#FFFFFF] border-2 border-[#BFDBFE] rounded w-full mt-2"></input>
                <h1 className="font-bold mt-5">Password:</h1>
                <input className="bg-[#FFFFFF] border-2 border-[#BFDBFE] rounded w-full mt-2"></input>
                <p>Don't have an account? <Link to="/register">Create an account</Link></p>
            </div>
        </div>
    )
}