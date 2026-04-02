import { Hero } from "@/components/home/hero"
import { Dobra } from "@/components/home/dobra"
import { AboutSection } from "@/components/home/about-section"
import { Differentials } from "@/components/home/differentials"
import { JourneySteps } from "@/components/home/journey-steps"
import { Procedures } from "@/components/home/procedures"
import { Manifesto } from "@/components/home/manifesto"
import { Testimonials } from "@/components/home/testimonials"
import { Location } from "@/components/home/location"
import { BlogPreview } from "@/components/home/blog-preview"
import { FAQ } from "@/components/home/faq"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Dobra />
      <Differentials />
      <JourneySteps />
      <Procedures />
      <Manifesto />
      <Testimonials />
      <Location />
      <BlogPreview />
      <FAQ />
    </>
  )
}
