import Guestbook from "../Guestbook";
import { ThemeProvider } from "../ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

export default function GuestbookExample() {
  return (
    <ThemeProvider>
      <Guestbook />
      <Toaster />
    </ThemeProvider>
  );
}
