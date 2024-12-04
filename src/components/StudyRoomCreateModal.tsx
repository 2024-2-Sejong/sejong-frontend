import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import CategoryIcon from "./CategoryIcon";
import { useForm } from "react-hook-form"; // react-hook-form 사용

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
  height: 650px;
  padding: 48px 57px;
  background: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(31, 23, 23, 0.1);
  z-index: 1000;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const ModalHeader = styled.h2`
  color: var(--primary-color);
  font-family: SUIT;
  font-size: 20px;
  font-weight: 800;
  line-height: 20px;
  margin-bottom: 52px;
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

const ModalInputContainer = styled.div`
  display: flex;
  margin-bottom: 68px;
`;

const NameContainer = styled(ModalInputContainer)`
  gap: 40px;
  align-items: center;
`;

const NameInput = styled.input`
  border: 1px solid rgba(188, 188, 188, 1);
  width: 322px;
  height: 44px;
  border-radius: 4px;
  padding: 15px;
`;

const CategoryContainer = styled(ModalInputContainer)`
  gap: 20px;
  align-items: center;
  position: relative;
`;

const CategoryButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 24px;
  border: none;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  background: white;
  border: 1px solid rgba(188, 188, 188, 1);
  border-radius: 4px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 8px 0;
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const IntroduceContainer = styled(ModalInputContainer)`
  flex-direction: column;
  gap: 20px;
`;

const IntroduceTextArea = styled.textarea`
  border: 1px solid rgba(188, 188, 188, 1);
  width: 450px;
  height: 120px;
  border-radius: 4px;
  padding: 15px;
  resize: none;
  outline: none;
`;

const CreateStudyButton = styled.button`
  width: 158px;
  height: 50px;
  border-radius: 100px;
  align-self: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: var(--primary-color);
`;

interface ModalFormProps {
  name: string;
  introduce: string;
}

const StudyRoomCreateModal = forwardRef<
  StudyRoomCreateModalHandle,
  StudyRoomCreateModalProps
>((props, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { register, handleSubmit } = useForm<ModalFormProps>(); // react-hook-form 사용

  const categories = ["카테고리1", "카테고리2", "카테고리3", "카테고리4"];

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

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  // 폼 제출 시 호출되는 함수
  const onSubmit = (data: ModalFormProps) => {
    if (!selectedCategory) {
      alert("카테고리를 선택해주세요.");
    } else {
      console.log(data, selectedCategory);
      // 폼 제출 로직 추가 (백엔드로 보내는 등)
      if (dialogRef.current) {
        dialogRef.current.close(); // 모달 닫기
        toggleDropdown();
      }
    }
  };

  const handleCloseClick = () => {
    dialogRef.current?.close(); // 모달 닫기
    toggleDropdown();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setDropdownOpen(false); // 드롭다운 닫기
      if (dialogRef.current) {
        dialogRef.current.close(); // 모달 닫기
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // 모달 내용
  const modalContent = (
    <StyledDialog ref={dialogRef}>
      <ModalSubmitForm onSubmit={handleSubmit(onSubmit)}>
        <CloseButton type="button" onClick={handleCloseClick}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 12.0004L7.99982 6.00018L5.99982 8.00018L12 14.0004L6.00018 20.0002L8.00018 22.0002L14 16.0004L19.9998 22.0002L21.9998 20.0002L16 14.0004L22.0002 8.00018L20.0002 6.00018L14 12.0004Z"
              fill="#0D1116"
            />
          </svg>
        </CloseButton>
        <ModalHeader>스터디룸 생성하기</ModalHeader>

        <NameContainer>
          <ModalInputName>스터디룸 이름</ModalInputName>
          <NameInput
            type="text"
            placeholder="스터디룸 이름"
            {...register("name", { required: true })}
          />
        </NameContainer>
        <CategoryContainer>
          <ModalInputName>카테고리</ModalInputName>
          {selectedCategory && (
            <CategoryIcon
              text={selectedCategory}
              bgColor="rgba(0, 0, 0, 0.7)"
            ></CategoryIcon>
          )}
          {isDropdownOpen && (
            <DropdownMenu>
              {categories.map((category) => (
                <DropdownItem
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
          <CategoryButton type="button" onClick={toggleDropdown}>
            +
          </CategoryButton>
        </CategoryContainer>
        <IntroduceContainer>
          <ModalInputName>소개글</ModalInputName>
          <IntroduceTextArea
            placeholder="스터디룸 소개글"
            {...register("introduction")}
          />
        </IntroduceContainer>
        <CreateStudyButton type="submit">스터디 생성하기</CreateStudyButton>
      </ModalSubmitForm>
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
