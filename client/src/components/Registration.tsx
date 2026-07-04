import { sendUserInfo } from "../services.ts/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function Registration() {
  const navigate = useNavigate()

  async function registerUser(formData: FormData) {
    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const response = await sendUserInfo({username, email, password})  
    if (response.status === 200) {
      toast.success("Registration successfull!")
      navigate("/login")
    } else {
      toast.error("Username or Email already exists")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-[#2563EB] border-4 border-[#3B82F6]  rounded-lg w-72 text-[#FFFFFF] px-4 py-10" action={registerUser}>
        <h1 className=" font-bold text-lg">Register</h1>
        <h1 className="font-bold mt-5">Username:</h1>
        <input
          className="text-black bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2"
          name="username"
          required
        ></input>
        <h1 className="font-bold mt-5">Email:</h1>
        <input
          className="text-black bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2"
          name="email"
          required
        ></input>
        <h1 className="font-bold mt-5">Password:</h1>
        <input
          className="text-black bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-lg w-full mt-2"
          name="password"
          type="password"
          required
        ></input>
        <div className="flex flex-col items-center mt-5">
          <button className="bg-[#0F172A] hover:bg-[#1E293B] rounded px-4 py-0.5">
            Register
          </button>
          <p className="mt-2 font-bold">Already a user? <Link to="/login" className="text-[#22C55E]">Log in</Link></p>
        </div>
      </form>
    </div>
  );
}
