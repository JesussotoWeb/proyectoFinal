import HomeSection1 from "../UI/organisms/HomeSection1/HomeSection1";
import HomeSection2 from "../UI/organisms/HomeSection2/HomeSection2";
import Header from "../templates/Header/Header";


const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <HomeSection1 />
        <HomeSection2 />
      </main>
    </>
    
  )
}

export default Home;