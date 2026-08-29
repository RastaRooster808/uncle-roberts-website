import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ThisWeek } from './components/ThisWeek';
import { Eat } from './components/Eat';
import { Awa } from './components/Awa';
import { Story } from './components/Story';
import { Aina } from './components/Aina';
import { Visit } from './components/Visit';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <ThisWeek />
      <Eat />
      <Awa />
      <Story />
      <Aina />
      <Visit />
      <Footer />
    </div>
  );
}
