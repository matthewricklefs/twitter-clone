import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Home() {
  let { data } = useSWR("/api/tweets", fetcher);

  if (!data) return "Loading...";

  return (
    <div>
      {[...data.tweets].reverse().map((tweet) => (
        <div className="px-4 py-3 border-b border-gray-200">
          <div className="flex">
            {/* Avatar */}
            <img
              className="w-10 h-10 mr-3 rounded-full"
              src={tweet.avatarUrl}
              alt=""
            />
            {/* Tweet body */}
            <div className="flex flex-col min-w-0">
              {/* Header row */}
              <p className="flex text-sm">
                <span className="truncate text-cool-gray-500">
                  <span className="font-bold text-cool-gray-900">
                    {tweet.name}
                  </span>{" "}
                  <span className="pl-1 text-gray-500">@{tweet.username}</span>
                </span>
                <span className="flex-shrink-0">
                  <span className="px-1 text-cool-gray-500">-</span>
                  <span className="text-cool-gray-500">18m</span>
                </span>
              </p>

              {/* Tweet text */}
              <p className="text-sm">{tweet.text}</p>

              {/* Icon bar */}
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Home.headerTitle = "Latest Tweets";

export default Home;
