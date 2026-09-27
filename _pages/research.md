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
      Epithelial sheets — the thin walls that line organs and embryos — are built from cells packed together like tiles.
      The standard physics model treats each cell as a polygon and assigns an energy penalty based on the length of its outline.
      That penalty works surprisingly well, but it is put in by hand, and it has nothing to say about why cells look different at their top than at their base.
    </p>
    <p>
      My approach is to start one level deeper: to ask what the cell's own mechanical structure — its liquid-like interior and its stiffer outer cortex — implies for the energy of deformation.
      Using continuum mechanics, I derive that energy from first principles rather than assuming it.
      This gives tissue models a firmer physical foundation and, for the first time, a way to predict how cell shape changes along the height of the cell.
    </p>
    <p>
      Our <a href="https://arxiv.org/abs/2501.17810">2025 preprint</a> develops a three-dimensional continuum shell model that captures basal mechanical coupling and matches experimental observations in epithelial cells.
      In a companion manuscript (in preparation), we treat the cell as a bonded disk-ring composite and derive exactly what energy exponent the perimeter term should have — validating the spirit of standard vertex models while providing, for the first time, a rigorous mechanical derivation of the perimeter energy term.
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
    <p>What draws individual cells together into groups, and how does a population search for food — or survive long enough to find it?</p>
    <p>
      These are three separate questions, and I am working on each of them.
    </p>
    <p>
      <strong>Assembly.</strong>
      Some bacteria form tight clusters long before they are densely packed — something that ordinary crowding theories cannot explain.
      Working with collaborators from the Universitat de Barcelona and the Max Planck Institute, I found that the thin film of liquid covering the bacteria creates attractive capillary forces between neighbors.
      Inside a crowd, those forces are not the same as between an isolated pair: the crowd <em>screens</em> the long-range attraction, in a way that is mathematically analogous to how charge screening works in electromagnetism.
      A kinetic theory closure turns this microscopic picture into a continuum hydrodynamic framework, providing a route to predict collective phase boundaries directly from the underlying physics (in preparation).
    </p>
    <p>
      <strong>Foraging.</strong>
      A single bacterium is too noisy to track reliably; measuring many individuals at once is slow.
      But the colony as a whole has already averaged over thousands of individuals.
      In analytical work with Naama Brenner and Ahmed El Hady, I show that the population-level pattern carries two distinct timescales: cells maximize local nutrient intake well before the colony as a whole settles into its global distribution.
      This separation lets us infer individual search strategies from coarser population-level observations (in preparation).
    </p>
    <p>
      <strong>Persistence.</strong>
      A population sitting at a comfortable density can still be wiped out by a single large fluctuation — not by a slow average decline, but by a rare event.
      I apply large-deviation theory to study how spatial structure changes the likelihood and the path of such rare events.
      The simple one-dimensional case is in hand; the same question in higher dimensions remains open.
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
    <p>How can a code become more robust to errors while the code itself is still free to change?</p>
    <p>
      The genetic code is redundant — multiple triplets of nucleotides map to the same amino acid — and that redundancy buffers mistakes during protein synthesis.
      Standard theoretical accounts either hold the code fixed while genes evolve, or they score codes using information-theoretic measures that have no direct connection to whether an organism leaves descendants.
    </p>
    <p>
      I study small models in which the code and the sequences it encodes change together, and selection acts only on what the sequence expresses — nothing more.
      Even so, codes that buffer translation errors turn out to be the ones that survive.
      This is a proof of mechanism, not a finished theory of the biological genetic code;
      it is a check that natural selection alone, without any hand-tuned fitness function, can push a code toward robustness.
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
