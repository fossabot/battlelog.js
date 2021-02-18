```js

const bl = require("./src/index.js");
var blClient = bl();

var bf3 = client.game('bf3');
var user = await bf3.users.fetch( "DANNYonPC");

console.log(user);

```

That should print.

```js
User {
      userId: '',
      username: '',
      platoons: [],
      platoonFans: [],
      friends: []
    }
```
