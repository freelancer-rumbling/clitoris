import { Rajdhani } from "next/font/google";
import { Footer, Navbar } from "@/components";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className={`${rajdhani.className} bg-cover bg-center bg-no-repeat h-[800px] w-screen mx-auto text-white flex items-center justify-center px-32 py-32 gap-4`}
        style={{
          backgroundImage: `url(/images/bg_hero_image.png)`,
        }}
      >
        {/* left */}
        <div className="flex flex-col gap-4">
          <span>Welcome To</span>
          <h1 className="font-bold text-[64px]">
            CLITORIS <br />
            COIN
          </h1>
          <p>
            Step into a universe where beats drop harder than your ex&apos;s
            promises, and gameplay feels like foreplay. Join the cult of
            sweaty-fingered legends, where every click is a love language and
            every level-up is a cosmic “OHHH YES.”
          </p>
          <button className="bg-gradient-to-r from-[#9D8DDB] to-[#6A4DC4] font-semibold text-lg px-4 py-2 mt-4">
            CTA: Call To Action
          </button>
        </div>
        {/* Right */}
        <div className="min-h-[340px] min-w-[550px]">
          <Image
            src={Logo}
            alt="Logo"
            width={550}
            height={340}
            priority
            className="drop-shadow-2xl"
          />
        </div>
      </section>
      <section
        id="about"
        className={`${rajdhani.className} text-white flex items-center gap-5 justify-center px-32 py-20`}
      >
        {/* left */}
        <div className="min-h-[340px] min-w-[550px]">
          <Image
            src={Logo}
            alt="Logo"
            width={550}
            height={340}
            priority
            className="drop-shadow-2xl"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[50px]">What is clitoris coin?</h1>
          <p>
            Clitoris Coin is here to stimulate your senses — blending music,
            mechanics, and madness into a climax of pure gaming ecstasy. This
            ain&apos;t your grandma&apos;s crypto.We&apos;re talking real
            pleasure Join a community of skilled players who know how to hit the
            right buttons.Because in this universe, your reflexes aren&apos;t
            just fast — they&apos;re foreplay. Clytoris Coin. Touch it. Play it.
            Profit from it.
          </p>
        </div>
      </section>
      <section
        id="about"
        className={`${rajdhani.className} text-white flex items-center gap-5 justify-center px-32 py-20`}
      >
        {/* left */}
        <div className="flex flex-col gap-4">
          <span>Join Us</span>
          <h1 className="font-bold text-[50px]">
            BECOME PART OF OUR COMMUNITY
          </h1>
          <p>
            Connect with like-minded players, form alliances, and participate in
            exclusive events. Our community is built on mutual respect, friendly
            competition, and a shared passion for gaming excellence.
          </p>
          <button className="bg-gradient-to-r from-[#9D8DDB] to-[#6A4DC4] font-semibold text-lg px-4 py-2 mt-4 w-fit">
            Join Now
          </button>
        </div>
        {/* Right */}
        <div className="min-h-[340px] min-w-[550px]">
          <Image
            src={Logo}
            alt="Logo"
            width={550}
            height={340}
            priority
            className="drop-shadow-2xl"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
