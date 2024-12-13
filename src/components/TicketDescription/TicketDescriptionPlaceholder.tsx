import { PiIdentificationBadge } from "react-icons/pi";

export const TicketDescriptionPlaceholder = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-gray-600">
      <PiIdentificationBadge className="size-32" />
      <div className="flex flex-col gap-4">
        <p className="text-2xl">No ticket selected yet!</p>
        <p className="text-base">Select a ticket to see its details.</p>
      </div>
    </div>
  );
};
