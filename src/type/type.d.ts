type videoData = {
  results: {
    iso_639_1: string;
    iso_3166_1: number;
    name: string;
    key: string;
    site: string;
    size: string;
    type: string;
    official: string;
    published_at: string;
    id: boolean;
  }[];
};

type allList = {
  results: {
    backdrop_path: string;
    id: number;
    title?: string;
    original_title?: string;
    name?: string;
    original_name?: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date?: string;
    release_date?: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
  }[];
};

type data = {
  backdrop_path: string;
  id: number;
  title?: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  release_date?: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};
