
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Markread from './components/markread/Markread';

function App() {
 

  return (
    <>
      <Header></Header>

      <div className="w-full max-w-[1170px] mx-auto mt-10">
        <div className=" md:flex gap-10">
          <Blogs></Blogs>
          <Markread></Markread>
        </div>
      </div>
    </>
  );
}

export default App
