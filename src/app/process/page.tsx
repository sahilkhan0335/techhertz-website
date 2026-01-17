import processNodes from '@/components/process/constants/process-data';
import InfiniteTaglineMarquee from '@/components/process/infinite-tagline-marquee';
import InfinityProcessSection from '@/components/process/infinity-process-section';
import ProcessContentPanel from '@/components/process/process-content-panel';
import ProcessTitle from '@/components/process/process-title';
import { useState } from 'react';

export default function ProcessPage() {
  // State: active node index
  const [activeNode, setActiveNode] = useState(0);

  return (
    <main className="bg-black min-h-screen w-full flex flex-col items-center justify-start -mt-8">
      {/* Section 1: Infinite Tagline */}
      <div className="shrink-0 w-full -mb-2">
        <InfiniteTaglineMarquee />
      </div>
      {/* Section 2: Page Heading */}
      <div className="shrink-0 w-full">
        <ProcessTitle />
      </div>
      {/* Section 3: Infinity Process Visual */}
      <div className="flex-1 flex items-center justify-center w-full min-h-0 -mt-4">
        <InfinityProcessSection
          nodes={processNodes}
          activeNode={activeNode}
          setActiveNode={setActiveNode}
        />
      </div>
      {/* Section 4: Process Content Panel */}
      <ProcessContentPanel node={processNodes[activeNode]} />
    </main>
  );
}
