import { PrismaClient } from "@prisma/client";


export default async function about({ params }: { params: { company: string } }) {
  const company = params.company;
  const prisma = new PrismaClient();

  const companyId = await prisma.company.findUnique({
    where: {
      name: company
    },
    select: {
      id: true,
    }
  });


  const companyAbout = await prisma.company_about.findUnique({
    where: {
      companyId: companyId?.id
    },
    select: {
      about: true,
    }
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Page of {company}</h1>
      <p className="text-lg">
        {companyAbout?.about}
      </p>
    </div>
  );
}
