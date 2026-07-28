"use client";

import { useState } from "react";
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

  if (status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        className="rounded-xl bg-accent/10 px-4 py-3 text-sm font-medium text-accent"
      >
        {labels.success}
      </p>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          required
          autoComplete="name"
          aria-label={labels.name}
          placeholder={labels.name}
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-label={labels.email}
          placeholder={labels.email}
          className={inputClass}
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        aria-label={labels.message}
        placeholder={labels.message}
        className={inputClass}
      />
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
        <Button type="submit" disabled={status === "sending"}>
          <Send className="mr-2 h-4 w-4" />
          {status === "sending" ? labels.sending : labels.send}
        </Button>
        <span role="status" aria-live="polite" className="text-sm text-destructive">
          {status === "error" ? labels.error : ""}
        </span>
      </div>
    </form>
  );
}
