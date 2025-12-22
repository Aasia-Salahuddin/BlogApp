import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex justify-center gap-8 items-center flex-col p-6'>
      <h1 className='text-4xl font-bold text-center'>Explore Our Articles</h1>
      <p className='text-lg text-gray-600 text-center max-w-3xl'>
      Dive into a world of stories, tips, and insights designed to spark your curiosity and inspire 
      your next adventure. From mouth-watering recipes and restaurant reviews to the latest tech 
      discoveries and exciting travel guides, our articles are crafted for readers who love to explore, 
      learn, and experience new things. Whether you’re planning your next trip, experimenting 
      in the kitchen, or keeping up with science and technology, there’s something here for everyone!
      </p>
      <div className='w-full flex flex-col gap-6'>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            Why Read our Articles?
          </h2>
          <p className='text-gray-700 mt-2'>
            Reading and exploring content is one of the best ways to discover new ideas 
            and expand your horizons. Our blog helps you learn, get inspired, and stay informed 
            about topics that matter—whether it’s trying a new recipe, understanding the latest 
            tech trend, or planning your dream vacation.
          </p>
        </section>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            What You’ll Discover
          </h2>
          <ul className='list-disc list-inside text-gray-700 mt-2'>
            <li>Delicious recipes, cooking tips, and food inspiration</li>
            <li>Engaging tech news, innovations, and scientific insights</li>
            <li>Travel guides, tips, and hidden gems from around the world</li>
            <li>Tips and tricks to enhance your lifestyle and daily experiences</li>
            
          </ul>
        </section>
      </div>
      <CallToAction />
    </div>
  );
}
