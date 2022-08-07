
function reWriteOrder(string)
{
    // TODO check if string is valid

    const spitedData = string.split(' ');
    const validArrayItems = spitedData.map(i => i.replace(/,/g, '').trim());

    console.log(validArrayItems);

    // const cites = {};
    //
    // array.map(item => {
    //
    //
    //
    // });




}

const string = 'photo.jpg, Waraw, 2012-09-05 14:08:15 john.png, London, 2015-06-20 15:13:22 myFriends.png, Warsaw, 2013-09-05 14:07:13 Eiffel.jpg, Paris, 2015-07-23 08:03:02 pisatower.jpg, Paris, 2015-07-22 23:59:59 BOB.jpg, London, 2015-08-05 00:02:03 notredame.png, Paris, 2015-09-01 12:00:00 me.jpg, Warsaw, 2013-09-06 15:40:22 a.png, Warsaw, 2016-02-13 15:40:22 b.jpg, Warsaw, 2016-01-02 15:12:22 c.jpg, Warsaw, 2016-01-02 14:34:30 d.jpg, Warsaw, 2016-01-02 15:15:01 e.jpg, Warsaw, 2016-01-02 09:49:09 f.jpg, Warsaw, 2016-01-02 10:55:32 g.jpg, Warsaw, 2016-02-29 22:13:11';


reWriteOrder(string);




// your function should return:
//
// Warsaw02.jpg
// London1.png
// Warsaw01.png
// Paris2.jpg
// Paris1.jpg
// London2.jpg
// Paris3.png
// Warsaw03.jpg
// Warsaw09.png
// Warsaw07.jpg
// Warsaw06.jpg
// Warsaw08.jpg
// Warsaw04.png
// Warsaw05.png
// Warsaw10.jpg
