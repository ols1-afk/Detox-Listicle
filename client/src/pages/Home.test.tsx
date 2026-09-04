// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { hero, lovedByThousands, offer, PRODUCT_URL, reasons, reviews } from "@/content/listicleContent";
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
    const blocks = Array.from(container.querySelectorAll(".lp-reason:not(.lp-proof)"));

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

    // The hero, the offer shot, every reason with artwork, and every review
    // with a photograph. Entries without an image render text-only.
    const expected =
      reasons.filter((reason) => reason.image).length +
      reviews.filter((review) => review.image).length +
      (lovedByThousands.image ? 1 : 0) +
      (hero.image ? 1 : 0) +
      (offer.image ? 1 : 0);
    expect(images).toHaveLength(expected);

    for (const image of images) {
      expect(image.getAttribute("alt")?.length ?? 0).toBeGreaterThan(20);
      expect(image.getAttribute("width")).toBeTruthy();
      expect(image.getAttribute("height")).toBeTruthy();
    }
  });

  it("loads the hero eagerly and everything below it lazily", () => {
    const { container } = render(<Home />);
    const images = Array.from(container.querySelectorAll("img"));
    const [first, ...rest] = images;

    // The hero is the Largest Contentful Paint element; lazy-loading it would
    // delay the thing the visitor is actually waiting for.
    expect(first.getAttribute("loading")).toBe("eager");
    expect(first.getAttribute("fetchpriority")).toBe("high");

    for (const image of rest) {
      expect(image.getAttribute("loading")).toBe("lazy");
      expect(image.getAttribute("fetchpriority")).toBeNull();
    }
  });

  it("renders every paragraph of every reason", () => {
    render(<Home />);

    for (const reason of reasons) {
      for (const paragraph of reason.body) {
        expect(screen.getByText(paragraph)).toBeTruthy();
      }
    }
  });

  it("renders both paragraphs of the offer block", () => {
    render(<Home />);

    for (const paragraph of offer.body) {
      expect(screen.getByText(paragraph)).toBeTruthy();
    }
  });

  it("renders the four outcome statistics in the social proof block", () => {
    const { container } = render(<Home />);
    const proof = container.querySelector(".lp-proof");

    expect(proof).toBeTruthy();
    // The proof block follows the seven and carries no number of its own.
    expect(proof?.querySelectorAll(".lp-reason-number")).toHaveLength(0);
    expect(
      Array.from(proof!.querySelectorAll(".lp-stats li strong")).map((s) => s.textContent),
    ).toEqual(["84%", "79%", "76%", "71%"]);
    for (const paragraph of lovedByThousands.body) {
      expect(screen.getByText(paragraph)).toBeTruthy();
    }
  });

  it("renders the offer block with its trust badges and guarantee", () => {
    const { container } = render(<Home />);

    expect(screen.getByRole("heading", { level: 2, name: "Clearing The Belly Made Simple" })).toBeTruthy();
    expect(container.querySelectorAll(".lp-badges li")).toHaveLength(4);
    expect(screen.getByText("90-Day Guarantee")).toBeTruthy();
    expect(screen.getByText("Try it today with a 90-Day Money Back Guarantee")).toBeTruthy();
    expect(screen.getByText("Buy 2 Get 1 Free For A Limited Time Only")).toBeTruthy();
  });

  it("renders every review with an attributed name and verification badge", () => {
    const { container } = render(<Home />);

    expect(container.querySelectorAll(".lp-review")).toHaveLength(reviews.length);
    for (const review of reviews) {
      expect(screen.getByRole("heading", { level: 3, name: review.title })).toBeTruthy();
      expect(screen.getByText(review.name)).toBeTruthy();
    }
    expect(screen.getByText("10,284 reviews")).toBeTruthy();

    // Each review's photograph sits inside that review's own container.
    for (const card of Array.from(container.querySelectorAll(".lp-review"))) {
      expect(card.querySelectorAll(".lp-review-photo")).toHaveLength(1);
    }
    expect(container.querySelectorAll(".lp-review-photo")).toHaveLength(
      reviews.filter((review) => review.image).length,
    );
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
