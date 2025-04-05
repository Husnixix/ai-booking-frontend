import { ThemeProvider } from "@/components/ui/theme-provider";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Outlet />
    </ThemeProvider>
  );
};

export default RootLayout;
