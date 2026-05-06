---
layout: page
title: Shwe Taungthuu
description: Gemini 2.5 Flash-powered bilingual agricultural advisory agent for Myanmar farmers — Google Build with AI MMDT 2026
img: assets/img/projects/shwe_taungthuu_thumb.jpg
importance: 2
category: work
related_publications: false
---

**Google Developers Community Build with AI MMDT 2026** | 2026

*AI-powered bilingual agricultural advisory app for Myanmar farmers*

[**Live Application →**](https://myanmar-agri-agent-599279558972.us-central1.run.app)

### Overview

Built a full-stack agricultural advisory application enabling Myanmar farmers to ask crop and pest management questions via **Burmese voice or text** — with structured advisory responses generated in real time using **Google Gemini 2.5 Flash via Vertex AI**.

### Backend

- **Python + FastAPI** backend deployed serverlessly on **Google Cloud Run**
- Used **Application Default Credentials (ADC)** for keyless, production-grade cloud authentication — eliminating hardcoded API keys and enabling secure service-to-service calls without credential exposure

### Frontend

- Built with **Tailwind CSS, Lucide Icons, and Web Speech API** for browser-native speech-to-text
- Implemented a **Voice History** feature allowing farmers to replay original voice queries inline within the chat
- Designed for **low-literacy, field-usability** contexts

### Development Workflow

- Developed the entire application using **Gemini CLI in Google Cloud Shell** — AI-assisted coding workflow from architecture to deployment within the Google ecosystem

**Tech Stack:** Python · FastAPI · Google Gemini 2.5 Flash · Vertex AI · ADC · Google Cloud Run · Web Speech API · Tailwind CSS · Lucide Icons · Gemini CLI
