## Introduction

Thank you for your interest in contributing to the Lapis Re:LiGHTs fan guide.

Following these guidelines helps to communicate that you respect the time of the
maintainers and primary contributors and developing this open-source guide. In
return, they should reciprocate that respect in addressing your issue,
addressing chances, and helping you finalize your pull requests.

We love to receive contributions from the community! There are many ways to
contribute, from providing spelling or grammar corrections, clarifying the
existing tutorials, improving the internal code or formatting, or submitting
entirely new sections or translations to be incorporated into the guide.

The issue tracker is not for support or gameplay assistance questions. If you
have a question that can't be answered by the guide as-is, check in with the
#berry-support channel on the [fan Discord] to see if the people there can
assist with your issue.

[fan Discord]: https://discord.gg/MK9RDCG

Currently, we do not accept guide contributions in languages other than English,
as the site does not have the required infrastructure for this, and maintaining
feature parity with the English guide requires dedicated contributors.

## Reporting bugs or issues

When reporting an issue, please make it clear which section of the guide is
being discussed.

If the issue is related to textual content such as wording or English errors,
aim to use only text in the issue report to help with ease of readability. If
the issue is made clearer through images, they may be *included*, not used as a
replacement.

Once again, please DO NOT create issues related to gameplay assistance or
technical support with Lapis Re:LiGHTs. Your issue will be closed and directed
to appropriate channels.

## Making changes

We welcome all changes via Github pull requests.

For all contributions, please respect the following guidelines:

- Each pull request should address ONE issue or new feature. If you want to
  contribute more changes, open a new pull request for each one.
- Do not commit changes to files that are irrelevant to your issue or feature.
- Follow the [style guidelines](#style) where possible.

## Style

We aim to use a consistent formatting of both commit messages and content.

- Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org) format.
  - Include a scope unless the commit addresses the entire guide. The scope
    should be based on the top-level blog folder (e.g., `guide`), and a subscope
    corresponding to the page.
  - Use `feat` types for new guide content, including expansions to existing
    articles.
  - Use `refactor` types for style changes, including external user-facing style
    (e.g., organisation) or internal code style (e.g., table or link
    adjustments).
  - Use `fix` types for grammar, spelling, translation, or content corrections.
  - `docs` types refer to **internal** documentation, not to public content.
  
- Prefer Markdown pages to HTML.
  - If content cannot be formatted in Markdown (e.g., complicated tables),
    prefer creating a separate HTML include file rather than including the HTML
    in the Markdown file.
  - If a page is predominantly HTML content, it may be included as a top-level
    HTML page.

- Keep paragraphs to 80 characters wide.
  - Exceptions are made for Jekyll `include` tags and tables.
    
- Use Jekyll `link` tags instead of relative Markdown links.
  - Jekyll tags help to ensure links remain alive across refactoring.
  - Use out-of-paragraph Markdown links to maintain source readability.
  - Always remember to include the baseurl in the link, as the site is deployed
    on a sub-path.
  
```markdown
Sample paragraph with a [cross-reference] to another part of the guide.

[cross-reference]: {{ site.baseurl }}{% link some/other/page.md %}
```
