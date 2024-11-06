import AboutPage from "@/app/about/page";
import AboutLayoutPage from "@/app/about/layout";
import { render, screen } from "@testing-library/react";
import { describe, it } from "node:test";

describe("About Page", () => {
  it("should render", () => {
    const page = render(
      <AboutLayoutPage>
        <AboutPage />
      </AboutLayoutPage>
    );
    expect(page).toMatchSnapshot();
  });
});
