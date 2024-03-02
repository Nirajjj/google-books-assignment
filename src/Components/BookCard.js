import React from "react";

const BookCard = () => {
  return (
    <div className="border border-black inline-block py-3 px-5 rounded-md hover:shadow-2xl transition-all duration-300">
      <img
        className="w-44"
        src="https://books.google.com/books/content?id=r2yCRUxo0EYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73JfMXKZoT8woTJjKkU-_Sg0BY6Y74kZnnNo5827xEXQD9DUPptyNLYumHXjgO9W3wcAG9NucKqw1TRg2fyl2alD_uqsOrqj4kkMtspexKuo8QwXV90OTPHLNaENCYVm3KXv3MK&source=gbs_api"
        alt="book"
      />
      <div>
        <h2 className="text-lg poppins-bold mt-2">Start With Why</h2>
        <p className="text-gray-600 -mt-1 poppins-medium">Simon Sinek</p>
      </div>
    </div>
  );
};

export default BookCard;
