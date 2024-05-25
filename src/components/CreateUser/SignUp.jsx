"use client"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = async (data1) => {
    console.log(data1);
    createUser (data1.email, data1.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
     
         
        //   axiosPublic.post("/users", userInfo).then((res) => {
        //     if (res.data.insertedId) {
        //       reset();
        //       Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "User created Succesfully.",
        //         showConfirmButton: false,
        //         timer: 1500,
        //       });
        //       navigate("/");
        //     }
        //   });
        // })
        // .catch((error) => console.log(error));
    });
     // create user entry in the database.
     const userInfo = {
        name: data1.name,
        email: data1.email,
        password: data1.password,
        role: data1.role
      };

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
          navigate("/");
        }
      } catch (error) {
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
      <div className="hero min-h-screen lg:min-h-[570px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Create User!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full md:w-1/3 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  name="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&+*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLenngth" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less then 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have 1 uppercase, 1 lowercase, 1 number and 1
                    special character
                  </span>
                )}
               
              </div>
              <div>
              <label className="label">
                  <span className="label-text">Select User Role</span>
                </label>
                <select 
                 className="select select-bordered w-full max-w-xs"
                 {...register("role", { required: true })}
                 required
                name='role'>
                  <option disabled selected>
                    Select Rule
                  </option>
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary"
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

export default SignUp;
