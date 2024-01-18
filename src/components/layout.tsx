import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h3>layout</h3>
      <Outlet />
    </>
  );
}
