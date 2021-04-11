import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Home() {
  let { data } = useSWR('/api/tweets', fetcher)

  if (!data) return "Loading..."

  return (
    <div>
      {[...data.tweets].reverse().map((tweet) => (
        <div className="px-4 py-3 border-b border-gray-200">
          <div className="flex">
            <img 
              className="w-10 h-10 mr-3 rounded-full"
              src={tweet.avatarUrl}
              alt=""
            />
            <p className="text-sm">{tweet.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

Home.headerTitle = "Latest Tweets";

export default Home;
