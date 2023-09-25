import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("Home page", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello there/i);
  expect(linkElement).toBeInTheDocument();
});

test("Load posts", async () => {
  render(<App />);

  //Waiting to render home page and navbar appears
  await waitFor(() => {
    const postsLinks = screen.getAllByRole("link", {
      name: "Posts",
    });

    //As i have 2 links redirecting the same section.
    //I am going to select the first element
    const selectedLink = postsLinks[0];

    //Assertion if selected link has the correct atribute and value
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
