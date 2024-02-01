import { Navigate, Route, Routes } from "react-router-dom";
import { HomeRoutes } from "../modules/Home/routes";
import { AboutRoutes } from "../modules/About/routes";
import { UsersRoutes } from "../modules/Users/routes";
import { MainLayout } from "../Layouts/MainLayout";
import { authStore } from "store/auth.store";
import { observer } from "mobx-react-lite";
import { AuthRoutes } from "modules/Auth/routes";


export const Router = observer(() => {

  const isAuth = authStore.isAuth;
  console.log(isAuth);

  if (!isAuth) {
    return <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>;
  }

  return <Routes>
    <Route path="" element={<MainLayout />}>
      <Route index path="/home/*" element={<HomeRoutes />} />
      <Route path="/about/*" element={<AboutRoutes />} />
      <Route path="/users/*" element={<UsersRoutes />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Route>
  </Routes>;
});
