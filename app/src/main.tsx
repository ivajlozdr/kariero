import React from "react";
import ReactDOM from "react-dom/client";
import "@tabler/icons-webfont/dist/tabler-icons.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App.tsx";
import Signinbasic from "./container/authentication/signin/signinbasic/signinbasic.tsx";
import Authenticationlayout from "./pages/authenticationlayout.tsx";
import Resetbasic from "./container/authentication/resetpassword/resetbasic/resetbasic.tsx";
import Signupbasic from "./container/authentication/signup/signupbasic/signupbasic.tsx";
import Twostepbasic from "./container/authentication/twostepverification/twostepbasic/twostepbasic.tsx";
import Crm from "./container/home/Home.tsx";
import Quiz from "./container/quiz/Quiz.tsx";
import "./index.scss";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";
import ResetRequest from "./container/authentication/resetpassword/resetrequest.tsx";
import Contact from "./container/contact/Contact.tsx";
import Landing from "./container/landing/landing.tsx";
import LandingLayout from "./pages/LandingLayout.tsx";
import JobDetails from "./container/jobdetails/JobDetails.tsx";
import ComingSoon from "./container/authentication/comingsoon/comingsoon.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <BrowserRouter>
      <React.Suspense fallback={<div>Зареждане...</div>}>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route path={`/`} element={<Landing />} />
          </Route>
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          >
            <Route index path="home" element={<Crm />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="contact" element={<Contact />} />
            <Route path="job/details" element={<JobDetails />} />
          </Route>
          <Route path="/" element={<Authenticationlayout />}>
            <Route
              path="resetpassword/resetbasic/:token"
              element={<Resetbasic />}
            />
            <Route path="resetpassword" element={<ResetRequest />} />
            <Route path="signup" element={<Signupbasic />} />
            <Route path="signin" element={<Signinbasic />} />
            <Route path="twostepverification" element={<Twostepbasic />} />
            <Route path="comingsoon" element={<ComingSoon />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.Fragment>
);
