import profile from '../../assets/images/profile.png'



const Header = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto px-5 flex justify-between items-center border-b-2 py-5 border-[#11111126">
      <h1 className="text-lg sm:text-4xl font-bold">React Knowldge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
}

export default Header