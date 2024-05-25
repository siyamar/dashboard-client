"use client";
import { AuthContext } from "@/Providers/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateUser = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser, user } = useContext(AuthContext);
  const router = useRouter()
  if(!user){
    router.push('/login')
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email= form.email.value;
    const password= form.password.value;
    const userInfo = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      role: form.role.value
    };
    createUser (email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    try {
        const userRes = await axios.post("http://localhost:5000/users", userInfo);
        if (userRes.data.insertId) {
          // Show success popup
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${userInfo.name} user Added Successfully !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } 
      catch (error) {
        // Handle error response
        // setError(error.response.data.error);
        if(error.response.data.error){
            reset();
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${userInfo.name} user already Added !!!`,
                showConfirmButton: false,
                timer: 1500,
              });
        }
      }
  };
  return (
    <>
      <div className="hero min-h-screen lg:min-h-[550px] bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold mb-3">Create User</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              neque libero explicabo repudiandae tempore, nostrum cum sit
              voluptatum omnis! Non ipsum sit voluptatibus, quas odio laborum
              sint magni dignissimos officiis quasi, beatae unde. Id voluptatum
              in voluptates similique hic harum?
            </p>
          </div>
          <div className="card md:w-1/4 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter user name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
              <label className="label">
                  <span className="label-text">Select User Rule</span>
                </label>
                <select 
                className="select select-bordered w-full max-w-xs"
                name='role'>
                  <option disabled selected>
                    Select Rule
                  </option>
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div>
              {/* <div>
              <label className="label">
                  <span className="label-text">Select User Rule</span>
                </label>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold">User</span>
                    <input
                      type="radio"
                      name="rule"
                      className="radio checked:bg-blue-500"
                      checked
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold">Admin</span>
                    <input
                      type="radio"
                      name="rule"
                      className="radio checked:bg-blue-500"
                      checked
                    />
                  </label>
                </div>
              </div> */}
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="Create"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;


