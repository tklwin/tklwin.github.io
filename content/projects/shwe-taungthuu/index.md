---
title: "Shwe Taungthuu — Agricultural Advisory Agent"
date: 2026-03-01
weight: 2
description: "Gemini 2.5 Flash-powered bilingual agricultural advisory agent for Myanmar farmers — Google Build with AI MMDT 2026"
summary: "An AI-powered bilingual agricultural advisory agent built on Google Cloud Run with Gemini 2.5 Flash via Vertex AI, featuring Burmese voice/text interaction."
tags: ["Generative AI", "Gemini 2.5 Flash", "Vertex AI", "FastAPI", "Google Cloud Run", "Speech-to-Text"]
showTableOfContents: true
---

**Google Developers Community Build with AI MMDT 2026** | 2026  
[**Launch Live Application &rarr;**](https://myanmar-agri-agent-599279558972.us-central1.run.app)

---

### Overview

**Shwe Taungthuu** (ရွှေတောင်သူ — "Golden Farmer") is a production, full-stack agricultural AI assistant that empowers Myanmar farmers to query crop health, soil management, and pest remedies in Burmese through natural speech or text. Structured, agronomy-aligned advisory responses are generated in real-time by **Google Gemini 2.5 Flash via Vertex AI**.

{{< button href="https://myanmar-agri-agent-599279558972.us-central1.run.app" target="_blank" >}}Try Live Application{{< /button >}}

### Architectural Highlights

- **Backend:** High-concurrency **FastAPI** service containerized with Docker and deployed serverlessly on **Google Cloud Run**.
- **Keyless Cloud Security:** Employs **Application Default Credentials (ADC)** and IAM service account binding, eliminating static API keys and securing enterprise cloud communication.
- **Frontend & Field Usability:** Built with **Tailwind CSS**, Lucide Icons, and browser-native **Web Speech API** for real-time speech-to-text.
- **Voice History Audio Replay:** Enabled local playback so rural users can verify and listen to what the system captured.
- **Low-Literacy Design:** Simple UI cards, large tap targets, and clear Myanmar Unicode typography designed specifically for field conditions.

### Development Workflow

Developed and deployed end-to-end using the **Gemini CLI within Google Cloud Shell**, piloting an AI-augmented engineering process spanning system architecture, prompt engineering, containerization, and continuous delivery within the Google Cloud ecosystem.

**Tech Stack:** Python · FastAPI · Google Gemini 2.5 Flash · Vertex AI · Google Cloud Run · Docker · Web Speech API · Tailwind CSS · ADC
