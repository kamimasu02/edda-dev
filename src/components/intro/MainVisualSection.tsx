import SectionTitle from "@components/commons/SectionTitle";

import { SubTitle } from "@styles/intro/index.style";


function MainVisualSection( ) {
    return (
        <div>
            <SectionTitle
                text={{
                title: "Studio EDDA",
                subTitle: "About",
                }}
                direction="left"
            />

            <SubTitle>
                자신의 경험과 이상을 꿈꾸어라
            </SubTitle>

        </div>
    );
}

export default MainVisualSection;