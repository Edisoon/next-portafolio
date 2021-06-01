import Layout from '../components/layout'
import Link from 'next/link'

const custom404 = () => (
    <Layout>
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <img src="undraw_Taken_re_yn20.svg" alt="Imagen de error" className="img-fluid"/>
            <h2>404 Error</h2>
            <h3>No entcontrado</h3>
            <p>Esta pagina no existe! Por favor vuelve a la pagina de</p>
            <Link href="/">
                <a className="btn btn-primary">INICIO</a>
            </Link>
        </div>
    </Layout>
)
export default custom404;