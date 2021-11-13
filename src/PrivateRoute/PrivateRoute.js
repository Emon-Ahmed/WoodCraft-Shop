import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";

export default function PrivateRoute({ children, ...rest }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="d-flex m-5 justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/account",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
