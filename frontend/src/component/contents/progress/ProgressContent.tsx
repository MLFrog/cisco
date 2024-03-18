import styled from "styled-components";


const ProgressContent = () => {

    return (
        <StyledProgressRootArea>
            <StyledNm>TEST<span>20%</span></StyledNm>
            <StyledProgressArea>
                <StyledProgressLine/>
            </StyledProgressArea>
        </StyledProgressRootArea>
    )
}

export default ProgressContent

const StyledProgressRootArea = styled.div`
    display: block;
    min-width: 762px;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
`

const StyledNm = styled.h4`
    font-weight: 700 !important;
    font-size: 80%;
    width: 762px;

    margin-bottom: 0.5rem;
    line-height: 1.2;
    margin-top: 0;
    box-sizing: border-box;
    word-wrap: break-word;
    color: #858796;
    text-align: left;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;

    span {
        float: right !important;
    }
`

const StyledProgressArea = styled.div`
    display: flex;
    height: 1rem;
    width: 762px;
    overflow: hidden;
    line-height: 0;
    font-size: .75rem;
    background-color: #eaecf4;
    border-radius: 0.35rem;
    margin-bottom: 1.5rem !important;
`

const StyledProgressLine = styled.div<{ $progress?: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #4e73df;
    transition: width .6s ease;
    width: ${(props) => props.$progress ? props.$progress : '20%'};
    background-color: #e74a3b !important;
    line-height: 0;
    font-size: .75rem;

    height: 1rem;
    border-radius: 0.35rem;
}
`
