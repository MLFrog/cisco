const icon_checked = require("../../../assets/img/icon_checked.svg");
const icon_wheelchair = require("../../../assets/img/icon_wheelchair.svg");
const icon_electric_charging = require("../../../assets/img/icon_electric_charging.svg");

import {IParkArea, IParkingInfo} from "../../../types/CommonType";
import styled from "styled-components";
import useViewStore from "../../../store/ViewStore";
import {PARKING_AREA_DATA_ROW_1, PARKING_AREA_DATA_ROW_2, PARKING_AREA_DATA_ROW_3} from "../../../config/const";


const ReservationResultArea = (props: { info: IParkingInfo }) => {

    const {
        navObj,
        setNavObj,
    } = useViewStore();

    return (
        <StyledReservationCompleteArea>
            {
                navObj.subTab === "complete" ?
                    <>
                        <StyledCompleteTitleArea>주차장 예약이 완료되었습니다!</StyledCompleteTitleArea>
                        <StyledCompleteContentWrapper>
                            <StyledCompleteContentArea>
                                <StyledParkResultInfoArea>
                                    <StyledReservationParkingMapArea>
                                        <StyledReservationParkingMap>
                                            <StyledParkArea>
                                                {
                                                    PARKING_AREA_DATA_ROW_3.map((data: IParkArea) => {
                                                        const isCheck: boolean = !!data?.parkHere;
                                                        return (
                                                            <StyledParkZoneArea>
                                                                {
                                                                    isCheck &&
                                                                    <StyledParkZoneLabel>{data?.parkHere}</StyledParkZoneLabel>
                                                                }
                                                                <StyledParkZone
                                                                    key={`PARKING_AREA_DATA_ROW_1_${data.id}`}
                                                                    $isPark={data.isPark}
                                                                    $isElect={data.isElect}
                                                                    $isDisorder={data.isDisorder}
                                                                    $parkHere={data?.parkHere}
                                                                >
                                                                    {
                                                                        data.parkHere ? <StyledCheckedIcon/> :
                                                                            data.isDisorder ? <StyledWheelIcon/> : data.isElect && <StyledElectIcon/>
                                                                    }
                                                                </StyledParkZone>
                                                            </StyledParkZoneArea>
                                                        )
                                                    })
                                                }
                                            </StyledParkArea>
                                            <StyledParkArea>
                                                {
                                                    PARKING_AREA_DATA_ROW_2.map((data: IParkArea) => {
                                                        const isCheck: boolean = !!data?.parkHere;
                                                        return (
                                                            <StyledParkZoneArea>
                                                                {
                                                                    isCheck &&
                                                                    <StyledParkZoneLabel>{data?.parkHere}</StyledParkZoneLabel>
                                                                }
                                                                <StyledParkZone
                                                                    key={`PARKING_AREA_DATA_ROW_1_${data.id}`}
                                                                    $isPark={data.isPark}
                                                                    $isElect={data.isElect}
                                                                    $isDisorder={data.isDisorder}
                                                                    $parkHere={data?.parkHere}
                                                                >
                                                                    {
                                                                        data.parkHere ? <StyledCheckedIcon/> :
                                                                            data.isDisorder ? <StyledWheelIcon/> : data.isElect && <StyledElectIcon/>
                                                                    }
                                                                </StyledParkZone>
                                                            </StyledParkZoneArea>
                                                        )
                                                    })
                                                }
                                            </StyledParkArea>
                                        </StyledReservationParkingMap>
                                    </StyledReservationParkingMapArea>

                                    <StyledParkResultInfoBoxArea>
                                        <StyledParkResultInfoRow>주차장명<span>판교세븐벤처밸리 A동 B1</span></StyledParkResultInfoRow>
                                        <StyledParkResultInfoRow $isArea={true}>예약구역<span>C-04</span></StyledParkResultInfoRow>
                                        <StyledParkResultInfoRow>입차일시<span>3월14일 7:00</span></StyledParkResultInfoRow>

                                        <StyledReservationProgressBtn>메인으로</StyledReservationProgressBtn>
                                    </StyledParkResultInfoBoxArea>

                                </StyledParkResultInfoArea>

                                <StyledQrScanArea>
                                    <StyledQrScanTitle>주차장 입장시 QR코드를 스캔해주세요</StyledQrScanTitle>

                                    <StyledQrScanBox>

                                    </StyledQrScanBox>

                                    {/*<StyledQrNumberArea>00000-00000-00000</StyledQrNumberArea>*/}

                                    <StyledParkEndNoticeArea>주차장 이용을 종료하시고 싶으시면<br/><span>‘이용완료'</span> 버튼을 눌러주세요.</StyledParkEndNoticeArea>

                                    <StyledParkEndBtn

                                    >이용완료</StyledParkEndBtn>

                                </StyledQrScanArea>

                            </StyledCompleteContentArea>
                        </StyledCompleteContentWrapper>
                    </> :
                    <>
                        <StyledReservationFailAreaWrapper>
                            <StyledReservationFailTitle>예약 완료 실패</StyledReservationFailTitle>
                            <StyledReservationFailMessage>
                                예약 진행 중 오류가 발생했습니다.<br/>
                                잠시후 다시 시도해주세요.
                            </StyledReservationFailMessage>
                            <StyledReservationProgressBtn>다시시도</StyledReservationProgressBtn>
                        </StyledReservationFailAreaWrapper>
                    </>
            }
        </StyledReservationCompleteArea>
    )
}

