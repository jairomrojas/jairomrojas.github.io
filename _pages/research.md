---
layout: page
title: Research
permalink: /research/
description: Cell mechanics, collective dynamics, and evolving codes.
nav: true
nav_order: 2
---

<section class="research-group" id="mechanics">
  <h2>The physics of living form</h2>
  <div class="research-copy">
    <p>How does an organism build its own body — how do flat sheets of cells fold into organs, tubes, and three-dimensional structures?</p>
    <p>
      The forces come from the cells themselves: a liquid-like interior held by a stiffer cortex.
      I derive that energy from continuum mechanics, so material properties set the geometry of a whole epithelial sheet, rather than parameters chosen by hand.
      The same description accounts for why a cell looks different at its top than at its base.
      A tissue model can then start from that energy, and ask how a sheet folds, heals, or fails.
      The test is to set that prediction beside the measured outline, at the same position from the top of the cell to its base.
    </p>
  </div>
  <figure class="research-lesson">
    <img
      src="{{ '/assets/img/figures/rojas-apical-basal-square.png' | relative_url }}"
      alt="Microscopy images of epithelial cells at apical, medial, and basal planes beside their outlines and a 3D continuum shell model."
      width="1200"
      height="1200"
    >
  </figure>
</section>

<section class="research-group" id="collective">
  <h2>When many become one</h2>
  <div class="research-copy">
    <p>Living cells rarely act alone.
    Communities assemble, search, and persist in ways no one cell can manage by itself.</p>
    <p>
      How do cells <strong>assemble</strong> before they are crowded, and what force draws them in?
      How does a population <strong>search</strong> its surroundings, and what do the spatial patterns reveal about the individual?
      How does a community <strong>persist</strong> when one rare fluctuation in birth, death, or motion can end it?
      Soft-matter theory, kinetic theory, and large-deviation methods connect those interactions to what a group actually shows.
      The aim is to read an individual rule from that pattern, whether it is a cluster, a search path, or a sudden collapse.
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
  <h2>Robustness and the logic of the code</h2>
  <div class="research-copy">
    <p>A cell reads its genome through a translation code, a dictionary from nucleotides to amino acids.
    The code is shared across life, and it stays readable when a step goes wrong.</p>
    <p>
      How does that robustness arise while the code itself can still change?
      I study populations in which sequences and codes evolve together, and selection acts only on what is expressed.
      Error-buffering codes are the ones that remain, with no fitness rule imposed from outside.
      The aim is to see which physical and evolutionary pressures make that processing reliable, and whether the lesson reaches beyond this particular code.
      The comparison is about the population, not the code alone.
    </p>
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
  <h2>Teaching and thinking with AI</h2>
  <div class="research-copy">
    <p>Generative AI changes what it means to learn computational science.
    The question is how to use it so that understanding deepens.</p>
    <p>
      As part of the <a href="https://ae3.grainger.illinois.edu/holding/strategic-instructional-initiatives-program-siip" style="font-weight:bold;text-decoration:none;color:inherit">Strategic Instructional Innovations Program (SIIP)</a> at UIUC, I am a student developer on <em>AI for Creative Computation</em>, in upper-division dynamics and control courses.
      We compare modes of engagement, from no AI to AI as a collaborator, and ask what students actually learn in each.
      A student has to direct the tool, catch an error, and check the result against a physical constraint.
      The point is someone who can send the model back and still explain the solution without it.
      What they keep has to be a result they can defend from the physics, on their own.
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
