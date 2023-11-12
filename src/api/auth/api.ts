import Swal from "sweetalert2";
import { IUser } from "../../interfaces/UserInterface";
import instance from "../util/instance";

export const getUserList = async (
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
