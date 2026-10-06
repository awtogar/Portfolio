## Flow TESTING yang kita targetkan:
### Local environtment
```
localhost:3001/guest-book
        ↓
Sign in with GitHub
        ↓
GitHub
        ↓
Supabase
        ↓
Supabase /auth/v1/callback
        ↓
Next.js /auth/callback
        ↓
localhost:3001/guest-book
```


### Production Environtment
```
awtogar.com/guest-book
        ↓
GitHub
        ↓
Supabase
        ↓
awtogar.com/auth/callback
        ↓
awtogar.com/guest-book
```
