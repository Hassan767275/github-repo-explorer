import { Link } from "react-router-dom"
import { sendUserLoginInfo } from "../services.ts/api"

export default function Login() {
    async function loginUser(formData: FormData) {
        const usernameOrEmail = formData.get("username") as string
        const password = formData.get("password") as string

        const response = await sendUserLoginInfo(usernameOrEmail, password)
        console.log(response)
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form className="bg-[#22C55E] border-4 border-[#4ADE80]  rounded-lg w-72 text-[#FFFFFF] px-4 py-10" action={loginUser}>
                <h1 className=" font-bold text-lg">Login</h1>
                <h1 className="font-bold mt-5">Username or Email:</h1>
                <input className="text-black bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2" name="username" required></input>
                <h1 className="font-bold mt-5">Password:</h1>
                <input className="text-black bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2" name="password" type="password" required></input>
                <div className="flex justify-center mt-5">
                    <button className="bg-[#14532D] hover:bg-[#166534] rounded px-4 py-0.5">Login</button>
                </div>
                <p className="mt-4">Don't have an account? <Link className="text-red-700" to="/register">Create an account</Link></p>
            </form>
        </div>
    )
}