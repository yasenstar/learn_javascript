# Things to learn on Javascript before React

1. map() & filter()

Both are array methods and both return a new array when applying. Fiter additionally eleminates items that don't match.

```js
const DATA = [
    {id: 1, title: 'first'},
    {id: 2, title: 'second'},
    {id: 3, title: 'third'},
    {id: 4, title: 'fourth'},
    {id: 5, title: 'fifth'},
]

console.log(DATA);

/* (5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{id: 1, title: 'first'}
1
: 
{id: 2, title: 'second'}
2
: 
{id: 3, title: 'third'}
3
: 
{id: 4, title: 'fourth'}
4
: 
{id: 5, title: 'fifth'}
length
: 
5 */

const upperData = DATA.map(el => el.title.toUpperCase());
console.table(upperData);

/* (5) ['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH']
0
: 
"FIRST"
1
: 
"SECOND"
2
: 
"THIRD"
3
: 
"FOURTH"
4
: 
"FIFTH"
length
: 
5 */

const moduloData = DATA.filter(el => el.id % 2 === 0);
console.table(moduloData);

/* (2) [{…}, {…}]
0
: 
{id: 2, title: 'second'}
1
: 
{id: 4, title: 'fourth'}
length
: 
2 */

const moduloData1 = DATA.map(el => el.id % 2 === 0);
console.table(moduloData1);

/* 0
: 
false
1
: 
true
2
: 
false
3
: 
true
4
: 
false
length
: 
5 */

```

2. slice() & splice()

method returns a new array with selected elements, while splice method changes the contents of an existing array.

```js
const charactersArr = [
    'Witcher',
    'Harry Potter',
    'Luck Sykwalker',
    'Tony Stark',
]

const copyArr = [...charactersArr];
console.log(copyArr);
// (4) ['Witcher', 'Harry Potter', 'Luck Sykwalker', 'Tony Stark']

copyArr.splice(0,1);
console.log(copyArr);
// (3) ['Harry Potter', 'Luck Sykwalker', 'Tony Stark']

copyArr.splice(copyArr.length, 1, 'Wonder Woman');
console.log(copyArr);
// (4) ['Harry Potter', 'Luck Sykwalker', 'Tony Stark', 'Wonder Woman']

const selected = charactersArr.slice(0,2)
console.log(selected)
// (2) ['Witcher', 'Harry Potter']

console.log(charactersArr);
// (4) ['Witcher', 'Harry Potter', 'Luck Sykwalker', 'Tony Stark']
```

3. concat()

This method returns a new array of merging two or mor arrays

```js
const arr1 = [1, 2, 3, 4]
const arr2 = [10, 20, 30, 40]
const arr3 = [100, 200, 300, 400]

const mergedArr = arr1.concat(arr2, arr3);
console.log(mergedArr);

// (12) [1, 2, 3, 4, 10, 20, 30, 40, 100, 200, 300, 400]
```

4. find() & findIndex()

The `find` method returns the first element that satisfies the condition, while `findIndex` returns the index of that element.

```js
const DATA = [
    {id: 1, title: 'first'},
    {id: 2, title: 'second'},
    {id: 3, title: 'third'},
    {id: 4, title: 'fourth'},
    {id: 5, title: 'fifth'},
]

const item = DATA.find(el => el.id === 2);
console.log(item);
// {id: 2, title: 'second'}

const itemIndex = DATA.findIndex(el => el.id === 2);
console.log(itemIndex);
// 1
```

5. destructuring

The `desstructuring` assignment is a special syntax which enables unpacking (assigning) values from arrays or object properties directly into variables.

```js
const name = ['Yasen', 'Zhao'];

const [firstName, lastName] = name

console.log(firstName, lastName)
// Yasen Zhao

const jedi = {
    id: 1,
    name: 'Yasen Zhao',
    lightsaber: true,
    species: 'Wizard'
}

const {name:jediName, species, ...rest} = jedi
console.log(jediName)
// Yasen Zhao
console.group(species)
// Wizard

console.log(rest)
// {id: 1, lightsaber: true}
```

6. rest & speed operator

`Rest` parameter enables us to pass unspecified number of parameters to a function
7. promises