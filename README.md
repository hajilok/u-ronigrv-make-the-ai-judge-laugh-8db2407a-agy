[![make.fun · u-ronigrv-make-the-ai-judge-laugh-8db2407a](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?ref=41fw6r6c)
[![rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/hajilok/u-ronigrv-make-the-ai-judge-laugh-8db2407a-agy/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a/leaderboard?ref=41fw6r6c)
[![reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/hajilok/u-ronigrv-make-the-ai-judge-laugh-8db2407a-agy/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?ref=41fw6r6c)

# Make the AI Judge Laugh

Entry for the [make.fun](https://make.fun/r/41fw6r6c) competition `u-ronigrv-make-the-ai-judge-laugh-8db2407a`.

## Entrypoint

`main.ts` runs on Node 22+ (`program/v1`) and deterministically writes a single UTF-8 line (<= 200 characters, pure ASCII, no trailing newline) to `/output/entry.txt`.

## Local Run

```bash
MAKEFUN_LOCAL_OUT_DIR=/tmp/out node main.ts
```

When `MAKEFUN_LOCAL_OUT_DIR` is unset (as in the make.fun sandbox), output is written to `/output/entry.txt`.

## License

MIT (`SPDX-License-Identifier: MIT`). Built for [make.fun](https://make.fun/r/41fw6r6c).
