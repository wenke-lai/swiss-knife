import React from "react";

const Suspense = (Component: React.FC) => (props: object) => {
  return (
    <React.Suspense>
      <Component {...props} />
    </React.Suspense>
  );
};

export const Loading = (
  factory: () => Promise<{ default: React.ComponentType<unknown> }>
) => Suspense(React.lazy(factory));
