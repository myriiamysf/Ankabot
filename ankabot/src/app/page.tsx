"use client"

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import './page.css'

export default function Home() {
  return (
    <div className="home">
      <Header/>
      <Navbar/>
      <Section1/>
      <div className="lignecenter">
        <div className="ligne"></div>
      </div>
      <Section2/>
      <div className="lignecenter">
        <div className="ligne"></div>
      </div>
      <Section3/>
    </div>
  );
}
