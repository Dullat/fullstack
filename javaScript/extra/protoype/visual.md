

---

# 🧩 The Full JS Constructor & Instance Prototype Map

### Legend:

- `A → B` means `A.__proto__ === B`
    
- `[]` or `{}` means an instance
    
- `Function.prototype` and `Object.prototype` are the “core” prototype objects
    

---

## 1️⃣ Function chain (constructor world)

```
Function
   ↓ __proto__ 
Function.prototype
   ↓ __proto__
Object.prototype
   ↓ null
```

Explanation:

- `Function` is a function object → inherits from `Function.prototype`
    
- All functions’ `__proto__` point to `Function.prototype`
    
- `Function.prototype.__proto__` points to `Object.prototype`
    
- Root: `Object.prototype.__proto__ === null`
    

---

## 2️⃣ Object chain (constructor world)

```
Object
   ↓ __proto__
Function.prototype
   ↓ __proto__
Object.prototype
   ↓ null
```

Explanation:

- `Object` itself is a function → inherits from `Function.prototype`
    
- That’s why `Object instanceof Function === true`
    
- But `Object.prototype` is the root object for all instances
    

---

## 3️⃣ Built-in constructors

```
String
   ↓ __proto__ 
Function.prototype
   ↓ __proto__ 
Object.prototype
```

```
Array
   ↓ __proto__ 
Function.prototype
   ↓ __proto__ 
Object.prototype
```

- Every constructor function (`String`, `Array`, etc.) is a **function object**
    
- So they inherit from `Function.prototype`
    

---

## 4️⃣ Instance chain (instance world)

```
"hulk" (primitive → wrapped)
   ↓ __proto__ (String object wrapper)
String.prototype
   ↓ __proto__
Object.prototype
   ↓ null
```

```
[]
   ↓ __proto__
Array.prototype
   ↓ __proto__
Object.prototype
   ↓ null
```

```
{}
   ↓ __proto__
Object.prototype
   ↓ null
```

- Instances link to **their constructor’s `.prototype`**
    
- That’s how inheritance works for methods
    

---

## 5️⃣ Circular “mind-bender”

```
Function
   ↓ __proto__
Function.prototype
```

- Function is an instance of itself.
    
- This is why `Function instanceof Function === true`
    
- It’s **self-hosted** inside JS engines.
    

---

## 6️⃣ Everything together

```
Instance world:
----------------
"hulk"  → String.prototype → Object.prototype → null
[]      → Array.prototype  → Object.prototype → null
{}      → Object.prototype → null

Constructor world:
------------------
Function → Function.prototype → Object.prototype → null
Object   → Function.prototype → Object.prototype → null
String   → Function.prototype → Object.prototype → null
Array    → Function.prototype → Object.prototype → null
```

💡 Key Observations:

1. Every **instance** links to its constructor’s `.prototype`
    
2. Every **constructor function** links to `Function.prototype`
    
3. `Function` itself is a function → so it links to `Function.prototype`
    
4. `Object.prototype` is the root of all **objects**
    
5. Circular-looking behavior is intentional → self-hosting
    

---

If you internalize this, you’ll never confuse:

- `.prototype` vs `__proto__`
    
- `instanceof`
    
- Constructor chains vs instance chains
    
- Why `Function instanceof Function` is true
    
- How built-ins (`String`, `Array`) behave
    

---
