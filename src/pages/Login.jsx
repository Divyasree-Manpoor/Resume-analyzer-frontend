import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, LockKeyhole, ArrowLeft } from "lucide-react";

import { loginUserService } from "../services/authService";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await loginUserService(formData);

      login(response.user, response.token);

      navigate("/upload");
    } catch (error) {
      setError(error.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden

        bg-slate-50

        dark:bg-[#020617]

        px-6
        py-10
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[160px]
          dark:bg-violet-500/20
        "
      />

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="
          absolute
          left-6
          top-6

          flex
          items-center
          gap-2

          rounded-xl

          border
          border-slate-200

          bg-white/90/80

          px-4
          py-2

          text-sm
          font-medium

          text-slate-700

          backdrop-blur

          transition-all

          hover:bg-white/90

          dark:border-slate-700
          dark:bg-slate-900/80
          dark:text-slate-300
        "
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative
          z-10

          w-full
          max-w-md

          rounded-3xl

          border
          border-slate-200

          bg-white/90/95

          p-8

          shadow-[0_10px_40px_rgba(0,0,0,0.08)]

          backdrop-blur-xl

          dark:border-slate-700
          dark:bg-[#0F172A]

          dark:shadow-[0_10px_60px_rgba(124,58,237,0.20)]
        "
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Sign in to continue using your AI-powered career tools.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50

                  py-3.5
                  pl-11
                  pr-4

                  text-slate-900

                  outline-none
                  transition-all

                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-white
                  dark:focus:ring-violet-900/30
                "
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50

                  py-3.5
                  pl-11
                  pr-12

                  text-slate-900

                  outline-none
                  transition-all

                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-white
                  dark:focus:ring-violet-900/30
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              className="
                rounded-xl
                border
                border-red-500/20
                bg-red-500/10
                px-4
                py-3
                text-sm
                text-red-500
              "
            >
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-xl

              bg-gradient-to-r
              from-violet-700
              to-purple-600

              py-4

              font-semibold
              text-white

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-lg
              hover:shadow-violet-500/30

              disabled:opacity-60
            "
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Signup Link */}
        <div
          className="
            mt-6
            text-center
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          Don't have an account?
          <button
            onClick={() => navigate("/signup")}
            className="
              ml-2
              font-semibold
              text-violet-600
              hover:text-violet-700

              dark:text-violet-400
            "
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </section>
  );
}
