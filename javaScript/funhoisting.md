Yesss — this is the *right* “wait wait” moment.
Let’s go **engine-level, spec-accurate, no hand-waving**. I’ll be precise and also correct a very common half-truth.

---

## The core question you’re really asking

> **Is a function declaration stored in a `var` behind the scenes?**

### **Exact answer**

❌ **No.**
A function declaration is **NOT stored in a `var`** internally.

It creates a **function binding**, not a variable binding.

That difference is subtle, but it explains *everything* you’ve been asking.

---

## The engine view (real mechanics)

When JS runs a file, it does **two distinct phases** per execution context:

1. **Creation (Environment Setup)**
2. **Execution**

Let’s focus on **Creation Phase**.

---

## Two different internal “stores” (this is key)

JS engines maintain **Environment Records**, not a single bucket.

### There are **different kinds of bindings**:

| Binding type          | Created by              |
| --------------------- | ----------------------- |
| **Function bindings** | `function foo(){}`      |
| **Variable bindings** | `var foo`               |
| **Lexical bindings**  | `let`, `const`, `class` |

They are **not interchangeable**.

---

## Case 1: Function Declaration (important)

```js
function logger() {
    console.log("hi");
}
```

### During Creation Phase

The engine does (conceptually):

```text
CreateFunctionBinding(
  name: "logger",
  value: <FunctionObject>,
  mutable: true,
  initialized: true
)
```

⚠️ Notice:

* The **function object is created immediately**
* The binding is **initialized immediately**
* No “undefined” stage
* No assignment step

This is why:

```js
logger(); // works
```

before the line exists.

---

## Case 2: `var` Variable

```js
var x = 10;
```

### Creation Phase

```text
CreateVarBinding(
  name: "x",
  value: undefined,
  initialized: true
)
```

### Execution Phase

```text
SetBinding("x", 10)
```

Two steps. Value comes later.

---

## Case 3: Function Expression stored in `var`

```js
var fn = function () {};
```

### Creation Phase

```text
CreateVarBinding(
  name: "fn",
  value: undefined
)
```

### Execution Phase

```text
CreateFunctionObject()
SetBinding("fn", <FunctionObject>)
```

👉 The function **does not exist** until execution hits that line.

---

## This is the *critical difference*

### Function declaration:

* Binding + function object created **together**
* Happens **before execution**

### `var` + function expression:

* Binding created early
* Function object created **later**

---

## Proof that function declarations are NOT `var`

If they were, this would behave the same:

```js
var foo;
var foo;
```

But with functions:

```js
function foo() {}
function foo() {}
```

Result:

* The **second function overwrites the first**
* Not `undefined`, not a redeclaration error

Because:

> Function declarations are processed **before** `var`
> and have **higher priority in the environment record**

---

## Even deeper: ordering rules (engine spec behavior)

Creation phase order (simplified):

1. **Function declarations**
2. **`var` declarations**
3. (later) `let / const` bindings (uninitialized)

This means:

```js
var a = 1;
function a() {}
console.log(a);
```

Output:

```txt
1
```

Why?

* Function `a` created first
* Then `var a` is ignored (binding already exists)
* Assignment `a = 1` runs later

If function declarations were just `var`, this wouldn’t work.

---

## Named Function Expression (your earlier question)

```js
var x = function namedInside() {};
```

Internally:

* `x` → **var binding**
* `namedInside` → **private function binding**

  * Exists only inside function body
  * Immutable
  * Not hoisted

That name is **not a variable**, it’s a **function-local binding**.

---

## Mental model that is actually correct

❌ “Functions are hoisted as `var`”
✅ **“Function declarations create initialized function bindings during environment creation.”**

That sentence is spec-accurate.

---

## Ultra-compressed truth table

| Syntax                 | Binding type          | Created when         | Initialized when       |
| ---------------------- | --------------------- | -------------------- | ---------------------- |
| `function f(){}`       | Function binding      | Creation             | Creation               |
| `var f`                | Var binding           | Creation             | Creation (`undefined`) |
| `var f = function(){}` | Var + function object | Creation + Execution | Execution              |
| `let / const`          | Lexical binding       | Creation             | Execution              |

---

## Final “engine-level” takeaway

> **Hoisting is not magic movement of code.**
> It is **pre-creation of bindings** in different environment records, with different initialization rules.

And **function declarations are first-class citizens**, not sugar over `var`.

If you want, next we can:

* Draw the **actual Environment Record structure**
* Walk through **V8 bytecode**
* Or break your brain with block-scoped functions + strict mode

You’re officially past “JS trivia” and into **language runtime understanding** territory now 🔥
