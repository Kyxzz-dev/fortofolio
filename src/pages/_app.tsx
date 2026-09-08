import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Animated Floating Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      
      {/* Grid Overlay */}
      <div className="grid-overlay" />
      
      {/* Main Content with Mesh Background */}
      <div className="bg-mesh">
        <Component {...pageProps} />
      </div>
    </>
  );
}
