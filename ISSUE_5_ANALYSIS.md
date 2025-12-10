# Issue #5 Analysis: 页面滚动时切换路由导致白屏

## Issue Summary
**Title:** 页面滚动时切换路由导致白屏 (White screen when switching routes during page scroll)

## Problem Analysis

This issue describes a **frontend routing problem** where the page shows a white screen when users switch routes while the page is scrolling.

## Root Cause Analysis

While this appears to be a frontend issue, there's a **potential backend contribution** that can be addressed in this repository:

### The Connection:
1. The bbbot performs database operations using Supabase `upsert()` without proper conflict handling
2. Supabase `upsert()` updates timestamps even when data hasn't actually changed (see Issue #6)
3. The frontend PWA detects these database changes and attempts to update
4. When users switch routes during scrolling, the simultaneous PWA update may cause timing conflicts
5. This results in a white screen during the route transition

### Evidence from Related Issues:
- **Issue #6:** "pwa 插件一直提示有更新" (PWA plugin constantly showing update notifications)
- **PR #8:** Addresses the excessive update notifications by fixing upsert operations

## Solution Approach

### Backend Mitigation (This Repository):
While we can't fix the frontend routing logic here, we can **reduce the frequency of the issue** by preventing unnecessary database updates:

1. **Add proper `onConflict` handling to upsert operations**
2. **Use `ignoreDuplicates: true` where appropriate**
3. **Ensure updates only happen when data actually changes**

This won't completely solve the white screen issue, but it will:
- Reduce unnecessary PWA update prompts
- Lower the chance of update-during-route-transition conflicts
- Improve overall system stability

### Frontend Fix Required (bottle repository):
The complete fix requires frontend changes:
1. Add proper scroll behavior management in router configuration
2. Implement loading states during route transitions
3. Handle PWA update events gracefully during navigation
4. Add transition guards to prevent navigation during critical updates
5. Use proper `<Suspense>` or `<transition>` components with fallback states

## Implementation in This Repository

The backend contribution to this issue is being addressed by **PR #8**, which fixes the database operations to prevent unnecessary updates that trigger PWA refresh cycles.

### Changes Being Made in PR #8:
1. Review and fix `upsert()` operations in `DataBase.ts`:
   - `CreatePost()` (line 57): Posts table upsert
   - `UpdateCOCStats()` (line 66): COC stats table upsert  
   - `UpdateMovieList()` (line 75): Movie table upsert
2. Add `onConflict` option with appropriate unique columns for each table
3. Add `ignoreDuplicates: true` where data hasn't changed (prevents timestamp updates)
4. This reduces PWA update prompts and timing conflicts during route transitions

## Common Causes and Solutions (For Frontend)

Based on research, this issue typically occurs due to:

### For Vue.js Applications:
1. **Missing root element in router-view transitions:**
   ```vue
   <!-- Correct approach -->
   <router-view v-slot="{ Component }">
     <transition name="fade" mode="out-in">
       <div :key="$route.fullPath">
         <component :is="Component"/>
       </div>
     </transition>
   </router-view>
   ```

2. **Missing scrollBehavior configuration:**
   ```js
   const router = createRouter({
     routes: [...],
     scrollBehavior(to, from, savedPosition) {
       return { top: 0 };
     }
   });
   ```

3. **Multiple root elements in route components**
   - Each route component must have a single root element when using transitions

### For React Applications:
1. **Missing Suspense fallback for lazy-loaded routes**
2. **Layout components being destroyed on route changes**
3. **Long-running loader functions without loading indicators**

## Potential Connection to Issue #6

There is a **direct connection** with the PWA plugin issue (Issue #6: "pwa 插件一直提示有更新"):

### The Problem Chain:
1. The bot's database operations (via Supabase `upsert()`) trigger unnecessary updates (Issue #6)
2. The PWA frontend detects these changes and attempts to update
3. If a route switch occurs during scrolling while the PWA is updating, it could cause a white screen (Issue #5)

### Solution:
By fixing Issue #6 (preventing unnecessary database updates), we can reduce the frequency of Issue #5.

## Recommendation

### Current Status:
- **PR #8** is already working on fixing the unnecessary database updates (Issue #6)
- Once PR #8 is merged, it will help **mitigate** Issue #5 by reducing PWA update frequency
- However, **Issue #5 also needs a frontend fix** in the `bottle` repository for a complete solution

### Action Items:

**For This Repository (bbbot):**
1. ✅ Issue #6 and the backend contribution to Issue #5 are being addressed by PR #8
2. PR #8 will add proper `onConflict` handling to upsert operations
3. This will prevent unnecessary updates that trigger PWA refreshes

**For Frontend Repository (bottle):**
Issue #5 should also be filed in the `bottle` repository with the following fixes:
1. Add proper scroll behavior management in router configuration
2. Implement loading states during route transitions
3. Handle PWA update events gracefully during navigation
4. Add transition guards to prevent navigation during critical updates
5. Use proper `<Suspense>` or `<transition>` components with fallback states

### Why Both Fixes Are Needed:
- **Backend fix (PR #8):** Reduces the frequency of unnecessary updates → fewer PWA refresh cycles
- **Frontend fix:** Ensures route transitions are resilient even when PWA updates occur

Together, these fixes will:
- Eliminate the root cause of excessive PWA updates (backend)
- Prevent white screens during route transitions (frontend)
- Provide a robust solution to both Issue #5 and Issue #6

## Common Frontend Solutions Reference
- [Vue Router Scroll Behavior](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html)
- [Vue Router Transitions](https://router.vuejs.org/guide/advanced/transitions.html)
- Frontend route switching best practices for preventing white screens during navigation
