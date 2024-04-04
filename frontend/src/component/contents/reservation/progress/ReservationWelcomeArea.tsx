const icon_car_158px = require("../../../../assets/img/icon_car_158px.svg");
import styled from "styled-components";


const ReservationWelcomeArea = () => {
    return (
        <StyledReservationWelcomeArea>
            <StyledCarImage/>
            <StyledWelcomeMessage><span>'호시노아이'</span>님 환영합니다!</StyledWelcomeMessage>
            <StyledWelcomeNotice>왼쪽 리스트에서 주차장을 클릭해주세요.</StyledWelcomeNotice>
            <StyledWelcomeNotice>주차예약을 진행하실 수 있습니다.</StyledWelcomeNotice>
        </StyledReservationWelcomeArea>
    )
}

export default ReservationWelcomeArea


const StyledReservationWelcomeArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StyledCarImage = styled.i`
    background-image: url(${icon_car_158px});
    margin: 10px;

    &::before {
        content: "";
        display: block;
        width: 158px;
        height: 158px;
        background-size: 100%;
    }
`

const StyledWelcomeMessage = styled.div`
    font-weight: 700;
    font-size: 35px;
    color: #000000;
    margin: 10px;

    span {
        color: #4FA59B;
    }
`

const StyledWelcomeNotice = styled.div`
    margin: 2px;
    font-weight: 500;
    font-size: 25px;
    color: #000000;
`

