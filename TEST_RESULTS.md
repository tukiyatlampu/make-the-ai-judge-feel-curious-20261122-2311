# TEST_RESULTS — make-the-ai-judge-feel-curious-20261122-2311

Entry title: **The Swift That Never Lands (v3)**
Final text (175 characters, 37 words, ASCII-only):

> While you read this, a swift above you has not landed in ten months. It eats and drinks on the wing, and no one knows how it sleeps. What would you ask it, if it could answer?

## Gate check (bounty rules)

- `/output/entry.txt`: UTF-8, 175 Unicode code points, within 1–280. Not only white space. PASS.
- Program: `main.ts`, Node 22, standard library only, no network. PASS.
- Repo requirements: public repo, OSI licence (MIT), `.makefun/owner.json` exact 58 bytes (verified with `od -c` + `wc -c`). PASS.

## Determinism (run 2026-11-23 ~07:02 WIB, Node v24.22.1 locally; harness uses Node 22)

```
$ node main.ts /tmp/curious-run1.txt
wrote /tmp/curious-run1.txt (175 characters)
$ node main.ts /tmp/curious-run2.txt
wrote /tmp/curious-run2.txt (175 characters)
$ sha256sum /tmp/curious-run1.txt /tmp/curious-run2.txt
63faabc51f4918e5491b18c4ad5b24bc87e541e9839699514ebbd9177f3cc86c  /tmp/curious-run1.txt
63faabc51f4918e5491b18c4ad5b24bc87e541e9839699514ebbd9177f3cc86c  /tmp/curious-run2.txt
```

Two runs byte-identical (same sha256). Default path also verified: `node main.ts` wrote `/output/entry.txt` (175 bytes), content identical. PASS.

## Fact verification (the one true fact the text rests on)

- Common swifts stay airborne for ten months without landing: Hedenström et al., "Annual 10-Month Aerial Life Phase in the Common Swift Apus apus", Current Biology, 27 Oct 2016 (Lund University). Data loggers on 19 swifts; some individuals never landed in ten months; >99% of the non-breeding period airborne.
- "No one knows how it sleeps": the same paper's authors state they do not yet know whether or how swifts sleep on the wing — sleep in flight is inferred, never directly observed; no roost sites have ever been found in sub-Saharan Africa. The text asserts only the proven part (ten months airborne; eats and drinks on the wing) and frames sleep as the open unknown. Nothing invented.
- Sources checked 2026-11-23 via web search: phys.org / Lund University release, New Scientist, Cell (Current Biology) abstract.

## Version history + self-critique (SolAPI judge unavailable — see below)

SolAPI `POST /v1/responses` returned HTTP 503 on two attempts (2026-11-23 ~06:58 WIB; helper retried internally each time). It has been 503 all day 2026-11-22. No 2-pass SolAPI judge score is claimed. Ranking below is a structured self-critique against the judge's published brief, criteria in order (1 intrigue, 2 calm shown not told, 3 craft, 4 lingers, 5 freshness).

- v1 (214 chars): "You are reading this while a swift above you has not touched the ground in ten months. It eats and drinks on the wing, and no one has ever found where it sleeps. Where do you think it goes, when it closes its eyes?" — Strong mystery, but the closing question is muddled (the bird goes nowhere; it sleeps in the air). Rank 2.
- v2 (216 chars): "Somewhere above you right now, a swift is flying through its tenth month without landing. It has eaten, drunk, and slept on the wing the whole time. No one has ever seen it sleep. What do you suppose it dreams about?" — Asserts sleep on the wing as settled fact (it is only inferred); "what does it dream about" is a stock question. Rank 4.
- v3 (175 chars, WINNER): "While you read this, a swift above you has not landed in ten months. It eats and drinks on the wing, and no one knows how it sleeps. What would you ask it, if it could answer?" — Wins on criterion 1: it states a true unknown science has not solved ("no one knows how it sleeps") and then hands the judge its own question to form, turning the judge from reader into questioner. Tightest craft (nothing to cut), calm from the scene itself, and the judge leaves carrying an unanswered question. Rank 1.
- v4 (203 chars): "A swift is flying above you, ten months into a flight that never touches the ground. It sleeps somewhere in the dark, and no one on earth knows where. You are the one still awake. What is it dreaming of?" — Good turn ("You are the one still awake") but the dream question is stock and "sleeps somewhere in the dark" is the weakest factual phrasing. Rank 3.
- v5 (210 chars, sea otter): "You are reading this while a sea otter sleeps on its back in the kelp, holding its pup's paw so neither drifts away. It does this every night. Have you ever held on to anything that tightly, just to stay close?" — Freshest animal, true fact, but weakest on criterion 1: it invites a feeling, not a question; no mystery survives the last line. Rank 5.

## Zero-fail QA (clean room)

- Fresh directory `/tmp/curious-clean/` with only the package files; `node main.ts` there exits 0 and writes output byte-identical to the build-machine run (sha256 63faabc5…). PASS.
- No hardcoded absolute paths, home paths, or machine/user names in the shipped files (only the documented default `/output/entry.txt`). PASS.
- No secrets, API keys, tokens, or credential files in the package. PASS.
- `LICENSE` is MIT (OSI-approved) with SPDX identifier line. `.makefun/owner.json` is byte-identical to the required claim file (58 bytes).

## Kit check

Not run: no kit download path is available in this session (get_kit lists files but no download URL; no kit CLI unpacked for this bounty). The gate was verified locally instead (length, UTF-8, determinism, Node run). Parent to run the kit check after push if the kit becomes available.

## Submit readiness

Package complete and verified locally. NOT pushed, NOT submitted — parent decides push (web UI) + submit (kit bundle; transcripts required, bundle required: true).
