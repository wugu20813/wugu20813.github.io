import Diary from "../Diary";
import { ThemeProvider } from "../ThemeProvider";

export default function DiaryExample() {
  return (
    <ThemeProvider>
      <Diary />
    </ThemeProvider>
  );
}
