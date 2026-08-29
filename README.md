# Uncle Robert's — Kalapana, Hawaiʻi

A standalone digital home for Uncle Robert's Awa Bar & Farmers Market's
Wednesday Night Market community, built as its own site (not nested in
another app) so the family can eventually own and run it directly.

This is a **v1 scaffold**, not a finished, family-approved site. It builds
and deploys cleanly, and every section is real UI — but a lot of the copy
is intentionally placeholder, clearly marked, until the family provides
real material.

**Status: proposal, awaiting family review and approval.** The live site
itself carries a banner saying so (`src/components/DraftBanner.tsx`) —
remove that banner only once the family has actually reviewed and signed
off on the content, especially the Legacy of Uncle Robert timeline.

## What's real vs. placeholder

**Verified** (from public listings, photos of the actual market, and
independent historical sources — see `SOURCES` in `src/content.ts`):
- Address: 12-5038 Kalapana-Kapoho Beach Rd, Pāhoa, HI 96778
- Facebook page link
- Wednesday is the big night; live music runs roughly 6–9pm
- The awa bar's "Uncle's Awa Club" sign and Kingdom of Hawaiʻi seal
- General multicultural food lineup (Hawaiian, Filipino, Japanese, Korean,
  Chinese, Thai, Mexican) and the Kalapana Poke Plate
- **The Legacy of Uncle Robert timeline** (`STORY_TIMELINE` in
  `src/content.ts`) — Robert Poʻokapu Keliʻihoʻomalu Sr.'s dates, Army
  service, the 1990 lava flow sparing the family home, founding the awa
  bar, the 2006 founding of Kalapana Cultural Tours by his grandsons, and
  his passing on February 15, 2015 are all cross-checked against
  independent sources (obituaries, Big Island Video News, Keola Magazine,
  SFGate, the Washington Post, WikiTree). Each node is tagged **Documented
  History**, **Family Oral History**, or **Later Development** per the
  family's own framing. One node (the market/pavilion's early-2010s
  buildout) is flagged `needsFamilyInput: true` — specifics there weren't
  independently confirmed.

**Still placeholder — needs the family or market staff to provide/confirm**:
- "This Week" cover charge and exact hours (`src/content.ts` → `THIS_WEEK`)
- Family photos, oral history, or video interviews to accompany the
  Legacy timeline
- The cinematic hero video (needs real footage of a market night)
- Real vendor profiles (`VENDOR_EXAMPLES` in `src/content.ts` are
  placeholder cards, not actual vendors)
- The interactive "Explore Kalapana" map
- Live music archive
- "Life at Uncle's" photo/video gallery

**Before this goes live**: the Legacy timeline should be reviewed by the
family — I sourced and cross-checked it independently, but I'm not the
family, and even well-sourced public history can miss nuance or get a
detail wrong. Treat it as a strong first draft they correct, not a
finished page.

## Not built yet (bigger follow-up work)

These need real infrastructure decisions, not just content, so they're
deliberately out of this v1:
- **Vendor portal + admin dashboard** — needs an auth model, an approval
  workflow, and a decision on who has owner access. Natural next step once
  there's a Supabase project wired up (this scaffold is set up so
  `content.ts` can be swapped for Supabase-backed data later without
  restructuring the components).
- **PWA push notifications** ("Uncle's is getting ready for Wednesday
  night") — the manifest here makes the site installable, but push needs a
  notification service and someone to trigger sends.
- **Music archive with social feeds** — needs a decision on where
  performance clips actually get hosted/embedded from.
- **Online store** — deliberately last; the brief was clear community comes
  before commerce.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # tsc + vite build → dist/
npm run preview  # preview the production build
```

## Deploy

`.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages
on every push to `main`. `public/CNAME` is set to `uncleroberts.website` —
**that file alone doesn't move the live domain**; someone with control of
the domain's DNS still needs to point it at GitHub Pages (an A/AAAA record
to GitHub's IPs, or a CNAME to `<owner>.github.io`) and add the custom
domain in the repo's Pages settings. That's a real, hard-to-reverse change
to a live business's domain — don't do it without the person who actually
owns/runs the market signing off.

## Editing content

Everything editable lives in `src/content.ts` — one file, no CMS yet. Edit
it, commit, push to `main`, and GitHub Actions rebuilds and redeploys
automatically.
