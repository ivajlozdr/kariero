import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./pages/App.tsx";
import Signinbasic from "./container/authentication/signin/signinbasic/signinbasic.tsx";
import Authenticationlayout from "./pages/authenticationlayout.tsx";
import Error401 from "./container/error/401error/401error.tsx";
import Error404 from "./container/error/404error/404error.tsx";
import Error500 from "./container/error/500error/500error.tsx";
import Comingsoon from "./container/authentication/comingsoon/comingsoon.tsx";
import Undermaintanace from "./container/authentication/undermaintanace/undermaintanace.tsx";
import Lockbasic from "./container/authentication/lockscreen/lockbasic/lockbasic.tsx";
import Resetbasic from "./container/authentication/resetpassword/resetbasic/resetbasic.tsx";
import Signupbasic from "./container/authentication/signup/signupbasic/signupbasic.tsx";
import Twostepbasic from "./container/authentication/twostepverification/twostepbasic/twostepbasic.tsx";
import Crm from "./container/dashboards/crm/crm.tsx";
import Quiz from "./container/dashboards/quiz/quiz.tsx";
import "./index.scss";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";
import ResetRequest from "./container/authentication/resetpassword/resetrequest.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          >
            <Route index element={<Crm />} />
            <Route path="dashboards/crm" element={<Crm />} />
            <Route path="quiz" element={<Quiz />} />
          </Route>
          <Route path="/" element={<Authenticationlayout />}>
            <Route path="auth/comingsoon" element={<Comingsoon />} />
            <Route path="auth/lockscreen" element={<Lockbasic />} />
            <Route path="auth/resetpassword/:token" element={<Resetbasic />} />
            <Route
              path="auth/resetpassword/request"
              element={<ResetRequest />}
            />
            <Route path="auth/signup" element={<Signupbasic />} />
            <Route path="auth/signin" element={<Signinbasic />} />
            <Route path="auth/twostepverification" element={<Twostepbasic />} />
            <Route path="maintenance" element={<Undermaintanace />} />
            <Route path="error/401" element={<Error401 />} />
            <Route path="error/404" element={<Error404 />} />
            <Route path="error/500" element={<Error500 />} />
            <Route path="*" element={<Navigate to="/error/404" replace />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.Fragment>
);
