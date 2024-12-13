import { FC, useMemo } from "react";
import { generateMockTickets } from "../../mocks/tickets.mock";
import { TicketListItem } from "./TicketListItem";
import { ITicket } from "../../global/interfaces";

interface ITicketsList {
  viewedTicket: ITicket | null;
  toggleViewTicket: (ticket: ITicket) => void;
}

export const TicketsList: FC<ITicketsList> = (props) => {
  const { viewedTicket, toggleViewTicket } = props;

  const tickets = useMemo(() => generateMockTickets(100), []);

  return (
    <div className="flex flex-col gap-3 max-h-full overflow-auto">
      {tickets.map((ticket) => (
        <TicketListItem
          active={viewedTicket?.uuid === ticket.uuid}
          key={ticket.uuid}
          ticket={ticket}
          toggleViewTicket={toggleViewTicket}
        />
      ))}
    </div>
  );
};
