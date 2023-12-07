export const getDate = (date: string) => {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");
  return year + "-" + month + "-" + day;
};

export const getDday = (date: string) => {
  const targetDate = new Date(date);
  const today = new Date();

  const dDay = Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (dDay < 0) {
    return `D+${-dDay}`;
  } else {
    return `D-${dDay}`;
  }
};

export const createSenseFormdata = (
  bannerImage: File,
  images: File[],
  commonSense: {
    writerId: number;
    title: string;
    content: string;
    isPublic: string;
  }
) => {
  const formData = new FormData();

  formData.append("bannerImage", bannerImage);

  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }

  const blob = new Blob([JSON.stringify(commonSense)], {
    type: "application/json",
  });

  formData.append("commonSense", blob);

  return formData;
};

export const createOfferImageFormData = (images: File[], offer: any) => {
  const formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    formData.append("itemImages", images[i]);
  }

  const blob = new Blob([JSON.stringify(offer)], {
    type: "application/json",
  });

  formData.append("offer", blob);

  return formData;
};

export const calculateAge = (birthdate: string) => {
  // 입력된 생년월일을 Date 객체로 변환
  const birthDate = new Date(birthdate);

  // 현재 날짜를 얻기
  const currentDate = new Date();

  // 생년월일에서 현재 날짜를 빼서 연도 차이 계산
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // 현재 월과 생년월일의 월을 비교하여 생년월일이 지났는지 확인
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    // 아직 생일이 오지 않은 경우 나이를 1 빼줌
    age--;
  }

  // 계산된 나이를 문자열로 반환
  return age.toString();
};
