import { LenisProvider } from '../context/LenisContext';
import { CursorProvider } from '../context/CursorContext';
import { TransitionProvider } from '../context/TransitionContext';

const AppProviders = ({ children }) => {
  return (
    <LenisProvider>
      <CursorProvider>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </CursorProvider>
    </LenisProvider>
  );
};

export default AppProviders;
