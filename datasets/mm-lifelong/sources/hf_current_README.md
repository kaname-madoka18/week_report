---
license: other
extra_gated_prompt: >-
  You agree to not use the dataset to conduct experiments that cause harm to
  human subjects. Please note that the data in this dataset may be subject to
  other agreements. Before using the data, be sure to read the relevant
  agreements carefully to ensure compliant use. Video copyrights belong to the
  original video creators or platforms and are for academic research use only.
task_categories:
- visual-question-answering
extra_gated_fields:
  Name: text
  Company/Organization: text
  Country: text
  E-Mail: text
modalities:
- Video
- Text
configs:
- config_name: default
  data_files:
  - split: train
    path: month/train.json
  - split: val
    path: month/val.json
  - split: test_day
    path: day/test.json
  - split: test_week
    path: week/test.json
language:
- en
size_categories:
- 1K<n<10K
---
# MM-Lifelong

## Summary
We introduce MM-Lifelong, a dataset designed for Multimodal Lifelong Understanding. MM-Lifelong comprises 181.1 hours of footage across three domains.
The dataset contains 1289 questions with 1810 distinct clue intervals.
Crucially, the distribution of temporal certificates confirms the ``Lifelong'' nature of the benchmark: 267 questions require reasoning over a span of 1-10 hours, and 127 questions involve ultra-long dependencies exceeding 10 hours.

<div align="center">
  <img src="./asset/teaser.jpg" width="100%"/>
</div>

## Statistics

| Statistics | Number |
|-----------|--------|
| **Total Duration** | 181.1 hours |
| **Total Questions** | 1289 |
| └ Avg. Question Length | 26.79 words |
| └ Avg. Answer Length | 4.80 words |
| **Total Clue Intervals** | 1810 (100%) |
| └ Short (<90s) | 1039 (57.40%) |
| └ Medium (90–540s) | 550 (30.39%) |
| └ Long (>540s) | 221 (12.21%) |
| └ Avg. Clue Duration | 362.26 s |
| **Total Temporal Certificate** | 1289 (100%) |
| └ Short (<10 min) | 500 (38.79%) |
| └ Medium (10 min–1 h) | 395 (30.64%) |
| └ Long (1 h–10 h) | 267 (20.71%) |
| └ **Ultra-long (>10 h)** | **127 (9.85%)** |
| **Questions by Split** | train / val / test |
| └ Total | 266 / 623 / 400 |
| └ Gamer's Journey (Day) | 0 / 0 / 200 |
| └ Egocentric Life (Week) | 0 / 0 / 200 |
| └ Live Stream (Month) | 266 / 623 / 0 |

Distribution of question categories and video clip domains:
<div align="center">
  <img src="./asset/statistic.jpg" width="100%"/>
</div>

## Dataset Comparison
To situate MM-Lifelong within the broader landscape of multimodal understanding, we compare it against existing benchmarks and highlight the unique challenges arising in the Lifelong Horizon. 
First, the dataset presents an **Extremely Long Temporal Scale** (100+ hours), significantly exceeding standard Long-Context benchmarks like CG-Bench and pushing the limits of memory retention. 
Distinct from recent continuous datasets like EgoLife, MM-Lifelong provides **Manual, Clue-Grounded Annotations** across diverse domains (from digital streams to career archives) rather than relying on automated generation, thereby ensuring higher reasoning complexity and data quality.

| Dataset | Modalities | #Samples | Max. Dur | Max. Span | Anno. | QA | Clue |
|--------|------------|----------|----------|-----------|-------|----|------|
| *I. Short-Context Multimodal Dataset* ||||||||
| MMMU | Image | 11.5k | 0 | 0 | M | 11.5k | ✗ |
| AIR-Bench | Audio | 19k | 19.4s | 19.4s | A & M | 19k | ✗ |
| OmniBench | Audio + Image | 1.1k | 30s | 30s | A & M | 1.1k | ✗ |
| MVBench | Video | 4.0k | 2.95m | 2.95m | A | 4.0k | ✗ |
| *II. Long-Context Multimodal Dataset* ||||||||
| EgoSchema | Video | 5.0k | 3.0m | 3.0m | A & M | 5.0k | ✗ |
| Video-MME | Video | 900 | 59.6m | 59.6m | M | 2.7k | ✗ |
| M3-Bench | Video | 1,020 | 57.5m | 57.5m | M | 4.9k | ✗ |
| CG-AV-Counting | Audio + Video | 497 | 1.75h | 1.75h | M | 1.0k | ✓ |
| *III. Lifelong Multimodal Dataset* ||||||||
| EgoLife | Audio + Video | 6 | 51.9h | ~7d | A & M | 3.0k | ✗ |
| TeleEgo | Audio + Video | 5 | 14.4h | ~3d | A & M | 3.3k | ✗ |
| **MM-Lifelong (Ours)** | Audio + Video | **3** | **105.6h** | **~51d** | **M** | **1.3k** | **✓** |

