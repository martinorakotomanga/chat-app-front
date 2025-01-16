import { RenderOptions, render } from "@testing-library/react";
import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <BrowserRouter>{children}</BrowserRouter>
    </div>
  );
};

const customeRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customeRender as render };
