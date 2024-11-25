import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex items-center">
        <h1 className="border-r-[1px] border-gray-400 p-2 px-4">Under Construction</h1>
        <h1 className="p-2 px-4">Dashboard page</h1>
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  )
}
