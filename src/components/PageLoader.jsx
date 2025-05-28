import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export function PageLoader({ isLoading }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      setProgress(10)
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 10 : prev))
      }, 200)

      return () => clearInterval(interval)
    } else {
      setProgress(100)
      setTimeout(() => setProgress(0), 300)
    }
  }, [isLoading])

  if (!isLoading && progress === 0) return null

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Progress value={progress} className="h-1" />
    </div>
  )
}
