const icon_wheelchair = require("../../../../assets/img/icon_wheelchair.svg");
const icon_electric_charging = require("../../../../assets/img/icon_electric_charging.svg");

import styled from "styled-components";
import {IParkingInfo} from "../../../../types/CommonType";
import useViewStore from "../../../../store/ViewStore";
import {PARKING_AREA_DATA_ROW_1, PARKING_AREA_DATA_ROW_2} from "../../../../config/const";

const ReservationCurrentStatusArea = (props: { info: IParkingInfo }) => {

    const {
        navObj, setNavObj
    } = useViewStore();

    return (
        <StyledReservationProgressArea>
            <StyledReservationProgressHead>{props.info?.name}</StyledReservationProgressHead>

            <StyledReservationParkingMapArea>
                <StyledReservationParkingMap>
                    <StyledParkArea>
                        {
                            PARKING_AREA_DATA_ROW_1.map(data => {
                                return (
                                    <StyledParkZone
                                        key={`PARKING_AREA_DATA_ROW_1_${data.id}`}
                                        $isPark={data.isPark}
                                        $isElect={data.isElect}
                                        $isDisorder={data.isDisorder}
                                    >
                                        {
                                            data.isDisorder ? <StyledWheelIcon/> : data.isElect && <StyledElectIcon/>
                                        }
                                    </StyledParkZone>
                                )
                            })
                        }
                    </StyledParkArea>
                    <StyledParkArea>
                        {
                            PARKING_AREA_DATA_ROW_2.map(data => {
                                return (
                                    <StyledParkZone
                                        key={`PARKING_AREA_DATA_ROW_2_${data.id}`}
                                        $isPark={data.isPark}
                                        $isElect={data.isElect}
                                        $isDisorder={data.isDisorder}
                                    >
                                        {
                                            data.isDisorder ? <StyledWheelIcon/> : data.isElect && <StyledElectIcon/>
                                        }
                                    </StyledParkZone>
                                )
                            })
                        }
                    </StyledParkArea>


                    <StyledParkNoticeArea>
                        <StyledParkUpdateArea>
                            업데이트 일시: 24.01.13 05:30
                        </StyledParkUpdateArea>
                        <StyledParkColorArea>
                            <StyledParkColorInfoArea>
                                <StyledParkColor $isPossible={true}/>
                                <StyledParkColorName>예약가능</StyledParkColorName>
                            </StyledParkColorInfoArea>
                            <StyledParkColorInfoArea>
                                <StyledParkColor $isPossible={false}/>
                                <StyledParkColorName>예약완료</StyledParkColorName>
                            </StyledParkColorInfoArea>
                        </StyledParkColorArea>
                    </StyledParkNoticeArea>
                </StyledReservationParkingMap>
            </StyledReservationParkingMapArea>

            <StyledReservationParkingMapArea>
                <StyledReservationProgressBtn
                    onClick={() => setNavObj({...navObj, subTab: "datepicker"})}
                >예약진행</StyledReservationProgressBtn>
            </StyledReservationParkingMapArea>
        </StyledReservationProgressArea>
    )
}

export default ReservationCurrentStatusArea

const StyledReservationProgressArea = styled.div`
    width: 100%;
`

const StyledReservationProgressHead = styled.div`
    display: flex;
    width: 1172px;
    height: 64px;
    background: #4FA59B;
    border-radius: 16px 16px 0 0;
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    left: 0;
    align-items: center;
    padding-left: 30px;
    color: #FFFFFF;
`

const StyledReservationParkingMapArea = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    top: 80px;
`

const StyledReservationParkingMap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 997px;
    height: 506px;
    left: 23px;
    border-radius: 16px;
    background: #E8EDED;
`

const StyledReservationProgressBtn = styled.button`
    width: 216px;
    height: 68px;
    left: 414px;
    border-radius: 40px;
    margin-top: 70px;
    padding: 0;
    border: none;

    background: #2BA38D;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;

    &:active {
        background: #8FF5EC;
    }

    &:hover {
        background: #22C5A7;
    }
`

const StyledParkArea = styled.div`
    display: flex;
    width: auto;
    height: 85px;
    margin: 25px 0;
`

const StyledParkZone = styled.div<{
    $isPark: boolean,
    $isElect: boolean,
    $isDisorder: boolean
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 85px;
    margin-right: 25px;
    background: ${(props) => props.$isPark ? "#6EBFB0" : "#CDCDCD"};
    border: ${(props) => props.$isPark ? "2px solid #176E5E" : "2px solid #5D6365"};
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

const StyledParkNoticeArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
    width: 997px;
    height: 20px;
    padding: 0 40px;
`

const StyledParkUpdateArea = styled.div`
    font-weight: 200;
    font-size: 14px;
    color: #1A1D1D;
    line-height: 16px;
`

const StyledParkColorArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 20px;
`

const StyledParkColorInfoArea = styled.div`
    display: flex;
    width: 90px;
    height: 20px;
`


const StyledParkColor = styled.div<{ $isPossible: boolean }>`
    width: 18px;
    height: 18px;
    border: ${(props) => props.$isPossible ? "2px solid #176E5E" : "2px solid #5D6365"};
    background-color: ${(props) => props.$isPossible ? "#6EBFB0" : "#CDCDCD"};
    margin-right: 10px;
`

const StyledParkColorName = styled.div`
    width: 62px;
    height: 19px;
`
