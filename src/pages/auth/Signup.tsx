import React from "react";
import { useForm } from "react-hook-form";
import instance from "../../api/util/instance";
import { useNavigate } from "react-router-dom";
import {
  InputSelect,
  InputText,
  InputTitle,
  InputWrapper,
  SubmitButton,
} from "../../styles/pages/auth/Signup.style";
import Swal from "sweetalert2";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onValid = async (data: any) => {
    console.log(data);
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
        Swal.fire({
          text: "회원가입이 완료되었습니다.",
        }).then(() => navigate("/auth/login"));
      }
    } catch (e: any) {
      console.log(e.response.data.message);
      Swal.fire({
        icon: "error",
        text: e.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
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
            <InputTitle>Team</InputTitle>
            <InputSelect {...register("job")}>
              <option value="마케팅 팀">마케팅 팀</option>
              <option value="중개업소 영업 팀">중개업소 영업 팀</option>
              <option value="리서치 팀">리서치 팀</option>
              <option value="부동산 상식 팀">부동산 상식 팀</option>
            </InputSelect>
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
