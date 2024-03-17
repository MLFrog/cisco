import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

//css
import "./assets/css/sb-admin-2.css";
import "./assets/css/sb-admin-2.min.css";

//_variables
// import "./static/scss/_variables.scss";

//img
import "./assets/img/undraw_posting_photo.svg";
import "./assets/img/undraw_profile.svg";
import "./assets/img/undraw_profile_1.svg";
import "./assets/img/undraw_profile_2.svg";
import "./assets/img/undraw_profile_3.svg";
import "./assets/img/undraw_rocket.svg";

//js
// import "./static/js/sb-admin-2.js";
// import "./static/js/sb-admin-2.min.js";
// import "./static/js/demo/chart-area-demo.js";
// import "./static/js/demo/chart-bar-demo.js";
// import "./static/js/demo/chart-pie-demo.js";
// import "./static/js/demo/datatables-demo.js";
//scss/navs
// import "./static/scss/navs/_global.scss";
// import "./static/scss/navs/_sidebar.scss";
// import "./static/scss/navs/_topbar.scss";
//scss/utilities
// import "./static/scss/utilities/_animation.scss";
// import "./static/scss/utilities/_background.scss";
// import "./static/scss/utilities/_border.scss";
// import "./static/scss/utilities/_display.scss";
// import "./static/scss/utilities/_progress.scss";
// import "./static/scss/utilities/_rotate.scss";
// import "./static/scss/utilities/_text.scss";


import MainPage from "./page/MainPage";

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={"/"}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
