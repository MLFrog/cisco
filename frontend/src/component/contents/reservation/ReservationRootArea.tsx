import styled from "styled-components";
import useViewStore from "../../../store/ViewStore";
import ReservationResultArea from "./ReservationResultArea";
import {PROGRESS_PAGE} from "../../../config/const";
import ReservationProgressArea from "./ReservationProgressArea";

const ReservationRootArea = () => {

    const {
        navObj,
        activeInfo,
    } = useViewStore();

    return (
        <StyledReservationArea>
            {
                PROGRESS_PAGE.includes(navObj.subTab) ?
                    <ReservationProgressArea/> :
                    <ReservationResultArea info={activeInfo}/>
            }
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
