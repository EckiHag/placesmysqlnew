"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TestingLayout({ children }) {
  return (
    <div>
      <Button asChild variant="default" size="sm" className="m-4">
        <Link href="/dashboard/places" className="btn btn-accent">
          Back to Places
        </Link>
      </Button>
      <Button asChild variant="default" size="sm" className="m-4">
        <Link href="/dashboard/settings" className="btn btn-accent">
          Back to Settings
        </Link>
      </Button>

      <div>{children}</div>
    </div>
  )
}
