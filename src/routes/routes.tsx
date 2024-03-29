import RequireAuth from 'components/RequireAuth';
import Login from 'pages/Login';
import Schedule from 'pages/Schedule';
import Details from 'pages/Details';
import { Routes, Route } from 'react-router-dom';
import RouterWrapper from './wrapper.routes';

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<RouterWrapper children={<Login />} />} />

      <Route element={<RequireAuth />}>
        <Route
          path="/lista-de-churras"
          element={<RouterWrapper children={<Schedule />} />}
        />
        <Route
          path="/detalhes"
          element={<RouterWrapper children={<Details />} />}
        />
      </Route>
    </Routes>
  );
}

export default Paths;
