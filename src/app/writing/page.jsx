import React from 'react';
import { BaseSection } from '@/components';

const Page = () => {
  return (
    <main>
      <BaseSection>
        <div className="relative h-screen flex justify-center items-center overflow-hidden p-[2.5rem] ">
          <h1 className='uppercase text-[clamp[2rem, 15vw, 15rem]] font-500'>COMING SOON</h1>
        </div>
      </BaseSection>

    </main>
  );
};

export default Page;
