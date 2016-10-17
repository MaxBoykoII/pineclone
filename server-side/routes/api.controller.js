var pictures = [{
    url: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-439045.jpg',
    description: 'testing',
    author: '@FengKraken1337',
    thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
}, {
    url: 'http://static.naturallycurly.com/wp-content/uploads/2014/05/OLIVE-oil-for-hair-650x365.jpg',
    description: 'Olive Oil',
    author: '@thanhacun',
    thumbnail: 'https://pbs.twimg.com/profile_images/744886125529956353/wC7QEgVD_normal.jpg'
}, {
    url: 'https://cdn.thinglink.me/api/image/727110550026190849/1240/10/scaletowidth',
    description: 'Doge Life',
    author: '@ym8dapnzfgu',
    thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png'
}, {
    url: 'http://i.imgur.com/5FC2r9R.jpg',
    description: 'pwnd',
    author: '@ossia',
    thumbnail: 'https://pbs.twimg.com/profile_images/378800000147359764/54dc9a5c34e912f34db8662d53d16a39_normal.png'
}, {
    url: 'http://www.italytravel.com/wp-content/uploads/2012/08/j.jpg',
    description: 'tower of pisa',
    author: '@js999x',
    thumbnail: 'https://pbs.twimg.com/profile_images/749014256004296704/8G_Bs0L7_normal.jpg'
}, {
    url: 'https://c2.staticflickr.com/2/1520/24330829813_944c817720_b.jpg',
    description: 'Tree',
    author: '@TestFcc7',
    thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png'
}, {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Hanoi_railroad_tracks.jpg',
    description: 'Hanoi railroad',
    author: '@thanhacun',
    thumbnail: 'https://pbs.twimg.com/profile_images/744886125529956353/wC7QEgVD_normal.jpg'
}];

var getPictures = (req, res) => {
    res.json(pictures);
};

var addPicture = (req, res) => {
    console.log('the request body is ', req.body);
    pictures.push(req.body);
    res.json(pictures);
    console.log('pictures array: ', pictures);
};

var apiController = {
    getPictures: getPictures,
    addPicture: addPicture
};

module.exports = apiController;
