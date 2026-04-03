import { LenisProvider } from './LenisContext';
import { CursorProvider } from './CursorContext';
import { TransitionProvider } from './TransitionContext';

const AppProviders = ({ children }) => {
  return (
    <LenisProvider>
      <CursorProvider>
        <TransitionProvider>{children}</TransitionProvider>
      </CursorProvider>
    </LenisProvider>
  );
};

export default AppProviders;
