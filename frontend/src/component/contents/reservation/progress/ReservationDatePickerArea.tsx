import {IParkingInfo} from "../../../../types/CommonType";
import styled from "styled-components";
import Calendar from "react-calendar";
import "../../../../assets/css/Calendar.css";
import {useEffect, useState} from "react";
import * as dayjs from 'dayjs';
import {TIME} from "../../../../config/const";
import {Dayjs} from "dayjs";
import useViewStore from "../../../../store/ViewStore";

const ReservationDatePickerArea = (props: { info: IParkingInfo }) => {

    const {navObj, setNavObj} = useViewStore();
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<Dayjs>(null);

    useEffect(() => {
        console.log("dataa  ", dayjs(date).format("YYYY-MM-DD"))
    }, [date])

    useEffect(() => {
        console.log('time ', time)
    }, [time])

    const clickPickerItemHandler = (time: Dayjs) => {
        if (!dayjs(time).isBefore()) {
            setTime(time)
        }
    }

    return (
        <>
            <ReservationDatePickerRootArea>
                <StyledReservationDatePickerArea>
                    <StyledReservationProgressHead>{props.info?.name}</StyledReservationProgressHead>

                    <StyledCalendar
                        value={date}
                        onChange={(value: Date) => setDate(value)}
                        formatDay={(locale, date) => dayjs(date).format("D")}
                        formatYear={(locale, date) => dayjs(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
                        formatMonthYear={(locale, date) => dayjs(date).format("M월")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
                        // showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
                        calendarType="gregory" // 일요일 부터 시작
                        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
                        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
                        minDetail="year" // 10년단위 년도 숨기기
                        minDate={new Date()}
                    />
                </StyledReservationDatePickerArea>
                <StyledReservationTimePickerArea>
                    <StyledReservationTimePickerHead>예약 시간 선택</StyledReservationTimePickerHead>
                    <StyledReservationTimePickerList>
                        {
                            TIME.map((item) => {
                                return (
                                    <StyledReservationTimePickerItem
                                        $isDisabled={dayjs(date).hour(item.value.hour()).isBefore()}
                                        $isActive={time === item.value}
                                        onClick={() => clickPickerItemHandler(item.value)}
                                    >{item.label}</StyledReservationTimePickerItem>
                                )
                            })
                        }
                    </StyledReservationTimePickerList>
                </StyledReservationTimePickerArea>
            </ReservationDatePickerRootArea>

            <ReservationDatePickerInfoArea>
                <StyledParkColorInfoArea>
                    <StyledParkColor $isPossible={true}/>
                    <StyledParkColorName>예약가능</StyledParkColorName>
                </StyledParkColorInfoArea>
                <StyledParkColorInfoArea>
                    <StyledParkColor $isPossible={false}/>
                    <StyledParkColorName>예약불가</StyledParkColorName>
                </StyledParkColorInfoArea>
            </ReservationDatePickerInfoArea>

            <StyledReservationParkingMapArea>
                <StyledReservationProgressBtn
                    $label={"prev"}
                    onClick={() => setNavObj({...navObj, subTab: "area"})}
                >뒤로가기</StyledReservationProgressBtn>
                <StyledReservationProgressBtn
                    $label={"progress"}
                    onClick={() => setNavObj({...navObj, subTab: "complete"})}
                >예약진행</StyledReservationProgressBtn>
            </StyledReservationParkingMapArea>
        </>


    )
}

export default ReservationDatePickerArea

export const StyledCalendar = styled(Calendar)``;

const ReservationDatePickerRootArea = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`


const StyledReservationDatePickerArea = styled.div`
    width: 578px;
    padding-top: -20px;
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
    top: 0;
    left: 0;
    align-items: center;
    padding-left: 30px;
    color: #FFFFFF;
`

const StyledReservationTimePickerArea = styled.div`
    width: 408px;
    height: 571px;
    margin: 120px 60px 0 0;
`

const StyledReservationTimePickerHead = styled.div`
    width: 408px;
    height: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
`

const StyledReservationTimePickerList = styled.div`
    width: 100%;
    height: 541px;
    overflow: hidden;
    overflow-y: auto;
    padding-right: 3px;
`

const StyledReservationTimePickerItem = styled.div<{ $isActive: boolean, $isDisabled: boolean }>`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 47px;
    padding-left: 10px;

    border: ${(props) =>
            props.$isDisabled ? "1px solid #A0A6A8" :
                    props.$isActive ? "1px solid #2BA38D" : "1px solid #9E9E9E"};

    background-color: ${(props) =>
            props.$isDisabled ? "#E9E9E9" :
                    props.$isActive ? "#8FF5EC" : "#FFFFFF"};

    color: ${(props) =>
            props.$isDisabled ? "#7C7C7C" :
                    props.$isActive ? "#FFFFFF" : "#000000"};

    &:hover {
        border: ${(props) =>
                props.$isDisabled ? "1px solid #A0A6A8" :
                        props.$isActive ? "1px solid #2BA38D" : "1px solid #9E9E9E"};

        background-color: ${(props) =>
                props.$isDisabled ? "#E9E9E9" :
                        props.$isActive ? "#8FF5EC" : "#2BA38D"};
        color: ${(props) =>
                props.$isDisabled ? "#7C7C7C" :
                        props.$isActive ? "#FFFFFF" : "#FFFFFF"};
    }
`

const ReservationDatePickerInfoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    text-align: left;
    width: 1060px;
    height: 30px;
    margin: 15px 0 0 50px;
`

const StyledParkColorInfoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 20px;
`

const StyledParkColor = styled.div<{ $isPossible: boolean }>`
    width: 18px;
    height: 18px;
    border: ${(props) => props.$isPossible ? "1px solid #606D6A" : "1px solid #A0A6A8"};
    background-color: ${(props) => props.$isPossible ? "#FFFFFF" : "#A0A6A8"};
    margin-right: 10px;
`

const StyledParkColorName = styled.div`
    width: 62px;
    height: 19px;
    margin-right: 10px;
`

const StyledReservationParkingMapArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledReservationProgressBtn = styled.button<{ $label: string }>`
    width: 216px;
    height: 68px;
    left: 414px;
    border-radius: 40px;
    margin: 20px;
    padding: 0;
    font-weight: 500;
    font-size: 18px;

    color: ${(props) => props.$label === "prev" ? "#294540" : "#FFFFFF"};
    // border: ${(props) => props.$label === "prev" ? "1px solid #94ABA7" : "none"};
    border: none;
    background: ${(props) => props.$label === "prev" ? "#94ABA7" : "#2BA38D"};

    &:active {
        background: #8FF5EC;
    }

    &:hover {
        background: ${(props) => props.$label === "prev" ? "#E9E9E9" : "#22C5A7"};
    }
`
