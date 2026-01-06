import React from "react";
import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => (
  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2.5 sm:p-3 rounded-lg mb-3 sm:mb-4">
    <div className="flex items-center gap-2">
      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      <p className="font-semibold text-xs sm:text-sm">{message}</p>
    </div>
  </div>
);

export default ErrorMessage;