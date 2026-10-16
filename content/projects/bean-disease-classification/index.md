---
title: "Bean Disease Classification"
date: 2025-06-15
weight: 5
description: "Stepwise CNN fine-tuning achieving 98.86% test accuracy — MSDS coursework research"
summary: "Comparative benchmark of 5 pretrained CNN architectures with a progressive stepwise fine-tuning pipeline on ResNet50 reaching 98.86% test accuracy."
tags: ["Computer Vision", "TensorFlow", "Keras", "Transfer Learning", "ResNet50", "Deep Learning"]
showTableOfContents: true
---

**Research Paper** | MSDS Coursework | Batangas State University | 2025  
*Improving Bean Disease Classification with Stepwise Fine-Tuning of CNN-based Transfer Learning Models*  
[**GitHub Repository &rarr;**](https://github.com/tklwin/bean-disease-classification-finetuning)

---

### Overview

Agricultural computer vision frequently encounters high intraclass visual variation and limited domain-specific labeled samples. This project benchmarks **5 state-of-the-art pretrained CNN architectures** on a composite bean leaf disease dataset, identifying **ResNet50** as the optimal backbone and enhancing its performance through progressive layer unfreezing.

{{< button href="https://github.com/tklwin/bean-disease-classification-finetuning" target="_blank" >}}View GitHub Code{{< /button >}}

### Architectures Benchmarked

- **VGG16**
- **ResNet50** *(Selected as highest performing backbone)*
- **DenseNet121**
- **EfficientNet-B0**
- **MobileNetV2**

### Stepwise Fine-Tuning Methodology

Rather than applying naive one-shot transfer learning, we designed a **stepwise fine-tuning strategy**:
1. **Feature Extraction:** Frozen base weights with freshly trained classification heads.
2. **Top-Block Unfreezing:** Selective fine-tuning of upper residual blocks with reduced learning rates.
3. **Deep Residual Adaptation:** Gradual unfreezing of deeper convolutional stages paired with cosine decay scheduling, mitigating catastrophic forgetting.

This systematic adaptation drove the final model to **98.86% test classification accuracy**.

### Reproducibility

The entire pipeline—data augmentation, class rebalancing, multi-model evaluation, confusion matrix generation, and Grad-CAM visualization—was engineered as a completely self-contained, reproducible notebook on Kaggle GPU.

**Tech Stack:** Python · TensorFlow / Keras · Transfer Learning · Kaggle GPU · Jupyter
