import { Hero } from "@/components/lp/lipo-hd/hero"
import { Pain } from "@/components/lp/lipo-hd/pain"
import { WhatIs } from "@/components/lp/lipo-hd/what-is"
import { Comparison } from "@/components/lp/lipo-hd/comparison"
import { HowItWorks } from "@/components/lp/lipo-hd/how-it-works"
import { Differentials } from "@/components/lp/lipo-hd/differentials"
import { Manifesto } from "@/components/lp/lipo-hd/manifesto"
import { Testimonials } from "@/components/lp/lipo-hd/testimonials"
import { FAQ } from "@/components/lp/lipo-hd/faq"
import { FinalCta } from "@/components/lp/lipo-hd/final-cta"

export default function LipoHdLandingPage() {
  return (
    <>
      <Hero />
      <Pain />
      <WhatIs />
      <Comparison />
      <HowItWorks />
      <Differentials />
      <Manifesto />
      <Testimonials />
      <FAQ />
      <FinalCta />
    </>
  )
}
