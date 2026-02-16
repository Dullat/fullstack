
---

# 📝 JavaScript Strings & Logic Practice – Mastery Note

---

## 🔹 Core String Methods You Must Know

|Method|What it Does|
|---|---|
|`length`|Get string length|
|`toUpperCase()`|Uppercase conversion|
|`toLowerCase()`|Lowercase conversion|
|`includes()`|Check if string contains substring|
|`indexOf()`|Find first index of a substring|
|`slice(start, end)`|Extract part of string|
|`replace()`|Replace substring|
|`split()`|Convert string to array|
|`join()`|Convert array back to string|
|`trim()`|Remove spaces|
|`map()`|Transform array elements|
|`filter()`|Filter array elements|
|`reduce()`|Combine array elements to single value|

**Tip:** Dot vs Bracket notation

- `obj.key` → fixed property name
    
- `obj[variable]` → dynamic property name (from variable)
    

---

## 🔹 Loops & Structures

|Loop|Usage|
|---|---|
|`for...of`|Iterate over values (string, array, set)|
|`for...in`|Iterate over keys/indexes (object, array)|
|`Set`|Store **unique values**|
|`.add()`|Add value to set|
|`.has()`|Check existence in set|

---

## ✅ Problems We Solved (With Key Methods)

1. **Reverse a string**
    

```js
"hello".split("").reverse().join("")
```

2. **Palindrome check**
    

```js
str === str.split("").reverse().join("")
```

3. **Count vowels**
    

```js
"javascript".split("").filter(c => "aeiou".includes(c)).length
```

4. **Capitalize first letter**
    

```js
str[0].toUpperCase() + str.slice(1)
```

5. **Remove duplicates**
    

```js
"programming".split("").reduce((acc, c) => {
  if(!acc.includes(c)) acc.push(c)
  return acc
},[]).join("")
```

6. **Check anagram**
    

```js
str1.split("").sort().join("") === str2.split("").sort().join("")
```

7. **Most frequent character**
    

```js
const freq = {}; let max=0; let char='';
for(let c of str){ freq[c]=(freq[c]||0)+1; if(freq[c]>max){max=freq[c]; char=c;} }
```

---

## 🟡 Problems We Discussed But Did Not Solve

1. **First Non-Repeating Character**
    

```
"swiss" → "w"
```

Logic hint:

- Count frequency
    
- Return first char with count 1
    

2. **Reverse only vowels**
    

```
"hello" → "holle"
```

Logic hint:

- Two pointers (start/end)
    
- Swap vowels only
    

3. **Capitalize every word**
    

```
"hello world" → "Hello World"
```

Logic hint:

- Split by space
    
- `map()` → uppercase first letter of each word
    
- `join(" ")`
    

4. **Return first repeating character**
    

```
"programming" → "r"
```

Logic hint:

- Use Set or object frequency
    
- Return first char with count > 1
    

---

## 🟠 Additional Hard / Logic-Building Problems

1. **Longest Substring Without Repeating Characters**
    

```
"abcabcbb" → "abc" (length 3)
```

Hint: Sliding window

2. **Check if two strings are rotations of each other**
    

```
"abcde", "deabc" → true
```

Hint: Concatenate one string to itself

3. **All permutations of a string**
    

```
"abc" → ["abc","acb","bac","bca","cab","cba"]
```

Hint: Recursion / backtracking

4. **Count substrings with exactly K distinct characters**
    

```
"aabc", K=2 → 4
```

Hint: Hash map + sliding window

5. **Longest Palindromic Substring**
    

```
"babad" → "bab" or "aba"
```

Hint: Expand around center

6. **Check if string can form a palindrome**
    

```
"civic" → true
"aabbcc" → true
"abc" → false
```

Hint: Frequency of characters ≤1 for odd-length palindrome

7. **Minimum window substring**
    

```
s = "ADOBECODEBANC", t = "ABC" → "BANC"
```

Hint: Sliding window + hashmap

---

## 🧠 Tips for Mastery

- Always **write logic in plain English first**
    
- Use **small helper variables** like `freq`, `seen`, `result`
    
- Don’t just memorize methods — **use them repeatedly**
    
- Practice **both object & Set** for frequency/counting problems
    
- After solving, **try a harder variation** (e.g., longest substring, sliding window)
    

---

