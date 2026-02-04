

---

# 🧠 The “Functions” Universe (JS-centric)

Everything here exists because **functions are first-class**.

---

## 1️⃣ Regular functions (baseline)

```js
function add(a, b) {
  return a + b;
}
```

Can be:

- called
    
- passed
    
- returned
    
- stored
    

This is the root.

---

## 2️⃣ Functions as object creators

### A) Factory functions

```js
function createUser(name) {
  return { name };
}
```

✔ simple  
❌ no shared methods  
❌ no identity (`instanceof`)

---

### B) Constructor functions

```js
function User(name) {
  this.name = name;
}
```

Used with `new` → enables:

- automatic object creation
    
- prototype linkage
    
- shared behavior
    

**Constructor functions are NOT special**  
`new` is what makes them special.

---

## 3️⃣ Functions as behavior containers (methods)

### ❌ Inside constructor (not shared)

```js
function User(name) {
  this.name = name;
  this.sayHi = function () {};
}
```

- new function per instance
    
- higher memory cost
    

---

### ✅ On prototype (shared)

```js
User.prototype.sayHi = function () {};
```

One function, many users.

---

## 4️⃣ What constructor functions secretly give you

When you use a constructor function **properly**, you get:

### ✔ Shared methods (via prototype)

### ✔ Identity

```js
user instanceof User; // true
```

### ✔ Structured instances

```js
user.constructor === User; // true
```

### ✔ Prototype chain

```txt
user → User.prototype → Object.prototype → null
```

All from a function.

---

## 5️⃣ Functions creating functions (VERY important)

### Higher-order constructors (rare but valid)

```js
function createLogger(type) {
  return function log(msg) {
    console.log(type, msg);
  };
}
```

- closure + function factory
    
- still function territory
    

---

## 6️⃣ Closures inside constructors (advanced but legit)

```js
function BankAccount(balance) {
  this.getBalance = function () {
    return balance;
  };
}
```

- `balance` is private
    
- cannot be on prototype
    
- each instance needs its own closure
    

🧠 Tradeoff:

- privacy vs memory
    

---

## 7️⃣ Arrow functions & constructors 🚫

Arrow functions:

```js
const User = () => {};
```

❌ Cannot be constructors  
❌ No `this`  
❌ No `prototype`

Important interview point.

---

## 8️⃣ Function hoisting & constructors

```js
new Person(); // works

function Person() {}
```

But:

```js
new Person(); // ❌
const Person = function () {};
```

Constructor functions rely on **function declarations** for hoisting.

---

## 9️⃣ `return` inside constructor functions (sneaky detail)

```js
function User() {
  this.name = "A";
  return { name: "B" };
}

new User(); // { name: "B" }
```

Returning an object overrides `this`.

⚠️ Interview trap.

---

## 🔟 What constructor functions DO NOT give you

❌ True privacy (without closures)  
❌ Safety from forgetting `new`  
❌ Encapsulation by default

Which leads to…

---

## 1️⃣1️⃣ “new” problems (function-related only)

```js
function User(name) {
  this.name = name;
}

User("A"); // ❌ this = window / undefined
```

Why constructors are risky:

- `this` depends on call style
    
- forgetting `new` breaks everything
    

Common fix pattern:

```js
if (!(this instanceof User)) {
  return new User(name);
}
```

---

## 1️⃣2️⃣ Functions that look like constructors but aren’t

```js
function normal() {}
```

Only becomes a constructor **when called with `new`**.

---

## 1️⃣3️⃣ What people forget about constructor functions

- They’re still **just functions**
    
- They can:
    
    - accept functions
        
    - return functions
        
    - use closures
        
    - be passed around
        

```js
function Wrapper(Constructor) {
  return function (...args) {
    return new Constructor(...args);
  };
}
```

---

## 🧠 Mental compression (save this)

- **Functions** are the base
    
- **Factories** = functions returning objects
    
- **Constructors** = functions + `new`
    
- **Prototype** = shared behavior storage
    
- **Closures** = private data
    
- **Arrow functions** ≠ constructors
    

---



> “In JavaScript, constructor functions are regular functions that, when invoked with `new`, create objects linked via the prototype chain, allowing shared methods and instance identity.”

