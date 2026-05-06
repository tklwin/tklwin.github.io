---
layout: page
title: Bean Disease Classification
description: Stepwise CNN fine-tuning achieving 98.86% test accuracy — MSDS coursework research
img: assets/img/projects/bean_disease_thumb.jpg
importance: 4
category: work
related_publications: false
---

**Research Paper** | MSDS Coursework | 2025

_"Improving Bean Disease Classification with Stepwise Fine-tuning of CNN-based Transfer Learning Model"_

### Overview

Benchmarked **5 pretrained CNN architectures** on a combined bean leaf disease dataset and identified ResNet50 as the optimal backbone through systematic comparative evaluation.

### Architectures Benchmarked

- VGG16
- ResNet50 _(selected as optimal backbone)_
- DenseNet121
- EfficientNet-B0
- MobileNetV2

### Stepwise Fine-Tuning Strategy

Designed and implemented a **stepwise fine-tuning strategy** — progressively unfreezing layers to adapt pretrained ImageNet representations to the plant disease domain — achieving **98.86% test accuracy** on the final model.

### Pipeline

Conducted an end-to-end pipeline: data loading, preprocessing, multi-model benchmarking, fine-tuning, evaluation, and visualization in a single reproducible Kaggle notebook.

**Tech Stack:** Python · TensorFlow/Keras · Kaggle GPU · Jupyter
