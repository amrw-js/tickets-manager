import { FC } from "react";
import { PRIORITY, priority } from "../../global/interfaces";
import { TiTicket } from "react-icons/ti";
import cn from "clsx";
interface ITicketIcon {
  priority: priority;
}
export const TicketIcon: FC<ITicketIcon> = ({ priority }) => {
  let className = null;

  switch (priority) {
    case PRIORITY.HIGH:
      className = "bg-red-400";
      break;

    case PRIORITY.MEDIUM:
      className = "bg-yellow-400";
      break;

    case PRIORITY.LOW:
    default:
      className = "bg-sky-400";
  }

  return (
    <div title={priority} className={cn("p-3 rounded-md", className)}>
      <TiTicket className="size-6 text-white" />
    </div>
  );
};
