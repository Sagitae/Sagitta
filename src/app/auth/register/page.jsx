"use client";


import "@/css/input.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmpassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch('/api/auth/register', {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  console.log(errors);

  return (
    <div className="Registrarse">
      <h1 className="font-bold">Registrate</h1>

      <form onSubmit={onSubmit} className="w-full">
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username:
        </label>
        <input
          type="text"
          placeholder="Usuario"
          {...register("username", {
            required: {
              value: true,
              message: "Usuario requerido",
            },
          })}
        />
        {errors.username && (
          <span className="text-red-500"> {errors.username.message} </span>
        )}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          placeholder="email@"
          {...register("email", {
            required: {
              value: true,
              message: "email requerido",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500"> {errors.email.message} </span>
        )}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          placeholder="*********"
          {...register("password", {
            required: {
              value: true,
              message: "password requerida",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500"> {errors.password.message} </span>
        )}
        <label
          htmlFor="Confirmpasword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          placeholder="*********"
          {...register("confirmpassword", {
            required: {
              value: true,
              message: "password requerida",
            },
          })}
        />{" "}
        {errors.confirmpassword && (
          <span className="text-red-500">
            
            {errors.confirmpasswod.message}
          </span>
        )}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterPage; 

