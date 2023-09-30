import React from "react";
import {
  InputText,
  InputTitle,
  InputWrapper,
  SubmitButton,
} from "../../styles/pages/auth/Signup.style";
import { useForm } from "react-hook-form";
import instance from "../../api/util/instance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onValidLogin = async (data: any) => {
    try {
      const response = await instance.post("/admins/users/sign-in", {
        userAccount: data.userAccount,
        userPassword: data.userPassWord,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValidLogin)}>
        <InputWrapper>
          <InputTitle>ID</InputTitle>
          <InputText {...register("userAccount")} type="text" />
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Password</InputTitle>
          <InputText {...register("userPassWord")} type="password" />
        </InputWrapper>
        <SubmitButton>Signin</SubmitButton>
      </form>
    </div>
  );
};

export default Login;