export default ReservationResultArea

const StyledReservationCompleteArea = styled.div`
    width: 1626px;
    height: 873px;
    border-radius: 16px;
    background: #FFFFFF;
    box-shadow: 0 0 10px 0 #42434440;
`

const StyledCompleteTitleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2B7B7B;
    font-family: S-Core Dream, system-ui;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-top: 60px;
`

const StyledCompleteContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledCompleteContentArea = styled.div`
    width: 100%;
    height: 630px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledParkResultInfoArea = styled.div`
    width: 939px;
    height: 625px;
    top: 151px;
    left: 57px;
    border-radius: 24px;
    border: 1px solid #A0AFAF;
    background: #E8EDED;
    margin-left: 60px;
`

const StyledReservationParkingMapArea = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
`

const StyledReservationParkingMap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 997px;
    height: 336px;
    margin-top: 50px;
    left: 23px;
    border-radius: 16px;
    background: #E8EDED;
`

const StyledParkArea = styled.div`
    display: flex;
    width: auto;
    height: 85px;
    margin: 25px 0;
`

const StyledParkZoneArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    margin-right: 25px;
    width: 45px;
    height: 105px;
`

const StyledParkZoneLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 20px;
    color: #16937C;
`

const StyledParkZone = styled.div<{
    $isPark: boolean,
    $isElect: boolean,
    $isDisorder: boolean
    $parkHere?: string
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 85px;
    background: ${(props) => props.$parkHere ? "#15FFD4" : props.$isPark ? "#6EBFB0" : "#CDCDCD"};
    border: ${(props) => props.$parkHere ? "2px solid #0FC7A5" : props.$isPark ? "2px solid #176E5E" : "2px solid #5D6365"};
`

const StyledWheelIcon = styled.i`
    content: "";
    width: 24px;
    height: 24px;
    background-image: url(${icon_wheelchair});
`

const StyledElectIcon = styled.i`
    content: "";
    width: 24px;
    height: 24px;
    background-image: url(${icon_electric_charging});
`

const StyledCheckedIcon = styled.i`
    content: "";
    width: 24px;
    height: 24px;
    background-image: url(${icon_checked});
`

const StyledParkResultInfoBoxArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StyledParkResultInfoRow = styled.div<{ $isArea?: boolean }>`
    width: auto;
    height: 21px;
    font-size: 18px;
    font-weight: 200;
    text-align: center;
    color: #000000;
    margin-top: 4px;

    span {
        margin-left: 10px;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        ${(props) => props.$isArea && "color: #16937C"}
    }
`

const StyledReservationProgressBtn = styled.button`
    width: 216px;
    height: 68px;
    left: 414px;
    border-radius: 40px;
    margin-top: 40px;
    padding: 0;
    border: 1px solid #94ABA7;
    background: #94ABA738;
    font-weight: 500;
    font-size: 18px;
    color: #294540;

    &:active {
        background: #8FF5EC;
    }

    &:hover {
        background: #22C5A7;
        color: #FFFFFF;
    }
`

const StyledQrScanArea = styled.div`
    width: 450px;
    height: 625px;
    margin: 0 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StyledQrScanTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    color: #000000;
`

const StyledQrScanBox = styled.div`
    width: 355px;
    height: 355px;
    top: 197px;
    left: 1070px;
    padding: 30px;
    border: 1px solid #000000B2;
    margin-top: 30px;
`

const StyledQrNumberArea = styled.div`
    width: 394px;
    height: 36px;
    margin-top: 15px;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    color: #000000;
`

const StyledParkEndNoticeArea = styled.div`
    width: 394px;
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin-top: 20px;
    color: #000000;

    span {
        font-size: 22px;
        font-weight: 500;
        text-align: center;
        color: #2BA38D;
    }
`

const StyledParkEndBtn = styled.button`
    width: 343px;
    height: 68px;
    top: 695px;
    left: 1076px;
    border-radius: 10px;
    color: #FFFFFF;
    border: none;

    margin-top: 20px;
    background: #2BA38D;
    font-weight: 500;
    font-size: 18px;

    &:active {
        background: #8FF5EC;
    }

    &:hover {
        background: #22C5A7;
    }
`

const StyledReservationFailAreaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 1626px;
    height: 873px;

`

const StyledReservationFailTitle = styled.div`
    width: 223px;
    height: 42px;
    font-size: 35px;
    font-weight: 600;
    color: #000000;
`

const StyledReservationFailMessage = styled.div`
    width: 400px;
    height: 80px;
    font-size: 25px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color: #000000;
    margin-top: 40px;
`

