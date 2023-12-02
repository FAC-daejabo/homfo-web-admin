import styled from "styled-components";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { realtorModalAtom } from "../../stores/modalAtom";
import GetRealtorModal from "../../components/modal/GetRealtorModal";
import RealtorSearchArea from "../../components/area/RealtorSearchArea";
import {
  agencyIdAtom,
  agencyNameAtom,
  agencyNumberAtom,
  areaAtom,
  areaIdInputAtom,
  chairmanNameAtom,
  deductionAtom,
  isOpenAtom,
  lotAddressAtom,
  noteAtom,
  phoneNumberAtom,
  realtorNameAtom,
  realtorNumberAtom,
  roadAddressAtom,
} from "../../stores/realtorAtom";
import { useEffect, useState } from "react";
import { getAreas } from "../../api/area/api";
import { IArea } from "../../interfaces/RequestInterface";
import { putRealtor } from "../../api/realtor/api";

const AgencyInfo = () => {
  const [realtorModalOpen, setRealtorModalOpen] =
    useRecoilState(realtorModalAtom);
  const [agencyName, setAgencyName] = useRecoilState(agencyNameAtom);
  const [agencyId, setAgencyId] = useRecoilState(agencyIdAtom);
  const [agencyNumber, setAgencyNumber] = useRecoilState(agencyNumberAtom);
  const [realtorName, setRealtorName] = useRecoilState(realtorNameAtom);
  const [realtorNumber, setRealtorNumber] = useRecoilState(realtorNumberAtom);
  // const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberAtom);
  const [area, setArea] = useRecoilState(areaAtom);
  const [areaId, setAreaId] = useRecoilState(areaIdInputAtom);
  const [isOpen, setIsOpen] = useRecoilState(isOpenAtom);
  const [roadAddress, setRoadAddress] = useRecoilState(roadAddressAtom);
  const [lotAddress, setLotAddress] = useRecoilState(lotAddressAtom);
  const [chairmanName, setChairmanName] = useRecoilState(chairmanNameAtom);
  const [deduction, setDeduction] = useRecoilState(deductionAtom);
  const [note, setNote] = useRecoilState(noteAtom);
  const [areas, setAreas] = useState<IArea[]>([]);

  console.log(agencyName);
  console.log(agencyId);
  console.log(agencyNumber);
  console.log(realtorName);
  console.log(realtorNumber);
  // console.log(phoneNumber);
  console.log(areaId);
  console.log(isOpen);
  console.log(roadAddress);
  console.log(lotAddress);
  console.log(chairmanName);
  console.log(deduction);
  console.log(note);

  console.log(areas);

  useEffect(() => {
    getAreas(setAreas);
  }, []);

  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>중개업소 정보 등록</PageTitle>
      </PageHeaderWrapper>
      <InfoContainer>
        <InputArea>
          <InputContainer>
            <InputTitle>1. 사무실 이름</InputTitle>
            <Input
              type="text"
              value={agencyName}
              onChange={(e) => setAgencyName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>2. 사무실 등록번호</InputTitle>
            <Input
              type="text"
              value={agencyId}
              onChange={(e) => setAgencyId(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>3. 사무실 연락처</InputTitle>
            <Input
              type="text"
              value={agencyNumber}
              onChange={(e) => setAgencyNumber(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>4. 공인중개사 이름</InputTitle>
            <Input
              type="text"
              value={realtorName}
              onChange={(e) => setRealtorName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>5. 공인중개사 연락처</InputTitle>
            <Input
              placeholder="ex) 010-1234-5678"
              type="text"
              value={realtorNumber}
              onChange={(e) => setRealtorNumber(e.target.value)}
            />
          </InputContainer>
        </InputArea>
        <InputArea>
          {/* <InputContainer>
            <InputTitle>6. 연락처</InputTitle>
            <Input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputContainer> */}
          <InputContainer>
            <InputTitle>6. 해당 구역</InputTitle>
            <Select
              value={areaId as number}
              onChange={(e) => setAreaId(e.target.value as any)}
            >
              {areas.map((area) => (
                <option value={area.areaId}>{area.name}</option>
              ))}
            </Select>
          </InputContainer>
          <InputContainer>
            <InputTitle>7. 개업/소속 구분</InputTitle>
            <Select
              value={isOpen ? "개업" : "소속"}
              onChange={(e) =>
                setIsOpen(e.target.value === "개업" ? true : false)
              }
            >
              <option value="개업">개업</option>
              <option value="소속">소속</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <InputTitle>8. 도로명 주소</InputTitle>
            <Input
              type="text"
              value={roadAddress}
              onChange={(e) => setRoadAddress(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>9. 지번 주소</InputTitle>
            <Input
              type="text"
              value={lotAddress}
              onChange={(e) => setLotAddress(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>10. 대표자명</InputTitle>
            <Input
              type="text"
              value={chairmanName}
              onChange={(e) => setChairmanName(e.target.value)}
            />
          </InputContainer>
        </InputArea>
        <RegisterArea>
          <ButtonArea>
            <LoadButton
              onClick={() => {
                setRealtorModalOpen(true);
              }}
            >
              불러오기
            </LoadButton>
            <RegisterButton
              onClick={() => {
                putRealtor(
                  agencyName,
                  agencyId,
                  agencyNumber,
                  realtorName,
                  realtorNumber,
                  areaId,
                  isOpen,
                  roadAddress,
                  lotAddress,
                  chairmanName,
                  deduction,
                  note
                ).then(() => {
                  Swal.fire({
                    text: "중개업소 정보가 등록되었습니다.",
                  }).then(() => {
                    setAgencyName("");
                    setAgencyId("");
                    setAgencyNumber("");
                    setRealtorName("");
                    setRealtorNumber("");
                    // setPhoneNumber("");
                    setAreaId(null);
                    setIsOpen(true);
                    setRoadAddress("");
                    setLotAddress("");
                    setChairmanName("");
                    setDeduction(false);
                    setNote("");
                  });
                });
              }}
            >
              등록
            </RegisterButton>
          </ButtonArea>
          <div>
            <InputContainer>
              <InputTitle>11. 공제 가입 유무</InputTitle>
              <Select
                value={deduction ? "예" : "아니오"}
                onChange={(e) =>
                  setDeduction(e.target.value === "예" ? true : false)
                }
              >
                <option value="아니오">아니오</option>
                <option value="예">예</option>
              </Select>
            </InputContainer>
            <InputContainerTwo>
              <InputTitle>12. 비고</InputTitle>
              <TextArea
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></TextArea>
            </InputContainerTwo>
          </div>
        </RegisterArea>
      </InfoContainer>
      <PageHeaderWrapper>
        <PageTitle>협력 중개업소 목록</PageTitle>
      </PageHeaderWrapper>
      <RealtorSearchArea />
      <GetRealtorModal
        realtorModalOpen={realtorModalOpen}
        setRealtorModalOpen={setRealtorModalOpen}
      />
    </>
  );
};

export default AgencyInfo;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  border-radius: 5px;
  height: 360px;
  padding: 20px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 20px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-right: 1px solid #212121;
  padding: 0 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const InputContainerTwo = styled(InputContainer)`
  margin-bottom: 0;
`;

const InputTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  border: 1px solid #212121;
  font-size: 16px;
  border-radius: 2px;
  padding: 6px;
  height: 100px;
`;

const Input = styled.input`
  border: 1px solid #212121;
  font-size: 14px;
  border-radius: 4px;
  padding: 5px;
  height: 30px;
`;

const RegisterArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 0 20px;
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RegisterButton = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 5px;
  background-color: #624bff;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  margin-left: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const LoadButton = styled(RegisterButton)`
  background-color: #637381;
`;

const Select = styled.select`
  height: 30px;
  border-radius: 4px;
  border: 1px solid #212121;
  padding: 2px;
  color: #212121;
  font-size: 14px;
`;
