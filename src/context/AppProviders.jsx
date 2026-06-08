import { LenisProvider } from './LenisContext';
import { CursorProvider } from '../cursor';
import { PageFlowProvider } from './PageFlowContext';
import { OverlayProvider } from './OverlayContext';

const AppProviders = ({ children }) => {
  return (
    <LenisProvider>
      <CursorProvider>
        <PageFlowProvider>
          <OverlayProvider>{children}</OverlayProvider>
        </PageFlowProvider>
      </CursorProvider>
    </LenisProvider>
  );
};

export default AppProviders;
