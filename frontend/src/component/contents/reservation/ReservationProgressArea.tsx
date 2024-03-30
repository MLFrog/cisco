import {IParkingInfo} from "../../../types/CommonType";
import ReservationWelcomeArea from "./progress/ReservationWelcomeArea";
import ReservationCurrentStatusArea from "./progress/ReservationCurrentStatusArea";
import ReservationDatePickerArea from "./progress/ReservationDatePickerArea";
import styled from "styled-components";
import {PARKING_AREA_LIST} from "../../../config/const";
import useViewStore from "../../../store/ViewStore";


const ReservationProgressArea = () => {

    const {
        navObj,
        setNavObj,
        activeInfo,
        setActiveInfo,
    } = useViewStore();

    const listBoxClickHandler = (info: IParkingInfo) => {
        setActiveInfo(info)
        setNavObj({...navObj, subTab: "area"})
    }

    return (
        <>
            <StyledReservationListRootArea>
                <StyledHeadInfo>
                    <StyledListHeadArea>전체<span>{PARKING_AREA_LIST.length}</span></StyledListHeadArea>
                </StyledHeadInfo>

                <StyledReservationListArea>
                    {
                        PARKING_AREA_LIST.map((info: IParkingInfo) => {
                            return (
                                <StyledReservationListBox
                                    key={info.id}
                                    $isActive={activeInfo?.id === info.id}
                                    onClick={() => listBoxClickHandler(info)}
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
                    navObj.subTab === "welcome" && activeInfo === null ?
                        <ReservationWelcomeArea/> :
                        navObj.subTab === "area" && activeInfo !== null ?
                            <ReservationCurrentStatusArea info={activeInfo}/> :
                            navObj.subTab === "datepicker" && activeInfo !== null ?
                                <ReservationDatePickerArea info={activeInfo}/> : ""
                }
            </StyledReservationParkingArea>
        </>
    )
}

export default ReservationProgressArea

const StyledReservationListRootArea = styled.div`
    width: 436px;
    height: 98%;
    padding: 7px;
    margin: 7px 7px;
    border-radius: 16px;
    color: #000000;
    box-shadow: 0 0 10px 0 #42434440;
`

const StyledReservationParkingArea = styled.div`
    width: 1172px;
    height: 98%;
    margin: 7px 7px;
    border-radius: 16px;
    box-shadow: 0 0 10px 0 #42434440;
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
    border-radius: 7px;
    border: 1px solid #878787;
    cursor: pointer;
    margin-top: 3px;
    background: ${({$isActive}) => $isActive ? '#8FF5EC' : '#F5F5F5'};

    &:not(:first-of-type) {
        margin-top: 3px;
    }

    &:hover {
        background: ${({$isActive}) => $isActive ? '#8FF5EC' : '#22C5A7'};
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