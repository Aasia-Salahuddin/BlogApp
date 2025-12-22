import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About BlogHive
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to BogHive. This blog was created as a personal project to share ideas, 
              stories, and insights with the world. Here, we explore a variety of topics including 
              Food & Drink, Tech & Science, and Tourism. Our goal is to inspire curiosity, provide 
              useful information, and entertain readers with engaging content across all interests.
            </p>

            <p>
              On this blog, you'll find regular articles and stories on a variety of topics, 
              including Food & Drink, Tech & Science, and Tourism. We explore delicious recipes, 
              the latest tech trends, travel guides, and inspiring experiences from around the world. 
              Be sure to check back often for fresh content and new insights!

            <p>
             We encourage you to leave comments on our posts and engage with other readers. 
             Share your thoughts, reply to others, and like comments you enjoy. We believe
              that a community of curious minds can inspire each other, spark new ideas, 
              and make exploring these topics even more enjoyable
            </p>
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}