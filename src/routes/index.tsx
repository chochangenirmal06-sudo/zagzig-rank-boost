import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { VslPlayer } from "@/components/VslPlayer";
import { submitForm } from "../routes/api/-submit-form";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Free Local SEO Audit | ZagZig Marketing" },
      {
        name: "description",
        content:
          "Invisible on Google? Get a free custom local SEO video audit from ZagZig Marketing, delivered to your inbox in 24 hours.",
      },
      { property: "og:title", content: "Are You Invisible On Google?" },
      {
        property: "og:description",
        content:
          "Watch the 2 minute video and claim your free custom local SEO audit. No credit card, no sales pitch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OptIn,
});

const fields = [
  { name: "name", label: "First & Last Name", placeholder: "Dylan Silva", type: "text" },
  {
    name: "email",
    label: "Where should we email your video audit?",
    placeholder: "Dylan33@xyz.com",
    type: "email",
  },
  { name: "business", label: "Your Business Name", placeholder: "Dylan's Tree Service", type: "text" },
  {
    name: "website",
    label: "Your website URL (so we know where to look)",
    placeholder: "xyz.com",
    type: "text",
  },
];

function OptIn() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    const result = await submitForm({ data: formData });
    
    if (result.success) {
      navigate({ to: "/thank-you" });
    } else {
      alert(result.error || "Failed to submit form");
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-12 flex justify-center">
          <p className="border-brutal shadow-brutal inline-block bg-foreground px-6 py-3 text-sm font-bold tracking-[0.2em] text-background uppercase">
            Free Local SEO Audit
          </p>
        </div>
        <div className="mb-12 border-t-[3px] border-foreground"></div>
        
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Is Your Business Invisible on Google?</h1>
          <p className="mt-6 text-base font-medium text-muted-foreground sm:mt-8 sm:text-lg md:text-xl lg:text-2xl">
            Watch this 2-minute video to see exactly why you aren't ranking in the Top 3 and how to
            fix it for free.
          </p>
        </div>

        <div className="border-brutal shadow-brutal mt-8 flex justify-center bg-background p-2 sm:mt-10 sm:p-4 max-w-4xl mx-auto">
          <VslPlayer />
        </div>
      </section>

      <section className="border-t-[3px] border-foreground bg-secondary px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center font-display text-2xl uppercase sm:text-3xl md:text-4xl">
            Tell Us Where To Send Your Breakdown
          </h2>
          <p className="mt-2 text-center text-sm font-bold uppercase text-muted-foreground">
            (Takes 30 Seconds)
          </p>

          <form
            className="border-brutal shadow-brutal mt-8 bg-background p-4 sm:mt-10 sm:p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-3 items-start sm:gap-4 sm:grid-cols-2">
              {fields.map((f, i) => (
                <div key={f.name} className={i > 1 ? "sm:col-span-1" : "sm:col-span-1"}>
                  <label htmlFor={f.name} className="mb-2 block min-h-[2.5rem] text-sm font-bold uppercase tracking-wide leading-tight">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    value={formData[f.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
                    className="w-full border-[3px] border-foreground bg-background px-3 py-3 text-base font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-accent sm:px-4 sm:py-4"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="shadow-brutal mt-4 w-full bg-foreground px-4 py-4 font-display text-xl tracking-wide text-background uppercase transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-accent hover:text-accent-foreground hover:shadow-[4px_4px_0_0_var(--color-foreground)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none sm:mt-6 sm:px-6 sm:py-5 sm:text-2xl md:text-3xl"
            >
              Show Me Why I'm Not Ranking
            </button>

            <p className="mt-4 text-center text-sm font-semibold text-muted-foreground">
              100% Free. No credit card required.
            </p>
          </form>

          <ul className="mt-8 grid gap-2 text-center text-xs font-bold tracking-wide uppercase sm:mt-10 sm:gap-3 sm:text-sm sm:grid-cols-3">
            {["Manually reviewed", "Delivered in 24 hours", "Built for local business"].map((t) => (
              <li key={t} className="border-brutal shadow-brutal bg-background px-4 py-3">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t-[3px] border-foreground px-4 py-6 text-center sm:px-6 sm:py-8">
        <p className="text-lg font-bold tracking-[0.15em] uppercase sm:text-xl">
          ZagZig Marketing
        </p>
        <p className="mt-2 text-xs font-semibold text-muted-foreground sm:text-sm">
          nirmal@zagzigmarketing.com
        </p>
      </footer>
    </main>
  );
}
