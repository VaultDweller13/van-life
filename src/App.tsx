import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import {
  Home,
  About,
  Vans,
  vansDataLoader,
  VanDetails,
  Income,
  HostVans,
  Reviews,
  Dashboard,
  Details,
  Pricing,
  Photos,
} from './pages';
import { Layout, HostLayout, VanInfoLayout } from './layouts';
import { NotFound } from './pages/NotFound/NotFound';
import { ErrorFallback } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<VanInfoLayout />}>
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photos" element={<Photos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansDataLoader}
        errorElement={<ErrorFallback />}
      />
      <Route path="vans/:id" element={<VanDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export const App = () => {
  return <RouterProvider router={router} />;
};
