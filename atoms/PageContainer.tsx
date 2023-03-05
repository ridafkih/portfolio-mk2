import React from "react";

const PageContainer: React.FC = ({ children }) => (
  <main className="px-8 pb-24 space-y-12 sm:space-y-12 sm:pt-12 sm:px-24">
    {children}
  </main>
);

export default PageContainer;
