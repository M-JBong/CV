// ── CV template for Min-Jong Bong ──
#import "@preview/use-academicons:0.1.0": *

#let data = yaml("cv.yml")

#let accent = rgb("#1a2744")
#let subtle = rgb("#444444")
#let link-color = rgb("#2e4fa3")

#set document(title: "CV – " + data.name, author: data.name)
#set page(
  paper: "a4",
  margin: (top: 2cm, bottom: 2cm, left: 2cm, right: 2cm),
)
#set text(font: "Linux Libertine", size: 10.5pt, lang: "en")
#set par(justify: true, leading: 0.65em)

// ── helpers ──
#let section(title) = {
  v(0.6em)
  text(size: 9pt, weight: "bold", fill: accent, tracking: 0.08em, upper(title))
  line(length: 100%, stroke: 0.5pt + accent)
  v(0.25em)
}

#let bold-me(str) = {
  let parts = str.split("Min-Jong Bong")
  let result = ()
  for (i, part) in parts.enumerate() {
    result.push(part)
    if i < parts.len() - 1 {
      result.push(strong("Min-Jong Bong"))
    }
  }
  result.join()
}

// ── Header ──
#align(center)[
  #text(size: 22pt, weight: "bold", fill: accent)[#upper(data.name)]
  #v(0.2em)
  #text(size: 10pt, fill: subtle)[
    #data.title · #data.affiliation · Advisor: #data.advisor
  ]
  #v(0.3em)
  #text(size: 9pt, fill: subtle)[
    #link("mailto:" + data.email)[#data.email]
    #h(1em) | #h(1em)
    #link("https://" + data.github)[#data.github]
    #h(1em) | #h(1em)
    ORCID: #link("https://orcid.org/" + data.orcid)[#data.orcid]
  ]
  #v(0.15em)
  #text(size: 8pt, fill: rgb("#aaaaaa"))[Last updated: #data.updated]
]

// ── Research Interest ──
#section("Research Interest")
#text(size: 10pt)[#data.about]
#v(0.2em)
#text(size: 9pt, fill: subtle)[
  *Keywords:* #data.keywords.join(", ")
]

// ── Education ──
#section("Education")
#for e in data.education [
  #grid(
    columns: (1fr, auto),
    gutter: 0.5em,
    [
      #text(weight: "bold")[#e.degree] \
      #text(fill: link-color)[#e.institution#if "dept" in e and e.dept != none and e.dept != "" [ · #e.dept]#if "advisor" in e and e.advisor != none and e.advisor != "" [ · Advisor: #e.advisor]]
    ],
    align(right)[#text(size: 9pt, fill: subtle)[#e.period]]
  )
  #v(0.3em)
]

// ── Publications ──
#section("Publications")
#for (i, pub) in data.publications.enumerate() [
  #grid(
    columns: (auto, 1fr),
    gutter: 0.5em,
    [#text(fill: subtle, size: 9.5pt)[[#(i+1)]]],
    [
      #text(weight: "bold")[#pub.title] \
      #text(size: 9.5pt)[#bold-me(pub.authors)] \
      #text(size: 9.5pt)[
        #text(style: "italic", fill: link-color)[#pub.journal]#if "vol" in pub and pub.vol != none [, #pub.vol] · #pub.year#if "publisher" in pub and pub.publisher != none [ · #text(style: "italic", fill: rgb("#aaaaaa"))[#pub.publisher]]
        #if "doi" in pub and pub.doi != none [ · DOI: #link("https://doi.org/" + str(pub.doi))[#str(pub.doi)]]
        #if "note" in pub and pub.note != none and pub.note != "" [
          #h(0.4em)
          #box(
            fill: rgb("#f0fdf4"),
            stroke: 0.5pt + rgb("#bbf7d0"),
            radius: 3pt,
            inset: (x: 5pt, y: 2pt),
          )[#text(size: 8.5pt, fill: rgb("#15803d"), weight: "bold")[#pub.note]]
        ]
      ]
    ]
  )
  #v(0.35em)
]

// ── Research Projects ──
#section("Research Projects")
#for p in data.projects [
  #grid(
    columns: (1fr, auto),
    gutter: 0.5em,
    [#text(weight: "bold")[#p.title]],
    align(right)[#text(size: 9pt, fill: subtle)[#p.period]]
  )
  #text(size: 9.5pt)[#p.desc] \
  #text(size: 9pt, fill: link-color)[#p.tags.join(" · ")]
  #v(0.35em)
]

// ── Skills & Methods ──
#section("Skills & Methods")
#for (cat, items) in data.skills [
  #grid(
    columns: (90pt, 1fr),
    gutter: 0.4em,
    [#text(weight: "bold", size: 9.5pt)[#cat:]],
    [#text(size: 9.5pt)[#items.join(", ")]]
  )
  #v(0.15em)
]

// ── Teaching & Mentoring ──
#section("Teaching & Mentoring")
#for t in data.teaching [
  #grid(
    columns: (1fr, auto),
    gutter: 0.5em,
    [
      #text(weight: "bold")[#t.activity]
      #h(0.4em)
      #box(
        fill: if t.type == "Lecturer" { rgb("#fff7ed") } else if t.type == "Mentoring" { rgb("#f0fdf4") } else { rgb("#eff6ff") },
        stroke: 0.5pt + if t.type == "Lecturer" { rgb("#fed7aa") } else if t.type == "Mentoring" { rgb("#bbf7d0") } else { rgb("#bfdbfe") },
        radius: 3pt,
        inset: (x: 5pt, y: 2pt),
      )[#text(
        size: 8.5pt,
        weight: "bold",
        fill: if t.type == "Lecturer" { rgb("#c2410c") } else if t.type == "Mentoring" { rgb("#15803d") } else { rgb("#2563eb") }
      )[#t.type]]
      \ #text(size: 9.5pt, fill: subtle)[#t.desc]
    ],
    align(right)[#text(size: 9pt, fill: subtle)[#t.period]]
  )
  #v(0.3em)
]

// ── Honors & Awards ──
#section("Honors & Awards")
#for a in data.awards [
  #grid(
    columns: (1fr, auto),
    gutter: 0.5em,
    [
      #text(weight: "bold")[#a.name] \
      #text(size: 9.5pt, fill: subtle)[#a.institution]
      #if "detail" in a and a.detail != none and a.detail != "" [
        \ #text(size: 9pt, style: "italic", fill: subtle)[#a.detail]
      ]
    ],
    align(right)[
      #box(
        fill: rgb("#fefce8"),
        stroke: 0.5pt + rgb("#fde68a"),
        radius: 3pt,
        inset: (x: 6pt, y: 2pt),
      )[#text(size: 9pt, weight: "bold", fill: rgb("#92400e"))[#a.year]]
    ]
  )
  #v(0.35em)
]
