import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-grow flex flex-col pt-0">
      {/* 1. Cinematic Hero */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full transform scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
          data-alt="A grand, high-energy Punjabi Baraat scene at night, illuminated by cinematic, warm spotlights. Drummers in traditional attire intensely playing metallic dhol drums. The atmosphere is vibrant, celebratory, and luxurious. Deep obsidian shadows contrast with radiant metallic gold and warm light, creating a premium, editorial mood."
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwVEJZsary6Qr2MYP5e9xtjxmgzqYR_Nv-5RLJCJURcSnbyOvPuy5xhM5SuSl5xuDyRJ-mHVyWE9GgkKa6sXcix7e72A_YxXVjYIBYZzxoqFtT3ncZ3LYG1hN2M6VB3x8u8QeszLRBuTVOEr7F1utqP87Ja0BzzdgYbxUVuDiP1Gg4f6hsbIZYZHbCPioDKmR3JsbDL_vH6vLJBM1bFfZ79rPzOXmEbD5IX6tyC17IaeRvomWdNdjL')",
          }}
        ></div>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 pattern-overlay"></div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center mt-16 md:mt-0">
          <span className="font-label-caps text-label-caps text-primary mb-6 tracking-[0.2em] uppercase">
            PUNJABI DHOL • BHANGRA • DJ • EVENTS
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#FFFDF8] max-w-4xl mx-auto mb-8 leading-tight">
            BRING THE PUNJABI <span className="text-primary italic">BEAT</span><br className="hidden md:block" /> TO YOUR CELEBRATION
          </h1>
          <p className="font-body-lg text-body-lg text-[#EFE9DD] max-w-2xl mx-auto mb-10">
            Premium entertainment experiences for high-end weddings and events across Mumbai & Navi Mumbai. Authentic energy, unparalleled luxury.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link className="btn-primary w-full sm:w-auto" href="/contact">
              BOOK YOUR EVENT
            </Link>
            <a
              className="btn-secondary w-full sm:w-auto group !border-[#FFFDF8] !text-[#FFFDF8] hover:!bg-[#FFFDF8] hover:!text-[#171513]"
              href="https://wa.me/917206110529"
            >
              <span className="material-symbols-outlined mr-2 group-hover:text-background transition-colors">
                chat
              </span>
              WHATSAPP US
            </a>
          </div>
          <div className="mt-12 flex items-center text-[#EFE9DD] font-cta text-cta">
            <span className="material-symbols-outlined mr-2 text-primary">call</span>
            7206110529
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary opacity-70">
          <span className="font-label-caps text-label-caps text-[10px] mb-2 uppercase">
            Scroll to Discover
          </span>
          <span className="material-symbols-outlined animate-bounce">
            arrow_downward
          </span>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="w-full bg-surface-container-low border-y champagne-border-1px py-8">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="flex items-center group">
              <span className="material-symbols-outlined text-primary text-2xl mr-4 group-hover:scale-110 transition-transform">
                celebration
              </span>
              <span className="font-headline-lg text-[20px] md:text-headline-lg font-headline-lg text-on-surface tracking-wide">
                Wedding Celebrations
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-outline-variant"></div>
            <div className="flex items-center group">
              <span className="material-symbols-outlined text-primary text-2xl mr-4 group-hover:scale-110 transition-transform">
                music_note
              </span>
              <span className="font-headline-lg text-[20px] md:text-headline-lg font-headline-lg text-on-surface tracking-wide">
                Baraat & Dhol
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-outline-variant"></div>
            <div className="flex items-center group">
              <span className="material-symbols-outlined text-primary text-2xl mr-4 group-hover:scale-110 transition-transform">
                groups
              </span>
              <span className="font-headline-lg text-[20px] md:text-headline-lg font-headline-lg text-on-surface tracking-wide">
                Bhangra Performances
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Intro */}
      <section className="w-full py-section-gap relative pattern-overlay">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-4 bg-primary-container/5 blur-xl group-hover:bg-primary-container/10 transition-colors duration-500 rounded-lg"></div>
            <div className="relative aspect-[3/4] overflow-hidden champagne-border-1px rounded-sm">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="A highly detailed, cinematic shot of a luxury Indian wedding reception in Mumbai. The setting is extravagant with crystal chandeliers and deep ambient lighting. In the center, energetic Punjabi dhol players in metallic embroidered kurtas are performing. The image has a rich, high-contrast editorial look with deep blacks and luminous gold highlights, evoking a premium lifestyle magazine."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO4r5BPg5CevolO9lp7jFzf3WQYJAd59Mh9cXe9DMSfKb-pux6hRfwuu7jwhyy07-yluAGY-SVjSSPkSCFSLkxqK3oaxgx22_uFPc0aTqmYInUtD-eaxi2gbEVm8_z-V5vAs8wlQcLl6bLFozrHMk3HyCAB7oxXZOhYVFiw9RD0FYumjzJ1VCeqr0baghCfPmSoswyXQ8xEx5LmDiRbT5bh7fhwGlpXY_EkiA6sQuH2zU4O7Sh8fKB"
                alt="Cinematic shot of luxury Indian wedding reception"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-primary hidden md:block"></div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col pt-12 lg:pt-0">
            <span className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.15em] uppercase flex items-center">
              <span className="w-8 h-[1px] bg-primary mr-4 inline-block"></span>
              THE SOUND OF CELEBRATION
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-8 leading-tight">
              MAKE YOUR EVENT <span className="italic text-primary font-light">UNFORGETTABLE</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              We don't just play music; we curate energy. Rooted in authentic Punjabi tradition but tailored for the modern luxury experience, our performances are designed to elevate every moment of your celebration.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/80 mb-10">
              From the rhythmic intensity of a traditional Baraat to meticulously choreographed Bhangra routines for high-end Sangeets, we deliver a sonic experience that commands attention and inspires joy.
            </p>
            <div>
              <Link className="btn-ghost group" href="/services">
                DISCOVER OUR STORY
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="w-full py-section-gap bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.15em] uppercase block">
                PREMIUM OFFERINGS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase leading-tight">
                ENTERTAINMENT THAT SETS THE CELEBRATION IN MOTION
              </h2>
            </div>
            <Link className="btn-ghost group whitespace-nowrap hidden md:inline-flex" href="/services">
              VIEW ALL SERVICES <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <Link className="group relative aspect-[3/4] overflow-hidden champagne-border-1px block" href="/contact">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Close up editorial portrait of a traditional Punjabi Dhol player. High contrast, dark cinematic lighting focusing on the intricate carvings of the wooden dhol drum and the performer's intense expression. Metallic gold accents on the attire shine against the obsidian background. Luxury minimalist style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAXiUVGgzHNoi6eAvmCZy1xeZILC_zPOL72j4J4leUnyrvCGSyrsexewBAzP3yQ2u4s_-hQFNecnIUHoaeQD2ne-VglxY4r_k8z-b6QlyOlP78CcKeUZJRK1dQhhp7qYYfS_LVQ-2HD2hBc4VrvArWtYF-13n8q3MM1VsvduHY1K7B0eNyS8O0KNOOzaywMzFAi-LdVg0frV_Kpmqhocl-jnvwXfqriPmZC4OmCc5L83xwyDW0j1RR"
                alt="Punjabi Dhol"
              />
              <div className="absolute inset-0 card-scrim"></div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 z-10 m-2"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <h3 className="font-headline-lg text-[24px] text-on-surface mb-2 font-display-lg tracking-wide group-hover:text-primary transition-colors">
                  Punjabi Dhol
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant/80 mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  The heartbeat of traditional celebrations.
                </p>
                <div className="font-cta text-cta text-primary flex items-center uppercase tracking-widest text-[10px]">
                  ENQUIRE <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* Service Card 2 */}
            <Link className="group relative aspect-[3/4] overflow-hidden champagne-border-1px block" href="/contact">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Dynamic shot of a Punjabi Bhangra dance group performing at a high-end luxury event. Men in vibrant, embroidered traditional attire caught mid-air in a coordinated jump. The background is dark and moody, punctuated by sharp, bright spotlights. Premium, energetic, cinematic look."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGIOKWxBZEeHoi0BEb9p60Xt4ynEab7SPK_nJHAUBpPChWLbDv2XemKvYFy5TztGg9O3h__GzMngxb6SsGwC0QWiBlHi2jphm0f3Bf_qD5GZR_ES6m0GQko0rK6--0y8ZSq-2C6XL9bu6P4jta-o8ywmHS9kPCA8aMCFXjeG_UT1HounMqyUcIaGY0spQsecPgs6ZbrJzihZQjGpIH0AuLG2eICYnAEVj_V-STqHRYc88nqwV8aaGT"
                alt="Bhangra Group"
              />
              <div className="absolute inset-0 card-scrim"></div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 z-10 m-2"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <h3 className="font-headline-lg text-[24px] text-on-surface mb-2 font-display-lg tracking-wide group-hover:text-primary transition-colors">
                  Bhangra Group
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant/80 mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  High-octane choreographed performances.
                </p>
                <div className="font-cta text-cta text-primary flex items-center uppercase tracking-widest text-[10px]">
                  ENQUIRE <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* Service Card 3 */}
            <Link className="group relative aspect-[3/4] overflow-hidden gold-border-1px block" href="/contact">
              {/* Premium Indicator */}
              <div className="absolute top-4 right-4 z-30 bg-primary text-background font-label-caps text-[10px] px-2 py-1 uppercase tracking-widest">
                Premium
              </div>
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="An elegant nighttime performance scene featuring a charismatic Punjabi singer alongside a Dhol player. Sophisticated concert lighting with golden hues illuminating smoke or mist. The subjects exude professionalism and cultural richness. Cinematic, high-contrast imagery fitting a luxury event brochure."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqFClQK269JyPSEIt2AuAC5M8_GsnXc1QLwh_fSWwLnPGmFmAjVmG9qXyzc7eHOdkVYTwpPISrfx49DJXzpbGwS5YjwiHjnpstf_Xk37slMFHLnFKw8ZT_yLrxHvKBcoeyByV_nubXsjO0GazUo9KlzNhApT2gyw-f1GyviMPH4w2PheXwWcKdMMUSMZmsUHrgTN6jnBMOqpVZuEQWRy1-6Wb0mMm1EjKGnn5PM_FNH3c6q5Ba7Orw"
                alt="Dhol & Singer"
              />
              <div className="absolute inset-0 card-scrim"></div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 z-10 m-2"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <h3 className="font-headline-lg text-[24px] text-on-surface mb-2 font-display-lg tracking-wide group-hover:text-primary transition-colors">
                  Dhol & Singer
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant/80 mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Live vocalists paired with percussion.
                </p>
                <div className="font-cta text-cta text-primary flex items-center uppercase tracking-widest text-[10px]">
                  ENQUIRE <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* Service Card 4 */}
            <Link className="group relative aspect-[3/4] overflow-hidden champagne-border-1px block" href="/contact">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Modern event scene with performers playing LED illuminated dhol drums. The drums glow vibrantly against a pitch-black background, creating striking geometric light trails. A fusion of modern technology and traditional culture. High-end, futuristic nightclub aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDmDRyebMKmYRgaXFomCS-okckYZlSo0N5bYJH_vpcTOQvEJCjfy79XJO3d4jppa21860VhtLIrbISLN7KN9OkGFclWnHGtJ9vLVFywECvh_bzgFvVdZgXjpOtw-uEOOOSVLrSILrJRX-RYJIgbDLW6MUwn__xJuJ5bcV3BHnFlbVhY_JXggub4N8cAwkG15pfgrkW-yTE2eSskhRpK6NVyeF-cUMWbwG6oyKNeF635_yH_mNyOTwH"
                alt="Punjabi LED Dhol"
              />
              <div className="absolute inset-0 card-scrim"></div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 z-10 m-2"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <h3 className="font-headline-lg text-[24px] text-on-surface mb-2 font-display-lg tracking-wide group-hover:text-primary transition-colors">
                  Punjabi LED Dhol
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant/80 mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Modern visual spectacle for night events.
                </p>
                <div className="font-cta text-cta text-primary flex items-center uppercase tracking-widest text-[10px]">
                  ENQUIRE <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-8 flex justify-center md:hidden">
            <Link className="btn-ghost group" href="/services">
              VIEW ALL SERVICES <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="w-full relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full transform scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
          data-alt="A wide, sweeping cinematic shot of a massive, euphoric crowd dancing at an ultra-luxury wedding Sangeet. The atmosphere is electric, bathed in warm golden and deep obsidian tones. Confetti falling, lights flashing. The visual conveys ultimate celebration and high-end exclusivity."
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBj_svPXxq5wQ6UtHGValDN1fx45FjTUni9I0QaZafL0C4sO3XJVTB5lUPM4frQrnMWZ5wKHVsj3hEKS60v6EPdyD63Ec4lok7WksX-UTJKLkmr1MOIs4W2KdCdNsnOLU8cpfiwWBhYzVQqbue-_IKNC3UOKEkpA4rUwZuQ95DIqQyKY2ZxSN7OgBKhsxWGuRu8fIuqZAzqbv4TC6a46AH6w7wj72YxN1YRV15B7p1S-QweidG3PqjG')",
          }}
        ></div>
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-margin-mobile text-center">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#FFFDF8] mb-10 leading-tight">
            YOUR CELEBRATION DESERVES A <span className="text-primary italic">BIGGER BEAT.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link className="btn-primary w-full sm:w-auto" href="/contact">
              BOOK YOUR EVENT
            </Link>
            <a
              className="btn-secondary w-full sm:w-auto group !border-[#FFFDF8] !text-[#FFFDF8] hover:!bg-[#FFFDF8] hover:!text-[#171513]"
              href="https://wa.me/917206110529"
            >
              <span className="material-symbols-outlined mr-2 group-hover:text-background transition-colors">
                chat
              </span>
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer variant="home" />
    </>
  );
}
