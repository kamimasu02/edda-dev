import SpeechBubble from "@assets/images/svgs/bubble.svg";
import SpeechTriangle from "@assets/images/svgs/bubble-triangle.svg";

import {
  SpeechBubbleWrapper,
  SpeechBubbleTriangleImage,
  SpeechBubbleTextWrapper,
  SpeechBubbleText,
  SpeechBubbleDoubleQuote,
} from "@styles/main/artwork/speech-bubble.style";

import type { FC } from "react";

interface ArtworkSpeechBubbleProps {
  quotation: string;
  colors: {
    quote: string;
    strong: string;
    shadow: string;
  };
}

const ArtworkSpeechBubble: FC<ArtworkSpeechBubbleProps> = ({
  quotation,
  colors,
}) => {
  return (
    <SpeechBubbleWrapper>
      <SpeechBubbleTextWrapper
        className="pc"
        $image={SpeechBubble}
        $shadow={colors.shadow}
      >
        <SpeechBubbleDoubleQuote
          $fill={colors.quote}
          $left={50}
          $top={50}
          width="40"
          height="28"
          viewBox="0 0 40 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.0522 2.23218C14.0294 3.16225 8.35237 6.44852 6.98206 12.711H15.7259V27.7162H0V18.6015C0.130506 5.82847 11.354 1.17809 15.1387 0L16.1175 2.23218H16.0522Z" />
          <path d="M40 2.23218C37.9772 3.16225 32.3002 6.44852 30.9299 12.711H39.6738V27.7162H23.8826V18.6015C24.0131 5.82847 35.2366 1.17809 39.0212 0L40 2.23218Z" />
        </SpeechBubbleDoubleQuote>
        <SpeechBubbleText
          $color={colors.strong}
          dangerouslySetInnerHTML={{ __html: quotation }}
        />
        <SpeechBubbleDoubleQuote
          $fill={colors.quote}
          $right={50}
          $bottom={50}
          $rotate={180}
          width="40"
          height="28"
          viewBox="0 0 40 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.0522 2.23218C14.0294 3.16225 8.35237 6.44852 6.98206 12.711H15.7259V27.7162H0V18.6015C0.130506 5.82847 11.354 1.17809 15.1387 0L16.1175 2.23218H16.0522Z" />
          <path d="M40 2.23218C37.9772 3.16225 32.3002 6.44852 30.9299 12.711H39.6738V27.7162H23.8826V18.6015C24.0131 5.82847 35.2366 1.17809 39.0212 0L40 2.23218Z" />
        </SpeechBubbleDoubleQuote>
      </SpeechBubbleTextWrapper>
      <SpeechBubbleTriangleImage src={SpeechTriangle} alt="말풍선 꼬리" />
    </SpeechBubbleWrapper>
  );
};

export default ArtworkSpeechBubble;
