---
title: "Kaldi ASR for Apple Silicon"
date: 2026-10-15
weight: 2
description: "Native ARM64 Docker container for Kaldi ASR on Apple Silicon Macs (M1/M2/M3/M4) with OpenBLAS and ARM NEON acceleration."
summary: "A native ARM64 Docker container for Kaldi ASR on Apple Silicon Macs, eliminating x86 QEMU emulation overhead with OpenBLAS and NEON vectorization."
tags: ["Kaldi", "ASR", "Speech Recognition", "Docker", "Apple Silicon", "ARM64"]
showTableOfContents: false
---


<div class="flex flex-wrap gap-3 not-prose my-4">
  {{< button href="https://github.com/tklwin/kaldi-apple-silicon" target="_blank" >}}GitHub Repository{{< /button >}}
  {{< button href="https://hub.docker.com/r/tklwin/kaldi-apple-silicon" target="_blank" >}}Docker Hub{{< /button >}}
</div>

A native **ARM64 (`aarch64`)** Docker container for [Kaldi ASR](https://github.com/kaldi-asr/kaldi), built for Apple Silicon Macs (M1, M2, M3, M4) running Docker Desktop or Colima.

---

### Overview

While working on speech recognition on an M2 Mac, I ran into severe performance issues because the official Kaldi Docker image (`kaldiasr/kaldi`) is built exclusively for x86_64. On Apple Silicon, running it under QEMU emulation introduces heavy CPU overhead, slow feature extraction, and high memory usage.

To solve this, I built an automated, reproducible Docker build targeting native ARM64 with OpenBLAS and published it to Docker Hub and GHCR so anyone working with Kaldi on Apple Silicon can pull and run it immediately without the pain of compiling from source.

```bash
docker run --rm -it -v "$(pwd)":/workspace tklwin/kaldi-apple-silicon:latest
```

---

### Key Highlights

- **Native ARM64:** Full ARM NEON SIMD vectorization with OpenBLAS linear algebra libraries.
- **Compact Image (~1.57 GB):** Intermediate build artifacts (`.o`, `.lo`, `.la`) are pruned from Kaldi and OpenFST.
- **Pre-configured PATH:** Includes all 20+ Kaldi binary directories (`featbin`, `gmmbin`, `nnet3bin`, `chainbin`, `latbin`, `fstbin`, etc.) along with OpenFST, NIST SCTK (`sclite`), and `sph2pipe`.
- **Reproducible Dependencies:** Bundles verified tarballs for OpenFST 1.8.4, SCTK, sph2pipe, and CUB to prevent broken upstream mirrors and Cloudflare CDN blocks.
- **Python Environment:** Includes Python 3.11 with NumPy and SciPy pre-installed.

---

For detailed verification test suites, recipe execution guidelines, and Colima build-from-source profiles, visit the [GitHub repository &rarr;](https://github.com/tklwin/kaldi-apple-silicon)

**Tech Stack:** C++ · Kaldi ASR · OpenFST · OpenBLAS · Docker · ARM64 / NEON · Apple Silicon · Python 3.11
