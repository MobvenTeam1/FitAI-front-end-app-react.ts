import { FieldError } from "react-hook-form";

export const ErrorMessage: React.FC<{ error: FieldError | undefined }> = ({
  error,
}) => (error ? <p className="text-red-500">{error.message}</p> : null);
