#!/usr/bin/env node
/* build-latest.js — regenerates the homepage "Latest" strip from artifacts.json and
   guards against publishing a page without registering it.

   Run locally:  node scripts/build-latest.js
   Runs in CI on every push via .github/workflows/latest.yml.

   What it does:
     1. Reads artifacts.json (newest first).
     2. GUARD: every studies/* and writing/* directory that has an index.html must be
        listed either in artifacts[].url or in drafts[]. Otherwise it exits non-zero so
        CI fails loudly — this is what stops a new artifact from silently missing "Latest".
     3. Rewrites the <a> inside <!-- LATEST:start --> ... <!-- LATEST:end --> in index.html
        from artifacts[0], so the strip can never drift from the manifest.
   No third-party dependencies. */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const fail = (m) => { console.error('✗ ' + m); process.exitCode = 1; };
const ok = (m) => console.log('✓ ' + m);

function readJSON(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function norm(u) { return '/' + String(u).replace(/^\/+|\/+$/g, '') + '/'; }

const manifest = readJSON(path.join(ROOT, 'artifacts.json'));
const artifacts = manifest.artifacts || [];
const drafts = (manifest.drafts || []).map((d) => norm(d));

if (!artifacts.length) { fail('artifacts.json has no artifacts'); process.exit(1); }

/* ---- 1. dangling check: every artifact URL must exist on disk ---- */
for (const a of artifacts) {
  const dir = path.join(ROOT, a.url.replace(/^\/+|\/+$/g, ''));
  if (!fs.existsSync(path.join(dir, 'index.html'))) fail(`artifact "${a.id}" points at ${a.url} but ${a.url}index.html is missing`);
}

/* ---- 2. guard: no unregistered published pages under studies/ or writing/ ---- */
const registered = new Set(artifacts.map((a) => norm(a.url)).concat(drafts));
for (const section of ['studies', 'writing']) {
  const base = path.join(ROOT, section);
  if (!fs.existsSync(base)) continue;
  for (const name of fs.readdirSync(base)) {
    const dir = path.join(base, name);
    if (!fs.statSync(dir).isDirectory()) continue;
    if (!fs.existsSync(path.join(dir, 'index.html'))) continue;
    const url = norm(section + '/' + name);
    if (!registered.has(url)) {
      fail(`unregistered page ${url} — add it to artifacts.json (top = newest) or list "${section}/${name}" under "drafts"`);
    }
  }
}
if (process.exitCode) { console.error('\nGuard failed. Nothing was regenerated.'); process.exit(1); }
ok('guard passed: every published study and article is registered');

/* ---- 3. regenerate the Latest strip in index.html ---- */
const latest = artifacts[0];
const stripHTML =
`<a class="latest rv" href="${latest.url}" data-latest data-latest-id="${latest.id}">
        <div class="latest__l">
          <div class="latest__kicker">
            <span class="latest__lab">Latest</span>
            <span class="latest__new" data-latest-new hidden><span class="latest__dot"></span>New</span>
          </div>
          <div class="latest__txt" data-latest-title>${esc(latest.title)}</div>
          <div class="latest__meta" data-latest-meta>${esc(latest.meta || '')}</div>
        </div>
        <span class="latest__arw"><i></i><span>Read</span></span>
      </a>`;

const idxPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(idxPath, 'utf8');
const START = '<!-- LATEST:start -->';
const END = '<!-- LATEST:end -->';
const re = new RegExp(START + '[\\s\\S]*?' + END);
if (!re.test(html)) { fail('index.html is missing the <!-- LATEST:start/end --> markers'); process.exit(1); }
const next = html.replace(re, START + '\n      ' + stripHTML + '\n      ' + END);
if (next !== html) { fs.writeFileSync(idxPath, next); ok(`regenerated Latest strip -> ${latest.title} (${latest.url})`); }
else { ok('Latest strip already current'); }
