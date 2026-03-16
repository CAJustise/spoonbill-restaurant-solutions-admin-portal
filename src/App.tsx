import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/Admin/AdminLayout';
import Dashboard from './components/Admin/Dashboard';
import BOHClasses from './components/Admin/BOHClasses';
import BOHEventParties from './components/Admin/BOHEventParties';
import BOHReservations from './components/Admin/BOHReservations';
import ApplicationsAdmin from './components/Admin/ApplicationsAdmin';
import DepartmentsAdmin from './components/Admin/DepartmentsAdmin';
import EventsAdmin from './components/Admin/EventsAdmin';
import ImageManager from './components/Admin/ImageManager';
import InvestorSubmissionsAdmin from './components/Admin/InvestorSubmissionsAdmin';
import JobTypesAdmin from './components/Admin/JobTypesAdmin';
import JobsAdmin from './components/Admin/JobsAdmin';
import LoginPage from './components/Auth/LoginPage';
import DrinkCategoriesAdmin from './components/Admin/Menu/DrinkCategoriesAdmin';
import DrinkItemsAdmin from './components/Admin/Menu/DrinkItemsAdmin';
import FoodCategoriesAdmin from './components/Admin/Menu/FoodCategoriesAdmin';
import FoodItemsAdmin from './components/Admin/Menu/FoodItemsAdmin';
import TastingMenusAdmin from './components/Admin/Menu/TastingMenusAdmin';
import Settings from './components/Admin/Settings';
import WorkforceManagement from './components/Admin/WorkforceManagement';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/host/login" element={<Navigate to="/admin/login" replace />} />
        <Route path="/staff/login" element={<Navigate to="/admin/login" replace />} />

        <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />

        <Route
          path="/admin/menu/tasting-menus"
          element={
            <AdminLayout requiredSection="menu_management">
              <TastingMenusAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/menu/food-categories"
          element={
            <AdminLayout requiredSection="menu_management">
              <FoodCategoriesAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/menu/food-items"
          element={
            <AdminLayout requiredSection="menu_management">
              <FoodItemsAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/menu/drink-categories"
          element={
            <AdminLayout requiredSection="menu_management">
              <DrinkCategoriesAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/menu/drink-items"
          element={
            <AdminLayout requiredSection="menu_management">
              <DrinkItemsAdmin />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/events"
          element={
            <AdminLayout requiredSection="content_management">
              <EventsAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/images"
          element={
            <AdminLayout requiredSection="content_management">
              <ImageManager />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/boh/reservations"
          element={
            <AdminLayout requiredSection="operations" requiredCapability="reservations">
              <BOHReservations />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/boh/events-parties"
          element={
            <AdminLayout requiredSection="operations" requiredCapability="events_parties">
              <BOHEventParties />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/boh/classes"
          element={
            <AdminLayout requiredSection="operations" requiredCapability="classes">
              <BOHClasses />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/workforce"
          element={
            <AdminLayout requiredSection="workforce">
              <WorkforceManagement />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/jobs"
          element={
            <AdminLayout requiredSection="career_management">
              <JobsAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/departments"
          element={
            <AdminLayout requiredSection="career_management">
              <DepartmentsAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/job-types"
          element={
            <AdminLayout requiredSection="career_management">
              <JobTypesAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/applications"
          element={
            <AdminLayout requiredSection="career_management">
              <ApplicationsAdmin />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/investor-submissions"
          element={
            <AdminLayout requiredSection="investment">
              <InvestorSubmissionsAdmin />
            </AdminLayout>
          }
        />

        <Route path="/admin/team-members" element={<Navigate to="/admin/workforce" replace />} />
        <Route path="/admin/workforce/team-access" element={<Navigate to="/admin/workforce" replace />} />

        <Route
          path="/admin/settings"
          element={
            <AdminLayout requiredSection="settings">
              <Settings />
            </AdminLayout>
          }
        />

        <Route path="/host/*" element={<Navigate to="/admin/login" replace />} />
        <Route path="/staff/*" element={<Navigate to="/admin/login" replace />} />
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
