import styled from "styled-components";

export const ArtworkWrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 200px;

  & > div:not(:last-child),
  article {
    z-index: 2;
  }
`;

export const ArtworkBackground = styled.div<{
  $color: string;
}>`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80%;
  height: 100%;

  &::after {
    position: absolute;
    right: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${({ $color }) => $color};
    -webkit-clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
  }
`;

export const ArtworkContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ArtworkArticle = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
