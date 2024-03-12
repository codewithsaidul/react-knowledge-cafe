
import { useState } from 'react';
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Markread from './components/markread/Markread';

function App() {
 

  const [bookmarks, setBookmarks] = useState([]);

  const handleToAddBookmarks = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark)
  }

  return (
    <>
      <Header></Header>

      <div className="w-full max-w-[1170px] px-3 mx-auto mt-10">
        <div className=" md:flex gap-10">
          <Blogs handleToAddBookmarks={handleToAddBookmarks}></Blogs>

          <Markread bookmarks={bookmarks}></Markread>
        </div>
      </div>
    </>
  );
}

export default App
