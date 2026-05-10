---
layout: page
title: MMDT Intro to Deep Learning Projects
description: Four applied deep-learning projects covering tabular regression, NLP classification, CNN benchmarking, and BERT-based geocoding
img: assets/img/projects/mmdt_deep_learning_thumb.jpg
importance: 5
category: work
related_publications: false
github: https://github.com/tklwin/Deep-Learning-Projects
---

**Myanmar Data Tech** | Foundations of Deep Learning | **A+ Grade** | 2025

[**GitHub Repository**](https://github.com/tklwin/Deep-Learning-Projects) · [**A2C Live Demo**](https://huggingface.co/spaces/tklwin/a2c_demo)

### Overview

Completed four progressive applied AI projects across tabular regression, NLP classification, CNN benchmarking, and transformer-based geocoding. The final project deployed a live Streamlit demo on Hugging Face Spaces for Myanmar address-to-coordinate prediction.

### Final Project: A2C Myanmar Address to Coordinates

Fine-tuned **BERT-multilingual, DistilBERT-multilingual, and XLM-RoBERTa** on **610,509 Myanmar addresses** for geographic coordinate regression. Designed a custom Haversine distance loss weighting geographic error over raw coordinate error to improve real-world kilometer accuracy.

The deployed Streamlit app accepts Burmese or English addresses and returns model predictions with map visualization and kilometer-level error comparison.

### Earlier Projects

- **HDB Resale Price Prediction:** MLP regression on Singapore open housing data; best model achieved **R2=0.92** and **RMSE=SGD 59,051**.
- **Myanmar Location Name Classification:** 24 NLP experiments across 6 architectures and 4 regularization settings; diagnosed performance limits caused by severe class imbalance.
- **CNN Benchmark on Self-Collected Dataset:** Compared ResNet50, VGGNet16, InceptionV3, ConvNeXt, and EfficientNet with accuracy, inference time, model size, and parameter-count analysis.

**Tech Stack:** PyTorch · Hugging Face Transformers · BERT · DistilBERT · XLM-RoBERTa · Streamlit · Plotly · Kaggle GPU · Scikit-learn
