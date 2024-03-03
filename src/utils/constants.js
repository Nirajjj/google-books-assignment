export const BASE_API = "https://www.googleapis.com/books/v1/volumes?q=";

export const FIRST_BOOKS_API = `${BASE_API}subject:self+help`;

export const QUERY_PARAMETERS = "&maxResults=20&key=";

export const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
