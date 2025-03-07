"use client"

import { toast as sonnerToast } from "sonner"

type ToastProps = {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

function toast({ title, description, action, ...props }: ToastProps) {
  return sonnerToast(title as string, {
    description,
    action,
    ...props
  })
}

function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss
  }
}

export { useToast, toast }