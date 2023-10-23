'use client'
import { useParams } from 'next/navigation'
export default function company() {
const param  = useParams();
    return <p>This is {param.company} company homepage</p>;
}