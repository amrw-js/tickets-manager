import { render, screen, fireEvent } from "@testing-library/react";
import { generateMockTicket } from "../../mocks/tickets.mock";
import { TicketListItem } from "../../components/TicketList/TicketListItem";

const mockToggleViewTicket = vi.fn();

describe("TicketListItem", () => {
  it("renders ticket id and subject correctly", () => {
    const ticket = generateMockTicket();
    const { id, subject } = ticket;

    render(
      <TicketListItem
        ticket={ticket}
        active={false}
        toggleViewTicket={mockToggleViewTicket}
      />
    );

    expect(screen.getByText(id)).toBeInTheDocument();
    expect(screen.getByText(subject)).toBeInTheDocument();
  });

  it("applies correct class based on active prop", () => {
    const ticket = generateMockTicket();

    const { rerender } = render(
      <TicketListItem
        ticket={ticket}
        active={false}
        toggleViewTicket={mockToggleViewTicket}
      />
    );

    rerender(
      <TicketListItem
        ticket={ticket}
        active={true}
        toggleViewTicket={mockToggleViewTicket}
      />
    );
  });

  it("calls toggleViewTicket when clicked", () => {
    const ticket = generateMockTicket();

    render(
      <TicketListItem
        ticket={ticket}
        active={false}
        toggleViewTicket={mockToggleViewTicket}
      />
    );

    fireEvent.click(screen.getByText(ticket.id));

    expect(mockToggleViewTicket).toHaveBeenCalledWith(ticket);
  });
});
