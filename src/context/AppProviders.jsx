import { LenisProvider } from './LenisContext';
import { CursorProvider } from './CursorContext';
import { LoadingProvider } from './LoadingProvider';

const AppProviders = ({ children }) => {
  return (
    <LenisProvider>
      <CursorProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </CursorProvider>
    </LenisProvider>
  );
};

export default AppProviders;
