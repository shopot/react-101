import { Navigate, Route, Routes } from 'react-router-dom';

import { TodosPage } from './todos-page';

export const TodosRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<TodosPage />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
