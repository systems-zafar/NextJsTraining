import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

interface companiesInterface {
    id: number;
    name: string;
    logoSrc: string;
}

export default async function companies() {

    const prisma = new PrismaClient();


    const companiesData: companiesInterface[] = await prisma.company.findMany();

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold">Corporate Listings</h2>
            <div className="grid grid-cols-3 gap-4">
                {companiesData.map((companyData: companiesInterface) => (
                    <Link key={companyData.id} href={`/companies/${companyData.name}`}>
                        <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 group">
                            <img
                                src={companyData.logoSrc}
                                alt={`${companyData.name} Logo`}
                                className="h-16 mx-auto mb-2 rounded-lg shadow-lg group-hover:shadow-gray-500/50"
                            />
                            <h3 className="text-lg font-semibold text-center">{companyData.name}</h3>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}