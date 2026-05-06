---
layout: page
title: Chickpea Fusarium Wilt Detector
description: Hybrid lightweight CNN for on-device plant disease detection — MSc Thesis, Batangas State University (2024–2026)
img: assets/img/projects/chickpea_thumb.jpg
importance: 1
category: work
related_publications: false
---

**MSc Thesis Research** | Batangas State University | 2024–2026

*Full methodology and dataset details are reserved for upcoming journal and conference publications.*

---

### What It Does

A production-ready Android application that detects Chickpea Fusarium Wilt from smartphone photos — **fully offline**, instant results, with bilingual disease advisory (English + Myanmar Unicode). Designed for smallholder farmers in Myanmar with no internet connectivity.

### Key Results

- **82.09% cross-domain accuracy** on a real-world Myanmar field test set unseen during training
- Model size: **0.870 MB** after quantization — compatible with 2 GB RAM devices and Android 9.0+
- Validated on **115 real physical Android devices** via Google AI Edge Portal (private preview)
- Worst-case inference: **73.7 ms** on low-tier CPU-only hardware

### What I Built

- A novel **hybrid CNN architecture** combining SqueezeNet v1.1 with an attention mechanism — outperforming larger and more established architectures with a fraction of the parameters
- An **INT8 quantization pipeline** delivering over 3× model compression with zero accuracy degradation
- A **personally collected field dataset** from Myanmar farming communities, with expert agronomist annotation
- A **bilingual Android app** (Kotlin, Jetpack Compose, Material Design 3, TFLite) supporting SDG 1 and SDG 2

### Why It Matters

Most plant disease AI models are designed for high-end hardware or require cloud connectivity. This work targets the opposite end: low-cost devices, no internet, field conditions — making AI-assisted disease detection accessible to farmers who need it most.

**Tech Stack:** PyTorch · TFLite/LiteRT · Kotlin · Jetpack Compose · Android Studio · Roboflow · Kaggle GPU · Google AI Edge Portal
