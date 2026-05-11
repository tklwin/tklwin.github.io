---
layout: page
title: A2C Myanmar Address-to-Coordinates
description: Transformer-based geospatial NLP system predicting latitude/longitude from Myanmar addresses with a live Streamlit map demo
img: assets/img/projects/a2c_myanmar_geocoding_thumb.jpg
importance: 3
category: work
related_publications: false
github: https://github.com/tklwin/Deep-Learning-Projects
---

**Myanmar Data Tech** | Foundations of Deep Learning Final Project | **A+ Grade** | 2025

[**GitHub Repository**](https://github.com/tklwin/Deep-Learning-Projects) · [**Live Demo**](https://huggingface.co/spaces/tklwin/a2c_demo)

### Overview

Built an address-to-coordinate prediction system for Myanmar that combines **geospatial modeling**, **NLP**, and **transformer fine-tuning**. The app accepts Burmese or English address text and returns predicted latitude/longitude with an interactive map visualization.

### What I Built

- Fine-tuned **BERT-multilingual, DistilBERT-multilingual, and XLM-RoBERTa** for geographic coordinate regression
- Trained on **610,509 Myanmar addresses** to learn address semantics and location patterns
- Designed a custom **Haversine distance loss** to optimize real-world kilometer error instead of raw coordinate error
- Deployed a **Streamlit + Plotly** demo on Hugging Face Spaces with map-based prediction output and error comparison

### Why It Matters

Myanmar addresses are often multilingual, inconsistent, and difficult to resolve with conventional geocoding tools. This project demonstrates how transformer-based NLP can be adapted for practical geospatial AI tasks where structured address data is limited or noisy.

### Skills Demonstrated

- Geospatial regression and distance-aware model evaluation
- Multilingual NLP with transformer architectures
- Custom loss-function design for location prediction
- Applied AI deployment with an interactive map interface

**Tech Stack:** PyTorch · Hugging Face Transformers · BERT · DistilBERT · XLM-RoBERTa · Streamlit · Plotly · Kaggle GPU · Scikit-learn
