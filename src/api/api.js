import axios from "axios";

export const WeatherApi = async () => {
    try {
        const url = `http://api.weatherapi.com/v1/current.json?q=pune&key=${process.env.REACT_APP_WEATHER_API_KEY}`
        const res = await axios.get(url);
        return res?.data
    } catch (error) {
        console.log("Error in WeatherApi", error);
    }
}

export const NewsApi = async ({setLoading}) => {
    try {
        setLoading(true)
        const url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        const res = await axios.get(url);
        setLoading(false);
        return res?.data?.articles
    } catch (error) {
        console.log("Error in NewsAPI", error);
        setLoading(false);
    }
} 