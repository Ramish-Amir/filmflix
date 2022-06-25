import requests from "./requests"
import { MdTrendingUp, MdTheaters, MdStar, MdGroups } from 'react-icons/md'

const categories = [
    {
        name: 'Trending',
        icon: <MdTrendingUp className="panelIcon" />,
        sourceURL: requests.fetchTrending
    },
    {
        name: 'Popular',
        icon: <MdTheaters className="panelIcon" />,
        sourceURL: requests.fetchPopular
    },
    {
        name: 'Top Rated',
        icon: <MdStar className="panelIcon" />,
        sourceURL: requests.fetchTopRated
    },
    {
        name: 'Up Coming',
        icon: <MdGroups className="panelIcon" />,
        sourceURL: requests.fetchUpcoming
    }
]

export default categories