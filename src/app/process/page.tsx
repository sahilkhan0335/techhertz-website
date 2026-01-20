"use client";
import InfiniteTaglineMarquee from '@/components/process/infinite-tagline-marquee';
import ProcessTitle from '@/components/process/process-title';
import WorkflowGrid from '@/components/process/workflow-grid';

export default function ProcessPage() {
  return (
    <main className="bg-[#f9f9f7] min-h-screen w-full flex flex-col items-center justify-start pt-20">
      {/* Section 1: Infinite Tagline */}
      <div className="shrink-0 w-full pt-6 xs:pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-3 xs:pb-4 sm:pb-5 md:pb-6">
        <InfiniteTaglineMarquee />
      </div>
      {/* Section 2: Page Heading */}
      <div className="shrink-0 w-full py-3 xs:py-4 sm:py-5 md:py-6 lg:py-8">
        <ProcessTitle />
      </div>
      {/* Section 3: Workflow Grid */}
      <div className="flex-1 flex items-center justify-center w-full pb-12 sm:pb-16">
        <WorkflowGrid />
      </div>
    </main>
  );
}
