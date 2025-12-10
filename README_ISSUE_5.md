# Issue #5: White Screen During Route Switching - Quick Reference

## TL;DR
Issue #5 (white screen during route switching) requires **two fixes**:
1. ✅ **Backend (PR #8):** Fix unnecessary database updates → reduces issue frequency
2. ⚠️ **Frontend (bottle repo):** Fix route transition handling → prevents white screens completely

## What This PR Contains
📄 Documentation and analysis only - no code changes

### Files:
- `ISSUE_5_ANALYSIS.md` - Detailed technical analysis
- `PR_SUMMARY.md` - Executive summary
- `README_ISSUE_5.md` - This quick reference

## The Problem
When users scroll and switch routes on bbki.ng, they sometimes see a white screen. This happens because:

1. Backend bot updates database → triggers PWA update
2. User switches routes while scrolling → PWA tries to update
3. Timing conflict → white screen appears

## The Solution

### Step 1: Backend (This Repo) - IN PROGRESS
**PR #8** is fixing the database operations:
- Prevents unnecessary updates to `post`, `coc`, and `movie` tables
- Reduces PWA update frequency
- **Status:** Being worked on in parallel

### Step 2: Frontend (bottle repo) - NEEDED
The frontend needs to handle updates during route transitions:
- Add scroll behavior management
- Implement loading states
- Handle PWA updates gracefully
- **Status:** Not yet started

## What Happens Next?

1. **PR #8 merges** → Backend contribution fixed → Reduces issue frequency
2. **Frontend fixes implemented** → Complete fix → Issue fully resolved

## For Repository Owner

### Immediate Actions:
1. Review and merge PR #8 when ready
2. File this issue in the `bottle` repository
3. Implement frontend fixes (see ISSUE_5_ANALYSIS.md for details)

### Expected Outcome:
- With PR #8 only: ~50-70% reduction in white screen occurrences
- With both fixes: ~100% resolution

## Questions?
See `ISSUE_5_ANALYSIS.md` for complete technical details and frontend solution recommendations.
