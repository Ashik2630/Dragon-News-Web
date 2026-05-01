"use client";
import React, { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegisterFunc = async (data) => {
    const { name, email, password, photo } = data;
    console.log(data, "Data");

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error)
    if(error){
      alert(error.message)
    }

    if(res){
      alert("SingUp Successful")
    }
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className=" rounded-xl bg-white p-20">
        <h2 className="font-bold text-3xl text-center text-[#403F3F] mb-6">
          Register your Account
        </h2>
        <form onSubmit={handleSubmit(handelRegisterFunc)} className="space-y-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Name
            </legend>
            <input
              {...register("name", { required: "Name Field is required" })}
              type="text"
              className="input w-full bg-[#F3F3F3]"
              placeholder="Enter your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Photo URL
            </legend>
            <input
              {...register("photo", {
                required: "Photo URL Field is required",
              })}
              type="text"
              className="input w-full bg-[#F3F3F3]"
              placeholder="Enter your Photo URL address"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Email address
            </legend>
            <input
              {...register("email", { required: "Email Field is required" })}
              type="email"
              className="input w-full bg-[#F3F3F3]"
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
          <p
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setAccepted(!accepted)}
          >
            {accepted ? <FaCheckSquare /> : <FaRegSquare />}
            Accept Terms & Conditions
          </p>
          <button className="btn w-full bg-[#403F3F] text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
