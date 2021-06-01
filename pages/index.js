import Layout from '../components/layout'
import Link from 'next/link'
import {skills, experiencies, projects} from '../profile'

const Index = () => (
    <Layout>
        
        {/* Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row ">
                        <div className="col-md-4">
                            <img src="ryan-ray-profile2.jpeg" alt="Imagen de edison" className="img-fluid"/>
                        </div>
                        <section className="col-md-8">
                            <h1 className="text-success">Ing. Edison Lopez</h1>
                            <h4 className="text-light">Ingeniero en Software</h4>
                            <p className="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dicta possimus assumenda commodi at dolore maiores dolor, pariatur iure reprehenderit, omnis minima? Voluptatum itaque voluptates officiis ratione ducimus voluptatem incidunt at quas, eum, ab labore?</p>
                            <a className="btn btn-outline-success" href="/hireme">Contrame</a>
                        </section>
                    </div>
                </div>
            </div>
        </header>

        {/* Second Section */}
        <section className="row py-3">
            <aside className="col-md-4">
                <div className="card border-light bg-dark mb-3 text-white">
                    <div className="card-header"><h2>Habilidades</h2> </div>
                    <div className="card-body">
                        {
                            skills.map(({skill, percentage}, i) =>(
                                // console.log(percentage)
                                <div className="py-3" key={i}>
                                    <h5 className="card-title">{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" 
                                        role="progressbar" 
                                        style={{ width: `${percentage}%` }}></div>
                                    </div>   
                                </div>                     
                            ))
                        }
                    </div>
                </div>
            </aside>
            <section className="col-md-8">
                <div className="card border-light bg-dark mb-3 text-white">
                    <h2 className="card-header">Experiencia</h2>
                    <article className="card-body">
                        <ul>
                            {
                                experiencies.map(({title, description, from, to}, index)  =>(
                                    <li key={index}>
                                        <h4 className="text-success">{title}</h4>
                                        <h5>{from} - {to ? to : 'Actually'}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </article>
                </div>
            </section>
        </section>
        
        {/* Portfolio */}
        <section className="row mb-4">
            <div className="col-md-12">
                <div className="card bg-dark mb-3 text-white card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className=" card-header text-center text-light">Trabajos</h2>
                        </div>
                        {
                            projects.map(({name, description,image}, i)=>(
                                <div className="col-md-4 p-3" key={i}>
                                    <div className="card border-success h-100">
                                        <div className="overflow">
                                        <img src={`/${image}`} alt="" className="card-img-top"/>
                                        </div>
                                        <div className="card-body">
                                            <h4>{name}</h4>
                                            <p>{description}</p>
                                            <a href="#" className="btn btn-outline-primary">Know more</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center">
                        <Link href="#">
                            <a className="btn btn-outline-primary">More Projects</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)
export default Index;