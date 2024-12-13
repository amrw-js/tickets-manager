import { FC } from "react";
import { ITicket } from "../../global/interfaces";
import { TicketIcon } from "./TicketIcon";

interface ITicketListItem {
  ticket: ITicket;
}
export const TicketListItem: FC<ITicketListItem> = ({ ticket }) => {
  const { uuid, id, subject, priority } = ticket;

  return (
    <div
      key={uuid}
      className="flex gap-6 rounded-md items-center py-4 px-6 bg-gray-100"
    >
      <TicketIcon priority={priority} />
      <div className="flex flex-col gap-3 text-slate-800">
        <p className="text-lg font-semibold">{id}</p>
        <p className="text-base">{subject}</p>
      </div>
    </div>
  );
};
