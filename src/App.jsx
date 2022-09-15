import './index.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <body className='landingBG'>

      <div className='nav'>
        <h2 className='navSigeco'>SIGECO</h2>
        <div class="col-lg-8"></div>
        <button className='signIn'>Inicia sesión</button>
      </div>

      <div className='midTitles'>
        <h1>Sistema de Gestión Condominal</h1>
        <p>Conoce nuestros planes para le gestión de tu condominio</p>
      </div>

      

        <div className='bottomBtn'>
          <button className='btnLanding conoce'>Conoce el sistema</button>
          <button className='btnLanding contrata'>Contrata ahora</button>
        </div>

    </body>
  )
}

export default App;
