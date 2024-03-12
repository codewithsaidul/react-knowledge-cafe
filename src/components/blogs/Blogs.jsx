import { useState, useEffect } from "react"
import Blog from "../blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blog.json")
          .then((res) => res.json())
          .then((data) => setBlogs(data));
    }, [])
  return (
    <div className="md:w-[62%]">

        {
            blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
    </div>
  )
}

export default Blogs