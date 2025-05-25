---
layout: archive
title: "Safe Navigation in Uncertain Crowded Environments"
permalink: /research/wang2025iros/
author_profile: true
---

{% include base_path %}

<p style="text-align:center;">
    <img src="/images/cvar_beta_dt_beta0.99_hdist_cone.gif" width="600pt" alt="forest"/>
    <!-- <img src="/images/cvar_beta_dt_beta0.99_hdist_cone.gif" style="width:1400px;" alt="forest"/> -->
    <!-- <img src="/images/wang2025iros.gif" width="600pt" alt="office"/>  -->
    <video width="640" controls>
    <source src="/images/wang2025iros.gif" type="video/mp4">
    </video> 
</p>

Model-based CBFs enforce formal safety in known environments but falter amid unpredictable obstacles. To overcome this, I introduce a runtime risk‑adaptive CVaR‑BF—augmented by a Dynamic Zone‑Based BF—that auto‑tunes its risk threshold to the minimum necessary, balancing safety and feasibility under uncertainty. Reinforcement‑learning (RL) controllers excel at discovering socially compliant motion patterns but may fail catastrophically when confronted with new pedestrian behaviors. I then layer this CVaR‑BF as a real‑time safety filter on an RL nominal planner, making the smallest adjustments needed to keep the worst‑case collision risk below a user‑specified bound—preserving the RL policy’s efficiency while providing probabilistic safety guarantees. It has been tested on a real social navigation dataset.

 


References: 

[1] [Safe Navigation in Uncertain Crowded Environments Using Risk Adaptive CVaR Barrier Functions](https://arxiv.org/abs/2504.06513). **X. Wang**, T. Kim, B. Hoxha, G. Fainekos, D. Panagou. IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), under review, 2025. [[PDF]](https://arxiv.org/abs/2504.06513) [[Video]](https://youtu.be/VHRnmXToLN8)

<div style="float: right;">
    <button onclick="location.href='https://lawliet9666.github.io/research/'" type="button">Back</button>
</div>