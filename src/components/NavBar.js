import './NavBar.css'

const tabs = [
  {
    href: "./",
    title: "Novedades"
  },
  {
    href: "./",
    title: "Ofertas"
  },
  {
    href: "./",
    title: "Contacto"
  },
  {
    href: "./",
    title: "Carrito"
  },
]

function Icon({ name }) {
  return <span className="material-symbols-outlined icon">{name}</span>
}

function Logo() {
  return <a href="./"><img src="logo.png" alt="logo" /> </a>
}

function NavBar() {

  return <div>

    <header>
      <div>
        <Icon name="search" />
        <Logo />
        <Icon name="shopping_bag" />
      </div>

      <nav>

        {
          tabs.map(tab => <a href={tab.href}>{tab.title}</a>)
        }

      </nav>
    </header>
  </div>
}


export default NavBar