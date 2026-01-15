import dynamic from 'next/dynamic';
import Hero from '@/app/(home)/_components/Hero';
import About from '@/app/(home)/_components/About';

const Projects = dynamic(() => import('@/app/(home)/_components/Projects'));
const Skills = dynamic(() => import('@/app/(home)/_components/Skills'));
const Education = dynamic(() => import('@/app/(home)/_components/Education'));
const Experience = dynamic(() => import('@/app/(home)/_components/Experience'));
const Contact = dynamic(() => import('@/app/(home)/_components/Contact'));

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};
