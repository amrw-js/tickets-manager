import { FC } from "react";
import { priority } from "../../global/interfaces";
import { TiTicket } from "react-icons/ti";
import cn from "clsx";
import { getPriorityClassName } from "../../utils/getPriorityClassName";

interface ITicketIcon {
  priority: priority;
}
export const TicketIcon: FC<ITicketIcon> = ({ priority }) => {
  return (
    <div
      title={priority}
      className={cn("p-3 rounded-md", getPriorityClassName(priority))}
    >
      <TiTicket className="size-6 text-white" />
    </div>
  );
};
