import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
  return (
    <div className="flex justify-center mt-60">
      <div className="text-center">
        <FontAwesomeIcon icon={faSpinner} spinPulse className="text-5xl" />
        <p className="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  );
}
