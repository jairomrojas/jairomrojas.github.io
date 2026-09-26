---
layout: page
title: Research interests
permalink: /research/
description: Three lines of work, kept separate.
nav: true
nav_order: 3
---

<section class="research-group">
  <h2>Mechanics of form</h2>
  <p class="group-note">How structure sets the energy of a tissue.</p>
  <div class="projects">
    <div class="row row-cols-1">
      {% assign items = site.projects | where: "category", "mechanics" | sort: "importance" %}
      {% for project in items %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="research-group">
  <h2>Collective behavior</h2>
  <p class="group-note">Three different questions: how a group assembles, what the group reveals, and how it can be lost.</p>
  <div class="projects">
    <div class="row row-cols-1">
      {% assign items = site.projects | where: "category", "collective" | sort: "importance" %}
      {% for project in items %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="research-group">
  <h2>Information</h2>
  <p class="group-note">How a code and the sequences that use it change together.</p>
  <div class="projects">
    <div class="row row-cols-1">
      {% assign items = site.projects | where: "category", "information" | sort: "importance" %}
      {% for project in items %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
</section>
