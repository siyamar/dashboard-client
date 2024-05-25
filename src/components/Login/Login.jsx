"use client"
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
// import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
// import SocialLogin from "../../components/SocialLogin/SocialLogin";
const Login = () => {
//   const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const router = useRouter()
  // const navigate = useNavigate();
  // const locatin = useLocation();

  // const from = locatin.state?.from?.pathname || "/";
//   console.log('State in the location login page.', locatin.state)

//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `User Login Successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });
      // navigate(from, {replace: true})
      router.push('/')
      localStorage.setItem('email', email);
    });
  };

//   const handleValidateCaptcha = (e) => {
//     const user_captcha_value = e.target.value;
//     if (validateCaptcha(user_captcha_value)) {
//       setDisabled(false);
//     }
//   };
  return (
    <>
      {/* <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet> */}
      <div className="hero min-h-screen lg:min-h-[550px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
              </div> */}
              {/* TODO: apply disabled for re captcha */}
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            {/* <p className="mx-auto">
              <small>
                New here?{" "}
                <Link className="text-blue-600" to={"/signUp"}>
                  create an account
                </Link>
              </small>
            </p> */}
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
