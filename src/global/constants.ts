export const PRIORITIES = ["P1", "P2", "P3"] as const;

export const STATUS = ["Open", "In Progress", "Resolved"] as const;

export const PRIORITIES_MAP = {
  P1: "Low",
  P2: "Mid",
  P3: "High",
} as const;
