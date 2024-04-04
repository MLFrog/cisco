//font
import "./assets/font/webfonts/fa-brands-400.eot";
import "./assets/font/webfonts/fa-brands-400.svg";
import "./assets/font/webfonts/fa-brands-400.ttf";
import "./assets/font/webfonts/fa-brands-400.woff";
import "./assets/font/webfonts/fa-brands-400.woff2";
import "./assets/font/webfonts/fa-regular-400.eot";
import "./assets/font/webfonts/fa-regular-400.svg";
import "./assets/font/webfonts/fa-regular-400.ttf";
import "./assets/font/webfonts/fa-regular-400.woff";
import "./assets/font/webfonts/fa-regular-400.woff2";
import "./assets/font/webfonts/fa-solid-900.eot";
import "./assets/font/webfonts/fa-solid-900.svg";
import "./assets/font/webfonts/fa-solid-900.ttf";
import "./assets/font/webfonts/fa-solid-900.woff";
import "./assets/font/webfonts/fa-solid-900.woff2";
import "./assets/font/webfonts/SCDream1.otf";
import "./assets/font/webfonts/SCDream2.otf";
import "./assets/font/webfonts/SCDream3.otf";
import "./assets/font/webfonts/SCDream4.otf";
import "./assets/font/webfonts/SCDream5.otf";
import "./assets/font/webfonts/SCDream6.otf";
import "./assets/font/webfonts/SCDream7.otf";
import "./assets/font/webfonts/SCDream8.otf";
import "./assets/font/webfonts/SCDream9.otf";

//css
import "./assets/css/sb-admin-2.css";
import "./assets/css/all.css";
import "./assets/css/brands.css";
import "./assets/css/fontawesome.css";
import "./assets/css/regular.css";
import "./assets/css/solid.css";
import "./assets/css/svg-with-js.css";
import "./assets/css/v4-shims.css";
import "./assets/css/sb-admin-2.min.css";

//_variables
import "./assets/scss/_variables.scss";
// import "./assets/scss/_buttons.scss";
// import "./assets/scss/_cards.scss";
// import "./assets/scss/_charts.scss";
// import "./assets/scss/_dropdowns.scss";
// import "./assets/scss/_error.scss";
// import "./assets/scss/_footer.scss";
// import "./assets/scss/_global.scss";
// import "./assets/scss/_login.scss";
// import "./assets/scss/_mixins.scss";
// import "./assets/scss/_navs.scss";
// import "./assets/scss/_utilities.scss";

//img
import "./assets/img/EPS_icon_logo.svg";
import "./assets/img/favicon_EPS.png";
import "./assets/img/icon_car.svg";
import "./assets/img/icon_car_158px.svg";
import "./assets/img/icon_checked.svg";
import "./assets/img/icon_wheelchair.svg";
import "./assets/img/img_basicImg.svg";
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
import "./assets/scss/navs/_global.scss";
// import "./assets/scss/navs/_sidebar.scss";
// import "./assets/scss/navs/_topbar.scss";

//scss/utilities
// import "./assets/scss/utilities/_animation.scss";
// import "./assets/scss/utilities/_background.scss";
// import "./assets/scss/utilities/_border.scss";
// import "./assets/scss/utilities/_display.scss";
// import "./assets/scss/utilities/_progress.scss";
// import "./assets/scss/utilities/_rotate.scss";
// import "./assets/scss/utilities/_text.scss";

import React, {useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import MainPage from "./page/MainPage";
import NotFoundPage from "./page/NotFoundPage";

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
