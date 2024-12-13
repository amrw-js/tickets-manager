import { useCallback, useState } from "react";
import { TicketDescription } from "./components/TicketDescription/TicketDescription";
import { TicketsList } from "./components/TicketList/TicketsList";
import { Layout } from "./components/ui/Layout";
import { ITicket } from "./global/interfaces";

export const App = () => {
  const [viewedTicket, setViewedTicket] = useState<ITicket | null>(null);

  const toggleViewTicket = useCallback((ticket: ITicket) => {
    setViewedTicket((cTicket) =>
      ticket.uuid === cTicket?.uuid ? null : ticket
    );
  }, []);

  return (
    <Layout>
      <TicketsList
        viewedTicket={viewedTicket}
        toggleViewTicket={toggleViewTicket}
      />
      <TicketDescription viewedTicket={viewedTicket} />
    </Layout>
  );
};
