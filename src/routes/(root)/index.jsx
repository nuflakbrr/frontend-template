import { createFileRoute } from '@tanstack/react-router'
import { siteMetadata } from '@/data/siteMetadata'

import Hero from './_components/Hero'
import Features from './_components/Features'
import Steps from './_components/Steps'

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Steps />
    </div>
  )
}

export const Route = createFileRoute('/(root)/')({
  head: () => ({
    meta: [
      {
        title: `Beranda | ${siteMetadata.title}`,
      },
    ],
  }),
  component: Home,
})