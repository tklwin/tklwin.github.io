---
title: "Machine Learning Algorithms from Scratch"
date: 2025-04-10
weight: 8
description: "Linear Regression, Logistic Regression, Decision Tree, KNN, and Naive Bayes implemented from first principles using NumPy — MSDS Coursework"
summary: "First-principles implementation of 5 foundational ML algorithms purely in NumPy, complete with analytical derivations, mathematical proofs, and visual plots."
tags: ["Machine Learning", "NumPy", "Python", "Mathematics", "From Scratch"]
showTableOfContents: true
---

**MSDS Coursework** | Batangas State University | 2025–2026  
[**GitHub Repository &rarr;**](https://github.com/tklwin/ml-algorithms-from-scratch)

---

### Overview

A comprehensive educational and engineering repository implementing five core classical machine learning algorithms **entirely from first principles using pure NumPy** — omitting high-level estimators like Scikit-learn to focus on mathematical rigor, vectorization, and underlying gradient mechanics.

Each algorithm is accompanied by step-by-step formula derivations, markdown explanations, loss curves, and decision boundary plots.

{{< button href="https://github.com/tklwin/ml-algorithms-from-scratch" target="_blank" >}}View Code on GitHub{{< /button >}}

### Implementations & Benchmarks

| Algorithm | Dataset | Mathematical Core | Benchmark Result |
| :--- | :--- | :--- | :--- |
| **Linear Regression** | TV Marketing (200 samples) | Ordinary Least Squares, Closed-form Normal Eq. & Batch Gradient Descent | Pearson's $r = 0.782$ |
| **Logistic Regression** | Pima Indians Diabetes (768 samples) | Sigmoid activation, Binary Cross-Entropy, Vectorized Gradient Updates | Sigmoid probability curves |
| **Decision Tree** | Iris Dataset (150 samples) | Information Gain, Shannon Entropy, Recursive Binary Splitting | Train: 78.57% / Test: 71.05% |
| **K-Nearest Neighbors** | Pima Indians Diabetes (768 samples) | Euclidean metric vectorization, Majority Voting | Optimal $k = 5$, Accuracy: 72.73% |
| **Naive Bayes** | Iris Dataset (150 samples) | Gaussian Likelihood, Bayes' Theorem, Log-sum-exp stabilization | Accuracy: 90.00% |

### Methodological Principles

- **Zero Black Boxes:** Scikit-learn is restricted strictly to cross-validation dataset splitting and metric calculation; all core optimization loops and probability estimations are written in pure NumPy.
- **Vectorized Formulations:** Eliminated nested Python loops in favor of vectorized matrix operations, ensuring efficient vectorized execution.
- **Complete Documentation:** Includes comprehensive technical derivations in both Markdown and exported PDFs.

**Tech Stack:** Python · NumPy · Pandas · Matplotlib · Seaborn · Google Colab · LaTeX
