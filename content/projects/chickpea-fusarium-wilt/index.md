---
title: "Chickpea Fusarium Wilt Detector"
date: 2026-01-15
weight: 1
description: "Hybrid lightweight CNN for on-device plant disease detection — MSc Thesis, Batangas State University (2024–2026)"
summary: "A production-ready offline Android edge-AI application detecting Chickpea Fusarium Wilt in 73.7 ms with an 0.870 MB INT8 model, achieving 82.09% cross-domain accuracy."
tags: ["Edge AI", "Computer Vision", "PyTorch", "LiteRT", "Kotlin", "Smart Agriculture"]
showTableOfContents: true
---

**MSc Thesis Research** | Batangas State University | 2024–2026  
**Published Paper:** *A Systematic Ablation of CBAM Depth in SqueezeNet for Optimizing Cross-Domain Chickpea Disease Detection*, Procedia Computer Science, Vol. 289, pp. 1259–1266, 2026 (ICCSCI 2026). [DOI: 10.1016/j.procs.2026.08.346](https://doi.org/10.1016/j.procs.2026.08.346)

---

### What It Does

A production-ready Android application that detects **Chickpea Fusarium Wilt** from smartphone photos — **fully offline**, with instant inference results and bilingual disease management advisory (English + Myanmar Unicode). Designed specifically for smallholder farmers in rural Myanmar with no internet connectivity.

### Key Results

- **82.09% cross-domain accuracy** on an unseen real-world Myanmar field test set, outperforming MobileNetV2 and EfficientNet-B0, and matching ShuffleNetV2 (statistical parity) with 41% fewer parameters.
- **0.870 MB model size** after static INT8 quantization (a 3.31× compression factor from the 2.88 MB FP32 baseline) with zero accuracy degradation.
- **Validated across 115 real physical Android devices** via Google AI Edge Portal (private preview).
- **Sub-75ms worst-case inference** (73.7 ms) on entry-level CPU-only hardware, compatible with 2 GB RAM devices and Android 9.0+.

### Technical Contributions

- **Novel Architecture:** Designed a hybrid CNN combining SqueezeNet v1.1 with Convolutional Block Attention Modules (CBAM), conducting systematic ablation across network depths to identify optimal attention placement.
- **Rigorous Quantization:** Engineered an INT8 static quantization calibration pipeline tailored for edge tensor runtimes (LiteRT / TensorFlow Lite).
- **Primary Field Dataset:** Organised the collection and curation of field imagery from chickpea-growing farming communities across Myanmar, annotated in collaboration with professional agronomists and validated using Cohen's kappa coefficient.
- **Bilingual Mobile Application:** Built a modern, native Android client using Kotlin, Jetpack Compose, Material Design 3, and LiteRT.

### Why It Matters

Most state-of-the-art vision models require high-end GPUs or round-trip cloud API connectivity. In rural Southeast Asia, smallholder farmers often lack reliable mobile data or high-end smartphones. This work delivers research-grade computer vision diagnostics to budget devices under challenging field conditions.

**Tech Stack:** PyTorch · LiteRT / TFLite · Kotlin · Jetpack Compose · Android Studio · Roboflow · Kaggle GPU · Google AI Edge Portal
