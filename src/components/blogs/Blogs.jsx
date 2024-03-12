import { useState, useEffect } from "react"


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
  return (
    <div>
        <p>Hi, Im</p>
    </div>
  )
}

export default Blogs