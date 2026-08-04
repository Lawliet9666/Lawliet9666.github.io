---
layout: sidebar_page
title: Projects
permalink: /projects/
home_sidebar: true
nav: false
nav_order: 3
sidebar_active: projects
---

{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="projects projects-grid">
  <div class="row row-cols-1 row-cols-xl-2">
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
  </div>
</div>
