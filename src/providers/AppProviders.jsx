import { LenisProvider } from '../context/LenisContext';
import { StickyProvider } from '../context/StickyContext';
import { TransitionProvider } from '../context/TransitionContext';

const AppProviders = ({ children }) => {
  return (
    <LenisProvider>
      <StickyProvider>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </StickyProvider>
    </LenisProvider>
  );
};

export default AppProviders;
