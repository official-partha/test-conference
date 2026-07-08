/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Themes } from './components/Themes';
import { Timeline } from './components/Timeline';
import { Speakers } from './components/Speakers';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-royal-600/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Themes />
        <Timeline />
        <Speakers />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
