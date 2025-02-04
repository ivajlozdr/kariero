import React from "react";
import ReactDOM from "react-dom/client";
import "@tabler/icons-webfont/dist/tabler-icons.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./pages/App.tsx";
import Signinbasic from "./container/authentication/signin/signinbasic/signinbasic.tsx";
import Authenticationlayout from "./pages/authenticationlayout.tsx";
import Resetbasic from "./container/authentication/resetpassword/resetbasic/resetbasic.tsx";
import Signupbasic from "./container/authentication/signup/signupbasic/signupbasic.tsx";
import Twostepbasic from "./container/authentication/twostepverification/twostepbasic/twostepbasic.tsx";
import Home from "./container/home/Home.tsx";
import Quiz from "./container/quiz/Quiz.tsx";
import "./index.scss";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";
import ResetRequest from "./container/authentication/resetpassword/resetrequest.tsx";
import Contact from "./container/contact/Contact.tsx";
import Landing from "./container/landing/Landing.tsx";
import LandingLayout from "./pages/LandingLayout.tsx";
import JobDetails from "./container/jobdetails/JobDetails.tsx";
import ComingSoon from "./container/comingsoon/ComingSoon.tsx";
import Error404 from "./container/error/404error/404error.tsx";
import { GlobalStateProvider } from "./pages/GlobalStateProvider.tsx";
import MostPreferredWorkstyleCards from "./container/home/components/MostPreferredWorkstyleCards.tsx";
import MostSelectedCards from "./container/home/components/MostSelectedPreferences.tsx";
import MostNeededQualitiesCards from "./container/home/components/MostNeededQualitiesCards.tsx";
import TopNeededQualitiesTreemap from "./container/home/components/TopNeededQualitiesTreemap.tsx";
import TopRecommendedOccupationsAndRelated from "./container/home/components/TopRecommendedOccupationsAndRelated.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <BrowserRouter>
      <React.Suspense fallback={<div>Зареждане...</div>}>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<Landing />} />
          </Route>
          <Route path="*" element={<Navigate to="/error/404" />} />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <GlobalStateProvider>
                  <App />
                </GlobalStateProvider>
              </ProtectedRoute>
            }
          >
            <Route index path="home" element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="contact" element={<Contact />} />
            <Route path="job/details" element={<JobDetails />} />
            <Route
              path="global-stats/qualities"
              element={<MostNeededQualitiesCards />}
            />
            <Route
              path="global-stats/work-style"
              element={<MostPreferredWorkstyleCards />}
            />
            <Route path="global-stats/traits" element={<MostSelectedCards />} />
            <Route
              path="global-stats/recommendations"
              element={<TopRecommendedOccupationsAndRelated />}
            />
            <Route
              path="global-stats/desired-qualities"
              element={<TopNeededQualitiesTreemap />}
            />
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
            <Route path="error/404" element={<Error404 />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.Fragment>
);
