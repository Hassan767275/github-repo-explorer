import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-[#22C55E] border-4 border-[#4ADE80]  rounded-lg w-72 text-[#FFFFFF] px-4 py-10">
                <h1 className=" font-bold text-lg">Login</h1>
                <h1 className="font-bold mt-5">Username or Email:</h1>
                <input className="bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2" name="username"></input>
                <h1 className="font-bold mt-5">Password:</h1>
                <input className="bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2" name="password"></input>
                <div className="flex justify-center mt-5">
                    <button className="bg-[#14532D] hover:bg-[#166534] rounded px-4 py-0.5">Login</button>
                </div>
                
                <p className="mt-4">Don't have an account? <Link className="text-red-700" to="/register">Create an account</Link></p>
            </div>
        </div>
    )
}