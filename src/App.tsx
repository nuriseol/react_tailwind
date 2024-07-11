import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Home from './pages/Home';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Usage from './pages/Energy/Usage';
import Charge from './pages/Energy/Charge';
import Peak from './pages/Energy/Peak';
import Pattern from './pages/Energy/Pattern';
import SavingReport from './pages/Energy/SavingReport';
import Collection from './pages/Facility/Collection';
import Meter from './pages/Facility/Meter';
import Member from './pages/Management/Member';
import Subscription from './pages/Management/Subscription';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* 로그인 전 */}
      <Route
        path="/auth/signin"
        element={
          <>
            <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <>
            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignUp />
          </>
        }
      />
      {/* DefaultLayout과 라우팅 */}
      <Route
        path="/*"
        element={
          <DefaultLayout>
            <Routes>
              <Route
                index
                element={
                  <>
                    <PageTitle title="E-VERSE V2.0" />
                    <Home />
                  </>
                }
              />
              <Route
                path="/energy/usage"
                element={
                  <>
                    <PageTitle title="Energy usage | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Usage />
                  </>
                }
              />
              <Route
                path="/energy/charge"
                element={
                  <>
                    <PageTitle title="Energy charge | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Charge />
                  </>
                }
              />
              <Route
                path="/energy/peak"
                element={
                  <>
                    <PageTitle title="Energy peak | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Peak />
                  </>
                }
              />
              <Route
                path="/energy/pattern"
                element={
                  <>
                    <PageTitle title="Energy pattern | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Pattern />
                  </>
                }
              />
              <Route
                path="/energy/report"
                element={
                  <>
                    <PageTitle title="Energy Saving Report | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <SavingReport />
                  </>
                }
              />
              <Route
                path="/facility/collection"
                element={
                  <>
                    <PageTitle title="Data collection status | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Collection />
                  </>
                }
              />
              <Route
                path="/facility/meter"
                element={
                  <>
                    <PageTitle title="Meter status | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Meter />
                  </>
                }
              />
              <Route
                path="/management/member"
                element={
                  <>
                    <PageTitle title="Management member | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Member />
                  </>
                }
              />
              <Route
                path="/management/subscription"
                element={
                  <>
                    <PageTitle title="Management subscription | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Subscription />
                  </>
                }
              />
              <Route
                path="/calendar"
                element={
                  <>
                    <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Calendar />
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Profile />
                  </>
                }
              />
              <Route
                path="/forms/form-elements"
                element={
                  <>
                    <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <FormElements />
                  </>
                }
              />
              <Route
                path="/forms/form-layout"
                element={
                  <>
                    <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <FormLayout />
                  </>
                }
              />
              <Route
                path="/tables"
                element={
                  <>
                    <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Tables />
                  </>
                }
              />
              <Route
                path="/settings"
                element={
                  <>
                    <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Settings />
                  </>
                }
              />
              <Route
                path="/chart"
                element={
                  <>
                    <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Chart />
                  </>
                }
              />
              <Route
                path="/ui/alerts"
                element={
                  <>
                    <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Alerts />
                  </>
                }
              />
              <Route
                path="/ui/buttons"
                element={
                  <>
                    <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <Buttons />
                  </>
                }
              />
            </Routes>
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;