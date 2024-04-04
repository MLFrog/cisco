import styled from "styled-components";
import {useSensorQuery} from "../../../querykey/sensorQuery";

const StatRootArea = () => {

    const {data: sensorData} = useSensorQuery(1);

    return (
        <StyledStatRootArea>
            <StyledCardListArea>
                <StyledCardArea>
                    오늘의 대기환경 지수(kg)
                    <StyledCardNm $labelTag={sensorData?.airLabel}>
                        {sensorData && sensorData?.airLabel ? sensorData.airLabel : "정보없음"}
                        <span>{` ${sensorData && sensorData?.airValue ? sensorData.airValue + "kg" : ""}`}</span>
                    </StyledCardNm>
                </StyledCardArea>
                <StyledCardArea>
                    미세먼지 현황 (PM-10)
                    <StyledCardNm $labelTag={sensorData?.dustLabel}>
                        {sensorData && sensorData?.dustLabel ? sensorData.dustLabel : "정보없음"}
                        <span>{` ${sensorData && sensorData?.dustValue ? sensorData.dustValue + "㎍/㎥" : ""}`}</span>
                    </StyledCardNm>
                </StyledCardArea>
                <StyledCardArea>
                    오늘의 사과나무 (전기차 사용으로 절약된 배기가스kg)
                    <StyledCardNm $labelTag={"tree"}>1그루 <span>300kg</span></StyledCardNm>
                </StyledCardArea>
            </StyledCardListArea>
        </StyledStatRootArea>
    )
}

export default StatRootArea


const StyledStatRootArea = styled.div`
    font-weight: 400;
    line-height: 1.5;
    width: 1640px;
    height: 888px;

    //background: red;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
`

const StyledCardListArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1640px;
    height: 153px;
    //background: blue;
`

const StyledCardArea = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 30px;
    width: 523px;
    height: 153px;
    border-radius: 5px 0 0 0;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #647A72;
    background: #FFFFFF;
    box-shadow: 0 0 10px 0 #42434440;
`

const StyledCardNm = styled.div<{ $labelTag?: string }>`
    font-size: 32px;
    font-weight: 700;
    line-height: 38.73px;
    text-align: left;
    color: ${(props) =>
            props.$labelTag === "보통" ? "#2BA38D" :
                    props.$labelTag === "좋음" ? "#136EF8" :
                            props.$labelTag === "tree" ? "#1F7E62" :
                                    "#A0A6A8"};

    span {
        font-size: 25px;
        font-weight: 500;
        line-height: 30.26px;
        text-align: left;
        color: #55756F;
    }
`

