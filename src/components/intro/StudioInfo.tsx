import SectionTitle from "@components/commons/SectionTitle";

import {
    StudioInfoBox,
    StudioInfoWrapper,
    SubTitle,
    IntroBoxWrapper,
    IntroHarfBoxLeft,
    IntroHarfBoxRight,
    StudioLogo,
    IntroFullBox,
    FullBoxLogo,
    StudioVisualBehind,
    StudioVisualFoward,
} from "@styles/intro/index.style";

function StudioInfo() {
    return (
        <StudioInfoBox>
            <StudioInfoWrapper>
                <SectionTitle
                    text={{
                        title: "Studio EDDA",
                        subTitle: "About",
                    }}
                    direction="left"
                />

                <SubTitle>자신의 경험과 이상을 꿈꾸어라</SubTitle>

                <IntroBoxWrapper>
                    <IntroHarfBoxLeft>
                        <StudioLogo>
                            <img src="/images/studio-logo-2.png" alt="Studio EDDA" />
                        </StudioLogo>
                        <p>
                            에다라는 이름은 북유럽 신화의 서사집 <strong>에다(Edda)</strong>와<br />
                            일본어로 가지를 뜻하는 <strong>에다(えだ)</strong>에서 따왔습니다.
                        </p>
                    </IntroHarfBoxLeft>
                    <IntroHarfBoxRight>
                        <StudioLogo>
                            <img src="/images/studio-logo-1.png" alt="Studio EDDA" />
                        </StudioLogo>
                        <p>
                            스튜디오 에다의 로고는{" "}
                            <strong>
                                가지처럼 나뉘어가는
                                <br />
                                수많은 이야기
                            </strong>
                            의 모습을 상징합니다.
                        </p>
                    </IntroHarfBoxRight>
                </IntroBoxWrapper>

                <IntroFullBox>
                    <FullBoxLogo>
                        <img src="/images/studio-logo-full.png" alt="Studio EDDA" />
                    </FullBoxLogo>

                    <p>
                        <b>상상 그 자체</b>를 현실로 만들어내는 <br />
                        <strong>스튜디오 에다</strong>가 되겠습니다.
                    </p>
                </IntroFullBox>
            </StudioInfoWrapper>
            <StudioVisualBehind></StudioVisualBehind>
            <StudioVisualFoward></StudioVisualFoward>
        </StudioInfoBox>
    );
}

export default StudioInfo;
