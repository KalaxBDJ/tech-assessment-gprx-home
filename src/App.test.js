import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("Home page", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello there/i);
  expect(linkElement).toBeInTheDocument();
});

test("Load posts", async () => {
  render(<App />);

  // Use waitFor to wait for the link to appear
  await waitFor(() => {
    const postsLinks = screen.getAllByRole("link", {
      name: "Posts",
    });

    // Assuming you want to select the first link, which is at index 0
    const selectedLink = postsLinks[0];

    // Verify that the selected link has the correct href attribute
    expect(selectedLink).toHaveAttribute("href", "/posts");

    //Click button
    fireEvent.click(selectedLink);
  });

  //Wait for data loads and table appears
  await waitFor(() => {
    const table = screen.getByRole("table");

    // Verify that the table is present
    expect(table).toBeInTheDocument();
  });
});
