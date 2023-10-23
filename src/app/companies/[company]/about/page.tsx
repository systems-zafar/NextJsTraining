'use client'
import { useParams } from 'next/navigation';

export default function about() {
    const param = useParams();
    return <p>This is about page of the {param.company} company </p>
}