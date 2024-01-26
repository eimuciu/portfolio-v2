import styled from 'styled-components';

const StyledModal = styled.div<{ displayModal: boolean }>`
  display: ${({ displayModal }: { displayModal: boolean }) =>
    displayModal ? 'block' : 'none'}; /* Hidden by default */
  /* display: block; */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  text-align: center;
  margin: auto;
  width: 20%;
  padding: 20px 0px;
`;

interface Props {
  displayModal: boolean;
  message: string;
}

export default function Modal({ displayModal, message }: Props) {
  return (
    <StyledModal displayModal={displayModal}>
      <ModalContent>
        <p className="text-[black] text-xl">{message}</p>
      </ModalContent>
    </StyledModal>
  );
}
