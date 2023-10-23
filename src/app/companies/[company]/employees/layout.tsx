import type { ResolvingMetadata } from 'next'
import { PrismaClient } from '@prisma/client'
import { ReactNode } from 'react';
import Link from 'next/link';

const prisma = new PrismaClient();

type Props = {
  params: { company: string }
  children: ReactNode;
}

export function generateMetadata({ params }: Props, parent: ResolvingMetadata) {
  const company = params.company

  return {
    title: `${company} Employee Page`,
    description: `Yellow pages for ${company}.`,
  }
}

export default async function Layout({ params, children }: Props) {
  const companyId = await prisma.company.findUnique({
    where: { name: params.company }, select: { id: true }
  })

  const departments = await prisma.employee.findMany({
    distinct: ['department'],
    select: {
      department: true,
    },
    where: {
      companyId: companyId?.id
    }
  });


  return (
    <div className="flex ">
      <div className="w-1/4 p-4 self-center bg-slate-400 text-white rounded-lg shadow-xl">
        <h3 className="text-lg font-semibold mb-2">Filter by Department</h3>
        <ul>
          {departments.map((item: {
            department: string;
          }) => (
            <li
              key={item.department}
            >
              <Link
            href={`/companies/${params.company}/employees?department=${encodeURIComponent(item.department)}`}
              className='underline decoration-transparent hover:decoration-sky-500 cursor-pointer'
            >
              {item.department}
            </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-4">{children}</div>
    </div>
  );
}
