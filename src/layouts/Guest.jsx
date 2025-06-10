import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header';

function Guest() {
  return (
    <>
      <main className="guest_main">
         <Header />
          <Outlet/>
      </main>
    </>
  );
}

export default Guest;