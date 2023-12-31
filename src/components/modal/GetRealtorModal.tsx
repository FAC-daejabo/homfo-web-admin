import React from "react";
import ReactModal from "react-modal";
import RealtorSearchArea from "../area/RealtorSearchArea";
import { FlexRowCenter } from "../../styles/util";
import { CancelButton } from "../../styles/pages/common-sense/register/SenseRegister.style";

const GetRealtorModal = ({
  realtorModalOpen,
  setRealtorModalOpen,
}: {
  realtorModalOpen: boolean;
  setRealtorModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ReactModal
      isOpen={realtorModalOpen}
      onRequestClose={() => {
        setRealtorModalOpen(false);
      }}
      style={customModalStyles}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <RealtorSearchArea />
      <FlexRowCenter>
        <CancelButton
          style={{ marginTop: "10px" }}
          onClick={() => setRealtorModalOpen(false)}
        >
          닫기
        </CancelButton>
      </FlexRowCenter>
    </ReactModal>
  );
};

export default GetRealtorModal;

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "80%",
    height: "87%",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
};
