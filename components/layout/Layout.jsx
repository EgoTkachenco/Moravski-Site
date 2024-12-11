import Footer from './Footer'
import Header from './Header'
import Metadata from './Metadata'

const Layout = ({ page, general, children, animated = false }) => (
  <>
    <Metadata page={page} general={general} />
    <Header general={general} animated={animated} />
    {!animated && <div className="h-20" />}
    {children}
    <Footer general={general} />
  </>
)

export default Layout
