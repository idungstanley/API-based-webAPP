import cardCounter from '../src/modules/cardCounter.js';

describe('Items counter test', () => {
  test('Function counts all 6 items', () => {
    // arange
    const html = `
    <header>
      <p id="cards-count">Albums(0)</p>
      <p>Planets</p>
      <p>Races</p>
    </header>
    <section id="section"> <div class="items-container">
    <img src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f2/0d/8b/f20d8bff-a927-ae98-6784-20a1f51cb23e/16UMGIM27642.rgb.jpg/100x100bb.jpg"><div class="title-like"><h3>Views</h3><div class="description-container">
    <i><img data-likes="Drake" data-itemid="0" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" class="icon-size"></i>
    <p data-cardid="0">Drake likes</p>
    </div></div><button class="comment" type="button" id="1440841363">Comments</button><button type="button">Reservation</button></div><div class="items-container">
    <img src="https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/27/9a/8c/279a8c66-9914-add2-9c7f-912f2946fb8a/15UMGIM08570.rgb.jpg/100x100bb.jpg">
    <div class="title-like"><h3>If You're Reading This It's Too Late</h3><div class="description-container">
    <i><img data-likes="Drake" data-itemid="1" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" class="icon-size"></i>
    <p data-cardid="1">Drake likes</p></div></div><button class="comment" type="button" id="1440839718">Comments</button><button type="button">Reservation</button></div><div class="items-container"><img src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/51/61/f3/5161f3c4-2292-f035-eb68-6f95bbc9edd6/00602537542338.rgb.jpg/100x100bb.jpg"><div class="title-like"><h3>Nothing Was the Same (Deluxe)</h3><div class="description-container"><i><img data-likes="Drake" data-itemid="2" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" class="icon-size"></i><p data-cardid="2">Drake likes</p></div></div><button class="comment" type="button" id="1440829462">Comments</button><button type="button">Reservation</button></div><div class="items-container"><img src="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/74/fb/d3/74fbd365-bd52-23b4-604b-7f164407b0a9/00602527899107.rgb.jpg/100x100bb.jpg"><div class="title-like"><h3>Take Care (Deluxe Version)</h3><div class="description-container"><i><img data-likes="Drake" data-itemid="3" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" class="icon-size"></i><p data-cardid="3">Drake likes</p></div></div><button class="comment" type="button" id="1440642493">Comments</button><button type="button">Reservation</button></div><div class="items-container"><img src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/4b/9c/db/4b9cdb40-effb-141c-aa20-9ebeabb1b97f/00602547616661.rgb.jpg/100x100bb.jpg"><div class="title-like"><h3>What a Time To Be Alive</h3><div class="description-container"><i><img data-likes="Drake &amp; Future" data-itemid="4" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" class="icon-size"></i><p data-cardid="4">Drake &amp; Future likes</p></div></div><button class="comment" type="button" id="1440842320">Comments</button><button type="button">Reservation</button></div><div class="items-container"><img src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/63/9d/13/639d1329-da68-6535-bce1-8797eebf6b48/00602527395319.rgb.jpg/100x100bb.jpg"><div class="title-like"><h3>Thank Me Later</h3><div class="description-container"><i><img data-likes="Drake" data-itemid="5" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" class="icon-size"></i><p data-cardid="5">Drake likes</p></div></div><button class="comment" type="button" id="1440762388">Comments</button><button type="button">Reservation</button></div></section>`;
    document.body.innerHTML = html;
    // act
    cardCounter();
    const result = document.getElementById('cards-count');

    // assest
    expect(result.innerHTML).toBe('Albums(6)');
  });
});
