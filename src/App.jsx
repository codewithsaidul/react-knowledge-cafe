
import { useState } from 'react';
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Markread from './components/markread/Markread';

function App() {
 

  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);

  const handleToAddBookmarks = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark)
  }

  const handleToAddTimes = times => {
    const newTime = time + times;
    setTime(newTime);
    // console.log(newBookmark);
  }

  return (
    <>
      <Header></Header>

      <div className="w-full max-w-[1170px] px-3 mx-auto mt-10">
        <div className=" md:flex gap-10">
          <Blogs
            handleToAddBookmarks={handleToAddBookmarks}
            handleToAddTimes={handleToAddTimes}
          ></Blogs>

          <Markread time={time} bookmarks={bookmarks}></Markread>
        </div>
      </div>
    </>
  );
}

export default App
