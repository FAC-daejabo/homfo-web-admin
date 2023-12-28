import instance from "../util/instance";

export const getOfferDetail = async (offerId: number) => {
  const response = await instance.get(`/admins/offers/${offerId}/info`);
  console.log(response);
};
