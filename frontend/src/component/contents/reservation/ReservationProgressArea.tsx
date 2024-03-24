import styled from "styled-components";
import {IParkingInfo} from "../../../types/CommonType";

const ReservationProgressArea = (props: {info: IParkingInfo}) => {

    return (
        <StyledReservationProgressArea>
            <StyledReservationProgressHead>{props.info?.name}</StyledReservationProgressHead>


            <StyledReservationParkingMapArea>
                <StyledReservationParkingMap>

                </StyledReservationParkingMap>
            </StyledReservationParkingMapArea>

            <StyledReservationParkingMapArea>
                <StyledReservationProgressBtn>예약진행</StyledReservationProgressBtn>
            </StyledReservationParkingMapArea>
        </StyledReservationProgressArea>
    )
}

export default ReservationProgressArea

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
    top : 80px;
`

const StyledReservationParkingMap = styled.div`
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

    background:#2BA38D;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;

    &:active {
        background:#8FF5EC;
    }
`
