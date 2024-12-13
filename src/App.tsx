import { TicketDescription } from "./components/TicketDescription/TicketDescription";
import { TicketsList } from "./components/TicketList/TicketsList";
import { Layout } from "./components/ui/Layout";

export const App = () => {
  return (
    <Layout>
      <TicketsList />
      <TicketDescription />
    </Layout>
  );
};
