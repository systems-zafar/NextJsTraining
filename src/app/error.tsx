'use client';

import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Error() {
    return (
        <div className="flex justify-center mt-40 ">
            <div className="bg-white shadow-lg rounded-lg p-4 w-1/2">
                <div className="text-center">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 text-5xl mx-auto mb-4" />
                    <p className="text-gray-600">Something went wrong. Our team is working on it.</p>
                    <p className="text-gray-600">Thank you for your patience.</p>
                </div>
            </div>
        </div>
    );
}