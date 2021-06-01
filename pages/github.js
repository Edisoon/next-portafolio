import Layout from '../components/layout'
import Error from './_error'

const Github = ({user, statusCode}) =>{
    if(statusCode){
        return<Error statusCode={statusCode}/>
    }

    return(
        <Layout footer={false} light>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h3>{user.name}</h3>
                        <img src={user.avatar_url} className="" alt="" />
                        <p className="m-0">{user.bio}</p>
                        <a href={user.blog} className="btn btn-outline-secondary my-2" target="_blank">Blog</a>
                        <a href={user.html_url} className="btn btn-outline-secondary" target="_blank">Mira mi Github</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(){
    
    const res = await fetch('https://api.github.com/users/Edisoon')
    const data = await res.json();

    const statusCode = res.status > 201 ? res.status : false

    console.log(data);
    return{
        props:{
            user: data,
            statusCode

        }
    }
}

export default Github;