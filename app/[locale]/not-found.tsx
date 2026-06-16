import Link from "next/link";
import { Button } from "@/components/ui/button";

const translations = {
  en: {
    title: "Page Not Found",
    description: "Sorry, the page you're looking for doesn't exist or has been moved.",
    backHome: "Back to Home",
  },
  fr: {
    title: "Page non trouvée",
    description: "Désolée, la page que vous recherchez n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil",
  },
  es: {
    title: "Página no encontrada",
    description: "Lo sentimos, la página que buscas no existe o ha sido movida.",
    backHome: "Volver al inicio",
  },
};

export default function NotFound() {
  // Default to English for static 404 page
  const t = translations.en;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">{t.title}</h2>
        <p className="text-muted-foreground mb-8">{t.description}</p>
        <Button asChild>
          <Link href="/en">{t.backHome}</Link>
        </Button>
      </div>
    </div>
  );
}
