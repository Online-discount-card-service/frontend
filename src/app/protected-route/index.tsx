import React from 'react';
import { Await, Navigate, Outlet } from 'react-router-dom';
import { useUser } from '~/shared/store/useUser';

export const ProtectedRoute = () => {
  const user = useUser((state) => state.user);
  // return !user ? <Navigate to="/" replace /> : <Outlet />;
  return (
    <React.Suspense>
      <Await
        // and is the promise we pass to Await
        resolve={user}
      >
        {!user ? <Navigate to="/" replace /> : <Outlet />}
      </Await>
    </React.Suspense>
  );
};
