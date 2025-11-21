import Portfolio from "../Portfolio";
import { ThemeProvider } from "../ThemeProvider";

export default function PortfolioExample() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
