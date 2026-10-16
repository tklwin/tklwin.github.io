---
title: "A2C Myanmar Address-to-Coordinates"
date: 2025-11-10
weight: 3
description: "Transformer-based geospatial NLP system predicting latitude/longitude from Myanmar addresses with a live Streamlit map demo"
summary: "Transformer-based geospatial NLP system fine-tuning multilingual BERT on 610,509 Myanmar addresses with a custom Haversine distance loss and Streamlit demo."
tags: ["Geospatial AI", "NLP", "Transformers", "BERT", "Streamlit", "Plotly", "PyTorch"]
showTableOfContents: true
---

**Myanmar Data Tech** | Foundations of Deep Learning Capstone | **A+ Grade** | 2025  
[**GitHub Repository &rarr;**](https://github.com/tklwin/Deep-Learning-Projects) · [**Live Hugging Face Demo &rarr;**](https://huggingface.co/spaces/tklwin/a2c_demo)

---

### Overview

**A2C Myanmar** is a geospatial NLP system that predicts physical coordinates (latitude and longitude) from unstructured, noisy Myanmar addresses. The system accepts English or Burmese address strings and outputs geographical point predictions alongside an interactive map visualization with comparative error metrics.

<div class="flex gap-3 not-prose my-4">
  {{< button href="https://huggingface.co/spaces/tklwin/a2c_demo" target="_blank" >}}Live Hugging Face Spaces Demo{{< /button >}}
  {{< button href="https://github.com/tklwin/Deep-Learning-Projects" target="_blank" >}}GitHub Code{{< /button >}}
</div>

### Engineering Highlights

- **Multilingual Transformer Fine-Tuning:** Benchmarked and fine-tuned **BERT-multilingual, DistilBERT-multilingual, and XLM-RoBERTa** for continuous geospatial coordinate regression.
- **Large-Scale Corpus:** Preprocessed, tokenized, and trained on **610,509 Myanmar address records** to learn complex regional semantics and multi-script address patterns.
- **Custom Haversine Distance Loss:** Formulated a hybrid loss function combining 90% true great-circle geographical distance (Haversine formula in kilometers) with 10% Mean Squared Error (MSE), directly optimizing for real-world physical proximity rather than Cartesian coordinate errors.
- **Interactive Map Application:** Developed and deployed a **Streamlit + Plotly** interactive application on Hugging Face Spaces for instant visual inference and cross-model comparison.

### Why It Matters

Conventional geocoding engines (like Google Maps or Nominatim) struggle significantly in developing regions where addresses lack standard postal codes, follow flexible topological descriptions, and mix Myanmar Unicode with transliterated English. A2C demonstrates how modern transformer backbones can bridge this divide for logistics, health delivery, and disaster response.

**Tech Stack:** PyTorch · Hugging Face Transformers · BERT · DistilBERT · XLM-RoBERTa · Streamlit · Plotly · Kaggle GPU · Scikit-learn
