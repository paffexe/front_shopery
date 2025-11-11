import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { request } from "../../config/request";
import Cookies from "js-cookie";
import Cancel from "../../assets/icons/Cancel";
import LoginB from "../../layouts/ui/Buttons/LoginB";

const Login = () => {
  const { handleSubmit, register, reset, setError } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    request
      .post("/login", data)
      .then((res) => {
        if (res?.data?.accessToken) {
          Cookies.set("token", res?.data?.accessToken);
          navigate("/app");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Password or Emails is inocrrect");

        setError("password", { message: error.response.data });
      });
    reset();
  };

  return (
    <div className="flex items-center justify-center mt-[10%]">
      <div className="w-[590px]  rounded-[20px] shadow-xl border border-[#f6f6f6] flex flex-col items-center justify-center  montserrat px-8 py-10">
        <div className="text-center relative  mb-8">
          <h2 className="font-semibold text-4xl  mb-2.5">Login</h2>
          <p className="font-normal text-[16px] w-[342px] text-[#555555]">
            Use the email and password that you login
          </p>
          <span className="absolute left-[113%] bottom-[50%] bg-[#F5F5F5] rounded-full p-4.5 cursor-pointer">
            <Cancel />
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submit)}
          className="w-[526px] flex items-center justify-center flex-col"
        >
          <div className="mb-3 border border-[#E5E7EA] w-full px-7.5 py-4.5 rounded-[82px] ">
            <input
              placeholder="email"
              {...register("email", { required: true })}
              type="Email"
              defaultValue={"ramer17845@duiter.com"} // default values
              className="w-full outline-0 text-[#555555] text-[18px]"
            />
          </div>
          <div className="mb-3 border border-[#E5E7EA] w-full px-7.5 py-4.5 rounded-[82px]">
            <input
              placeholder="password"
              {...register("password", { required: true })}
              type="Password"
              defaultValue={"123456"} // default values
              className="w-full outline-0 text-[#555555] text-[18px] "
            />
          </div>
          <LoginB typeProps={"submit"}>Send</LoginB>
        </form>
        <p className="mt-2">Backend server telegramdan yuborilgan</p>
      </div>
    </div>
  );
};

export default Login;
