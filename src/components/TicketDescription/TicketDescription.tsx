import { FC } from "react";
import { ITicket } from "../../global/interfaces";
import { TicketDescriptionPlaceholder } from "./TicketDescriptionPlaceholder";
import { formatReadableDate } from "../../helpers/formatDate";

interface ITicketDescription {
  viewedTicket: ITicket | null;
}
export const TicketDescription: FC<ITicketDescription> = ({ viewedTicket }) => {
  if (!viewedTicket) return <TicketDescriptionPlaceholder />;

  const {
    id,
    subject,
    author,
    description,
    created_at: createdAt,
    updated_at: updatedAt,
  } = viewedTicket;
  const { name, email, avatar } = author;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 p-4 border-b">
        <div className="flex flex-col gap-3 font-semibold ">
          <p className="text-2xl">{id}</p>
          <p className="text-xl">{subject}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="flex gap-2 text-sm">
              <span className="font-bold">Created at:</span>
              <span>{formatReadableDate(createdAt)}</span>
            </p>
            <p className="flex gap-2 text-sm">
              <span className="font-bold">Update at:</span>
              <span>{formatReadableDate(updatedAt)}</span>
            </p>
          </div>

          <div className="flex gap-6">
            <img
              src={avatar}
              alt={name}
              className="size-12 rounded-full object-contain"
            />
            <div className="flex flex-col">
              <p className="text-base">{name}</p>
              <p className="text-sm">{email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-auto">{description}</div>
    </div>
  );
};
