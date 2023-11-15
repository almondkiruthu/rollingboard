import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <div className='mx-auto my-auto'>
        <Button>Levite</Button>
        <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          An example app built using Next.js 13 server components.
        </h1>
      </div>
    </div>
  );
}
