import Swal from "sweetalert2";
import { IUser } from "../../interfaces/UserInterface";
import instance from "../util/instance";
import { ISense } from "../../interfaces/SenseInterface";
import { createSenseFormdata } from "../../utils/util";
import {
  IArea,
  IRequest,
  IRequestDetail,
} from "../../interfaces/RequestInterface";
import React from "react";
import { IOffer } from "../../interfaces/OfferInterface";

export const getApplyList = async (
  setUserList: React.Dispatch<React.SetStateAction<IUser[]>>
) => {
  try {
    const response = await instance.get("admins/users/sign-up/approve");
    console.log(response.data.data);
    setUserList(response.data.data);
  } catch (e: any) {
    Swal.fire({
      icon: "error",
      text: e.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const approveSignup = async (userId: number, nickName: string) => {
  try {
    const result = await Swal.fire({
      text: `${nickName}님을 승인하시겠습니까?`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "예",
      denyButtonText: "아니오",
    });

    if (result.isConfirmed) {
      const response = await instance.patch("admins/users/sign-up/approve", {
        userId: userId,
      });

      console.log(response);

      Swal.fire({
        text: "승인이 완료되었습니다.",
      });
    }
  } catch (e: any) {
    Swal.fire({
      icon: "error",
      text: e.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const getApprovedList = async (
  adminId: string | null,
  setApprovedList: React.Dispatch<React.SetStateAction<IUser[]>>
) => {
  try {
    const response = await instance.get(`admins/users/${adminId}/search`, {
      params: {
        page: 0,
        size: 10,
        firstView: true,
        role: "관리자",
      },
    });
    console.log(response);
    setApprovedList(response.data.data);
  } catch (e: any) {
    Swal.fire({
      icon: "error",
      text: e.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const getUserList = async (
  adminId: string | null,
  setUserList: React.Dispatch<React.SetStateAction<IUser[]>>
) => {
  try {
    const response = await instance.get(`admins/users/${adminId}/search`, {
      params: {
        page: 0,
        size: 10,
        firstView: true,
        role: "회원",
      },
    });
    console.log(response);
    setUserList(response.data.data);
  } catch (e: any) {
    Swal.fire({
      icon: "error",
      text: e.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const getSenses = async (
  setSenses: React.Dispatch<React.SetStateAction<ISense[]>>
) => {
  try {
    const response = await instance.get("admins/senses");
    console.log(response.data.data);
    setSenses(response.data.data);
  } catch (e: any) {
    Swal.fire({
      icon: "error",
      text: e.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const postSense = async (
  bannerImage: File,
  images: File[],
  commonSense: {
    writerId: number;
    title: string;
    content: string;
    isPublic: string;
  }
) => {
  try {
    const response = await instance.post(
      "admins/senses",
      createSenseFormdata(bannerImage, images, commonSense),
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
  } catch (e: any) {
    Swal.fire({
      text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const convertImagesUrlToFile = async (
  images: string[],
  setPosterList: React.Dispatch<React.SetStateAction<File[]>>
) => {
  const tempList = [];

  for (let i = 0; i < images.length; i++) {
    const response = await fetch(images[i]);
    const imageBlob = await response.blob();
    const imageFile = new File([imageBlob], "posterImage", {
      type:
        imageBlob.type === "image/png"
          ? "image/png"
          : imageBlob.type === "image/jpeg"
          ? "image/jpeg"
          : "image",
    });
    tempList.push(imageFile);
  }

  console.log(tempList);
  setPosterList(tempList);
};

export const converBannerUrlToFile = async (
  bannerImage: string,
  setBanner: React.Dispatch<React.SetStateAction<File>>
) => {
  const response = await fetch(bannerImage);
  const imageBlob = await response.blob();
  const imageFile = new File([imageBlob], "bannerImage", {
    type:
      imageBlob.type === "image/png"
        ? "image/png"
        : imageBlob.type === "image/jpeg"
        ? "image/jpeg"
        : "image",
  });

  setBanner(imageFile);
};

export const modifySense = async (
  senseId: number,
  bannerImage: File,
  images: File[],
  commonSense: {
    writerId: number;
    title: string;
    content: string;
    isPublic: string;
  }
) => {
  try {
    const response = await instance.patch(
      `admins/senses/${senseId}`,
      createSenseFormdata(bannerImage, images, commonSense),
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
  } catch (e: any) {
    Swal.fire({
      text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const suspendUser = async (userId: number, adminId: number) => {
  try {
    const response = await instance.patch(`admins/users/${adminId}/stop`, {
      userId: userId,
    });
    console.log(response);
    if (response.status === 200) {
      Swal.fire({
        text: "정지 처리가 완료되었습니다.",
      });
    }
  } catch (e: any) {
    Swal.fire({
      text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const getRequests = async (
  matchStatus: "매물 파악 완료" | "매물 파악 중" | "신청 완료" | undefined,
  setRequests: React.Dispatch<React.SetStateAction<IRequest[]>>
) => {
  try {
    const response = await instance.get("/admin/requests/search", {
      params: {
        page: 0,
        size: 1000,
        firstView: true,
        matchStatus: matchStatus,
      },
    });
    console.log(response.data.data);
    setRequests(response.data.data);
  } catch (e: any) {
    Swal.fire({
      text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      showConfirmButton: true,
    });
  }
};

export const getRequestDetail = async (
  requestId: number,
  setRequestDetail: React.Dispatch<React.SetStateAction<IRequestDetail>>,
  setAreaId: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    const response = await instance.get(`/admin/requests/${requestId}/info`);
    console.log(response);
    setRequestDetail(response.data);
    setAreaId(response.data.areaId);
  } catch (e: any) {
    Swal.fire({
      text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      showConfirmButton: true,
    });
  }
};

export const getAreaDetail = async (
  areaId: number,
  setAreaDetail: React.Dispatch<React.SetStateAction<IArea>>
) => {
  try {
    const response = await instance.get(`/transports/${areaId}/area/detail`);
    console.log(response);
    setAreaDetail(response.data.area);
  } catch (e: any) {
    Swal.fire({
      text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      showConfirmButton: true,
    });
  }
};

export const getOffers = async (
  setOffers: React.Dispatch<React.SetStateAction<IOffer[]>>
) => {
  try {
    const response = await instance.get("/admins/offers/search", {
      params: {
        page: 0,
        size: 100,
        firstView: true,
      },
    });
    console.log(response);
    setOffers(response.data.data);
  } catch (e: any) {
    Swal.fire({
      text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      showConfirmButton: true,
    });
  }
};

export const getToken = () => {
  if (window.localStorage.getItem("token")) {
    return window.localStorage.getItem("token");
  }
};
