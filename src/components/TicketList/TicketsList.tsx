import { FC, useMemo } from "react";
import { generateMockTickets } from "../../mocks/tickets.mock";
import { TicketListItem } from "./TicketListItem";
import { ITicket } from "../../global/interfaces";
import { VirtualList } from "../VirtualList/VirtualList";

interface ITicketsList {
  viewedTicket: ITicket | null;
  toggleViewTicket: (ticket: ITicket) => void;
}

export const TicketsList: FC<ITicketsList> = (props) => {
  const { viewedTicket, toggleViewTicket } = props;

  const tickets = useMemo(() => generateMockTickets(2000), []); // Generating mock tickets is a expensive operation it may take time to be generated

  return (
    <div className="shrink-0">
      <VirtualList
        gap={12}
        items={tickets}
        itemHeight={128}
        renderItem={(ticket) => (
          <TicketListItem
            active={viewedTicket?.uuid === ticket.uuid}
            key={ticket.uuid}
            ticket={ticket}
            toggleViewTicket={toggleViewTicket}
          />
        )}
      />
    </div>
  );
};
