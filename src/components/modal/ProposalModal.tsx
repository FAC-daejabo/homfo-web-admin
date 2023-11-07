import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

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
    height: "90%",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "space-between",
    overflow: "auto",
    display: "flex",
  },
};

const ProposalModal = ({
  modalOpen,
  setModalOpen,
  message,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}) => {
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={true}
    >
      <RequestArea></RequestArea>
      <ProposalArea></ProposalArea>
    </ReactModal>
  );
};

export default ProposalModal;

const RequestArea = styled.div`
  height: 100%;
  width: 40%;
  border: 1px solid #aeaeae;
  border-radius: 12px;
`;

const ProposalArea = styled.div`
  height: 100%;
  width: 55%;
  border: 1px solid #aeaeae;
  border-radius: 12px;
`;
