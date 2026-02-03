
😂 ah yes, the **“interviewer hates me”** tier of JavaScript questions.
These are all about **type coercion**, **ToPrimitive**, and some truly cursed rules.

Let’s go full boss-fight mode.

---

# Your examples (why they work)

### 1️⃣

```js
console.log([0, 1] == 0, 1);
```

Operator precedence first 👇
This is actually parsed as:

```js
(console.log([0, 1] == 0), 1);
```

So the real comparison is:

```js
[0, 1] == 0
```

### Step-by-step:

```txt
[0,1] == 0
↓
[0,1].toString() → "0,1"
↓
Number("0,1") → NaN
↓
NaN == 0 → false
```

Output:

```
false 1
```

---

### 2️⃣

```js
console.log("1,2" == [1, 2]);
```

Step-by-step:

```txt
[1,2].toString() → "1,2"
"1,2" == "1,2" → true
```

✅ `true`

---

# The rules interviewers weaponize 🔪

## 1️⃣ `==` does **ToPrimitive**

Objects → primitive first.

```js
[] == ""        // true
[] == 0         // true
[1] == 1        // true
[1,2] == "1,2"  // true
```

Why?

```js
[].toString() → ""
[1].toString() → "1"
```

---

## 2️⃣ `null` and `undefined` are special snowflakes ❄️

```js
null == undefined  // true
null == 0          // false
undefined == 0     // false
```

They **only** equal each other (with `==`).

---

## 3️⃣ `NaN` hates everyone (including itself)

```js
NaN == NaN   // false
NaN === NaN  // false
```

Only way:

```js
Number.isNaN(NaN) // true
```

---

## 4️⃣ Booleans convert to numbers

```js
true == 1     // true
false == 0    // true
```

But:

```js
true === 1    // false
```

---

## 5️⃣ The empty array is PURE EVIL

```js
[] == false   // true
[] == ![]     // true 🤯
```

Why?

```txt
![] → false
[] == false
[] → ""
"" → 0
0 == 0 → true
```

---

## 6️⃣ Objects are NEVER equal (by value)

```js
{} == {}    // false
[] == []    // false
```

Different references.

---

## 7️⃣ `+` is NOT just math

```js
1 + "2"     // "12"
"2" + 1     // "21"
1 + 2 + "3" // "33"
"1" + 2 + 3 // "123"
```

But:

```js
"5" - 1     // 4
"5" * "2"   // 10
```

Only `+` does string concatenation.

---

## 8️⃣ Comparison vs equality gotcha

```js
[] == 0     // true
[] <= 0     // true
[] >= 0     // true
```

But:

```js
[] > 0      // false
```

Different abstract comparison rules 😈

---

## 9️⃣ `typeof` lies (historical bug)

```js
typeof null     // "object" 🤡
typeof []       // "object"
```

Correct check:

```js
Array.isArray([])
```

---

## 10️⃣ The final boss ☠️

```js
0 == "0"        // true
0 == []         // true
"0" == []       // false
```

Why?

```txt
"0" == [] → "0" == ""
```

---

# Interview survival rule 🛡️

If interviewer asks:

> “What is the output?”

You answer:

1. **Operator precedence**
2. **ToPrimitive**
3. **Type coercion**
4. **Final comparison**

They don’t care about the answer.
They care that you **explain the madness calmly**.

---

# Golden sentence (say this out loud)

> “`==` uses abstract equality with type coercion, so objects are converted using `ToPrimitive` (usually `toString`) before comparison.”

Instant respect 😎

If you want, I can:

* Give you a **15-question JS coercion drill**
* Simulate a **real hostile interview**
* Teach you how to shut this down with: *“That’s why we use `===` in production”*

Your move 💥
