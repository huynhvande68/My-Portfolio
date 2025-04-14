import './index.scss'
import Sidebar from '../Sidebar/'

const Layout = ({ children }) => {
    return(
    <div className="App">
      <Sidebar/>
      {children}
    </div>
    )
}

export default Layout;