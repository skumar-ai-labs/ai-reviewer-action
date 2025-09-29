# AI Reviewer Action

![Build](https://github.com/skumar-ai-labs/ai-reviewer-action/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/github/license/skumar-ai-labs/ai-reviewer-action)

A GitHub Action that performs **LLM-assisted code reviews** and can **generate unit test skeletons**.
It combines static analysis (Semgrep/Tree-sitter) with LLM suggestions, then posts review comments on PRs.

## ✨ Features
- Inline PR comments with specific suggestions (readability, tests, API contract, basic security)
- `/gen-tests` slash command to open a PR with test stubs
- Pluggable LLM providers (OpenAI, Anthropic, local via Ollama)
- Configurable rules & severity

## 📂 Repository Layout
```
/src
  reviewers/     → rule implementations
  generators/    → test stub generators
  llm/           → provider adapters
  utils/         → helpers (diff parsing, file IO)
/docs            → architecture & roadmap
/examples        → sample repos & PRs
/.github         → CI & templates
/tests           → unit tests
```

## 🛠️ Quick Start
```bash
# install
npm install
# build
npm run build
# run tests
npm test
```

## 🔧 Usage as a GitHub Action
In your target repo:
```yaml
# .github/workflows/ai-reviewer.yml
name: AI Reviewer
on:
  pull_request:
    types: [opened, synchronize, reopened]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run AI Reviewer
        uses: skumar-ai-labs/ai-reviewer-action@v0.1.0
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
```

## 🔐 Secrets
- `OPENAI_API_KEY` (or provider-specific keys)

## 🤝 Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md).

## 📜 License
Apache-2.0. See [LICENSE](LICENSE).
