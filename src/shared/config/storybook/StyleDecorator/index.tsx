import 'app/styles/index.scss';
import { ThemeProvider } from 'app/providers/ThemeProvider';

// @ts-ignore
export const StyleDecorator = (Story) => <ThemeProvider><Story /></ThemeProvider>;
