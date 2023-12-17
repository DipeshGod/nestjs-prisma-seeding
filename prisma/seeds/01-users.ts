import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { faker } from '@faker-js/faker';

export const seedUsers = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
) => {
  await prisma.user.create({
    data: {
      email: 'admin@email.com',
      password: 'test1234',
      username: 'Dipesh',
      isAdmin: true,
    },
  });

  for (let i = 0; i < 30; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: 'test1234',
        username: faker.person.firstName(),
        isApplicant: true,
        Applicant: {
          create: {
            country: faker.location.country(),
            city: faker.location.city(),
            professionalTitle: faker.person.jobTitle(),
            yearsOfExperience: faker.number.int({ min: 1, max: 15 }),
            photoUrl: faker.internet.avatar(),
            resumeUrl: `https://example.com${faker.word.words()}${Date.now().toString()}.pdf`,
          },
        },
      },
    });
  }

  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: 'test1234',
        username: faker.person.firstName(),
        isHiring: true,
        Company: {
          create: {
            companyName: faker.company.name(),
            country: faker.location.country(),
            domain: faker.helpers.arrayElement([
              'Information Technology',
              'Agriculture',
              'Education',
              'Medicine',
            ]),
            mainLocation: faker.location.city(),
            operatingSince: faker.date.past({ years: 15 }),
            logoUrl: faker.internet.avatar(),
            longitude: faker.location.longitude(),
            latitutde: faker.location.latitude(),
          },
        },
      },
    });
  }

  for (let i = 0; i < 30; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: 'test1234',
        username: faker.person.firstName(),
      },
    });
  }
};
