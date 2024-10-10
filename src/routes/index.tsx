import React, { FC, Suspense } from 'react';
import { Route, Routes as RoutesDom, Navigate } from 'react-router-dom';
// import { LoginPage } from 'containers/LoginPage/LoginPage';
import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
// import { isAuthenticatedSelector } from '../containers/LoginPage/store/selectors';

const isAuthenticated = false;

const Routes: FC = () => {
  // const isAuthenticated = useSelector(isAuthenticatedSelector());
  // const test = {}; error boundary
  // // @ts-ignore
  // test.map(e => e);

  // const withMainLayout = [
  //   {
  //     path: '/catalogs/*',
  //     component: <CatalogsRoutes />,
  //   },
  // ];

  console.log(1);

  return (
    <RoutesDom>
      {isAuthenticated ? (
        <>
          {/* <Route */}
          {/*  path="/" */}
          {/*  element={ */}
          {/*    <PrivateRoute> */}
          {/*      <MainLayout> */}
          {/*        <DashboardList /> */}
          {/*      </MainLayout> */}
          {/*    </PrivateRoute> */}
          {/*  } */}
          {/* /> */}
          {/* <Navigate to="/dashboard" state={{ from: location }} /> */}
          <Route
            path="/dashboard"
            element={
              // <Suspense fallback={<PageLoader />}>
              <Suspense fallback={<></>}>
                <PrivateRoute>
                  {/*<MainLayout>*/}
                  {/*  <DashboardListAsync />*/}
                  {/*</MainLayout>*/}
                </PrivateRoute>
              </Suspense>
            }
          />
          {/*{withMainLayout.map((e) => (*/}
          {/*  <Route*/}
          {/*    key={e.path}*/}
          {/*    path={e.path}*/}
          {/*    element={*/}
          {/*      <Suspense fallback={<PageLoader />}>*/}
          {/*        <PrivateRoute>*/}
          {/*          <MainLayout>{e.component}</MainLayout>*/}
          {/*        </PrivateRoute>*/}
          {/*      </Suspense>*/}
          {/*    }*/}
          {/*  />*/}
          {/*))}*/}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
          <Route path="*" element={<h1>Authen 404</h1>} />
        </>
      ) : (
        <>
          {/*<Route path="/" element={<LoginPage />} />*/}
          {/*<Route path="/auth" element={<LoginPage />} />*/}
          <Route path="*" element={<h1>NotAuthen 441404</h1>} />
        </>
      )}
    </RoutesDom>
  );
};

export { Routes };
