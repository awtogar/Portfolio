const HeroBentoGrid = () => {
  const cells = [
    { bg: '#9497DD', label: '#9497DD' },
    { bg: '#F0C642', label: '#F0C642' },
    { bg: '#F4E7D9', label: '#F4E7D9' },
    { bg: '#ED9A54', label: '#ED9A54' },
  ];

  return (
    <div className="w-full h-full min-h-[70vh] rounded-3xl overflow-hidden p-4 bg-accent">
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="flex gap-2 flex-1">
          <div className="relative rounded-xl flex-[3]" style={{ backgroundColor: cells[0].bg }}>
            <span className="absolute top-2 right-2 text-[10px] font-mono opacity-60">{cells[0].label}</span>
          </div>
          <div className="relative rounded-xl flex-[7]" style={{ backgroundColor: cells[1].bg }}>
            <span className="absolute top-2 right-2 text-[10px] font-mono opacity-60">{cells[1].label}</span>
          </div>
        </div>

        <div className="flex gap-2 flex-1">
          <div className="relative rounded-xl flex-[7]" style={{ backgroundColor: cells[2].bg }}>
            <span className="absolute top-2 right-2 text-[10px] font-mono opacity-60">{cells[2].label}</span>
          </div>
          <div className="relative rounded-xl flex-[3]" style={{ backgroundColor: cells[3].bg }}>
            <span className="absolute top-2 right-2 text-[10px] font-mono opacity-60">{cells[3].label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBentoGrid;
