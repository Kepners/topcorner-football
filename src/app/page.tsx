import Image from "next/image";
import BuyButton from "@/components/BuyButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-[#FFD700]">Top</span>Corner
            <span className="text-[#1B5E20]">.football</span>
          </span>
          <a
            href="#products"
            className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Buy Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20]/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Designed in the UK
            </div>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
              Hit the
              <br />
              <span className="text-[#FFD700]">Top Corner</span>
              <br />
              Every Time
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              CalcioKx corner targets clip onto any goal post in seconds.
              Give your strikers and dead-ball specialists a real target to aim
              for — and watch your precision shooting improve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold px-8 py-4 rounded-full text-center transition-colors text-lg"
              >
                Shop Now
              </a>
              <a
                href="#how-it-works"
                className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-center transition-colors text-lg"
              >
                How it works
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/products/goal-installed-2.jpg"
                alt="CalcioKx corner target installed on goal post"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-[#FFD700] text-black font-black text-sm px-4 py-2 rounded-xl">
                Fits any goal post
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-white/10 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-black text-[#FFD700]">130+</div>
            <div className="text-gray-400 text-sm mt-1">Units available</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#FFD700]">UK</div>
            <div className="text-gray-400 text-sm mt-1">Delivery only</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#FFD700]">2 min</div>
            <div className="text-gray-400 text-sm mt-1">Setup time</div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Choose Your Pack</h2>
            <p className="text-gray-400 text-lg">
              Single target for one post, or double to cover both corners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SINGLE */}
            <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#1B5E20]/60 transition-colors group">
              <div className="relative aspect-square bg-white">
                <Image
                  src="/images/products/product-single-nobg.png"
                  alt="CalcioKx Single Corner Target"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">Single Corner Target</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      1x curved corner target + straps + bag
                    </p>
                  </div>
                  <div className="text-2xl font-black text-[#FFD700]">£25</div>
                </div>
                <ul className="text-gray-400 text-sm space-y-1 mb-6">
                  <li>✓ Fits round &amp; square goal posts</li>
                  <li>✓ Velcro strap attachment — no tools</li>
                  <li>✓ Durable black mesh net</li>
                  <li>✓ Includes storage bag</li>
                </ul>
                <BuyButton productId="single" label="Buy Single — £25" />
              </div>
            </div>

            {/* DOUBLE */}
            <div className="bg-[#111] border border-[#FFD700]/40 rounded-2xl overflow-hidden hover:border-[#FFD700]/80 transition-colors group relative">
              <div className="absolute top-4 right-4 bg-[#FFD700] text-black text-xs font-black uppercase px-3 py-1 rounded-full z-10">
                Best Value
              </div>
              <div className="relative aspect-square bg-white">
                <Image
                  src="/images/products/product-double-nobg.png"
                  alt="CalcioKx Double Corner Target"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">Double Corner Target</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      2x curved corner targets + straps + bag
                    </p>
                  </div>
                  <div className="text-2xl font-black text-[#FFD700]">£40</div>
                </div>
                <ul className="text-gray-400 text-sm space-y-1 mb-6">
                  <li>✓ Cover both top corners</li>
                  <li>✓ Fits round &amp; square goal posts</li>
                  <li>✓ Velcro strap attachment — no tools</li>
                  <li>✓ Durable black mesh net</li>
                  <li>✓ Includes storage bag</li>
                </ul>
                <BuyButton productId="double" label="Buy Double — £40" />
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            + £5 flat rate UK shipping on all orders
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Set Up in 2 Minutes</h2>
            <p className="text-gray-400 text-lg">No tools. No fuss. Just attach and train.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1B5E20] rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Position</h3>
              <p className="text-gray-400">
                Hook the corner target onto the top corner of your goal post —
                where the crossbar meets the upright.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1B5E20] rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Strap</h3>
              <p className="text-gray-400">
                Wrap the included velcro straps around the post. Secure in
                seconds — no drilling, no damage to the goal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center text-2xl font-black text-black mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Train</h3>
              <p className="text-gray-400">
                Aim for the corner. Every shot that hits the target scores.
                Perfect for players, coaches, and academies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IN ACTION PHOTOS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-black text-center mb-16">In Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/products/goal-installed-1.jpg", alt: "CalcioKx on goal post" },
              { src: "/images/products/goal-installed-2.jpg", alt: "Corner target installed" },
              { src: "/images/products/goal-installed-3.jpg", alt: "Close-up installed on post" },
              { src: "/images/products/goal-installed-4.jpg", alt: "Full goal with target" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8">Built for the Pitch</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Universal fit",
                    desc: "Designed to clip onto round and square goal posts. Works on 5-a-side, 7-a-side, and full-size goals.",
                  },
                  {
                    title: "Durable construction",
                    desc: "Rigid PVC frame with high-visibility orange joints. Black heavy-duty mesh net that handles repeated ball impact.",
                  },
                  {
                    title: "Quick attach, quick remove",
                    desc: "Velcro strap system means you're set up in under 2 minutes. Pack away into the included bag after training.",
                  },
                  {
                    title: "Designed in the UK",
                    desc: "Created by a football player, for football players. Refined through real training sessions.",
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 shrink-0" />
                    <div>
                      <h3 className="font-bold text-white">{f.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square max-w-sm mx-auto">
                <Image
                  src="/images/products/product-single-flat.jpg"
                  alt="CalcioKx corner target product shot"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#1B5E20]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Hit the Top Corner?</h2>
          <p className="text-green-100 text-lg mb-8">
            Limited stock available. UK delivery only. £5 flat rate shipping.
          </p>
          <a
            href="#products"
            className="inline-block bg-[#FFD700] hover:bg-yellow-400 text-black font-black px-10 py-4 rounded-full text-lg transition-colors"
          >
            Shop CalcioKx Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <span>
            © {new Date().getFullYear()} TopCorner.football — CalcioKx is a
            product of Rhinoceros Lime Ltd
          </span>
          <div className="flex gap-6">
            <span>UK delivery only</span>
            <span>•</span>
            <span>Designed in the UK</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
