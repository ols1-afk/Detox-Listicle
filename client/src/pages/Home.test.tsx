// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { PRODUCT_URL, reasons, reviews } from "@/content/listicleContent";
import Home from "./Home";

afterEach(cleanup);

describe("DetoxMe listicle landing page", () => {
  it("renders the hero with its headline, subheadline and social proof", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "7 Reasons Women Over 40 Are Switching To DetoxMe Chitosan",
      }),
    ).toBeTruthy();
    expect(screen.getByText("(Besides Finally Shifting The Belly That Wouldn't Move)")).toBeTruthy();
    expect(screen.getByText("10,000+ Reviews | 100,000+ Happy Customers")).toBeTruthy();
  });

  it("renders all seven reasons in order, each numbered and headed", () => {
    const { container } = render(<Home />);
    const blocks = Array.from(container.querySelectorAll(".lp-reason"));

    expect(blocks).toHaveLength(7);
    expect(blocks.map((block) => block.id)).toEqual(reasons.map((reason) => reason.id));
    expect(
      Array.from(container.querySelectorAll(".lp-reason-number")).map((n) => n.textContent),
    ).toEqual(["01", "02", "03", "04", "05", "06", "07"]);

    for (const reason of reasons) {
      expect(screen.getByRole("heading", { level: 2, name: reason.headline })).toBeTruthy();
    }
  });

  it("gives every image a width, a height and descriptive alt text", () => {
    const { container } = render(<Home />);
    const images = Array.from(container.querySelectorAll("img"));

    // Only the reasons that currently have artwork; the rest render text-only
    // until their images are supplied.
    expect(images).toHaveLength(reasons.filter((reason) => reason.image).length);

    for (const image of images) {
      expect(image.getAttribute("alt")?.length ?? 0).toBeGreaterThan(20);
      expect(image.getAttribute("width")).toBeTruthy();
      expect(image.getAttribute("height")).toBeTruthy();
      expect(image.getAttribute("loading")).toBe("lazy");
    }
  });

  it("renders the deacetylation comparison as markup rather than an image", () => {
    const { container } = render(<Home />);

    expect(container.querySelectorAll(".lp-compare-card")).toHaveLength(2);
    expect(screen.getByText("Fat Blocker Grade")).toBeTruthy();
    expect(screen.getByText("50-70% deacetylation")).toBeTruthy();
    expect(screen.getByText("Pharmaceutical Grade")).toBeTruthy();
    expect(screen.getByText("90%+ deacetylation")).toBeTruthy();
  });

  it("renders the four outcome statistics in the social proof reason", () => {
    const { container } = render(<Home />);
    const stats = Array.from(container.querySelectorAll(".lp-stats li strong"));

    expect(stats.map((stat) => stat.textContent)).toEqual(["84%", "79%", "76%", "71%"]);
  });

  it("renders the offer block with its trust badges and guarantee", () => {
    const { container } = render(<Home />);

    expect(screen.getByRole("heading", { level: 2, name: "Clearing The Belly Made Simple" })).toBeTruthy();
    expect(container.querySelectorAll(".lp-badges li")).toHaveLength(4);
    expect(screen.getByText("90-Day Guarantee")).toBeTruthy();
    expect(screen.getByText("Try it today with a 90-Day Money Back Guarantee")).toBeTruthy();
  });

  it("renders every review with an attributed name and verification badge", () => {
    const { container } = render(<Home />);

    expect(container.querySelectorAll(".lp-review")).toHaveLength(reviews.length);
    for (const review of reviews) {
      expect(screen.getByRole("heading", { level: 3, name: review.title })).toBeTruthy();
      expect(screen.getByText(review.name)).toBeTruthy();
    }
    expect(screen.getByText("10,284 reviews")).toBeTruthy();
  });

  it("points every call to action at the product page", () => {
    render(<Home />);
    const links = screen.getAllByRole("link");

    expect(links.length).toBeGreaterThanOrEqual(4);
    for (const link of links) {
      expect(link.getAttribute("href")).toBe(PRODUCT_URL);
      expect(link.getAttribute("rel")).toContain("noreferrer");
    }
  });

  it("keeps the required regulatory disclaimer on the page", () => {
    render(<Home />);

    expect(screen.getByText(/Contains shellfish/)).toBeTruthy();
    expect(screen.getByText(/have not been evaluated by the FDA/)).toBeTruthy();
  });

  it("reveals the sticky call to action only after scrolling", async () => {
    const { container } = render(<Home />);

    expect(container.querySelector(".lp-sticky")?.classList.contains("is-visible")).toBe(false);

    Object.defineProperty(window, "scrollY", { configurable: true, value: 900 });
    fireEvent.scroll(window);

    await waitFor(() => {
      expect(container.querySelector(".lp-sticky")?.classList.contains("is-visible")).toBe(true);
    });
  });
});
