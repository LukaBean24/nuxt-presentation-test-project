import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const { id } = event.context.params;
  const body = await readBody(event);

  const course = await prisma.course.update({
    where: {
      id: Number(id),
    },
    data: {
      title: body.title,
    },
  });

  return course;
});
