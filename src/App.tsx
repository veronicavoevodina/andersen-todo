import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {
  Todo,
  Done,
  Error,
  SharedLayout,
  Register,
  ProtectedRoute,
} from './pages';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Todo />} />
          <Route path="done" element={<Done />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
