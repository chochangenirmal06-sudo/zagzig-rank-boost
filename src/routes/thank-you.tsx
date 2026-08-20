import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "You're In | ZagZig Marketing" },
      {
        name: "description",
        content:
          "Your free local SEO video audit request is confirmed. A ZagZig Marketing strategist is reviewing your site now.",
      },
      { property: "og:title", content: "Your Audit Request Is Confirmed" },
      {
        property: "og:description",
        content: "Your custom local SEO video audit lands in your inbox within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b-[3px] border-foreground py-6">
        <div className="mx-auto max-w-2xl px-5">
          <p className="text-center text-xl font-bold tracking-[0.15em] uppercase">
            ZagZig Marketing
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-5 py-16 text-center">
        <p className="mb-5 inline-block bg-foreground px-3 py-1 text-xs font-bold tracking-[0.2em] text-background uppercase">
          Request Received
        </p>
        <h1 className="text-5xl sm:text-6xl">You're in. Nice move.</h1>
        <p className="mt-6 text-lg font-medium text-muted-foreground">
          We got your info and your audit is officially in the queue. No bots, no auto generated
          report. A real person on the ZagZig Marketing team is about to open your website and your
          Google Business Profile and dig into why the Top 3 keeps passing you by.
        </p>

        <div className="border-brutal shadow-brutal mt-10 bg-secondary p-6 text-left sm:p-8">
          <h2 className="text-2xl">Here is what happens next</h2>
          <ol className="mt-5 space-y-4 text-base font-medium">
            {[
              "We review your site, your listings, and your local competitors by hand.",
              "We record a short custom video walking you through exactly what is holding your rankings back.",
              "It hits your inbox within 24 hours. Watch it, keep it, use it, even if we never speak again.",
            ].map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="border-brutal flex h-9 w-9 shrink-0 items-center justify-center bg-foreground font-display text-lg text-background">
                  {i + 1}
                </span>
                <span className="pt-1">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div
          role="alert"
          className="border-brutal shadow-brutal mt-8 bg-accent p-6 text-left text-accent-foreground"
        >
          <h2 className="text-xl">Heads up: check spam and promotions</h2>
          <p className="mt-2 text-base font-semibold">
            Your audit comes from an email address you have never received mail from, so it can
            slide into Spam or the Promotions tab. Search for "ZagZig" in a few hours, and add us to
            your contacts so nothing gets lost.
          </p>
        </div>

        <p className="mt-10 text-sm font-bold tracking-wide uppercase">
          Questions in the meantime? Just reply to the confirmation email.
        </p>

        <Link
          to="/"
          className="border-brutal shadow-brutal-sm mt-6 inline-block bg-background px-6 py-3 text-sm font-bold tracking-wide uppercase transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          Back to home
        </Link>
      </section>

      <footer className="border-t-[3px] border-foreground py-6 text-center text-xs font-bold tracking-[0.2em] uppercase">
        ZagZig Marketing
      </footer>
    </main>
  );
}
