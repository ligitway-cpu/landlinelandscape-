import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/whatsapp-floating";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-heading font-bold !text-primary">404</h1>
        <h2 className="mt-4 text-xl font-heading font-semibold !text-primary">Sayfa bulunamadı</h2>
        <p className="mt-2 text-sm text-text-muted">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-[4px] bg-secondary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-secondary-dark transition-colors"
          >
            Anasayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-heading font-semibold !text-primary">Bu sayfa yüklenemedi</h1>
        <p className="mt-2 text-sm text-text-muted">Beklenmedik bir sorun oluştu. Lütfen tekrar deneyin.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-[4px] bg-secondary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-secondary-dark transition-colors"
          >
            Tekrar Dene
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-[4px] border-2 border-primary px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Anasayfa
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Landline Landscape — Ankara Peyzaj Tasarımı, Uygulama ve Bakım" },
      {
        name: "description",
        content:
          "Ankara'da 20+ yıllık deneyimle peyzaj tasarımı, uygulama ve bakım. Hayalinizdeki bahçeyi gerçeğe dönüştürüyoruz.",
      },
      { name: "author", content: "Landline Landscape" },
      { name: "theme-color", content: "#336633" },
      { property: "og:title", content: "Landline Landscape — Peyzaj Sanatı Bir Çizgiyle Başlar" },
      {
        property: "og:description",
        content: "Ankara'da profesyonel peyzaj tasarımı, uygulama ve bakım hizmetleri.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloating />
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}
