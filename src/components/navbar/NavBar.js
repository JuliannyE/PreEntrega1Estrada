import './NavBar.css'
import { Link } from 'react-router-dom'

import Icon from '../Icon'
import Logo from '../Logo'
import { categorias } from '../../seedData'


function NavBar() {

  return <div>

    <header>
      <div>
        <Icon name="search" />
        <Link to={"/"}>
          <Logo />
        </Link>
        <Link to={"/cart"}>
          <Icon name="shopping_bag" />
        </Link>
      </div>

      <nav>
        {
          categorias.map((category, i) => <Link key={i} to={`/category/${category}`} >{category.toUpperCase()}</Link>)
        }
      </nav>
    </header>
  </div>
}


export default NavBar