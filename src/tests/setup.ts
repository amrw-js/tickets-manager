import "@testing-library/jest-dom"; // This includes all the necessary jest-dom extensions

import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});
