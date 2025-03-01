import React from "react";
import BasicsSection from "./BasicsSection/index";
import constant from "../../../helper/constant";
// import Image from "next/dist/client/image";

const MovieInfo = ({ movie, movieCast }) => {
  const THUMBNAIL_URL = `${constant.TMDB.IMAGE_BASE_URL}/${constant.THUMBNAIL_SIZE}${movie?.poster_path}`;
  const [innerWidth, setinnerWidth] = React.useState();
  const [cast, setcast] = React.useState([]);
  React.useEffect(() => {
    // window.innerWidth
    setinnerWidth(screen.width);
    setcast(movie.cast);
  }, [movie]);
  return <>
    <div className="max-w-full flex flex-row flex-wrap justify-center my-12 m-2">
      {/* flex-1 overflow-hidden */}
      <div className="h-[200px] w-[350px] lg:h-[400px]">
        <img className="rounded-lg h-full"
          src={THUMBNAIL_URL}
          alt={movie.title + ", day2movies , watch latest movie online for free on day2movies"}
          title={movie.title || movie.original_name + " day2movies"} />
      </div>
      <div>
        <BasicsSection movie={movie} heading="Title"
          classNames={{
            root:"text-1xl sm:text-2xl md:text-3xl ",
            content:"text-1xl sm:text-1xl md:text-2xl font-semibold"
        }}
        >{`${(movie.title || movie.original_name)} ${constant.MOVIE_PAGE.SEO_TITLE}`} 
        </BasicsSection>
        <BasicsSection movie={movie} heading="Genre"
          classNames={{
            root:"back",
            content:"text-xs md:text-sm "
          }}
        >
          {movie.genres.map((genre) => genre.name + ", ")}
        </BasicsSection>
        <BasicsSection movie={movie} heading="Realsed"
          classNames={{
            root: "back",
            content: "text-xs md:text-sm"
          }}
        >
          {movie.release_date || movie.first_air_date}
        </BasicsSection>
        <BasicsSection movie={movie} heading="Run Time"
          classNames={{
            root: "back",
            content: "text-xs md:text-sm"
          }}
        >
          {Math.floor(movie.runtime / 60)} hrs {movie.runtime % 60}m {" "}
        </BasicsSection>
        <div className="text-sm m-2 md:text-lg max-w-4xl space-y-4">{movie.overview}</div>
        <h2>The Cast</h2>
        <div className="max-w-[50vw] overflow-x-scroll">
          <div className="flex overflow-x-auto overflow-y-auto space-x-2">
            {movieCast.length > 0 && movieCast.map((item, index) => 
              {
              <div className="w-11 h-11 rounded-[50%] overflow-hidden px-3 cursor-pointer">
                <img
                  src={`${constant.TMDB.IMAGE_BASE_URL}/w185/${item.profile_path}`}
                  className="w-11 h-11 object-cover aspect-[auto_44_/_44]"
                      alt={item.name}
                      lazy
                />
                {/* {item.name} */}
                  </div>
              }
            )}
          </div>
        </div>
      </div>
    </div>
  </>
};

export default MovieInfo;
