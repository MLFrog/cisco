import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

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
