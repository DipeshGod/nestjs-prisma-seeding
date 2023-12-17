import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seeds/01-users';

const prisma = new PrismaClient();

async function main() {
  console.log('delete all data ...');
  await prisma.user.deleteMany();

  console.log('start seeding ...');
  await seedUsers(prisma);
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
