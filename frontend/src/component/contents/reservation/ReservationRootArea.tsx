import styled from "styled-components";
import {useState} from "react";
import ReservationWelcomeArea from "./ReservationWelcomeArea";
import ReservationProgressArea from "./ReservationProgressArea";
import {IParkingInfo} from "../../../types/CommonType";

const ReservationRootArea = () => {

    const [activeInfo, setActiveInfo] = useState<IParkingInfo>(null)
    const testList: IParkingInfo[] = [
        {
            id: "0",
            name: "판교세븐벤처밸리 A동 B1",
            parkingMaxLimit: "27",
            parkingCurrentValue: "10",
            address: "경기도 성남시 분당구 판교로228번길 15",
            operatingTime: "7:00~20:00 (주말,공휴일 휴무)"
        },
        {
            id: "1",
            name: "판교세븐벤처밸리 A동 B2",
            parkingMaxLimit: "27",
            parkingCurrentValue: "17",
            address: "경기도 성남시 분당구 판교로228번길 15판교로228번길 15",
            operatingTime: "7:00~20:00 (주말,공휴일 휴무)"
        },
        {
            id: "2",
            name: "붓다공용오피스 주차장",
            parkingMaxLimit: "120",
            parkingCurrentValue: "80",
            address: "경기도 성남시 분당구 판교로228번길 15",
            operatingTime: "24시간 연중무휴"
        },
    ]

    return (
        <StyledReservationArea>

            <StyledReservationListRootArea>
                <StyledHeadInfo>
                    <StyledListHeadArea>전체<span>3</span></StyledListHeadArea>
                </StyledHeadInfo>

                <StyledReservationListArea>
                    {
                        testList.map((info) => {
                            return (
                                <StyledReservationListBox
                                    $isActive={activeInfo?.id === info.id}
                                    onClick={() => setActiveInfo(info)}
                                >
                                    <StyledReservationBox>
                                        <StyledParkingImageArea/>
                                        <StyledParkingInfoArea>
                                            <StyledParkingInfoName>{info.name}</StyledParkingInfoName>
                                            <StyledParkingInfoLimitArea>
                                                주차현황 <span>{info.parkingCurrentValue} </span>/ {info.parkingMaxLimit}
                                            </StyledParkingInfoLimitArea>
                                            <StyledParkingInfoAddress>
                                                주소 <span>{info.address}</span>
                                            </StyledParkingInfoAddress>
                                            <StyledParkingInfoOperatingTime>
                                                운영시간 <span>{info.operatingTime}</span>
                                            </StyledParkingInfoOperatingTime>
                                        </StyledParkingInfoArea>
                                    </StyledReservationBox>
                                </StyledReservationListBox>
                            )
                        })
                    }
                </StyledReservationListArea>
            </StyledReservationListRootArea>

            <StyledReservationParkingArea>
                {
                    activeInfo === null ? <ReservationWelcomeArea/> : <ReservationProgressArea info={activeInfo}/>
                }
            </StyledReservationParkingArea>

        </StyledReservationArea>
    )
}

export default ReservationRootArea

const StyledReservationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    width: 1640px;
    height: 890px;
    text-align: left;
    font-family: S-Core Dream;

    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
`

const StyledReservationListRootArea = styled.div`
    width: 436px;
    height: 98%;
    padding: 7px;
    margin: 7px 7px;
    border-radius: 16px;
    color: #000000;
    box-shadow: 0px 0px 10px 0px #42434440;
`

const StyledReservationParkingArea = styled.div`
    width: 1172px;
    height: 98%;
    margin: 7px 7px;
    border-radius: 16px;
    box-shadow: 0px 0px 10px 0px #42434440;
`

const StyledListHeadArea = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 46px;
    font-weight: 400;
    font-size: 18px;
    margin-left: 10px;

    span {
        font-size: 18px;
        margin-left: 10px;
        color: #2BA38D;
    }
`

const StyledHeadInfo = styled.div`
    border-bottom: 1px solid #000000;
`

const StyledReservationListArea = styled.div`
    width: 100%;
    height: 814px;
    overflow: hidden;
    overflow-y: auto;
    padding-right: 3px;
`

const StyledReservationListBox = styled.div<{ $isActive?: boolean }>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 140px;
    //padding: 4px 0;
    border-radius: 7px;
    background: ${({$isActive}) => $isActive ? '#8FF5EC' : '#F5F5F5'};
    border: 1px solid #878787;
    cursor: pointer;
    margin-top: 3px;

    &:not(:first-of-type) {
        margin-top: 3px;
    }

    &:hover {
        background: ${({$isActive}) => $isActive ? '#8FF5EC' : '#20c9a6'};
    }

`

const StyledReservationBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 20px;
    width: 100%;
`

const StyledParkingImageArea = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 9px;
    border: 1px solid #C3C3C3;
    background: url("../../../assets/img/img_basicImg.svg");
`

const StyledParkingInfoArea = styled.div`
    height: 100px;
    width: 270px;
    margin-left: 10px;
    //background: blue;
`

const StyledParkingInfoName = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: #4C4C4C;
`

const StyledParkingInfoLimitArea = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #4C4C4C;

    span {
        color: #2D917F;
    }
`

const StyledParkingInfoAddress = styled.div`
    font-size: 13px;
    font-weight: 200;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #818181;
    margin-top: 7px;

    span {
        color: #494949;
    }
`

const StyledParkingInfoOperatingTime = styled.div`
    font-size: 13px;
    font-weight: 200;
    color: #818181;

    span {
        color: #494949;
    }
`

const Styled = styled.div`

`
