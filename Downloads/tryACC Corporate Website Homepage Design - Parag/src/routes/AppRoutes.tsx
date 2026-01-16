import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/Home.page';
import ServicesPage from '../pages/Services/Services.page';
import ProductsPage from '../pages/Products/Products.page';
import CaseStudiesPage from '../pages/CaseStudies/CaseStudies.page';
import CompanyPage from '../pages/Company/Company.page';
import ContactPage from '../pages/Contact/Contact.page';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
