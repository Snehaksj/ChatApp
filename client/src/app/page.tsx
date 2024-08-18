import Image from "next/image";
import Nav from "./components/Nav";
import "./globals.css";

export default function App() {
  return (
    <>
      <main className="max-md:backgroundGradient2  md:backgroundGradient h-screen w-full flex flex-col overflow-hidden ">
        <Nav />
        <div className="flex  max-md:flex-col md:flex-row justify-between items-center p-10 ">
          <section className="text-center md:text-left md:w-1/2 flex flex-col gap-6">
            <h3 className="text-6xl font-black  mb-4 text-gradient-pink-violet max-md:text-4xl md:mt-[3rem]">
              STAY CONNECTED, ANYTIME, ANYWHERE
            </h3>
            <h5 className="text-xl text-slate-300 max-md:text-sm max-w-80:text-sm">
              Real-time Messaging with Friends and Family.
              <br />
              What are you waiting for? Start chatting now &rarr;
            </h5>
          </section>
          <section className="mt-10  md:w-1/2 flex justify-center md:mt-[3rem]">
            <div
              style={{
                filter: "drop-shadow(0 0 70px rgb(64, 4, 143))",
                borderRadius: "30% 70% 47% 53% / 41% 31% 69% 59% ",
              }}
            >
              <Image
                src="/landingPage.jpg"
                alt="image"
                layout="responsive"
                width={700}
                height={600}
                style={{ borderRadius: "30% 70% 64% 36% / 41% 42% 58% 59% " }}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
