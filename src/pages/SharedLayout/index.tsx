import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Toggle from '../../components/Toggle';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Toggle />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default SharedLayout;
