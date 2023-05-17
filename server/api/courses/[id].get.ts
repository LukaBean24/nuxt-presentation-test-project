import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const { id } = event.context.params;

  const courses = await prisma.course.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  return courses;
});
