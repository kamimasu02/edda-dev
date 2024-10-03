import SectionTitle from "@components/commons/SectionTitle";

import { IntroMain, IntroMainImage, IntroMainVisual, IntroMainWrapper, IntroMainText, IntroSubText, IntroDetail } from "@styles/intro/index.style";

function MainVisual() {
    return (
        <IntroMain>       

            <IntroMainImage></IntroMainImage>
            <IntroMainVisual></IntroMainVisual>
            
            <IntroMainWrapper>
                <IntroMainText> Dream </IntroMainText>
                <IntroSubText> Your </IntroSubText>
                <SectionTitle text={{ title: "Xperience", subTitle: "Studio", }} direction="left" />
                <IntroSubText> and </IntroSubText>
                <SectionTitle text={{ title: "Ideal", subTitle: "EDDA", }} direction="right" />
                <IntroDetail>자신의 경험과 이상을 꿈꾸어라</IntroDetail>
            </IntroMainWrapper>
            

        </IntroMain>
    );
}

export default MainVisual;