---
title: "Sandbox"
date: 2022-07-23T09:01:02-04:00
tags: ['sandbox', 'test']
math: true
---

Here you're gonna find snippets of code that allow me to practice how my markdown is going to be seen by you after being rendered by hugo

**Bold text**

*Italic text*

> Hugo is great

## Some fancy features

Inline code: `$ curl https://gnu.org`

```html
<!DOCTYPE html>
<html lang="{{ .Site.Language }}">
<head>
	<title>{{ if not .IsHome }}{{ .Title | title }} | {{ end }}{{ .Site.Title }}</title>
	<link rel="canonical" href="{{ .Site.BaseURL }}">
	<link rel='alternate' type='application/rss+xml' title="{{ .Site.Title }} RSS" href='/index.xml'>
	<link rel='stylesheet' type='text/css' href='/style.css'>
	{{ with .Site.Params.favicon }}<link rel="icon" href="{{ . }}">
	{{ end -}}
	<meta name="description" content="{{ with .Params.description }}{{ . }}{{ else }}{{ .Summary }}{{ end }}">
	{{ if isset .Params "tags" }}<meta name="keywords" content="{{ with .Params.tags }}{{ delimit . ", " }}{{ end }}">
	{{ end -}}
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="index, follow">
	<meta charset="utf-8">
</head>
<body>
```

a table:

WP1|WP2|WP3|
---|---|---|
test1|test2|test3

an unordered list:

- Black
	- Gray
	- White
- Red
	- Blue
	- Magenta
		- Brown
- Yellow
	- Cyan

An ordered list:

1. Gandalf
2. Aragorn
3. Frodo
	1. Merry
	2. Pippin
	3. Sam
4. Legolas
5. Gimli


### Some fancy equations:

a simple fraction $\frac{a}{b}$ between a text

A formula for quadractic equations:

$$
\begin{align}
	\frac{-b\pm\sqrt{b^2-4ac}}{2a}
\end{align}
$$

#### Obscure elements:

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

Definition list:

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

Task list:
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emojis:

Gone camping! ⛺ Be back soon

That is so funny! 😂