export const BASE_API = "https://www.googleapis.com/books/v1/volumes?q=";

// export const FIRST_BOOKS_API = `${BASE_API}subject:self+help`;
// export const FIRST_BOOKS_API = `${BASE_API}bestseller+fiction+2023&orderBy=newest`;

export const QUERY_PARAMETERS = "&maxResults=15&key=";

export const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

export const POSTER_IMG_BASE_URL = "https://books.google.com/books/content?id=";
export const POSTER_IMG_PARAMETERS =
  "&printsec=frontcover&img=1&zoom=7&edge=curl&source=gbs_api";
