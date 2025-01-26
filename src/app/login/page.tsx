export default function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FFF3E3]">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-[#B88E2F] mb-6">Login</h1>
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#B88E2F]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 mt-2 border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
  
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#B88E2F]">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full p-3 mt-2 border border-[#E0E0E0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
  
            {/* Login Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 bg-[#B88E2F] text-white text-lg font-medium rounded-md hover:bg-[#9f7522]"
              >
                Login
              </button>
            </div>
          </form>
  
          {/* Link to Register Page */}
          <div className="mt-4 text-center text-sm text-[#9F9F9F]">
            <p>
              Do not have an account?{" "}
              <a href="/register" className="text-[#B88E2F] font-semibold hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  