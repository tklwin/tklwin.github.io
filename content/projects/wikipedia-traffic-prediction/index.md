---
title: "Wikipedia Web Traffic Prediction"
date: 2025-08-20
weight: 4
description: "Comparative time-series forecasting study on 145,000 Wikipedia articles — co-authored research paper under revision"
summary: "A rigorous comparative study of 7 time-series forecasting algorithms across 145,000 articles, evaluating RMSE across statistical and deep learning approaches."
tags: ["Time-Series", "R", "ARIMA", "Prophet", "LSTM", "Forecasting", "Data Science"]
showTableOfContents: true
---

**Research Paper (Under Revision)** | Co-authored with Prof. Sandhya Avasthi, ABES Engineering College, India | 2025

---

### Overview

This project conducts an empirical benchmarking study across **seven time-series forecasting algorithms** evaluated against a massive 145,000-article Wikipedia web traffic dataset from Kaggle. The primary evaluation criterion was Root Mean Squared Error (RMSE) under varied temporal seasonalities.

### Models Evaluated

1. **Moving Average (MA)**
2. **Exponential Smoothing (ETS)**
3. **Autoregressive Moving Average (ARMA)**
4. **Autoregressive Integrated Moving Average (ARIMA)**
5. **Auto-ARIMA**
6. **Facebook Prophet**
7. **Long Short-Term Memory Networks (LSTM)**

### Key Empirical Findings

Contrary to prevailing assumptions that recurrent neural networks (LSTMs) consistently dominate tabular sequence problems, **Moving Average models** demonstrated the strongest generalization and lowest overall RMSE for this high-variance web article distribution. This paper underscores the crucial importance of empirical model selection, showing that simpler, interpretable statistical baselines can often outperform computationally expensive deep learning models on large-scale noisy time series.

### International Collaboration

This research represents a successful academic cross-border collaboration between **Batangas State University (Philippines)** and **ABES Engineering College (India)**. The full paper has been submitted to a peer-reviewed journal and is currently undergoing revision.

**Tech Stack:** R · Time-Series Analysis · ARIMA · Prophet · LSTM · Kaggle GPU