## Experiments Results

| Methods | Frames | Train@Month Acc | Train@Month Ref@300 | Val@Month Acc | Val@Month Ref@300 | Test@Day Acc | Test@Day Ref@300 | Test@Week Acc | Test@Week Ref@300 |
|--------|--------|-----------------|---------------------|---------------|-------------------|--------------|------------------|---------------|-------------------|
| **Human** | Full | 82.5 | 31.2 | 80.4 | 33.5 | 99.2 | 49.8 | 95.6 | 42.4 |
| **End-to-End MLLMs** |||||||||||
| GPT-5 | 50 | 10.15 | 1.39 | 14.87 | 0.44 | 15.25 | 0.53 | 15.00 | 0.92 |
| Qwen3-VL-235B-A22B | 1536 | 9.09 | 0.39 | 14.33 | 0.06 | 12.44 | 0.79 | 15.63 | 0.80 |
| Qwen3-VL-30B-A3B | 1536 | 8.33 | 0.48 | 11.92 | 0.64 | 11.48 | 0.42 | 11.07 | 0.77 |
| Video-XL-2-8B | 2048 | 6.02 | 0.00 | 8.91 | 0.40 | 8.75 | 1.37 | 10.25 | 0.10 |
| Video-XL-2-8B | 1024 | 4.89 | 0.09 | 9.07 | 0.75 | 9.00 | 0.72 | 12.00 | 0.51 |
| Eagle-2.5-8B | 512 | 3.76 | 1.59 | 4.41 | 0.03 | 7.25 | 1.01 | 9.50 | 1.69 |
| Eagle-2.5-8B | 32 | 2.07 | 0.71 | 6.10 | 0.01 | 8.25 | 0.39 | 7.00 | 1.16 |
| Nemotron-v2-12B | 512 | 7.52 | 0.19 | 9.63 | 0.02 | 7.25 | 0.04 | 11.00 | 0.50 |
| Nemotron-v2-12B | 128 | 7.71 | 0.18 | 10.03 | 0.01 | 7.00 | 0.03 | 8.50 | 0.50 |
| **Agentic Methods** |||||||||||
| VideoMind-7B | Full | 5.26 | 1.00 | 8.35 | 0.26 | 7.50 | 1.12 | 11.75 | 2.51 |
| LongVT-7B | Full | 5.83 | 1.71 | 7.54 | 0.11 | 7.00 | 0.73 | 9.75 | 0.66 |
| DeepVideoDiscovery | Full | 4.36 | 2.03 | 10.57 | 4.48 | 10.25 | 3.04 | 9.02 | 8.12 |
| **ReMA (Ours) / w GPT-5** | Full | **17.62** | **9.91** | **18.62** | **15.46** | **16.75** | **11.51** | **18.82** | **16.37** |
| **ReMA (Ours) / w Qwen3VL-A22B** | Full | 14.23 | 6.01 | 15.51 | 8.51 | 13.33 | 6.56 | 15.98 | 10.61 |

## Usage and License

MM-Lifelong is released for academic research purposes only. Commercial use in any form is prohibited.

The copyright of all videos belongs to their respective owners. MM-Lifelong only organizes the videos for academic research and does not claim ownership of the underlying video content.

If any content in MM-Lifelong infringes your rights or should be removed, please contact us and we will review and remove it promptly.

Without prior approval, you may not distribute, publish, copy, disseminate, or modify MM-Lifelong, in whole or in part.

By accessing or using MM-Lifelong, you agree to strictly comply with the above restrictions.
