import { PrismaClient } from "@prisma/client";
import Link from "next/link";

interface employee {
  id: number;
  name: string;
  imgSrc: string;
  position: string;
  department: string;
  companyId: number;
}

export default async function employees({ params }: { params: { company: string } }) {
  const company = params.company;

  const prisma = new PrismaClient();
  const companyId = await prisma.company.findUnique({
    where: {
      name: company
    }
  });

  const employeesData = await prisma.employee.findMany({
    where: {
      companyId: companyId?.id
    }
  });


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Employees at {company}</h2>
      <table className="min-w-full table-auto text-center">
        <thead>
          <tr className="bg-primary text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Department</th>
          </tr>
        </thead>

        <tbody>
          {employeesData.map((employee: employee) => (
            <tr
              key={employee.id}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="py-2 px-4"><Link href={`/companies/${company}/employees/${employee.id}`}>{employee.name}</Link></td>
              <td className="py-2 px-4"><Link href={`/companies/${company}/employees/${employee.id}`}>{employee.position}</Link></td>
              <td className="py-2 px-4"><Link href={`/companies/${company}/employees/${employee.id}`}>{employee.department}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
