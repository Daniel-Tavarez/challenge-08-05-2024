import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientDetail from '../pages/ClientDetail/ClientDetail';
import CompanyDetail from '../pages/CompanyDetail/CompanyDetail';
import HomePage from '../pages/HomePage';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/company/:companyId" element={<CompanyDetail />} />
            <Route path="/company/:companyId/client/:clientId" element={<ClientDetail />} />
        </Routes>
    );
};

export default AppRoutes;
