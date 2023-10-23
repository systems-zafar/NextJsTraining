import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';



export default async function company({ params }: { params: { company: string } }) {
    const company = params.company;
    const prisma = new PrismaClient();


    const companyData = await prisma.company.findUnique({
        where: {
            name: company,
        },
    });

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <img
                    src={companyData?.logoSrc}
                    alt={`${companyData?.name} Logo`}
                    className="h-32 mx-auto mb-2"
                />
                <h2 className="text-xl font-semibold text-center">{companyData?.name}</h2>
                <p className="text-center">Welcome to the homepage of {companyData?.name}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-center text-slate-500">
                    <Link href={`/companies/${company}/about`}>
                        <div className="text-4xl">
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </div>
                        <p>About</p>
                    </Link>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md text-center text-sky-500">
                    <Link href={`/companies/${company}/employees`}>
                        <div className="text-4xl">
                            <FontAwesomeIcon icon={faAddressCard} />
                        </div>
                        <p>Employees</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};
