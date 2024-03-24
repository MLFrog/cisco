const EPS_icon_logo = require("../../assets/img/EPS_icon_logo.svg");
import useViewStore from "../../store/ViewStore";
import styled from "styled-components";

const LnbArea = () => {

    const {navId, setNavId} = useViewStore();

    const setFontStyle = (tabId: string) => {
        if (navId === tabId) {
            return {
                'color': '#ffffff',
                'fontWeight' : "500",
                'fontSize': "23px",
            }
        }
    }

    return (
        <>
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
                style={{background: "#26917D"}}
            >
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <StyledMainLogoImgArea/>
                    <div className="sidebar-brand-text mx-3">EPS</div>
                </a>
                {/*/!* Divider *!/*/}
                <hr className="sidebar-divider my-0"/>

                {/* Nav Item - Tables */}
                <li className="nav-item">
                    <a className="nav-link" style={setFontStyle("reservation")}
                        onClick={() => setNavId("reservation")}
                    >
                        <span style={{fontSize: "23px"}}>주차장 예약</span>
                    </a>
                </li>
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <a className="nav-link" style={setFontStyle("report")}
                        onClick={() => setNavId("report")}
                    >
                        <span style={{fontSize: "23px"}}>EPS 리포트</span>
                    </a>
                </li>
            </ul>
            {/* End of Sidebar */}
        </>
    )

}

export default LnbArea

const StyledMainLogoImgArea = styled.i`
    background-image: url(${EPS_icon_logo});

    &::before {
        content: "";
        display: block;
        width: 39px;
        height: 39px;
        background-size: 100%;
    }
`
