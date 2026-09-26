---
title: The path a population takes when it disappears
summary: A colony can look stable and still be one rare fluctuation from extinction. The likely path of that fluctuation can be spatial.
date: 2026-06-01
show_date: false
---

A population can sit at a comfortable density and still be one large fluctuation away from zero.
Birth, death, and diffusion all take part.
If the cells also follow a chemical cue, the way out need not be a uniform thinning.
A hole can open in the dense region and then spread.

With Charlie Duclut I compute the most likely of those paths.
The tool is a Martin–Siggia–Rose action, minimized with the geometric minimum action method, so the path is the one that costs the least improbability.
In the calculations so far, clustering raises that cost relative to a well-mixed population.
The fluctuation has to dig a localized nucleus, past an Allee threshold, before diffusion flattens what remains.
A well-mixed escape, which thins the population everywhere at once, is the more expensive route.

Two things are explicitly not done.
There is not yet a direct stochastic simulation to check the prefactor of the mean extinction time, and the same question is open in two and three dimensions, where chemotactic collapse can compete with the escape.
The strong-coupling fate of fluctuating Keller–Segel dynamics is also open.

An earlier chapter of the same curiosity is my master's thesis at IFT-UNESP, with Ricardo Martínez-García: [Aging as a strategy to prevent extinction in microbial ecosystems](/papers/rojas-aging-thesis/).
That model is not this calculation.
It is where the question started for me.
