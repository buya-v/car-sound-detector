# car sound detector - Requirements Document

## Iteration 1

## Project Description
Project Specification: Car Sound Detector

Summary
The Car Sound Detector is a mobile diagnostic tool that leverages machine learning and audio signal processing to identify potential vehicle mechanical failures. By analyzing user-recorded sounds against a library of known fault signatures, the application can distinguish between benign noises and critical issues like belt slippage, rod knock, or brake grinding. This system empowers drivers with immediate, actionable insights, bridging the gap between noticing a strange noise and visiting a professional mechanic.

Key Features
- AI-Powered Acoustic Diagnosis: Uses spectral analysis to match recorded audio patterns with a database of specific mechanical malfunctions.
- Noise Isolation Algorithm: Automatically filters out wind, traffic, and cabin conversation to isolate the target engine or chassis sound.
- Severity Indicator: Provides a "Traffic Light" urgency rating (Green/Yellow/Red) advising the user if the car is safe to drive or requires immediate towing.
- Repair Cost Estimator: Offers a rough price range for the diagnosed issue and connects users with top-rated local repair shops.

Target Users
The primary audience includes non-technical car owners seeking peace of mind, DIY enthusiasts looking for diagnostic confirmation, and used car buyers needing to vet a vehicle’s condition during a test drive.

Core User Flows
The user opens the app and selects the general origin of the sound (e.g., Engine Bay, Wheels/Brakes, Undocarriage). Upon tapping "Analyze," the user records the sound for 10-15 seconds. The app processes the audio clip, displays the most likely malfunction with a confidence percentage, and presents a "Next Steps" screen where the user can choose to save the report or locate a nearby mechanic.

## Customer Persona
- **Name**: Marcus Thorne
- **Role**: VP of Digital Innovation
- **Goals**: Increase lead generation for partner service centers by providing users with immediate diagnostic results; Establish the brand as the primary digital authority for non-technical drivers who feel intimidated by traditional mechanics; Collect anonymized acoustic data to build the world's largest proprietary database of vehicle failure signatures

## Target Users
- **Sarah Jenkins** (Primary User (Non-technical Owner)): Determine if a new car sound requires immediate attention or can wait until the weekend
- **David Chen** (Secondary User (Used Car Buyer)): Identify 'red flag' engine or transmission noises during a short test drive
- **Marcus 'Mike' Rodriguez** (Secondary User (DIY Enthusiast)): Validate his own mechanical hypothesis before purchasing replacement parts

## Key User Stories (Must-Have)
- Noise-Isolated Audio Recording
- Sound Origin Selection
- Traffic Light Urgency Indicator
- Identification with Confidence Score
- Local Partner Shop Locator

## User Feedback Incorporated
Initial iteration - no previous feedback

## Refined Requirements
# Technical Specification: Car Sound Detector (CSD)

## 1. Project Overview
The Car Sound Detector is a mobile-first diagnostic application designed to analyze vehicle acoustics. It utilizes Digital Signal Processing (DSP) and Machine Learning (ML) to identify mechanical failures and provide actionable financial and safety advice.

---

## 2. Technical Architecture

### 2.1 Technology Stack
*   **Frontend:** React Native or Flutter (iOS/Android)
*   **Audio Processing:** 
    *   *Client-side:* AudioRecord (Low-latency capture), Web Audio API / FFmpeg.
    *   *Server-side:* Librosa (Python) for feature extraction (Mel-spectrograms).
*   **ML Engine:** TensorFlow Lite (on-device) for initial triage; PyTorch (cloud) for deep analysis.
*   **Backend:** Node.js (Fastify) or Python (FastAPI).
*   **Database:** PostgreSQL (User data/Reports), Pinecone (Vector DB for audio signature matching).

### 2.2 System Diagram
`User Audio` -> `Denoising Filter (RNN)` -> `Feature Extraction (MFCC)` -> `ML Classifier` -> `Confidence Scoring` -> `Result Presentation`

---

## 3. Functional Requirements

