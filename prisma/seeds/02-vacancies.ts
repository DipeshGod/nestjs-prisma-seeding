import { Prisma, PrismaClient, WorkType } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { faker } from '@faker-js/faker';

const generateJobTitleForCompany = (domain: string, dataIndex: number) => {
  switch (domain) {
    case 'Information Technology':
      return `It vacancy ${dataIndex}`;
    case 'Agriculture':
      return `Agriculture vacancy ${dataIndex}`;
    case 'Education':
      return `Education vancancy ${dataIndex}`;
    case 'Medicine':
      return `Medicine vacancy ${dataIndex}`;
    default:
      return `random vacancy title ${dataIndex}`;
  }
};

export const seedVacancies = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  const companies = await prisma.company.findMany();

  for (let i = 0; i < companies.length; i++) {
    await prisma.vacancy.createMany({
      data: [
        {
          companyId: companies[i].id,
          description: faker.word.words({ count: { min: 50, max: 100 } }),
          finalDate: faker.date.soon(),
          numbersExpected: faker.number.int({ min: 1, max: 100 }),
          title: generateJobTitleForCompany(companies[i].domain, i),
          type: faker.helpers.enumValue(WorkType),
        },
        {
          companyId: companies[i].id,
          description: faker.word.words({ count: { min: 50, max: 100 } }),
          finalDate: faker.date.soon(),
          numbersExpected: faker.number.int({ min: 1, max: 100 }),
          title: generateJobTitleForCompany(companies[i].domain, i),
          type: faker.helpers.enumValue(WorkType),
        },
        {
          companyId: companies[i].id,
          description: faker.word.words({ count: { min: 50, max: 100 } }),
          finalDate: faker.date.soon(),
          numbersExpected: faker.number.int({ min: 1, max: 100 }),
          title: generateJobTitleForCompany(companies[i].domain, i),
          type: faker.helpers.enumValue(WorkType),
        },
        {
          companyId: companies[i].id,
          description: faker.word.words({ count: { min: 50, max: 100 } }),
          finalDate: faker.date.soon(),
          numbersExpected: faker.number.int({ min: 1, max: 100 }),
          title: generateJobTitleForCompany(companies[i].domain, i),
          type: faker.helpers.enumValue(WorkType),
        },
        {
          companyId: companies[i].id,
          description: faker.word.words({ count: { min: 50, max: 100 } }),
          finalDate: faker.date.soon(),
          numbersExpected: faker.number.int({ min: 1, max: 100 }),
          title: generateJobTitleForCompany(companies[i].domain, i),
          type: faker.helpers.enumValue(WorkType),
        },
      ],
    });
  }
};
