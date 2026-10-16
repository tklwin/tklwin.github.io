---
title: "Tweaking macOS for 1080p External Display"
date: 2025-10-11T12:24:00+08:00
description: "Command-line tweaks for font smoothing in macOS to get crisp text on a 1080p external monitor."
summary: "How to tune AppleFontSmoothing via Terminal commands to improve text clarity on non-Retina 1080p external monitors in macOS."
tags: ["macOS", "Display", "Font Smoothing", "Terminal", "Tips"]
categories: ["Tips & Tricks"]
showTableOfContents: true
---

After connecting a 1080p external monitor to my Mac, I noticed poor text clarity due to macOS's font rendering assumptions on non-Retina displays. After testing several workarounds, here is the supported method to control and restore font smoothing on modern macOS versions.

---

### Adjusting Font Smoothing Level

To adjust the font smoothing strength, run the following command in Terminal:

```bash
defaults -currentHost write -g AppleFontSmoothing -int [value]
```

Where `[value]` corresponds to:
- `0`: Off
- `1`: Light smoothing
- `2`: Medium smoothing (Default macOS behavior)
- `3`: Strong smoothing

### Checking Current Setting

To verify your current font smoothing status, execute:

```bash
defaults -currentHost read -g AppleFontSmoothing
```

- A returned value of `0` indicates font smoothing is disabled.
- Values `1`, `2`, or `3` indicate font smoothing is active with increasing thickness.
- If the key is not present, macOS defaults to medium smoothing (`2`).

### Applying the Changes

After writing the new setting, **log out of your user session or restart your Mac** for the change to propagate to all running applications.

While visual differences are subtle on Retina displays, non-Retina external monitors (such as 1080p panels) typically display noticeably bolder, crisper text.
