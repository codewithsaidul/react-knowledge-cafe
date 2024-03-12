
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Markread from './components/markread/Markread';

function App() {
 

  return (
    <>
      <Header></Header>

      <div className='w-full max-w-[1170px] mx-auto mt-10 md:flex'>
        <Blogs></Blogs>
        <Markread></Markread>
      </div>
    </>
  );
}

export default App
