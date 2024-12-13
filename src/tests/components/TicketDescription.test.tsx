import { screen, render } from "@testing-library/react";
import { TicketDescription } from "../../components/TicketDescription/TicketDescription";
import { formatReadableDate } from "../../helpers/formatDate";
import { generateMockTicket } from "../../mocks/tickets.mock";
import { PRIORITIES_MAP } from "../../global/constants";

describe("TicketDescription", () => {
  it("renders the ticket information correctly", () => {
    const ticket = generateMockTicket();
    const {
      id,
      subject,
      author,
      description,
      priority,
      created_at: createdAt,
      updated_at: updatedAt,
    } = ticket;
    const { name, email, avatar } = author;
    const descriptionRegex = new RegExp(description.slice(0, 100));

    render(<TicketDescription viewedTicket={ticket} />);

    expect(screen.getByText(id)).toBeInTheDocument();
    expect(screen.getByText(subject)).toBeInTheDocument();

    expect(screen.getByText(formatReadableDate(createdAt))).toBeInTheDocument();
    expect(screen.getByText(formatReadableDate(updatedAt))).toBeInTheDocument();

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();

    expect(screen.getByText(descriptionRegex)).toBeInTheDocument();

    const avatarImage = screen.getByAltText(name);
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", avatar);

    const priorityBadge = screen.getByText(PRIORITIES_MAP[priority]);
    expect(priorityBadge).toBeInTheDocument();
  });

  it("renders the TicketDescriptionPlaceholder when no ticket is provided", () => {
    render(<TicketDescription viewedTicket={null} />);

    expect(screen.getByText(/no ticket selected/i)).toBeInTheDocument();
  });
});
