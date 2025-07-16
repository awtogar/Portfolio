import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cards = [
  {
    id: 1,
    number: '01',
    title: 'Graphic',
    description: 'A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.',
    services: [
      { number: '01', name: 'CMS Integration' },
      { number: '02', name: 'Motion & Animations' },
      { number: '03', name: '3D Development' },
      { number: '04', name: 'Web implementation' }
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'Animation',
    description: 'Amplify your online presence with a website that truly connects with your audience\'s feelings and desires. I design stunning, high-converting sites that align with your business goals, helping you stand out and scale effectively.',
    services: [
      { number: '01', name: 'Responsive Design' },
      { number: '02', name: 'Wireframing' },
      { number: '03', name: 'UX Writing' }
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    description: 'Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results, helping your business attract the right audience and stand out in the digital landscape.',
    services: [
      { number: '01', name: 'Technical SEO' },
      { number: '02', name: 'On-Page Optimization' },
      { number: '03', name: 'SEO Audits & Analysis' }
    ]
  }
];

export default function StackingCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Card 1 stays in place (z-index 1)
  const card1Y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 200]
  );
  
  // Card 2 comes from bottom and stacks on top (z-index 2)
  const card2Y = useTransform(
    scrollYProgress,
    [0, 1],
    [500, -50]
  );
  
  // Card 3 comes from bottom and stacks on top (z-index 3)
  const card3Y = useTransform(
    scrollYProgress,
    [0, 1],
    [1000, -300]
  );

  const cardTransforms = [
    { y: card1Y },
    { y: card2Y },
    { y: card3Y }
  ];

  return (
    <div className="py-4">
      <div  className="relative">
        <div className="sticky top-0 h-screen flex justify-center">
          <div ref={containerRef} className="relative w-full">
            {cards.map((card, index) => {
              const { y } = cardTransforms[index];

              return (
                <motion.div
                  key={card.id}
                  style={{ 
                    y,
                    zIndex: index + 1 // Card 1 = z-index 1, Card 2 = z-index 2, Card 3 = z-index 3
                  }}
                  className={`absolute inset-0 px-8 text-white bg-accent-500 border-1 border-solid max-h-[500px]`}>
                  <div className="flex flex-col h-full pt-12 pb-12">
                    <div className="flex items-start gap-4 mb-8">
                      <span className="text-4xl font-bold opacity-50">({card.number})</span>
                      <h2 className="text-3xl font-bold leading-tight">
                        {card.title}
                      </h2>
                    </div>
                    
                    <p className={`text-sm leading-relaxed mb-8 flex-1`}>
                      {card.description}
                    </p>
                    
                    {card.services.length > 0 && (
                      <div className="space-y-4">
                        {card.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center gap-4">
                            <span className={`text-xs opacity-50`}>
                              {service.number}
                            </span>
                            <span className={`text-sm`}>
                              {service.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}