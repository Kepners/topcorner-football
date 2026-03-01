import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="w-20 h-20 bg-[#1B5E20] rounded-full flex items-center justify-center text-4xl mx-auto mb-8">
          ⚽
        </div>
        <h1 className="text-4xl font-black mb-4">Order Confirmed!</h1>
        <p className="text-gray-300 text-lg mb-4">
          You&apos;re going to be hitting top corners in no time.
        </p>
        <p className="text-gray-400 mb-8">
          We&apos;ve received your order and we&apos;ll get it packed and shipped shortly.
          Check your email for confirmation. UK delivery typically takes{" "}
          <strong className="text-white">2–5 working days</strong>.
        </p>
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 mb-8 text-left space-y-3">
          <h2 className="font-bold text-lg mb-4">What happens next</h2>
          <div className="flex gap-3 text-sm text-gray-300">
            <span className="text-[#FFD700]">1.</span>
            <span>You&apos;ll receive an order confirmation email shortly.</span>
          </div>
          <div className="flex gap-3 text-sm text-gray-300">
            <span className="text-[#FFD700]">2.</span>
            <span>We pack your CalcioKx targets and dispatch within 1–2 working days.</span>
          </div>
          <div className="flex gap-3 text-sm text-gray-300">
            <span className="text-[#FFD700]">3.</span>
            <span>Delivery arrives within 2–5 working days via Royal Mail.</span>
          </div>
          <div className="flex gap-3 text-sm text-gray-300">
            <span className="text-[#FFD700]">4.</span>
            <span>Set up takes 2 minutes — then aim for the top corner.</span>
          </div>
        </div>
        <Link
          href="/"
          className="inline-block border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Back to TopCorner.football
        </Link>
      </div>
    </div>
  );
}
