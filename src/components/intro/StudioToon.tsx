import SectionTitle from "@components/commons/SectionTitle";

import {
    StudioToonBox,
    StudioToonWrapper,
    SubTitle,
    ToonDetail,
    ToonItemWrapper,
    ToonItem,
    ToonInfo
} from "@styles/intro/index.style";


function StudioToon({ scrollY }: { scrollY: number }) {
    return (
        <StudioToonBox>
            <StudioToonWrapper>
                <SectionTitle text={{ title: "Studio EDDA", subTitle: "About", }} direction="left" />

                <SubTitle>
                    스튜디오 에다의 개발 트리비아
                </SubTitle>

                <ToonDetail>
                    모두가 기다리는 동안 스튜디오 에다에서는 <br/>
                    어떤 일이 일어나고 있을까요? <br/>
                    스튜디오 에다의 좌충우돌 개발일지, <br/>
                    4컷 만화에 담았습니다!
                </ToonDetail>

                <ToonItemWrapper>
                    <ToonItem>
                        <img src="/images/toon-thumb01.png" alt="Studio EDDA" />
                        <ToonInfo>
                            <p>
                                <strong>1화</strong>
                                <span>DXI 개발하는많화</span>
                            </p>
                        </ToonInfo>
                    </ToonItem>
                </ToonItemWrapper>

            </StudioToonWrapper>
        </StudioToonBox>
    );
}

export default StudioToon;