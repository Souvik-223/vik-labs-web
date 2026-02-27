"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "~/components/ui/tooltip";
import { Toaster } from "~/components/ui/sonner";

// ─── App-wide context ──────────────────────────────────────────────────────────
interface AppContextValue {
  /** Whether the StaggeredMenu is currently open */
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  /** Whether the user has scrolled past the hero */
  scrolledPast: boolean;
  setScrolledPast: (v: boolean) => void;
}

const AppContext = React.createContext<AppContextValue>({
  menuOpen: false,
  setMenuOpen: () => undefined,
  scrolledPast: false,
  setScrolledPast: () => undefined,
});

export function useApp() {
  return React.useContext(AppContext);
}

// ─── Theme wrapper ──────────────────────────────────────────────────────────────
function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

// ─── Root Providers ─────────────────────────────────────────────────────────────
export function Providers({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolledPast, setScrolledPast] = React.useState(false);

  // Track scroll position globally so any child can respond
  React.useEffect(() => {
    const onScroll = () =>
      setScrolledPast(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <AppContext.Provider
      value={{ menuOpen, setMenuOpen, scrolledPast, setScrolledPast }}
    >
      {/* Force dark mode always — VikLabs is black/white */}
      <ThemeProvider>
        {/* Wraps all Radix Tooltip instances globally */}
        <TooltipProvider delayDuration={200} skipDelayDuration={100}>
          {children}

          {/* Global toast notifications — styled to match dark theme */}
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            toastOptions={{
              style: {
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#ffffff",
                borderRadius: "12px",
              },
            }}
          />
        </TooltipProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
