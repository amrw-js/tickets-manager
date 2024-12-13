import { FC, useMemo } from "react";
import { generateMockTickets } from "../../mocks/tickets.mock";
import { TicketListItem } from "./TicketListItem";

export const TicketsList: FC = () => {
  const tickets = useMemo(() => generateMockTickets(5000), []);

  return (
    <div className="flex flex-col gap-3">
      {tickets.map((ticket) => (
        <TicketListItem key={ticket.uuid} ticket={ticket} />
      ))}
    </div>
  );
};
