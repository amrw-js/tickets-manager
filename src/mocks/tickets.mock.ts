import { faker } from "@faker-js/faker";
import { PRIORITIES, STATUS } from "../global/constants";
import { ITicket } from "../global/interfaces";

export const generateMockTickets = (count: number): ITicket[] => {
  return Array.from({ length: count }, () => ({
    uuid: faker.string.uuid(),
    id: `PR-${faker.string.alphanumeric(4).toUpperCase()}`,
    subject: faker.lorem.words(5),
    priority: faker.helpers.arrayElement(PRIORITIES),
    status: faker.helpers.arrayElement(STATUS),
    description: faker.lorem.sentence(),
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),
    author: {
      uuid: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    },
  }));
};