"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLoginFunc = async (data) => {
    const { email, password } = data;
    console.log(data, "Data");

    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className=" rounded-xl bg-white p-20">
        <h2 className="font-bold text-3xl text-center text-[#403F3F] mb-6">
          Login your Account
        </h2>
        <form onSubmit={handleSubmit(handelLoginFunc)} className="space-y-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Email address
            </legend>
            <input
              {...register("email", { required: "Email Field is required" })}
              type="email"
              className="input bg-[#F3F3F3]"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Password
            </legend>

            <div className="relative">
              <input
                {...register("password", {
                  required: "password Field is required",
                })}
                type={isVisible ? "text" : "password"}
                className="input w-full bg-[#F3F3F3] pr-10"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </div>
          </fieldset>
          <button className="btn w-full bg-[#403F3F] text-white">Login</button>
        </form>
        <p className="mt-5 text-center text-md font-bold text-[#706F6F]">
          Dont’t Have An Account ?
          <Link href={`/register`} className="font-bold text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
