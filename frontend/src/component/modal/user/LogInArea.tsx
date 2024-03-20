import {useState} from "react";
import styled from "styled-components";

const LogInArea = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true)

    const handleCloseModalBtn = () => {
        console.log("")
    }

    return (
        <>
            <StyledModalContainer $isOpen={isLogin}>
                <StyledModalBodyArea>
                    <StyledModalBodyItemContainer>
                        <StyledInputArea>
                            <StyledInput type={"text"} placeholder={"아이디 입력"}/>
                        </StyledInputArea>
                    </StyledModalBodyItemContainer>
                    <StyledModalBodyItemContainer>
                        <StyledInputArea>
                            <StyledInput type={"password"} placeholder={"비밀번호 입력"}/>
                        </StyledInputArea>
                    </StyledModalBodyItemContainer>

                    <StyledFunctionRow>
                        <div>
                            <StyledCheckBox type={"checkbox"}/> 로그인 상태 유지
                        </div>
                        <div>
                            비밀번호 찾기
                        </div>
                    </StyledFunctionRow>

                    <StyledModalBtnSend>로그인</StyledModalBtnSend>
                </StyledModalBodyArea>
                <div style={{textAlign: "center", marginTop: "10px", color: "#f5f8ff"}}>
                    아직 회원이 아니신가요? <span>회원가입</span>
                </div>
            </StyledModalContainer>


        </>
    )
}

export default LogInArea


const StyledModalContainer = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    //background-color: #f5f8ff;
    width: 618px;
    height: 696px;
    top: 482px;
    left: 50%;
    gap: 0;
    border-radius: 20px;

    transform: translate(-50%, -50%);
    z-index: 11;
    font-family: 'Pretendard', sans-serif;

    visibility: ${({$isOpen}) => $isOpen ? 'visible' : 'hidden'};
    opacity: ${({$isOpen}) => $isOpen ? '1' : '0'};
    transition: ${({$isOpen}) => $isOpen ? 'opacity 450ms' : 'visibility 1ms 450ms, opacity 450ms'};

    span {
        text-align: center;
        color: #28a745;
    }
`

const StyledInputArea = styled.div`
    position: relative;
    display: block;
    margin: 3px 0;
`


const StyledInput = styled.input`
    width: 460px;
    height: 60px;
    border-radius: 8px;

    &::placeholder {
        padding-left: 14px;
    }
`

const StyledModalBodyArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 5.81vh);
    gap: 1vw;
    background: #ffffff;
    box-shadow: 0 0.03vw 0.15vw 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;

`

const StyledModalBodyItemContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledModalBtnSend = styled.button`
    width: 23.667vw;
    height: 6.241vh;
    margin: 0 auto;
    font-family: 'SCDreamM', sans-serif;
    font-size: 0.781vw;
    color: #fff;
    box-shadow: 0 0.052vw 0.156vw 0 rgba(0, 0, 0, 0.2),
    inset 0 0.052vw 0 0 rgba(232, 232, 232, 0.18);
    background-color: forestgreen;
    border-radius: 20px;

    &:hover {
        background-color: #28a745;
    }
`;

const StyledFunctionRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10px;
    width: 100%;
    margin: 0 10px;
    padding: 0 80px;
`;

const StyledCheckBox = styled.input`
    margin-right: 5px;
`

