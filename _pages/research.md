---
layout: page
title: Research
permalink: /research/
description: Cell mechanics, collective dynamics, and evolving codes.
nav: true
nav_order: 2
---

<section class="research-group" id="mechanics">
  <h2>Mechanics of form</h2>
  <div class="research-copy">
    <p>How does a cell's internal structure determine the shape of the tissue it belongs to?</p>
    <p>
      Epithelial sheets are built from cells packed like tiles, and the standard model assigns each cell an energy penalty based on its outline length — a term put in by hand with no account of why cells look different at their top than at their base.
      I derive that energy from first principles, treating the cell as a composite of a liquid-like interior and a stiffer cortex, and connect it directly to experimental observations of shape change along the cell's height.
    </p>
    <p>
      Our <a href="https://arxiv.org/abs/2501.17810">2025 preprint</a> develops a 3D continuum shell model that captures this basal coupling.
      A companion manuscript (in preparation) derives the perimeter energy exponent exactly — giving vertex models their first rigorous mechanical foundation.
    </p>
  </div>
  <figure class="research-lesson">
    <img
      src="{{ '/assets/img/figures/mechanics-apical-basal.png' | relative_url }}"
      alt="A three-dimensional shell whose cross-section changes from apical to basal. From the 2025 preprint."
      width="1200"
      height="1200"
    >
  </figure>
</section>

<section class="research-group" id="collective">
  <h2>Collective behavior</h2>
  <div class="research-copy">
    <p>What draws individual cells together, how does a population search for food, and how does it avoid going extinct?</p>
    <p>
      On <strong>assembly</strong>: the thin liquid film covering bacteria creates capillary attractions that a crowd screens into short-range interactions — analogous to charge screening in electromagnetism.
      A kinetic closure turns this into a continuum hydrodynamic theory of active capillary aggregation (in preparation).
    </p>
    <p>
      On <strong>foraging</strong>: a colony has already averaged over thousands of noisy individual tracks.
      I show that population-level spatial patterns carry two distinct timescales, letting us infer individual search strategies from coarser collective observations (in preparation).
    </p>
    <p>
      On <strong>persistence</strong>: a population at comfortable density can still be ended by a single large fluctuation.
      I use large-deviation theory to study how spatial structure shapes the path and likelihood of that rare event.
    </p>
  </div>
  <figure class="research-lesson">
    <img
      src="{{ '/assets/img/figures/collective-clusters.png' | relative_url }}"
      alt="Cells still apart, beside cells gathered into a compact group and a group with an opening."
      width="1200"
      height="1200"
    >
  </figure>
</section>

<section class="research-group" id="information">
  <h2>Information</h2>
  <div class="research-copy">
    <p>How can a code grow more robust to errors while the code itself is still free to change?</p>
    <p>
      Standard accounts either freeze the genetic code and evolve the sequences, or score codes by information-theoretic measures disconnected from reproduction.
      I study small models where code and sequences coevolve and selection acts only on what is expressed — nothing more.
    </p>
    <p>
      Even so, codes that buffer translation errors are the ones that survive.
      This is a proof of mechanism in toy alphabets: natural selection alone, without any hand-tuned fitness function, can drive a code toward robustness.
    </p>
    <p class="research-note">This work uses toy alphabets rather than the full biological genetic code.</p>
  </div>
  <figure class="research-lesson">
    <img
      src="{{ '/assets/img/figures/information-foraging.png' | relative_url }}"
      alt="Jitter and heading responses. The cell searches when food is scarce, exploits when food is rich, and turns toward or away from food."
      width="1200"
      height="1200"
    >
  </figure>
</section>

<section class="research-group" id="education">
  <h2>Learning in the age of AI</h2>
  <div class="research-copy">
    <p>What does it mean to be computationally literate when an AI can write your code for you?</p>
    <p>
      As part of the <a href="https://ae3.grainger.illinois.edu/holding/strategic-instructional-initiatives-program-siip">Strategic Instructional Innovations Program (SIIP)</a> at UIUC, I am a student developer on <em>AI for Creative Computation</em>, a project running in upper-division dynamics and control courses.
      We compare four modes — no AI, unguided AI, curated AI, and AI as a creative collaborator — to understand how each shapes what students actually learn and retain.
    </p>
    <p>
      The goal is genuine skepticism: students who can critique AI output, catch its errors, and use it to explore problems more deeply.
      The diagram shows the iterative loop at the heart of the approach — student, computational tool, and GenAI working together, with every result verified against real physical constraints.
    </p>
  </div>
  <figure class="research-lesson">
    <img
      src="{{ '/assets/img/figures/education-ai-collaboration-loop.jpg' | relative_url }}"
      alt="Iterative loop diagram: an initial problem feeds into a student team working with a computational tool and GenAI; the output is a new solution verified against physical constraints, with the student assessing and redirecting at each iteration."
      width="1200"
      height="800"
    >
  </figure>
</section>
