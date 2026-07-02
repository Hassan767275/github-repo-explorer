
export default function Registration() {
  function registerUser(formData: FormData) {
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")

    console.log(username, email, password)
    fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    })
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
        <div className="flex justify-center mt-5">
          <button className="bg-[#0F172A] hover:bg-[#1E293B] rounded px-4 py-0.5">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
