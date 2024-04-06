import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layouts';

// Routes
import { authProtectedRoutes, publicRoutes } from './allRoutes';
import NonAuthLayout from '../Layouts/NonAuthLayout';
import AuthProtected from './Authprotected';

const RoutesComponents = () => {

  return (
    <React.Fragment>
      <Routes>

        <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={<NonAuthLayout> {route.component} </NonAuthLayout>}
            // exact={true}
            />
          ))
          }
        </Route>

        <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <AuthProtected>
                  <Layout>
                    {route.component}
                  </Layout>
                </AuthProtected>
              }
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default RoutesComponents;