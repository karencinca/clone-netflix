import { useEffect, useState } from 'react'
import categories, { getMovies } from '../api'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState({})

    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalCategory = categories.find((category) => category.name === "netflixOriginals")
            const data = await getMovies(netflixOriginalCategory.path)
            const movies = data?.results
            const randomIndex = Math.floor(Math.random() * movies.length)
            setMovie(movies[randomIndex])
        } catch (error) {
            console.log("Banner fetchRandomMovie error:", error)
        }
    }

    useEffect(() => { 
        fetchRandomMovie()
    }, [])

    return (
        <div>
            <h1>Banner</h1>
        </div>
    )
}

export default Banner