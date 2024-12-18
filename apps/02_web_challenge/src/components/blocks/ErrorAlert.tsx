import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ErrorAlertProps {
  message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => (
  <Alert variant="destructive" className="my-2">
    <AlertDescription>{message}</AlertDescription>
  </Alert>
);

export default ErrorAlert;
