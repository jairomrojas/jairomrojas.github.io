---
layout: page
title: Research
permalink: /research/
description: From cell shape and collective motion to biological information and learning.
nav: true
nav_order: 2
---

<section class="research-group" id="mechanics">
  <h2>Mechanics and Morphology of Living Tissues</h2>
  <div class="research-copy">
    <p>How does an organism build its body as it grows?
    How do flat sheets of cells fold into organs, tubes, and other three-dimensional structures?
      These transformations result from forces generated within cells, interactions among neighboring cells, connections to the surrounding substrate, biochemical signaling, and external constraints.
      Working within the framework of continuum mechanics, I use energy-based descriptions to investigate how these factors determine the geometry of epithelial sheets.
    </p>
    <p>
      My research extends current theories of epithelial mechanics by accounting for the material properties and internal composition of individual cells.
      I also study how cells are mechanically coupled to their neighbors and to their substrate, including through fiber bundles that transmit forces across these interfaces.
      From this cell-scale description, I develop tissue-level models to explore how epithelial sheets fold, heal, and fail.
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
  <h2>Active Matter Far from Equilibrium</h2>
  <div class="research-copy">
    <p>Active matter is composed of units that continuously consume energy and convert it into motion or mechanical stress.
    Because energy is injected locally, these systems do not relax toward equilibrium.
    Instead, they can sustain flows, generate forces, and organize themselves into dynamic structures.
    Living systems—from molecular motors to swimming microorganisms—provide some of the clearest examples, making active matter a central topic in modern nonequilibrium physics.</p>
    <p>
      My research uses this framework to understand how interactions at the cellular scale produce organization at much larger scales.
      In some bacterial systems, for example, cells can influence one another before making contact: deformations of the surrounding thin liquid film produce interactions that cannot be explained by crowding alone.
      I use continuum and kinetic theories to connect these microscopic mechanisms to the structures and dynamics observed across the system.
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
  <h2>Collective Behavior: Information, Search, and Survival</h2>
  <div class="research-copy">
    <p>Living cells rarely act alone.
    They form communities that assemble, search, and persist in ways no single cell can achieve.
    At the population level, interactions among cells and with their environment create new ways of gathering information, using resources, and adapting to change.
    I study how evolution shapes these collective strategies through mathematical models based on optimization and information theory.
    Quantitative experiments motivate my hypotheses and provide observations against which I test their predictions.</p>
    <p>
      My research asks what forces bring cells together and whether aggregation can protect a population from extinction caused by fluctuations in birth, death, or movement.
      I also investigate how groups forage in different environments, balancing the use of known nutrient sources with the exploration needed to learn about their surroundings.
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
  <h2>Teaching and Learning with AI</h2>
  <div class="research-copy">
    <p>AI can produce a convincing graph or plausible answer even when the underlying physics is wrong.
    As AI becomes part of coursework, students need practice deciding what to ask, where a result could fail, and how to check it against a physical model.</p>
    <p>
      As a student developer in Illinois's <a href="https://ae3.grainger.illinois.edu/holding/strategic-instructional-initiatives-program-siip" style="font-weight:bold;text-decoration:none;color:inherit">Strategic Instructional Innovations Program (SIIP)</a>, I help develop <em>AI for Creative Computation</em> for upper-division dynamics and control courses.
      We are designing assignments that pair generative AI with simulations and compare approaches from no AI to AI as a collaborator.
      Students stay in charge: they test predictions, catch errors, revise their approach, and explain the physics in their own words.
      The project also develops ways to assess those skills.
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
