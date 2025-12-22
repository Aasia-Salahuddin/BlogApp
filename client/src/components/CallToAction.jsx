import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
           Explore our latest articles and insights!
        </h2>
        <p className='text-gray-500 my-2'>
            Discover interesting posts, tips, and stories on our website.
        </p>
        <a
          href='blog-hive-app.vercel.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            gradientDuoTone='purpleToPink'
            className='rounded-tl-xl rounded-bl-none rounded-br-xl w-full'
          >
            BlogHive Website
          </Button>
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img src='https://supernichesites.com/wp-content/uploads/2023/01/Do-I-Need-A-Blog-For-My-Business.jpg' />
      </div>
    </div>
  );
}
