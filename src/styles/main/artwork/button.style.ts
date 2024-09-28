import styled from "styled-components";

// 아트워크 캐릭터 표정 버튼

export const FaceButtonsWrapper = styled.aside`
  display: flex;
  column-gap: 20px;
`;

export const FaceButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 125px;
  padding: 0;
  border: 8px solid transparent;
  cursor: pointer;
`;

export const FaceButtonImage = styled.img`
  object-fit: cover;
`;

// 아트워크 캐릭터 교채 버튼

export const RhobusButtonsWrapper = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  transform: rotate(45deg);
  width: fit-content;
  height: fit-content;
  right: -60px;
  bottom: 100px;
`;

export const RhobusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  padding: 0;
  border: 8px solid transparent;
  cursor: pointer;
`;

export const RhobusButtonImage = styled.img`
  object-fit: cover;
  transform: rotate(-45deg);
`;
