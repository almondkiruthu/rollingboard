import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from '@/components/ui/sonner'
import { QueryProvider } from './query-provider'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <QueryProvider>
        <Toaster />
        {children}
        <TailwindIndicator />
      </QueryProvider>
    </>
  )
}

export default Providers
