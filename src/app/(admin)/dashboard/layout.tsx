import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
};

const DashboardLayout = ({
  children,
  products,
  analytics,
  payments,
}: DashboardLayoutProps) => {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5 flex justify-center items-center gap-5">
        {products}
        {analytics}
      </div>
      <div>{payments}</div>
    </div>
  );
};

export default DashboardLayout;
