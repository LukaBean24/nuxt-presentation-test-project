import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const { id } = event.context.params;
  const body = await readBody(event);

  const course = await prisma.course.delete({
    where: {
      id: Number(id),
    },
  });

  const courses = await prisma.course.findMany({});

  return courses;
});
