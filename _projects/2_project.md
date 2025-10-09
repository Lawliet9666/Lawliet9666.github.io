---
layout: page
title: Sensor-Based Multi-Robot Coverage with Spatial Separation
description: Cooperative exploration policy that keeps heterogeneous robots coordinated and collision-free.
img: assets/img/publication_preview/wang2024coverage.gif
importance: 2
category: Multi-agent
related_publications: true
---

## Mission

We study how to allocate sensing tasks across aerial and ground robots operating in cluttered, unknown environments without human supervision {% cite wang2024coverage %}. The goal is to maintain persistent coverage while guaranteeing that teammates do not violate separation constraints that protect onboard sensors and delicate payloads.

## What’s New

- **Sensor-aware decomposition:** Partition the environment using real-time signed distance fields so each robot receives regions matching its sensing footprint.
- **Spatial separation controller:** Layer control barrier functions on top of nominal coverage controllers to ensure agents never approach closer than a configurable safety margin.
- **Adaptive workload balancing:** Adjust task assignments online based on local observability and remaining frontiers, which keeps coverage uniform even as robots fail or environments change.

## Field Pipeline

{% include figure.liquid loading="lazy" path="assets/img/publication_preview/wang2024icrav2.gif" title="Adaptive coverage pipeline" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Perception-to-control loop deployed on aerial and ground platforms. Spatial separation constraints activate automatically when robots converge on the same frontier.
</div>

{% include figure.liquid loading="lazy" path="assets/img/publication_preview/wang2024icrav3.gif" title="Hardware-in-the-loop trial" class="img-fluid rounded z-depth-1 mt-3" %}
<div class="caption">
Hardware-in-the-loop experiments in an unstructured forest track improved coverage efficiency by 21% over prior decentralized approaches while respecting safety envelopes.
</div>

## Resources

- **Conference talk:** ICRA 2024 presentation slides and recording (request access).
- **Paper (PDF):** [Sensor-based Multi-Robot Coverage Control with Spatial Separation in Unstructured Environments](https://arxiv.org/pdf/2403.01710.pdf)
- **Preview clips:** Available on the project’s media drive; contact us for high-resolution footage.

Interested in trying the controller on your platform? Reach out for ROS 2 launch files and gazebo benchmarks. A public code release is scheduled alongside our journal extension.
