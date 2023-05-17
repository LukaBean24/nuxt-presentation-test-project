import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();

  const courses = await prisma.course.findMany();

  return courses;
});
