import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import instance from "../../api/util/instance";
import { useNavigate } from "react-router-dom";
import {
  InputSelect,
  InputText,
  InputTitle,
  InputWrapper,
  SubmitButton,
} from "../../styles/pages/auth/Signup.style";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onValid = async (data: any) => {
    try {
      const response = await instance.post("/admins/users/sign-up", {
        userAccount: data.userAccount,
        userPassword: data.userPassword,
        nickName: data.nickName,
        userPhoneNum: data.userPhoneNum,
        gender: data.gender,
        job: data.job,
        dateOfBirth: data.dateOfBirth,
      });
      console.log(response);
      if (response.status === 201) {
        navigate("/auth/login");
      }
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onValid)}>
          <InputWrapper>
            <InputTitle>ID</InputTitle>
            <InputText
              {...register("userAccount")}
              type="text"
              placeholder="아이디를 입력해주세요."
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Password</InputTitle>
            <InputText
              {...register("userPassword")}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Nickname</InputTitle>
            <InputText
              {...register("nickName")}
              type="text"
              placeholder="닉네임을 입력해주세요."
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Phone Number</InputTitle>
            <InputText
              {...register("userPhoneNum")}
              type="text"
              placeholder="ex) 010-1234-5678"
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Gender</InputTitle>
            <InputSelect {...register("gender")}>
              <option value="M">남</option>
              <option value="W">여</option>
            </InputSelect>
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Job</InputTitle>
            <InputText
              {...register("job")}
              type="text"
              placeholder="직업을 입력해주세요."
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Birth</InputTitle>
            <InputText {...register("dateOfBirth")} type="date" />
          </InputWrapper>
          <SubmitButton>Signup</SubmitButton>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Signup;
