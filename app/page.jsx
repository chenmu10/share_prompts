import Feed from '@components/Feed.jsx';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient"> AI Powered Prompts</span>
    </h1>
    <p className="desc text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium illo harum corrupti, earum id commodi ullam dolorum. Culpa accusamus inventore, esse quis veritatis repellendus porro quidem rem corporis similique dolores?
    </p>
    <Feed />
    </section>
  )
}

export default Home