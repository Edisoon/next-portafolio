import Layout from '../components/layout'
import {posts} from '../profile'
import Link from 'next/link'

const PostCard = ({post}) => (
    <div className="col-md-4">
        <div className="card">
            <div className="overflow">
                <img src={post.imageUrl} className="card-img-top d-block h-100" />
            </div>
            <div className="card-body">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
                    <button className="btn btn-light">Read</button>
                </Link>
            </div>
        </div>
    </div>
)

const Blog = () => (
    <Layout footer={false} title="My Blog" light>
        <div className="row">
            {
                posts.map((post, i) =>(
                    <PostCard post={post} key={i}/>
                ))
            }
       </div>
    </Layout>
)
export default Blog;