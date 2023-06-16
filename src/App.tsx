import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Vans,
  VanDetails,
  Income,
  Reviews,
  Dashboard,
} from './pages';
import { Layout, HostLayout } from './layouts';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
