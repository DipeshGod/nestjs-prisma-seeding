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

  for (let i = 0; i < 15; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: 'test1234',
        username: faker.person.firstName(),
        isApplicant: true,
        Applicant: {
          create: {
            country: faker.location.country(),
            professionalTitle: faker.person.jobTitle(),
            yearsOfExperience: faker.number.int({ min: 1, max: 15 }),
            photoUrl: faker.internet.avatar(),
            resumeUrl: `https://example.com${faker.word.words()}${Date.now().toString()}.pdf`,
          },
        },
      },
    });
  }

  for (let i = 0; i < 15; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: 'test1234',
        username: faker.person.firstName(),
      },
    });
  }
};
