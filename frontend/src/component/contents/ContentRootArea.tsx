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


const ContentRootArea = () => {

    const {navId} = useViewStore();

    const currentTabName = (navId: TNavId) => {
        return navId === "reservation" ? "주차장 예약" : "EPS 리포트"
    }

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
                            <h1 className="h3 mb-0 text-gray-800">{currentTabName(navId)}</h1>
                            {/*<a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i*/}
                            {/*    className="fas fa-download fa-sm text-white-50"/> Generate Report</a>*/}
                        </div>


                        {
                            navId === "reservation" ?
                                // 주차장 예약 컴포넌트
                                <ReservationRootArea/>
                                : null
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
