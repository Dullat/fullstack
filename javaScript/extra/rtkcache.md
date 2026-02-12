
Hey 🙂 yep—RTK Query **does keep data in cache**, and that behavior is controlled by a few specific options.

Here’s the short version first:

**RTK Query caches query results by default**, and it keeps them around *even after components unmount* for a while.

---

## The key setting you’re thinking of

### `keepUnusedDataFor`

This is almost certainly the thing you mean.

```ts
keepUnusedDataFor: 60 // seconds
```

* Default: **60 seconds**
* Meaning:
  After the **last component unsubscribes** from a query, RTK Query keeps the data in cache for this long.
* If another component uses the same query within that time → **no refetch**, data is reused.

### Example

```ts
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users',
      keepUnusedDataFor: 300, // keep for 5 minutes
    }),
  }),
})
```

---

## Related cache behaviors (important 👀)

### 1. Cache key = endpoint + args

RTK Query caches **per unique argument set**:

```ts
useGetUserQuery(1) // cached separately from
useGetUserQuery(2)
```

---

### 2. `refetchOnMountOrArgChange`

Controls whether cached data should refetch when a component mounts.

```ts
useGetUsersQuery(undefined, {
  refetchOnMountOrArgChange: true,
})
```

Options:

* `false` (default) → use cache if available
* `true` → always refetch on mount
* `number` → refetch if data is older than X seconds

---

### 3. Mutations can invalidate cache

Using **tags**:

```ts
providesTags: ['Users']
invalidatesTags: ['Users']
```

When a mutation runs, RTK Query knows which cached queries to refetch.

---

### 4. Manual cache removal

You *can* wipe cache manually:

```ts
dispatch(api.util.resetApiState())
```

Or invalidate specific tags.

---

## TL;DR

* ✅ RTK Query **keeps data in cache**
* ⏱ Controlled mainly by `keepUnusedDataFor`
* 🧠 Cache survives unmounts
* 🔁 Refetching is opt-in or rule-based

If you want, tell me:

* **Redux Toolkit version**
* **Query vs mutation**
* Or *what problem you’re seeing* (stale data? not refetching? too much memory?)

I’ll zero in on it fast 🚀
