'use client'

import { useEffect } from "react";
import { toast } from "react-toastify";

interface NotificationProps {
  message: string
}

export default function Notification({ message }: NotificationProps) {

  useEffect(() => {
    const timeout = setTimeout(() => {
      toast.info(message)
    }, 2000);

    return () => clearTimeout(timeout);
  });

  return (
    <></>
  )
}
