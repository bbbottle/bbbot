# Issue #5 Analysis: 页面滚动时切换路由导致白屏

## Issue Summary
**Title:** 页面滚动时切换路由导致白屏 (White screen when switching routes during page scroll)

## Problem Analysis

This issue describes a **frontend routing problem** where the page shows a white screen when users switch routes while the page is scrolling. This is a common issue in Single Page Applications (SPAs) built with frameworks like Vue.js or React.

## Repository Mismatch

**Important:** This issue was filed in the **wrong repository**.

- **Current Repository:** `bbbottle/bbbot` - A Telegram bot backend written in TypeScript
- **Correct Repository:** `bbbottle/bottle` - The frontend website (https://bbki.ng)

### Evidence:
1. The `bbbot` repository contains:
   - Telegram bot code using the Telegraf framework
   - No frontend code (no HTML, Vue, React, or routing logic)
   - No web server or page rendering capabilities
   - Backend-only TypeScript code for bot commands and database operations

2. The issue describes:
   - Page scrolling behavior
   - Route switching (frontend navigation)
   - White screen rendering issues
   - All symptoms of a frontend SPA routing problem

## Common Causes and Solutions

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

## Recommendation

**This issue should be:**
1. Closed in the `bbbottle/bbbot` repository
2. Re-opened in the `bbbottle/bottle` repository where the frontend code is located

The fix needs to be implemented in the frontend codebase, not in this Telegram bot backend.

## References
- [Vue Router Scroll Behavior](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html)
- [Vue Router Transitions](https://router.vuejs.org/guide/advanced/transitions.html)
- Frontend route switching best practices for preventing white screens during navigation
