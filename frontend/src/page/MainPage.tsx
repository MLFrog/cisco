import LnbArea from "../component/lnb/LnbArea";
import TopBarArea from "../component/topbar/TopBarArea";
import ModalArea from "../component/modal/ModalArea";
import CardContent from "../component/contents/card/CardContent";
import ChartContent from "../component/contents/chart/ChartContent";
import FooterArea from "../component/footer/FooterArea";
import ContentRootArea from "../component/contents/ContentRootArea";


const MainPage = () => {

    // const {navId} = useViewStore();
    // const {data: testData, status} = useTestQuery("frontend-test-param");
    //
    // useEffect(() => {
    //     console.log("navId ", navId)
    // }, [navId])
    //
    // useEffect(() => {
    //     console.log("status")
    //     console.log("data ", testData)
    // }, [testData, status])

    return (
        <div>
            {/* Page Wrapper */}
            <div id="wrapper">

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

            <ModalArea/>

            <FooterArea/>
        </div>
    );
}

export default MainPage


