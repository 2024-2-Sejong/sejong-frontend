import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

// 핸들 인터페이스
export interface StudyRoomCreateModalHandle {
  openModal: () => void;
  closeModal: () => void;
}

// Props 인터페이스 (현재는 필요 없음)
interface StudyRoomCreateModalProps {}

// Styled-components를 이용한 모달 스타일링
const StyledDialog = styled.dialog`
  position: fixed;
  width: 564px;
  height: 630px;
  padding: 24px;
  background: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(31, 23, 23, 0.1);
  z-index: 1000;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const ModalHeader = styled.h2`
  margin: 0 0 16px 0;
  font-size: 24px;
  color: #333;
`;

const ModalSubmitForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ModalInputName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
`;

const StudyRoomCreateModal = forwardRef<
  StudyRoomCreateModalHandle,
  StudyRoomCreateModalProps
>((props, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    openModal() {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    },
    closeModal() {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    },
  }));

  // 모달 내용
  const modalContent = (
    <StyledDialog ref={dialogRef}>
      <ModalHeader>스터디룸 생성하기</ModalHeader>
      <form method="dialog">
        <ModalSubmitForm>
          <div>
            <ModalInputName>스터디룸 이름</ModalInputName>
            <input type="text" placeholder="스터디룸 이름" />
          </div>
          <ModalInputName>카테고리</ModalInputName>
          <div>
            <ModalInputName>소개글</ModalInputName>
            <textarea placeholder="스터디룸 소개글" />
          </div>
        </ModalSubmitForm>
      </form>
    </StyledDialog>
  );

  // createPortal을 사용하여 id="global-modal"로 모달 렌더링
  const modalRoot = document.getElementById("global-modal");
  if (!modalRoot) {
    console.error('Element with id="global-modal" not found.');
    return null;
  }

  return createPortal(modalContent, modalRoot);
});

export default StudyRoomCreateModal;
