---
layout: page
title: Risk-Adaptive CVaR Barrier Functions for Safe Navigation
description: A risk-aware controller that keeps mobile robots safe in uncertain human crowds.
img: assets/video/wang2025cvar_proj2.gif
importance: 1
category: Multi-agent
related_publications: true
---

## Overview

We design a risk-adaptive control barrier function (CBF) that lets mobile robots move through dense, uncertain human crowds while keeping collision risk below a desired threshold {% cite wang2025cvar %}. By embedding Conditional Value at Risk (CVaR) into the barrier formulation, the controller reacts proactively to rare but dangerous crowd motions instead of relying on nominal predictions.

## Key Contributions

- Introduce a CVaR-based safety certificate that bounds the probability of constraint violations under distributional uncertainty.
- Provide a closed-form update rule for the barrier parameter, enabling real-time risk adaptation on embedded platforms.
- Demonstrate superior safety and task efficiency on large-scale crowd navigation benchmarks and hardware-in-the-loop tests compared with chance-constrained and deterministic baselines.

## Method at a Glance

{% include figure.liquid loading="lazy" path="assets/video/wang2025cvar_proj.gif" title="Risk-adaptive navigation among dynamic agents" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Risk-aware CVaR barriers tighten the safe set only when the observed crowd motion suggests high tail risk, keeping the robot efficient during nominal operation and conservative in dangerous scenes.
</div>

## Resources

- **Video walkthrough:** [YouTube demo](https://youtu.be/wOunvjGHhBQ)
- **Project website:** [lawliet9666.github.io/cvarbf](https://lawliet9666.github.io/cvarbf/)
- **Paper (PDF):** [Safe Navigation in Uncertain Crowded Environments Using Risk Adaptive CVaR Barrier Functions](https://arxiv.org/pdf/2504.06513)

The toolbox and evaluation scripts used in the study are being prepared for release. Reach out if you would like early access to the experimental datasets or ROS integration notes.
