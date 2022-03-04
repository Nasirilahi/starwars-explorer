import { AppState } from '../../store/types';

const selectors = {
  isMobileMenuOpen: ({ app }: AppState): boolean => app.isMobileMenuOpen,
  isMenuOpen: ({ app }: AppState): boolean => app.isMenuOpen,
  animateClose: ({ app }: AppState): boolean => app.animateClose,
};

export default selectors;