| ID | Feature | Description |
| :--- | :--- | :--- |
| **FR-1** | **Noise-Isolated Recording** | Implements a Wiener filter or Deep Learning-based noise suppression to isolate engine frequencies (20Hz–20kHz) from ambient wind/traffic. |
| **FR-2** | **Spatial Origin Selector** | A pre-recording UI toggle: `[Engine Bay]` `[Wheels/Brakes]` `[Underbody]`. This limits the ML search space to specific fault classes. |
| **FR-3** | **Severity Logic** | Maps diagnosis to a status: `Green` (Operating normally), `Yellow` (Schedule service), `Red` (Do not drive). |
| **FR-4** | **Confidence Scoring** | Displays the probability (0-100%) of the top 3 matches to ensure transparency for the user. |
| **FR-5** | **Cost Engine** | Integrates with third-party automotive parts/labor APIs (e.g., RepairPal) to provide localized cost estimates. |

---

## 4. UI/UX Design Tokens

### 4.1 Color Palette
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--brand-primary` | `#2C3E50` | Headers, primary buttons (Industrial Navy) |
| `--status-safe` | `#27AE60` | Green: Safe to drive |
| `--status-warn` | `#F1C40F` | Yellow: Caution/Maintenance |
| `--status-danger` | `#E74C3C` | Red: Immediate attention required |
| `--bg-dark` | `#1A1A1A` | Dark mode background (Automotive aesthetic) |
| `--accent-blue` | `#3498DB` | Active recording state/Waveforms |

### 4.2 Typography
*   **Heading:** `Inter-Bold`, 24px (Clear, readable in high-stress situations)
*   **Body:** `Roboto-Regular`, 16px
*   **Monospace:** `JetBrains Mono` (Used for technical codes/confidence percentages)

### 4.3 UI Component Breakdown

#### A. Diagnostic Dashboard (`MainView`)
*   `OriginSelector`: A 3-button segmented control with icons (Engine, Wheel, Chassis).
*   `RecordButton`: Large circular button with a ripple animation.
*   `LiveWaveform`: Real-time SVG visualization of audio input.

#### B. Analysis Screen (`ProcessingView`)
*   `StatusStepper`: Shows progress: [Filtering Noise] -> [Extracting Features] -> [Matching Signatures].
*   `DenoiseToggle`: Allows users to hear the audio "Pre" and "Post" noise isolation.

#### C. Report View (`ResultView`)
*   `SeverityCard`: Full-width banner changing color based on the Traffic Light system.
*   `ConfidenceBadge`: A circular progress ring showing the percentage.
*   `CostEstimator`: An expandable accordion showing `[Labor Cost]` and `[Parts Cost]`.
*   `ActionFooter`: Fixed bottom buttons: `[Find Mechanic]` and `[Save Report]`.

---

## 5. Data Schema (Core Models)

### Diagnosis Record
```json
{
  "id": "uuid",
  "timestamp": "ISO8601",
  "vehicle_origin": "engine | wheels | undercarriage",
  "audio_sample_url": "s3://...",
  "analysis": {
    "primary_issue": "Rod Knock",
    "confidence_score": 0.89,
    "severity": "RED",
    "frequency_peak": "120Hz",
    "alternatives": ["Piston Slap", "Valvetrain Noise"]
  },
  "estimate": {
    "currency": "USD",
    "min_range": 1500,
    "max_range": 3500
  }
}
```

---

## 6. Development Phases (Roadmap)

1.  **Phase 1: Signal Foundation**
    *   Build the recording module with basic high-pass/low-pass filters.
    *   Establish the "Traffic Light" UI logic.
2.  **Phase 2: ML Model Training**
    *   Collect and label audio datasets (Belt squeal vs. Rod knock).
    *   Implement the Noise Isolation Algorithm (Noise Suppression).
3.  **Phase 3: Integration**
    *   Connect the Repair Cost API.
    *   Implement Geo-location for "Nearby Shop" feature.
4.  **Phase 4: Optimization**
    *   On-device model quantization for offline diagnosis (crucial for remote breakdowns).

---

## 7. Performance Requirements
*   **Latency:** Audio analysis must return results in < 5 seconds.
*   **Accuracy:** The ML model must achieve a > 85% F1-score for top 5 common mechanical failures.
*   **Battery:** Peak consumption during recording/analysis must not exceed 5% total battery.

## Acceptance Criteria
- All features must be fully implemented (no placeholders)
- UI must be responsive and accessible
- Error handling must be comprehensive
- Code must pass TypeScript compilation

---
*Generated by ASLA Product Agent - Iteration 1 - 2026-01-05T07:14:55.169Z*
