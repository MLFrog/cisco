import {useEffect, useState} from "react";
import styled from "styled-components";
import {IUserPayload} from "../../../types/CommonType";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QueryKeys} from "../../../querykey/queryKeys";

const LogInArea = () => {

    const queryClient = useQueryClient();

    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [focusTarget, setFocusTarget] = useState<string>("")
    const [userPayload, setUserPayload] = useState<IUserPayload>({id: "", pw: ""});

    // const {mutate: loginUser} = useMutation({
    //     mutationFn: () => userMutation(userPayload),
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({queryKey: [QueryKeys.USER.INFO]})
    //             .then(res => {
    //                 console.log("res ", res);
    //                 setIsLogin(false);
    //             })
    //             .catch(tes => {
    //                 console.log("tes", tes);
    //             })
    //             .finally(() => {
    //                 console.log("userData called !! ");
    //             })
    //     },
    //     onError: (error) => {
    //         console.log("error ", error)
    //         setIsLogin(false); // 개발환경
    //     }
    // });


    useEffect(() => {
        console.log('isLogin ', isLogin)
        if (isLogin) {
            // 로그인 모달 팝업시 스크롤 방지
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [isLogin])

    const onChangeHandler = (e) => {
        const id = e.target.id;
        if (id && id === "userId") {
            setUserPayload({...userPayload, id: e.target.value})
        } else if (id && id === "userPw") {
            setUserPayload({...userPayload, pw: e.target.value})
        } else {
            return
        }
    }

    const keyUpHandler = (e) => {
        if (e.key === "Escape") {
            const id = e.target.id;
            if (id && id === "userId") {
                setUserPayload({...userPayload, id: ""})
            } else if (id && id === "userPw") {
                setUserPayload({...userPayload, pw: ""})
            } else {
                return
            }
        } else if (e.key === "Enter") {
            console.log("enter clicked")
            loginUserHandler();
        } else {
            return
        }
    }

    const loginUserHandler = () => {
        if (userPayload.id === "") {
            alert("아이디를 입력해주세요.")
            return
        }

        if (userPayload.pw === "") {
            alert("비밀번호를 입력해주세요.")
            return
        }

        // loginUser();
    }

    return (
        <>
            <StyledModalContainer $isOpen={isLogin}>
                <StyledModalBodyArea>
                    <StyledModalBodyItemContainer>
                        <StyledInputArea>
                            <StyledInput
                                tabIndex={1}
                                autoFocus={true}
                                required={true}
                                id={"userId"}
                                value={userPayload.id}
                                type={"text"}
                                placeholder={"아이디 입력"}
                                $isFocus={focusTarget === "id"}
                                onFocus={() => setFocusTarget("id")}
                                onBlur={(() => setFocusTarget(""))}
                                onChange={(e) => onChangeHandler(e)}
                                onKeyUp={(e) => keyUpHandler(e)}
                            />
                        </StyledInputArea>
                    </StyledModalBodyItemContainer>
                    <StyledModalBodyItemContainer>
                        <StyledInputArea>
                            <StyledInput
                                tabIndex={2}
                                required={true}
                                id={"userPw"}
                                value={userPayload.pw}
                                type={"password"}
                                placeholder={"비밀번호 입력"}
                                $isFocus={focusTarget === "pw"}
                                onFocus={() => setFocusTarget("pw")}
                                onBlur={(() => setFocusTarget(""))}
                                onChange={(e) => onChangeHandler(e)}
                                onKeyUp={(e) => keyUpHandler(e)}
                            />
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

                    <StyledModalBtnSend tabIndex={3} onClick={() => loginUserHandler()}>로그인</StyledModalBtnSend>
                </StyledModalBodyArea>
                <StyledJoinUserArea>
                    아직 회원이 아니신가요? <span>회원가입</span>
                </StyledJoinUserArea>
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
        color: #26917D;
    }
`

const StyledInputArea = styled.div`
    position: relative;
    display: block;
    margin: 3px 0;
`


const StyledInput = styled.input<{ $isFocus: boolean }>`
    width: 460px;
    height: 60px;
    border-radius: 8px;
    color: #000000;
    padding: 12px;
    outline: none;

    border: ${(props) => props.$isFocus ? "solid 3px #26917D" : "solid 2px #000000"};

    &::placeholder {
        opacity: 60%;
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
    background-color: #26917D;
    border-radius: 20px;

    &:hover {
        background-color: #22C5A7;
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

const StyledJoinUserArea = styled.div`
    text-align: center;
    margin-top: 10px;
    color: #f5f8ff;
`
