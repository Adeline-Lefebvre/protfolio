"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export type ContactFormLabels = {
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  success: string;
  error: string;
};

// Formulaire de contact court (Web3Forms). Aucun backend : POST direct vers
// l'API, les messages arrivent par email. La cle d'acces est publique par
// design (elle ne fait qu'identifier la boite de reception).
export function ContactForm({
  accessKey,
  labels,
  subject,
}: {
  accessKey: string;
  labels: ContactFormLabels;
  subject: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const statusRef = useRef<HTMLParagraphElement>(null);

  // Le formulaire reste monte apres l'envoi. Il etait auparavant remplace par
  // le message de succes, ce qui faisait retomber le focus sur <body> : au
  // clavier, on repartait du haut du document. On deplace le focus sur le
  // message a la place.
  useEffect(() => {
    if (status === "success") statusRef.current?.focus();
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", subject);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // text-base (16px) obligatoire sur mobile : en dessous, Safari iOS zoome la
  // page au focus du champ et ne dézoome jamais au blur. On revient à 14px à
  // partir de md, où le problème ne se pose pas.
  const inputClass =
    "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-base text-foreground outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring md:text-sm";
  const labelClass = "block text-sm font-medium text-foreground";

  // La validation reste native. Safari iOS bloque bien la soumission, met le
  // focus sur le premier champ invalide, le fait défiler à l'écran et affiche
  // une bulle, et ce depuis iOS 10.3. Passer en validation JS ferait perdre la
  // localisation automatique des messages dans les trois langues.
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="cf-name" className={labelClass}>
            {labels.name}
          </label>
          <input
            id="cf-name"
            name="name"
            required
            autoComplete="name"
            autoCapitalize="words"
            enterKeyHint="next"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="cf-email" className={labelClass}>
            {labels.email}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            enterKeyHint="next"
            className={inputClass}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="cf-message" className={labelClass}>
          {labels.message}
        </label>
        {/* Pas d'enterKeyHint ici : dans un textarea la touche insère un saut
            de ligne, un libellé "envoyer" mentirait sur son effet. */}
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          className={inputClass}
        />
      </div>
      {/* Honeypot anti-spam (Web3Forms) */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
        >
          <Send className="mr-2 h-4 w-4" />
          {status === "sending" ? labels.sending : labels.send}
        </Button>
      </div>
      {/* Région live toujours présente dans le DOM : montée en même temps que
          son contenu, elle n'est pas annoncée de façon fiable. */}
      <p
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={
          status === "success"
            ? "rounded-xl bg-accent/10 px-4 py-3 text-sm font-medium text-accent outline-none"
            : status === "error"
              ? "text-sm text-destructive outline-none"
              : "sr-only"
        }
      >
        {status === "success"
          ? labels.success
          : status === "error"
            ? labels.error
            : ""}
      </p>
    </form>
  );
}
