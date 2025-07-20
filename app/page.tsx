import CollectionShowcase from "./components/home/Collections"
import DiscoverScents from "./components/home/DiscoverScents"
import Footer from "./components/home/Footer"
import HomePage from "./components/home/Homepage"
import IngredientShowcase from "./components/home/IngredientShowCase"
import TestimonialsCarousel from "./components/home/Testimonials"

function page() {
  return (
    <div>
      <HomePage />
      <CollectionShowcase />
      <IngredientShowcase />
      <DiscoverScents />
      <TestimonialsCarousel />
      <Footer/>
    </div>
  )
}

export default page