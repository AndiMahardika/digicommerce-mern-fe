import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../features/dashboard/components';
import { DashboardProduct } from '../features/dashboard-product/components';
import { FormCreateProduct } from '../features/dashboard-product/components/form.create-product';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<DashboardProduct />} />
        <Route path="/dashboard/products/create" element={<FormCreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};