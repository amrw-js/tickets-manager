import { FC } from "react";
import { ITicket } from "../../global/interfaces";
import { TicketIcon } from "./TicketIcon";
import cn from "clsx";

interface ITicketListItem {
  ticket: ITicket;
  active: boolean;
  toggleViewTicket: (ticket: ITicket) => void;
}
export const TicketListItem: FC<ITicketListItem> = ({
  ticket,
  active,
  toggleViewTicket,
}) => {
  const { uuid, id, subject, priority } = ticket;

  return (
    <div
      key={uuid}
      onClick={() => toggleViewTicket(ticket)}
      tabIndex={0}
      className={cn(
        "flex gap-6 rounded-md items-center cursor-pointer transition-all py-4 px-6 bg-gray-100",
        active && "bg-sky-200"
      )}
    >
      <TicketIcon priority={priority} />
      <div className="flex flex-col gap-3 text-slate-800">
        <p className="text-lg font-semibold">{id}</p>
        <p className="text-base">{subject}</p>
      </div>
    </div>
  );
};
