import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seeds/01-users';
import { seedVacancies } from './seeds/02-vacancies';

const prisma = new PrismaClient();

async function main() {
  console.log('delete all data ...');
  // order of execution matters due to referential integrity
  await prisma.applicant.deleteMany();
  await prisma.vacancy.deleteMany();
  await prisma.company.deleteMany();
  await prisma.user.deleteMany();

  console.log('start seeding ...');
  await seedUsers(prisma);
  await seedVacancies(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
