import WordArtHeader from "@/components/ui/WordArtHeader";
import BlinkText from "@/components/ui/BlinkText";
import Divider from "@/components/ui/Divider";

export default function CtaSection() {
  return (
    <section
      id="pricing"
      className="px-6 py-10 text-center"
      style={{ backgroundColor: "#800080" }}
    >
      <WordArtHeader
        text="JOIN NOW — It's FREE!!!!"
        colorScheme="gold"
        as="h2"
        className="text-4xl md:text-5xl mb-4"
      />

      <p
        className="text-white text-xl mb-6 font-bold"
        style={{ fontFamily: "'Comic Sans MS', cursive" }}
      >
        Stop spending your weekends planning lessons!
        <br />
        <BlinkText className="text-retro-lime text-2xl">START SAVING TIME TODAY!!</BlinkText>
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
        {/* Plan cards */}
        {[
          {
            name: "FREE Plan",
            price: "$0",
            features: ["5 lesson plans/month", "Basic grading", "10 parent emails", "1 prayer per day"],
            color: "#c0c0c0",
            textColor: "#000",
            cta: "Start Free (Please)",
          },
          {
            name: "TEACHER PRO!!!",
            price: "$9.99/mo",
            features: ["UNLIMITED lesson plans!!", "Auto-Grader 3000™", "Unlimited parent emails", "Priority crying support"],
            color: "#ffff00",
            textColor: "#000080",
            cta: "CLICK HERE NOW!!",
            featured: true,
          },
          {
            name: "SCHOOL EDITION",
            price: "Call us",
            features: ["Everything in PRO", "Admin reports", "Bulk email to parents", "Scapegoat feature (beta)"],
            color: "#c0c0c0",
            textColor: "#000",
            cta: "Contact Sales",
          },
        ].map((plan) => (
          <div
            key={plan.name}
            className={`retro-card w-64 ${plan.featured ? "scale-105" : ""}`}
          >
            <div
              className="px-4 py-2 text-center font-bold"
              style={{ backgroundColor: plan.color, color: plan.textColor }}
            >
              {plan.featured && (
                <div className="text-red-600 font-bold text-xs blink">
                  ★ MOST POPULAR ★
                </div>
              )}
              <div className="text-lg" style={{ fontFamily: "'Comic Sans MS', cursive" }}>
                {plan.name}
              </div>
              <div className="text-3xl font-bold" style={{ fontFamily: "'Comic Sans MS', cursive" }}>
                {plan.price}
              </div>
            </div>
            <div className="p-4 bg-retro-silver">
              <ul className="text-sm text-left mb-4 space-y-1" style={{ fontFamily: "'Comic Sans MS', cursive" }}>
                {plan.features.map((f) => (
                  <li key={f}>✅ {f}</li>
                ))}
              </ul>
              <button
                className={`retro-btn w-full text-sm font-bold ${plan.featured ? "pulse-btn" : ""}`}
                style={{ fontFamily: "'Comic Sans MS', cursive", color: "#000080" }}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Divider />

      <p
        className="text-retro-silver text-xs max-w-xl mx-auto"
        style={{ fontFamily: "'Comic Sans MS', cursive" }}
      >
        * &quot;Free&quot; as in &quot;pretty cheap.&quot; We accept Visa, Mastercard, PayPal, gold coins,
        and Apple gift cards. No purchase necessary where prohibited. Magic Teacher is not
        responsible for any increased grading speed leading to existential questions about
        the nature of your career. Side effects may include: free time, relaxation, hobbies.
      </p>
    </section>
  );
}
