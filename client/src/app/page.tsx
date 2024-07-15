import Image from "next/image";
import Nav from "./components/Nav.jsx";
import "./globals.css"; // Import the global CSS file

export default function App() {
  return (
    <>
      <main className="bg-landingColour h-screen w-full flex flex-col">
        <Nav />
        <div className="flex flex-col md:flex-row justify-between items-center p-10">
          <section className="text-center md:text-left md:w-1/2 flex flex-col gap-6">
            <h3 className="text-6xl font-bold mb-4 text-gradient-pink-violet">
              STAY CONNECTED, ANYTIME, ANYWHERE
            </h3>
            <h5 className="text-2xl text-slate-300">
              Real-time Messaging with Friends and Family.
              <br />
              What are you waiting for? Start chatting now &rarr;
            </h5>
          </section>
          <section className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <div
              style={{
                filter: "drop-shadow(0 0 70px rgb(64, 4, 143))",
                borderRadius: "30% 70% 47% 53% / 41% 31% 69% 59% ",
              }}
              className="image-blur-container"
            >
              <Image
                src="/landingPage.jpg"
                alt="image"
                layout="responsive"
                width={600}
                height={500}
                style={{ borderRadius: "30% 70% 64% 36% / 41% 42% 58% 59% " }}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
