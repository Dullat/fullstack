

---

## The Big Picture (before touching code)

Node.js is **NOT**:

- a language
    
- a framework
    

Node.js **IS**:

- **V8 (JavaScript engine written in C++)**
    
- **libuv (event loop + async I/O, written in C)**
    
- **C++ bindings** that glue JS to the OS
    

JS → V8 → Node C++ → libuv → OS (kernel)

---

## Phase 0 – Prerequisites (don’t skip these)

You _can_ start without mastery, but you need basic intuition.

### 1️⃣ How computers actually run programs

Learn:

- Process vs Thread
    
- Memory (heap vs stack)
    
- Syscalls
    
- Blocking vs non-blocking I/O
    

If you want a **single sentence mental model**:

> Node is one OS process, mostly one JS thread, outsourcing slow stuff to the OS via libuv.

---

### 2️⃣ JavaScript (but the _real_ JS)

Not React, not Express.

You need:

- Call stack
    
- Heap
    
- Closures
    
- `this`
    
- Prototypes
    
- Promises
    
- Microtasks vs Macrotasks
    

Example to _feel_ JS:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

If you don’t instantly know **why the output is `A D C B`**, pause here.

---

## Phase 1 – V8: How JavaScript Runs

This is where most devs never go.

### What V8 actually does

- Parses JS → **AST**
    
- Interprets → **Ignition**
    
- Optimizes hot code → **TurboFan JIT**
    
- Manages memory → **Garbage Collector**
    

### Concepts to understand deeply

- Hidden classes
    
- Inline caching
    
- Why object shapes matter
    
- Why `delete obj.x` is slow
    
- Why arrays with mixed types suck
    

Example:

```js
function add(a, b) {
  return a + b;
}
```

After many runs:

- V8 compiles this to **machine code**
    
- If you suddenly pass a string → **de-optimization**
    

💥 Performance cliff.

---

## Phase 2 – Node Core Architecture

Now Node enters the chat.

### Node is basically:

```text
JavaScript (your code)
↓
Node C++ bindings
↓
libuv
↓
OS (epoll, kqueue, IOCP)
```

### Key internals:

- `node.cc` → program entry point
    
- `Environment` object
    
- `HandleScope`
    
- Native modules (`fs`, `net`, `http`)
    

---

## Phase 3 – libuv & Event Loop (the juicy stuff)

This is the soul of Node.

### Event Loop phases (memorize this)

1. **Timers** (`setTimeout`)
    
2. **I/O callbacks**
    
3. **Idle, prepare**
    
4. **Poll** ← most magic happens here
    
5. **Check** (`setImmediate`)
    
6. **Close callbacks**
    

Microtasks run **between phases**:

- `process.nextTick`
    
- Promises
    

### Thread pool (important misconception)

Node **IS NOT single-threaded**.

libuv has:

- Thread pool (default 4 threads)
    
- Used for:
    
    - `fs`
        
    - `crypto`
        
    - `dns`
        
    - compression
        

JS thread delegates → waits → callback queued.

---

## Phase 4 – OS Level (why Node is fast)

Node uses:

- **epoll** (Linux)
    
- **kqueue** (macOS)
    
- **IOCP** (Windows)
    

Meaning:

- One thread can watch **100k sockets**
    
- No thread per connection
    
- No blocking syscalls
    

This is why Node scales.

---

## Phase 5 – Memory & GC (where prod bugs live)

Understand:

- Young vs Old generation
    
- Stop-the-world GC
    
- Memory leaks via closures
    
- Event listeners leaks
    

Classic Node memory leak:

```js
const cache = {};

function handler(req, res) {
  cache[req.url] = res; // 💀
}
```

---

## Phase 6 – Native Addons (god mode)

If you reach here, you’re elite.

Learn:

- N-API
    
- C++ addons
    
- How JS calls native code
    
- When Node beats Go / Java
    

---

## How I’d Learn

We can do this **properly**, step by step:

1. JS engine internals
    
2. Event loop experiments
    
3. Write a tiny Node clone
    
4. Read Node source together
    
5. Build a native addon
    
6. Debug GC pauses
