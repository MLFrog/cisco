import {useState} from "react";

const UserInfoArea = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            {/* Nav Item - User Information */}
            <li className={`nav-item dropdown no-arrow ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded={isOpen}>
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                    <img className="img-profile rounded-circle" src="../../assets/img/undraw_profile.svg"/>
                </a>
                {/* Dropdown - User Information */}
                <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${isOpen ? "show" : ""}`} aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"/>
                        Profile
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"/>
                        Settings
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"/>
                        Activity Log
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>
                        Logout
                    </a>
                </div>
            </li>
        </>
    )
}

export default UserInfoArea