var algoliasearch = require('algoliasearch');
var fs = require('fs');

var users = JSON.parse(fs.readFileSync('src/assets/users.json')).results;

var users_by_id = {};
for(var i = 0; i < users.length; i++){
    var user = users[i];

    var x = 0;
    var end = '';
    var username = null;
    do {
        username = user.name.first + '.' + user.name.last + end;

        x += 1;
        end = x.toString();
    } while (users_by_id.hasOwnProperty(username));
    // Could be more of the information, but for the
    // demo this is probably enough/ideal
    var userdata = {
        'username': username,
        'first_name': user.name.first,
        'last_name': user.name.last,
        'photo': user.picture.thumbnail,
    };
    users_by_id[username] = userdata;
}

// Admin key - keep secret!

var client = algoliasearch(/* TODO add credentials */);
var index = client.initIndex('sketchdeck_chat_users');

users = Object.keys(users_by_id).map(key => users_by_id[key]);
index.addObjects(users, function(err, content){
    if (err){
        console.log(err);
    }
});
console.log('Added objects to algolia');
