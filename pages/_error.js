import Layout from '../components/layout'

const _error = ({statusCode}) =>{
    return(
        <Layout>
            {
                statusCode ? (
                    <h3 className="text-center">No se pudo cargar tu pagina: Status Code {statusCode}</h3>
                ):(
                    <h3 className="text-center">No se pudo cargar tu pagina</h3>
                )
            }
        </Layout>
    )
}
export default _error