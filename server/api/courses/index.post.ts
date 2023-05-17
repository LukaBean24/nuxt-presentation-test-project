import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const body = await readBody(event);

  const course = await prisma.course.create({
    data: {
      title: body.title,
    },
  });

  return course;
});
