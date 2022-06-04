const searchArtistId = async (artist = "Michael Jackson") => {
  const response = await fetch(`https://itunes.apple.com/search?term=${artist}&entity=musicArtist`,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
  );
  let obj = await response.json();
  return  obj.results[0].artistId;
};

export default searchArtistId;