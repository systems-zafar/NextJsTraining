import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string
}

const prisma = new PrismaClient();


export default async function seed(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    await prisma.company_about.deleteMany({});
    await prisma.employee.deleteMany({});
    await prisma.company.deleteMany({});



    const companies = [
        {
            name: 'Netflix',
            logoSrc: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        },
        {
            name: 'Facebook',
            logoSrc: 'https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png',
        },
        {
            name: 'Amazon',
            logoSrc: 'https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695',
        },
        {
            name: 'SystemsLtd',
            logoSrc: "https://www.phoneworld.com.pk/wp-content/uploads/2017/12/systems-limited.jpg"
        },
        {
            name: 'Tesla',
            logoSrc: 'https://brandlogos.net/wp-content/uploads/2021/10/tesla-logo.png',
        },
        {
            name: 'Google',
            logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png',
        },
    ];


    for (const companyData of companies) {
        await prisma.company.create({
            data: companyData,
        });
    }

    const companiesData = await prisma.company.findMany();


    // Netflix employees

    const netflixId = companiesData.find((companyData) => companyData.name === 'Netflix')?.id || 1

    let employees = [
        {
            name: 'Greg Peters',
            position: 'CEO',
            department: 'Administration',
            companyId: netflixId,
            imgSrc: "https://s22.q4cdn.com/959853165/files/images/leadership/Greg-Peters_0094_Final.jpg"
        },
        {
            name: 'Eduardo Fuentes Martinez',
            position: 'Software Engineering Manager',
            department: 'Administration',
            companyId: netflixId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQGa0mxwPMqD1w/profile-displayphoto-shrink_400_400/0/1622606226542?e=1701302400&v=beta&t=xOrNowxPwgUHFMQUylX0jYMcAcl8OUTyN6Uwx_WPl0s"
        },
        {
            name: 'Nataliya Pasichnyk',
            position: 'Engineering Manager',
            department: 'Frontend ',
            companyId: netflixId,
            imgSrc: "https://media.licdn.com/dms/image/D4D03AQHYu0OfkgvxaQ/profile-displayphoto-shrink_400_400/0/1693553739378?e=1701302400&v=beta&t=hgMLUddSA8SvSfLAcuCVhkLVW6yRgxnW5_rKruudJkE"
        },
        {
            name: 'Aaron Ponoroff',
            position: 'Product Manager',
            department: 'Games - Social Platform',
            companyId: netflixId,
            imgSrc: "https://media.licdn.com/dms/image/C5603AQGYbnyI7-rxJg/profile-displayphoto-shrink_400_400/0/1532826380872?e=1701302400&v=beta&t=KFIyLXfhfdiGx4iXqVZjIdiIhEfmXlma-u03CZ_O2ag"
        },
    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    await prisma.company_about.create({
        data: {
            about: 'Netflix is an American subscription video on-demand over-the-top streaming service owned and operated by Netflix, Inc. that primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.',
            companyId: netflixId,
        },
    });


    console.log('Netflix data inserted successfully.');


    // Facebook employees

    const facebookId = companiesData.find((companyData) => companyData.name === 'Facebook')?.id || 1

    employees = [
        {
            name: 'Mark Zuckerberg',
            position: 'CEO',
            department: 'Administration',
            companyId: facebookId,
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
        },
        {
            name: 'Jia Zhou',
            position: 'Software Engineer',
            department: 'Development',
            companyId: facebookId,
            imgSrc: "https://media.licdn.com/dms/image/C5603AQGKeBSvw7Udwg/profile-displayphoto-shrink_400_400/0/1645762574787?e=1701302400&v=beta&t=eSUs7RAXvYfcCnfkqSlhvAz5IK1DR6MfkNQ_rpFHH0k"
        },
        {
            name: 'Aazib Safi Patoli',
            position: 'Software Engineer',
            department: 'Development',
            companyId: facebookId,
            imgSrc: "https://media.licdn.com/dms/image/C4E03AQGqkdiTgfgCug/profile-displayphoto-shrink_400_400/0/1621200914594?e=1701302400&v=beta&t=TSUoCs3ljHqLwPSBhbInQgYPTK8VUmQMz9lOjuHsSMc"
        },
        {
            name: 'Maksat A',
            position: 'Software Engineer',
            department: 'Development',
            companyId: facebookId,
            imgSrc: "https://media.licdn.com/dms/image/D5603AQEWOloWG1DFWA/profile-displayphoto-shrink_400_400/0/1693707960279?e=1701302400&v=beta&t=5ju1Jxd5zg0nGPr9H-61JqnyzQfiYjHfMgDgObKOkrE"
        },

    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    await prisma.company_about.create({
        data: {
            about: 'Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns and operates Facebook, Instagram, Threads, and WhatsApp, among other products and services.',
            companyId: facebookId,
        },
    });

    console.log('Facebook data inserted successfully.');

    // Amazon employees

    const amazonId = companiesData.find((companyData) => companyData.name === 'Amazon')?.id || 1

    employees = [
        {
            name: 'Andy Jassy',
            position: 'CEO',
            department: 'Administration',
            companyId: amazonId,
            imgSrc: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR0v7O7PzcKCMG6cv90iP1FIM5Hm1KQiQz4Mr5hh82UPLZ4A_nNtLsYma5xFC6Md9PQ"
        },
        {
            name: 'Keenan Rahman',
            position: 'SDE 2',
            department: 'Amazon Web Services',
            companyId: amazonId,
            imgSrc: "https://media.licdn.com/dms/image/D5603AQF0Bjn_FKPLUg/profile-displayphoto-shrink_400_400/0/1676786758570?e=1701302400&v=beta&t=X1v5oq08fatISILqdIY-jgLfZRxh8BhuZFEClgYZwuA"
        },
        {
            name: 'Alina Shagidullina',
            position: 'HRBP ',
            department: 'HR',
            companyId: amazonId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQHJ9cujtILJCQ/profile-displayphoto-shrink_400_400/0/1610782797596?e=1701302400&v=beta&t=RDSBYxPHW6OcIxTEzZYJzcBnTxrQGdLGOHWINdfGo-0"
        },
    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    await prisma.company_about.create({
        data: {
            about: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
            companyId: amazonId,
        },
    });


    console.log('Amazon data inserted successfully.');

    // SystemsLtd employees

    const systemsLtdId = companiesData.find((companyData) => companyData.name === 'SystemsLtd')?.id || 1

    employees = [
        {
            name: 'Asif Peer',
            position: 'CEO',
            department: 'Administration',
            companyId: systemsLtdId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQGlvHSg1A-HYA/profile-displayphoto-shrink_400_400/0/1656497449309?e=1701302400&v=beta&t=36KtEKKEwjjkIUInwTFf8_XLP1o16Rutmpbf1sKVdSk"
        },
        {
            name: 'Muzahir Ahmad',
            position: 'Vice President',
            department: 'Open Source',
            companyId: systemsLtdId,
            imgSrc: "https://media.licdn.com/dms/image/D4D03AQFIQmjyMij8vg/profile-displayphoto-shrink_400_400/0/1683394777541?e=1701302400&v=beta&t=LgrtuE-dq7CM2Vao4VwqABzpEmZycupDjRMBZVqfeqY"
        },
        {
            name: 'Zafar Ahmed',
            position: 'Principal Consultant Development',
            department: 'CADM - Open Source',
            companyId: systemsLtdId,
            imgSrc: "https://media.licdn.com/dms/image/C5103AQEzB0he09nYBg/profile-displayphoto-shrink_800_800/0/1571797591615?e%3D2147483647%26v%3Dbeta%26t%3DIMiFKJk3tAnVEWBQCG4U6j03ZZ05-bfSk0l-BfK6LsA&tbnid=paZhAX3KBoG-7M&vet=1&imgrefurl=https://pk.linkedin.com/in/zafar-memon&docid=QWN_RxlfBqgg0M&w=800&h=800&hl=en-US&source=sh/x/im/m6/4&shem=uvafe2"
        },
    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    await prisma.company_about.create({
        data: {
            about: 'Systems Limited is a Pakistani public technology company, involved in mortgage, apparel, retail and BPO services. Systems is the parent company of the Techvista Systems, Systems Arabia, Systems Misr and Techvista Qatar, NdcTech. It has a market capitalisation of around Rs. 115 billion as of June 2023.',
            companyId: systemsLtdId,
        },
    });


    console.log('SystemsLtd data inserted successfully.');

    // Tesla employees

    const teslaId = companiesData.find((companyData) => companyData.name === 'Tesla')?.id || 1

    employees = [
        {
            name: 'Elon Musk',
            position: 'CEO',
            department: 'Administration',
            companyId: teslaId,
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/330px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
        },
        {
            name: 'Efe Özcan',
            position: 'Recruiter',
            department: 'HR',
            companyId: teslaId,
            imgSrc: "https://media.licdn.com/dms/image/C4E03AQF1ZUjqdve4nA/profile-displayphoto-shrink_400_400/0/1610962663083?e=1701302400&v=beta&t=BHcgqR_0faFOjPIcbahAJJAg16PNRHkZQkUZ-AoVMis"
        },
        {
            name: 'Sasha Munir',
            position: 'Controls Engineer',
            department: 'Engineering',
            companyId: teslaId,
            imgSrc: "https://media.licdn.com/dms/image/C5603AQEBgx4lqFGBSA/profile-displayphoto-shrink_400_400/0/1653186218807?e=1701302400&v=beta&t=xbOM309dFi4VOjV2StR8L1vfTVDxGKJbJ5IqtyuaJpU"
        },
        {
            name: 'Vicky Zarra',
            position: 'HR Lead',
            department: 'HR',
            companyId: teslaId,
            imgSrc: "https://media.licdn.com/dms/image/C5103AQE3a_zcqqil_g/profile-displayphoto-shrink_400_400/0/1517367646857?e=1701302400&v=beta&t=-Gi8DwGxZcMWPtbeRn6bqbRmSo8dAZ_N_Q0RFNpmfzs"
        },
        {
            name: 'Rissa Royal',
            position: 'Manager',
            department: 'HR',
            companyId: teslaId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQE7teaTWsf8qQ/profile-displayphoto-shrink_400_400/0/1645040284637?e=1701302400&v=beta&t=Qm7h20eSRQsLR9W_IixpABI3-4ztjrjomj0I_mS-Hmc"
        },

    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    await prisma.company_about.create({
        data: {
            about: 'Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas. Tesla designs and manufactures electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.',
            companyId: teslaId,
        },
    });


    console.log('Tesla data inserted successfully.');

    // Google employees

    const googleId = companiesData.find((companyData) => companyData.name === 'Google')?.id || 1

    employees = [
        {
            name: 'Sundar Pichai',
            position: 'CEO',
            department: 'Administration',
            companyId: googleId,
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/656px-Sundar_Pichai_%282023%29_cropped.jpg"
        },
        {
            name: 'Arslan Waheed',
            position: 'Senior Software Engineer',
            department: 'Engineering',
            companyId: googleId,
            imgSrc: "https://media.licdn.com/dms/image/D4E03AQEmIYxALR1M4Q/profile-displayphoto-shrink_400_400/0/1689129025870?e=1701302400&v=beta&t=Q0_294Z35N5jcx5cw69JfNbmwJDf4e0pOZ0LSmnA-yk"
        },
        {
            name: 'Jessica Quinn',
            position: 'Recruiter ',
            department: 'HR',
            companyId: googleId,
            imgSrc: "https://media.licdn.com/dms/image/C4E03AQHb2xniboVtUw/profile-displayphoto-shrink_400_400/0/1537300778096?e=1701302400&v=beta&t=LgG1XbIHosw_9USHue5OC3wfcD-GZGUVut8W9Qaguso"
        },
        {
            name: 'Ali Asgher',
            position: 'Software Engineer',
            department: 'Engineering',
            companyId: googleId,
            imgSrc: "https://media.licdn.com/dms/image/D5603AQHLl3Jnvh_0pw/profile-displayphoto-shrink_400_400/0/1677183985469?e=1701302400&v=beta&t=4uWyUdPIY46-rvpW5PyKWWbFn7K3DPlF71ys4vyaL4Q"
        },
        {
            name: 'Hufsa Munawar',
            position: 'Growth Manager',
            department: 'AppSales',
            companyId: googleId,
            imgSrc: "https://media.licdn.com/dms/image/C4D03AQFx6BsbwX3UZw/profile-displayphoto-shrink_400_400/0/1648148084741?e=1701302400&v=beta&t=ZvSr7V-Wgeivqxq7Xo1UgyN2JpSHKYFyNdNPpQtdSrQ"
        },
    ];

    for (const employeeData of employees) {
        await prisma.employee.create({
            data: employeeData,
        });
    }

    await prisma.company_about.create({
        data: {
            about: 'Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.',
            companyId: googleId,
        },
    });


    console.log('Google data inserted successfully.');


    res.status(200).json({ message: "Data inserted" });
    // await prisma.$disconnect();

}
