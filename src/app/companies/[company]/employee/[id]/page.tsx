'use client'
import { useParams } from "next/navigation"
export default function employee() {
    const param = useParams();
    return <p>This is detail page for employee with id {param.id}</p>
}