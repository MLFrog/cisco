import TopBarArea from "../topbar/TopBarArea";
import CardContent from "./card/CardContent";
import ProgressContent from "./progress/ProgressContent";
import ChartContent from "./chart/ChartContent";
import ProgressArea from "./progress/ProgressArea";
import viewStore from "../../store/ViewStore";
import useViewStore from "../../store/ViewStore";
import {useEffect} from "react";
import {TNavId} from "../../types/CommonType";
import styled from "styled-components";
import ReservationRootArea from "./reservation/ReservationRootArea";
import StatRootArea from "./stat/StatRootArea";
import * as dayjs from "dayjs";


const ContentRootArea = () => {

    const {navObj} = useViewStore();

    // const currentTabName = (navId: TNavId) => {
    //     return navId === "reservation" ? "주차장 예약" :
    // }

    return (
        <>
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">

                    {/* Topbar */}
                    <TopBarArea/>

                    {/* Begin Page Content */}
                    <div className="container-fluid">

                        {/* Page Heading */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">
                                {/*{*/}
                                {/*    navObj.navId === "reservation" ?*/}
                                {/*        "주차장 예약" :*/}
                                {/*        `오늘 ${dayjs().format("MM/DD")} '판교벤처밸리주차장' EPS 리포트`*/}
                                {/*}*/}
                                {
                                    navObj.navId === "reservation" ?
                                        <>
                                            주차장 예약
                                            <StyledVhclInfo>차량정보</StyledVhclInfo>
                                            <StyledVhclInfoName>기아 레이EV | 123가 4567</StyledVhclInfoName>
                                            <StyledVhclInfo>총 주차시간</StyledVhclInfo>
                                            <StyledVhclInfoName>360시간</StyledVhclInfoName>
                                        </> :
                                        <>
                                            오늘<StyledTodayLabel>({dayjs().format("M/D")})</StyledTodayLabel> ‘판교벤처밸리주차장' EPS 리포트
                                            <StyledVhclInfoName>기아 레이EV | 123가 4567</StyledVhclInfoName>
                                            <StyledVhclInfo>총 주차시간</StyledVhclInfo>
                                            <StyledVhclInfoName>360시간</StyledVhclInfoName>
                                        </>
                                }
                            </h1>
                            {/*<a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i*/}
                            {/*    className="fas fa-download fa-sm text-white-50"/> Generate Report</a>*/}
                        </div>
                        {
                            navObj.navId === "reservation" ?
                                // 주차장 예약 컴포넌트
                                <ReservationRootArea/> :
                                // EPS 리포트
                                <StatRootArea/>
                        }

                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}

            </div>
            {/* End of Content Wrapper */}
        </>
    )
}

export default ContentRootArea

const StyledVhclInfoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledVhclInfo = styled.span`
    font-size: 16px;
    font-weight: 200;
    line-height: 19.1px;
    text-align: left;
    color: #647A72;
    margin-left: 8px;
`

const StyledVhclInfoName = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 19.1px;
    text-align: left;
    color: #3C4B46;
    margin-left: 10px;
`

const StyledTodayLabel = styled.span`
    font-size: 30px;
    font-weight: 500;
    line-height: 35.82px;
    text-align: center;

    color: #2BA38D;
`
