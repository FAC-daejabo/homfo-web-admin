import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import instance from "../../api/util/instance";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onValid = async (data: any) => {
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
  };

  return (
    <div>
      <div>
        <TopArea>
          <TextLogoImage src="/text_logo.jpeg" />
        </TopArea>
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

const TopArea = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const TextLogoImage = styled.img`
  width: 116px;
  height: 40px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const InputTitle = styled.span`
  color: #1e293b;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 7px;
  padding-left: 2px;
`;

const InputText = styled.input`
  width: 300px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  padding-left: 7px;
`;

const InputSelect = styled.select`
  width: 300px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  padding-left: 7px;
`;

const SubmitButton = styled.button`
  width: 300px;
  height: 42px;
  border-radius: 8px;
  color: #ffffff;
  background-color: #624bff;
  margin-top: 15px;
`;
