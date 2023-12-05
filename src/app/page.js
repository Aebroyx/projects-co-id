// Component
import HeroBanner1 from "@/components/HeroBanner1"
import Talent from "@/components/Talent"
import OtherOffer from "@/components/OtherOffer"
import Category from "@/components/Category"

export default function Home() {
  return (
    <main className="">
      <HeroBanner1 />
      <Category />
      <Talent />
      <OtherOffer />
    </main>
  )
}
