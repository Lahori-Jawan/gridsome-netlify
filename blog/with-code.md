---
title: With Code
description: Desc
date: 2021-07-17T05:58:27.887Z
---
There are many repetitive tasks that come in the life of a developer & one such task is dealing with arrays. Arrays unlike `Number`, `Boolean`, `String` are not pure data type meaning they don’t represent real data rather they act as a container to hold a list of data. For example when we make http call to `/users` endpoint, it returns a list of **users** contained in a container i.e. Array. We can then loop over this array via `for` loop or some Higher Order Function i.e. `filter` to filter out the data as we need.

Javascript offers so many higher order functions to manipulate arrays that sometimes its very confusing to decide which one to use to make code more readable given that they all work almost the same. So in this post I will show a comparative difference b/w them and when to use one over the other from a good practice and syntactic point of view.

Lets start!



## map vs forEach:

`map` and `forEach` are the two most commonly confused array methods ever since we came to know about them. There is no doubt that both these methods can be used interchangeably if you just need to transform the data i.e.

```javascript
const users = [
  { id: 1, name: 'nasir', isAuthor: true },
  { id: 2, name: 'jon', isAuthor: false },
  { id: 3, name: 'bond' isAuthor: false }
]
// with map
users = users.map(user => {
  if(user.isAuthor) {
    user = Object.assing(user, {isAdmin: true})
  }
  return user
})

// with forEach
users.forEach((user, index) => {
  if(user.isAuthor) {
    users[index] = Object.assing(user, {isAdmin: true})
  }
})
```

There is no real difference b/w the two but there is one striking use case where `map` always can be used and not `forEach` and that is `async` operations. You cannot `await` an async call inside forEach i.e.

```javascript
// forEach doesn't return anything
[1,2,3].forEach(async (i) => {
  await setInterval(() => {}, 100);
  console.log(i);
});
console.log("Prints first");
// result
Prints first
1
2
3
```

Above you can see that though we are `await`ing `setInterval` but still it prints console outside `forEach` method before anything meaning that `await` has no effect. So to solve this issue, we can easily switch to `map` function and `await` the promises as given below:

```javascript
.
// returns promises array
const promises = [1,2,3].map(async (i) => {
  await setInterval(() => {}, 100);
  console.log(i);
});
await Promise.all(promises)
console.log("Prints last");
// result
1
2
3
Prints last
```