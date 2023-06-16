import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Vans,
  VanDetails,
  Dashboard,
  Income,
  Reviews,
} from './pages';
import { Layout } from './components/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/about/reviews" element={<Reviews />} />
          <Route path="/about/" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
