import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Reschedulebooking = React.lazy(() => import("pages/Reschedulebooking"));
const Cancelbooking = React.lazy(() => import("pages/Cancelbooking"));
const Forgotpassword = React.lazy(() => import("pages/Forgotpassword"));
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const Signuppage = React.lazy(() => import("pages/Signuppage"));
const Bookingform = React.lazy(() => import("pages/Bookingform"));
const ServiceProviderProfile = React.lazy(
  () => import("pages/ServiceProviderProfile"),
);
const Helppage = React.lazy(() => import("pages/Helppage"));
const Editprofile = React.lazy(() => import("pages/Editprofile"));
const Bookingdetails = React.lazy(() => import("pages/Bookingdetails"));
const Searchresult = React.lazy(() => import("pages/Searchresult"));
const BookingPage = React.lazy(() => import("pages/BookingPage"));
const Userprofile = React.lazy(() => import("pages/Userprofile"));
const BookingSuccessfulpage = React.lazy(
  () => import("pages/BookingSuccessfulpage"),
);
const BookingStatusChangingDialog = React.lazy(
  () => import("pages/BookingStatusChangingDialog"),
);
const ServiceProviderHomePage = React.lazy(
  () => import("pages/ServiceProviderHomePage"),
);
const Servicelist = React.lazy(() => import("pages/Servicelist"));
const NotificationPage = React.lazy(() => import("pages/NotificationPage"));
const ServiceProviderSideProfile = React.lazy(
  () => import("pages/ServiceProviderSideProfile"),
);
const Serviceprovidereditprofilepage = React.lazy(
  () => import("pages/Serviceprovidereditprofilepage"),
);
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/serviceprovidereditprofilepage"
            element={<Serviceprovidereditprofilepage />}
          />
          <Route
            path="/serviceprovidersideprofile"
            element={<ServiceProviderSideProfile />}
          />
          <Route path="/notificationpage" element={<NotificationPage />} />
          <Route path="/servicelist" element={<Servicelist />} />
          <Route
            path="/serviceproviderhomepage"
            element={<ServiceProviderHomePage />}
          />
          <Route
            path="/bookingstatuschangingdialog"
            element={<BookingStatusChangingDialog />}
          />
          <Route
            path="/bookingsuccessfulpage"
            element={<BookingSuccessfulpage />}
          />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/searchresult" element={<Searchresult />} />
          <Route path="/bookingdetails" element={<Bookingdetails />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/helppage" element={<Helppage />} />
          <Route
            path="/serviceproviderprofile"
            element={<ServiceProviderProfile />}
          />
          <Route path="/bookingform" element={<Bookingform />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/cancelbooking" element={<Cancelbooking />} />
          <Route path="/reschedulebooking" element={<Reschedulebooking />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
