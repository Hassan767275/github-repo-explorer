import { Link } from "react-router-dom"

export default function Registration() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-[#2563EB] border-4 border-[#3B82F6]  rounded-lg w-72 text-[#FFFFFF] px-4 py-10">
                <h1 className=" font-bold text-lg">Register</h1>
                <h1 className="font-bold mt-5">Username:</h1>
                <input className="bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2" name="username"></input>
                <h1 className="font-bold mt-5">Email:</h1>
                <input className="bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2" name="email"></input>
                <h1 className="font-bold mt-5">Password:</h1>
                <input className="bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2" name="password"></input>
                <div className="flex justify-center mt-5">
                    <Link to="/">
                        <button className="bg-[#0F172A] hover:bg-[#1E293B] rounded px-4 py-0.5">Register</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}