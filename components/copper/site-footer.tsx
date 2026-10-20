import { Logo } from "@/components/copper/logo";

// The dark class gives the footer the Night Sky theme and the light wordmark.
export function SiteFooter() {
  return (
    <footer
      data-testid="site-footer"
      className="dark bg-background text-foreground border-t"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo className="w-40" />
        <p className="text-muted-foreground text-sm">
          Fictional — for educational use.
        </p>
      </div>
    </footer>
  );
}
