import { PRIORITY, priority } from "../global/interfaces";

export const getPriorityClassName = (priority: priority) => {
  let className = null;

  switch (priority) {
    case PRIORITY.HIGH:
      className = "bg-red-400";
      break;

    case PRIORITY.Mid:
      className = "bg-orange-400";
      break;

    case PRIORITY.LOW:
    default:
      className = "bg-sky-400";
  }

  return className;
};
