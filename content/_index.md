---
title: ''
date: 2026-09-26
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: About me
      username: admin

  - block: portfolio
    id: projects
    content:
      title: Research
      subtitle: Five questions, each with a page that says what is written down and what is still open.
      count: 0
      filters:
        folders:
          - projects
      sort_by: Date
      sort_ascending: false
    design:
      columns: '1'
      view: compact
      flip_alt_rows: false

  - block: collection
    id: publications
    content:
      title: Publications
      subtitle: Journal articles, a preprint, a conference paper, theses, and manuscripts still in preparation.
      count: 0
      filters:
        folders:
          - papers
      sort_by: Date
      sort_ascending: false
    design:
      columns: '1'
      view: compact

  - block: collection
    id: talks
    content:
      title: Talks
      subtitle: A selection. Posters are labeled as posters.
      count: 0
      filters:
        folders:
          - talks
      sort_by: Date
      sort_ascending: false
    design:
      columns: '1'
      view: compact

  - block: markdown
    id: teaching
    content:
      title: Teaching
      subtitle: ''
      text: |-
        I teach the same ideas I use in research, to people who have not spent a year on the paper.

        At Illinois I have been a teaching assistant for introductory mechanics, electricity and magnetism, thermal physics, quantum physics, classical mechanics, fluid dynamics, and solid mechanics, and for a graduate methods course.
        With the Strategic Instructional Innovations Program I helped write Python notebooks for undergraduate dynamics and control, so that students meet a differential equation as something they can integrate, not only as something they can classify.
        In summer 2026 I was an invited tutor at the Konstanz School of Collective Behaviour, on modeling active matter.

        The [CV](/uploads/resume.pdf) has the course-by-course list, the mentoring, and the education paper.
    design:
      columns: '1'

  - block: collection
    id: seminars
    content:
      title: Seminar series
      subtitle: Living-matter series worth knowing. These are not my talks. Those are above.
      count: 0
      filters:
        folders:
          - seminars
      sort_by: Title
      sort_ascending: true
    design:
      columns: '2'
      view: compact

  - block: contact
    id: contact
    content:
      title: Contact
      email: jairomr2@illinois.edu
      autolink: true
      contact_links:
        - icon: orcid
          icon_pack: ai
          name: ORCID
          link: https://orcid.org/0000-0001-5017-9983
        - icon: google-scholar
          icon_pack: ai
          name: Google Scholar
          link: https://scholar.google.com/citations?user=23XeNtkAAAAJ
        - icon: github
          icon_pack: fab
          name: GitHub
          link: https://github.com/jairomrojas
        - icon: x-twitter
          icon_pack: fab
          name: X
          link: https://twitter.com/jairomrojash
    design:
      columns: '2'
---
