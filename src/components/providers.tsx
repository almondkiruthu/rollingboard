import { TailwindIndicator } from '@/components/tailwind-indicator'
import { QueryProvider } from './query-provider'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <QueryProvider>
        {children}
        <TailwindIndicator />
      </QueryProvider>
    </>
  )
}

export default Providers
