import LnbArea from "../component/lnb/LnbArea";
import ModalRootArea from "../component/modal/ModalRootArea";
import FooterArea from "../component/footer/FooterArea";
import ContentRootArea from "../component/contents/ContentRootArea";
import {useEffect, useState} from "react";
import styled from "styled-components";


const MainPage = () => {

    // const {
    //     data: testData,
    //     status,
    //     isFetched
    // } = useTestQuery("frontend-test-param");

    const [isOpen, setIsOpen] = useState(false)

    // useEffect(() => {
    //     console.log("")
    //     console.log("------")
    //     console.log("status ", status)
    //     console.log("isFetched ", isFetched)
    //     console.log("testData ", testData)
    //     console.log("------")
    // }, [testData, status, isFetched])

    useEffect(() => {
        if (window.location.pathname.replace("/", "").length > 0) {
             console.log("404")
        }
    }, [window.location.pathname])

    return (
        <>
            {/* Page Wrapper */}
            <div id="wrapper">

                {/*딤드*/}
                <StyledModalDimmed $isOpen={isOpen}/>

                {/*사이드 바*/}
                <LnbArea/>

                {/* Content Wrapper */}
                <ContentRootArea/>

            </div>
            {/* End of Page Wrapper */}


            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"/>
            </a>
            <ModalRootArea/>
            <FooterArea/>
        </>
    );
}

export default MainPage

const StyledModalDimmed = styled.div<{ $isOpen: boolean }>`
    visibility: ${({$isOpen}) => $isOpen ? 'visible' : 'hidden'};
    opacity: ${({$isOpen}) => $isOpen ? '1' : '0'};
    transition: ${({$isOpen}) => $isOpen ? 'opacity 450ms' : 'visibility 1ms 450ms, opacity 450ms'};
    position: absolute;
    top: 0;
    left: 0;
    width: 1920px;
    height: 1080px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10;

`

