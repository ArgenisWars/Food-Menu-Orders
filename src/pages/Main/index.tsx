import { Outlet } from 'react-router-dom'

import { MyOrder } from '../../components/myOrder'
import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import logoImg from '../../assets/logo2.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <header className="header">
          <div className="logoPrincipal">
            <img className="imgLogo" src={logoImg} alt="Logo" />
          </div>
          <div className="titulo">
            <h3>
              <span style={{ color: 'white' }}>Food</span> Lanches
            </h3>
            <p className="direcao">Cidade - Estado</p>
          </div>
        </header>
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
