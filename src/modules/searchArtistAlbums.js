const searchArtistAlbums = async (artistId, numberOfAlbums) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=${numberOfAlbums}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return await response.json();
};

export default searchArtistAlbums;