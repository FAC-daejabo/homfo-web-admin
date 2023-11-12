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

  return `D-${Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  )}`;
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
