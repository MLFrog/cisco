const img_user_logo1 = require("../../assets/img/img_user_logo1.svg");
const img_user_logo2 = require("../../assets/img/img_user_logo2.svg");
const img_user_logo3 = require("../../assets/img/img_user_logo3.svg");

import {useState} from "react";
import styled from "styled-components";

const UserInfoArea = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            {/* Nav Item - User Information */}
            <li className={`nav-item dropdown no-arrow ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded={isOpen}>
                    <StyledUserInfoArea>
                        <StyledUserLogo></StyledUserLogo>
                        <span>호시노아이</span>님
                    </StyledUserInfoArea>

                </a>
                {/* Dropdown - User Information */}
                <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${isOpen ? "show" : ""}`} aria-labelledby="userDropdown">
                    {/*<a className="dropdown-item" href="#">*/}
                    {/*    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"/>*/}
                    {/*    Profile*/}
                    {/*</a>*/}
                    {/*<a className="dropdown-item" href="#">*/}
                    {/*    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"/>*/}
                    {/*    Settings*/}
                    {/*</a>*/}
                    {/*<a className="dropdown-item" href="#">*/}
                    {/*    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"/>*/}
                    {/*    Activity Log*/}
                    {/*</a>*/}
                    {/*<div className="dropdown-divider"/>*/}
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"
                       onClick={() => console.log("logOutBtn clicked !! ")}
                    >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>
                        Logout
                    </a>
                </div>
            </li>
        </>
    )
}

export default UserInfoArea

const StyledUserInfoArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 50px;
    gap: 1px;
    color: #424444;
    font-weight: 500;
    margin-right: 10px;
    span {
        margin-right: 4px;
        font-size: 20px;
        font-weight: 600;
    }
`

const StyledUserLogo = styled.i`
    background-image: url(${img_user_logo2});
    border-radius: 30px;
    margin-left: 3px;

    &::before {
        content: "";
        display: block;
        width: 48px;
        height: 48px;
        background-size: 100%;
    }
`

