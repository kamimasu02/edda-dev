import "./title.css";

import type { FC } from "react";

interface TitleProps {
  title: string;
  subTitle?: string;
  direction?: "left" | "right";
}

const SectionTitle: FC<TitleProps> = ({ title, subTitle, direction }) => {
  return (
    <div className="title-wrapper">
      {subTitle && direction === "left" && (
        <div className="title-tag-wrapper">
          <div className="title-tag title-tag--left">
            <span>{subTitle}</span>
          </div>
        </div>
      )}
      <div className="title-text-wrapper">
        <span className="title-text">{title}</span>
        <div className="title-background">
          {subTitle && direction === "left" && (
            <div className="title-background-bottom title-background-bottom--edge"></div>
          )}
          <div className="title-background-bottom title-background-bottom--middle"></div>
          {subTitle && direction === "right" && (
            <div className="title-background-bottom title-background-bottom--edge"></div>
          )}
        </div>
      </div>
      {subTitle && direction === "right" && (
        <div className="title-tag-wrapper">
          <div className="title-tag title-tag--right">
            <span>{subTitle}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
