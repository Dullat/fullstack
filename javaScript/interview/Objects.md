
---

# JavaScript Prototypes — Interview Questions & Answers

---

## 🟢 Beginner–Intermediate (but asked everywhere)

### 1️⃣ What is `[[Prototype]]`?

**Answer:**  
`[[Prototype]]` is an internal hidden link every JavaScript object has, pointing to another object. It’s used for property lookup when a property is not found on the object itself.

**What they’re testing:**  
Do you understand inheritance is _lookup-based_, not copy-based.

---

### 2️⃣ What is the difference between `__proto__` and `.prototype`?

**Answer:**

- `__proto__` exists on **objects** and points to their internal `[[Prototype]]`
    
- `.prototype` exists on **constructor functions** and defines what their instances will inherit from
    

They are connected when `new` is used.

---

### 3️⃣ What does `Object.getPrototypeOf(obj)` return?

**Answer:**  
It returns the object that `obj` inherits from — the value of `obj.[[Prototype]]`.

---

### 4️⃣ What is `Object.prototype`?

**Answer:**  
`Object.prototype` is a normal JavaScript object that acts as the default parent for almost all objects. It provides shared methods like `toString` and `hasOwnProperty`, and it’s the top of the prototype chain.

---

### 5️⃣ Why does `{}` have access to `toString()`?

**Answer:**  
Because when `toString` isn’t found on the object itself, JavaScript looks it up on `Object.prototype` via the prototype chain.

---

## 🟡 Intermediate (real understanding starts here)

### 6️⃣ What is the prototype chain?

**Answer:**  
The prototype chain is the sequence of objects JavaScript follows when resolving a property, starting from the object itself and following `[[Prototype]]` links until it reaches `null`.

---

### 7️⃣ What is the prototype chain of an array?

**Answer:**

```
[] → Array.prototype → Object.prototype → null
```

---

### 8️⃣ Are arrays objects in JavaScript?

**Answer:**  
Yes. Arrays are specialized objects that inherit from `Array.prototype`, which in turn inherits from `Object.prototype`.

---

### 9️⃣ Are functions objects?

**Answer:**  
Yes. Functions are callable objects. They inherit from `Function.prototype`, which inherits from `Object.prototype`.

---

### 🔥 10️⃣ Explain why this works: `[].toString()`

**Answer:**  
`toString` isn’t found on the array itself, so JavaScript checks `Array.prototype`. If not found there, it continues to `Object.prototype`, where `toString` exists.

---

## 🟠 Advanced (interviewers LOVE these)

### 11️⃣ What happens internally when `new Person()` is called?

**Answer:**

1. A new empty object is created
    
2. Its `[[Prototype]]` is set to `Person.prototype`
    
3. `Person` is called with `this` bound to that object
    
4. The object is returned (unless another object is explicitly returned)
    

---

### 12️⃣ Why shouldn’t you modify `Object.prototype`?

**Answer:**  
Because it affects all objects globally, can break loops, libraries, and assumptions, and causes hard-to-debug side effects.

---

### 13️⃣ What is `Object.create(null)` and why would you use it?

**Answer:**  
It creates an object with no prototype. It doesn’t inherit from `Object.prototype`, making it useful for pure dictionaries where key collisions must be avoided.

---

### 14️⃣ Why is using arrow functions on prototypes usually a bug?

**Answer:**  
Arrow functions don’t have their own `this`. When used on prototypes, `this` won’t refer to the instance, breaking expected behavior.

---

### 15️⃣ How is `class` syntax related to prototypes?

**Answer:**  
JavaScript `class` syntax is syntactic sugar over prototype-based inheritance. Methods defined in classes are placed on the constructor’s prototype.

---

## 🔴 Expert / Tricky Questions

### 16️⃣ What is the difference between `hasOwnProperty` and the `in` operator?

**Answer:**

- `hasOwnProperty` checks only the object itself
    
- `in` checks the entire prototype chain
    

---

### 17️⃣ Can you change an object’s prototype after creation?

**Answer:**  
Yes, using `Object.setPrototypeOf`, but it’s slow and discouraged for performance reasons.

---

### 18️⃣ Why does `typeof function(){} === "function"` but it’s still an object?

**Answer:**  
Because functions are objects with a callable internal behavior. `typeof` has a special case for functions.

---

### 19️⃣ What happens if two objects in the prototype chain have the same property?

**Answer:**  
The closest property in the chain (the one found first) shadows the others.

---

### 🔥 20️⃣ Explain this output

```js
function A() {}
A.prototype.x = 1;

const a = new A();
A.prototype = { x: 2 };

console.log(a.x);
```

**Answer:**  
Output: `1`

**Why:**  
`a`’s `[[Prototype]]` was set to the original `A.prototype` at creation time. Reassigning `A.prototype` later does not affect existing instances.

---

## 🧠 How interviewers judge you

If you can explain:

- lookup instead of inheritance-by-copy
    
- `__proto__` vs `.prototype`
    
- array/function chains
    
- why `Object.prototype` is the root