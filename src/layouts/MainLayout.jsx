import PropTypes from 'prop-types'
import Navbar from "@/components/Mixins/Navbar/Navbar"
import Footer from "@/components/Mixins/Footer"

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
