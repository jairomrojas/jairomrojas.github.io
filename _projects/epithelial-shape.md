---
layout: page
title: How an epithelial cell stores its shape
description: A cell is not a polygon. It is a soft interior bonded to a thin, stiff cortex, and that structure decides the energy.
importance: 1
category: research
---

Epithelial sheets are the thin living walls of organs.
A standard model draws each cell as a polygon and charges a quadratic penalty for the length of its outline.
That picture is useful, and it is incomplete.
A cell has a soft, nearly incompressible interior and a thin, stiffer cortex, and the two are stuck together.
With Mayisha Nakib and Sascha Hilgenfeldt I have been asking what energy that structure actually stores.

Two pieces are far enough along to describe.

The first is public.
MDCK cells change their outline from the apical face to the basal face, and a flat vertex model has no place to put that change.
Actin bundles anchored in the substrate pull on the basal side.
A three-dimensional shell model that includes this pull matches the measured change in outline along the height of the cell, and it produces an energy term a later vertex model can use directly.
The preprint is on arXiv: [2501.17810](https://arxiv.org/abs/2501.17810).

The second is a manuscript in preparation.
We treat the cell as a disk bonded to a ring and solve the linear elasticity problem mode by mode.
Most of the stored work sits in the cortex, so a perimeter remains a sensible proxy for the energy.
The exponent on that perimeter is not fixed at two.
It falls between one and two, depending on how stiff the cortex is relative to the interior.
A single perimeter also misses a real distinction: a cortex of finite thickness filters short bends differently from long ones.

What this does not yet do is follow a whole tissue as it grows, divides, and exchanges neighbors in three dimensions.
The shell and the disk–ring solution are the mechanical pieces for that step.
