"use client";
import React, { useEffect, useState } from "react";
import UsersApis from "../../../_Utils/UsersApis";
import { useRouter } from "next/navigation";


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState();
  const userDone = true;
  const userNot = false;
  //setUserExists(userNot);

  const router = useRouter();
  useEffect(() => {
    setUserExists(userNot);
  }, []);
  console.log("user in start is  ", userExists);

  const handelEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handelPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await UsersApis.getAllusers();
      const allUsers = response.data;
      const emailExists = allUsers.some((user) => user.email === email);
      const passExists = allUsers.some((user) => user.password === password);

      console.log(allUsers);

      if (emailExists) {
        console.log(`The email ${email} is in the array`);
        if (passExists) {
          console.log(`The password for ${password} is correct`);
          console.log("Login successful");
          setUserExists(userDone);
          router.push(`/home?userExists=${userDone}`);
        } else {
          console.log(`The password for ${password} is incorrect`);
          setUserExists(false);
        }
      } else {
        console.log(`The email ${email} is not in the array`);
        setUserExists(false);
      }
    } catch (error) {
      console.error("Error when getting all users", error);
    }
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          action="#"
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                onChange={handelEmailChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                onChange={handelPasswordChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <a className="underline" href="#">
                Sign up
              </a>
            </p>
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Email Is : "john@gmail.com"</p>
            <p className="text-sm text-gray-500">Password Is : "m38rmF$"</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Email Is : "morrison@gmail.com"</p>
            <p className="text-sm text-gray-500">Password Is : "83r5^_"</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Email Is : "kevin@gmail.com"</p>
            <p className="text-sm text-gray-500">Password Is : "kev02937@"</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Email Is : "don@gmail.com"</p>
            <p className="text-sm text-gray-500">Password Is : "ewedon"</p>
          </div>
        </form>
      </div>
      
    </>
  );
}

export default SignIn;
