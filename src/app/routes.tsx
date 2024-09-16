import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../features/dashboard/components';
import { DashboardProduct } from '../features/dashboard-product/components';
import { FormCreateProduct } from '../features/dashboard-product/components/form.create-product';
import Login from '../features/auth/components/login';
import Register from '../features/auth/components/register';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<DashboardProduct />} />
        <Route path="/dashboard/products/create" element={<FormCreateProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};