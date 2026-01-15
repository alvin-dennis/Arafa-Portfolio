import { MotionH2 } from "@/components/Framer";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-[0.3em] text-primary"
        >
          SKILLS
          <div className="flex items-center justify-center gap-2 mt-6 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-8 h-0.5 bg-primary" />
          </div>
        </MotionH2>
      </div>
      <div className="relative mx-auto w-full h-full max-w-3xl">
        <Image
          src="/assets/skills/skills.webp"
          alt="Skills Image"
          width={700}
          height={700}
          priority
          className="mx-auto object-cover"
          sizes="(max-width: 640px) 100vw, 
           (max-width: 1024px) 40vw, 
           33vw"
        />
      </div>
    </section>
  );
};
