import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './modules/header/header'
import Home from './modules/content/home'
import Service from './modules/content/service'
import Footer from './modules/footer/footer'
import Whatsapp from './modules/content/component/btn-whatsapp'
import ShowService from './modules/content/component/show-service'
import Location from './modules/content/component/location'

import imgService1 from './modules/content/component/img/ajuste.jpg'
import imgService2 from './modules/content/component/img/conserto.jpg'
import imgService3 from './modules/content/component/img/customizacao.jpg'
import imgService4 from './modules/content/component/img/confeccao.jpg'

export default function App() {
  return (
    <Router>
      <div className='app'>
        <Whatsapp />
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
            <hr/>
            <div className="service">
              <Service title={'Ajuste'} img={imgService1} text={"O Ajuste de roupa contribui com o caimento da peça e proporciona mais conforto."} />
              <Service title={'Conserto'} img={imgService2} text={"O conserto é uma forma rápida para recuperar pequenas avarias na peça."} />
              <Service title={'Customização'} img={imgService3} text={"O processo de customização pode ser feito com apliques, patches, rendados entre outros."} />
              <Service title={'Confecção'} img={imgService4} text={"Crie uma peça original e exclusiva, (há limite de quantidade, entre em contato para mais informações)."} />
            </div>
            <ShowService />
            <hr/>
            <Location />
          </Route>
          <Route path='/page2'><div className='page2'><h1>Page two</h1></div></Route>
          <Route path='/page3'><div className='page3'><h1>Page three</h1></div></Route>
          <Route path='/page4'><div className='page4'><h1>Page four</h1></div></Route>
        </Switch>
        <hr />
        <Footer />
      </div>
    </Router>
  )
}