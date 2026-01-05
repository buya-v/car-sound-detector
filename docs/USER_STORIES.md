# User Stories

## Epics Overview
1. Acoustic Data Acquisition & Analysis
2. Diagnostic Reporting & Urgency
3. Repair Assistance & Partner Integration
4. Session Management & History

## Acoustic Data Acquisition & Analysis

### Noise-Isolated Audio Recording

**ID**: CSD-01
**Persona**: Unknown User
**Priority**: must-have
**Complexity**: high
**Status**: draft

**Story**:
As a Non-technical Owner, I want the app to filter out background traffic and wind noise while I record, so that the diagnosis is accurate even if I am on the side of a busy road.

**Acceptance Criteria**:
1. Given the user is in the recording interface, when they press the 'Record' button, then the app captures audio for a minimum of 10 seconds and a maximum of 15 seconds.
2. Given the recording is in progress, when wind or ambient traffic noise is detected, then the Noise Isolation Algorithm automatically attenuates these frequencies in real-time.
3. Given the recording is complete, when the audio quality is too poor for analysis, then the user receives a prompt to 'Move closer to the sound source' and retry.



---

### Sound Origin Selection

**ID**: CSD-02
**Persona**: Unknown User
**Priority**: must-have
**Complexity**: low
**Status**: draft

**Story**:
As a DIY Enthusiast, I want to select the general location of the sound (Engine Bay, Wheels, Undocarriage) before recording, so that the AI focuses on relevant fault signatures.

**Acceptance Criteria**:
1. Given the user opens the app, when they view the dashboard, then they are presented with selectable zones: Engine Bay, Wheels/Brakes, Suspension/Undocarriage, and Exhaust.
2. Given 'Wheels/Brakes' is selected, when the analysis begins, then the system prioritizes faults like 'Brake Grinding' or 'Wheel Bearing Hum' over engine knock.
3. Given a selection is made, when the recording screen loads, then a diagram shows the user where to position the phone for that specific zone.

**Dependencies**: CSD-01

---

## Diagnostic Reporting & Urgency

### Traffic Light Urgency Indicator

**ID**: CSD-03
**Persona**: Unknown User
**Priority**: must-have
**Complexity**: medium
**Status**: draft

**Story**:
As a Non-technical Owner, I want to see a Red, Yellow, or Green indicator after analysis, so that I immediately know if the car is unsafe to drive.

**Acceptance Criteria**:
1. Given the analysis identifies a critical failure (e.g., Rod Knock), when the results load, then a large Red indicator displays with the text 'Stop Driving Immediately / Tow Required'.
2. Given the analysis identifies a non-critical issue (e.g., Loose Heat Shield), when the results load, then a Green or Yellow indicator displays noting 'Safe to Drive'.
3. Given the user taps on the urgency indicator, when the modal opens, then a layman-friendly explanation of the risk (e.g., 'Engine seizure risk') is displayed.

**Dependencies**: CSD-01

---

### Identification with Confidence Score

**ID**: CSD-04
**Persona**: Unknown User
**Priority**: must-have
**Complexity**: high
**Status**: draft

**Story**:
As a Used Car Buyer, I want to see the identified malfunction name alongside a percentage confidence score, so that I can validate if a seller is hiding a major issue.

**Acceptance Criteria**:
1. Given the analysis is complete, when the result screen appears, then the primary diagnosis (e.g., 'Alternator Bearing Failure') is shown with a percentage (e.g., '87% Match').
2. Given the confidence score is below 60%, when the results are shown, then the app displays 'Inconclusive Result' and suggests potential causes rather than a definitive diagnosis.
3. Given a successful match, when the user expands the result, then a brief description of the mechanical failure is provided.

**Dependencies**: CSD-01

---

### Reference Sound Comparison

**ID**: CSD-05
**Persona**: Unknown User
**Priority**: could-have
**Complexity**: medium
**Status**: draft

**Story**:
As a DIY Enthusiast, I want to listen to a 'Known Fault' audio sample alongside my recording, so that I can personally verify the AI's diagnosis.

**Acceptance Criteria**:
1. Given a diagnosis is presented, when the user taps 'Compare Audio', then the UI displays two playback controls: 'Your Recording' and 'Reference Sample'.
2. Given the reference sample is playing, when the user plays their own recording, then the audio levels are normalized so they can be heard clearly side-by-side.
3. Given a complex sound, when comparing, then a simple visual waveform of both sounds is displayed to help visually match the rhythm.

**Dependencies**: CSD-04

---

## Repair Assistance & Partner Integration

### Repair Cost Estimator

**ID**: CSD-06
**Persona**: Unknown User
**Priority**: should-have
**Complexity**: medium
**Status**: draft

**Story**:
As a Used Car Buyer, I want to see an estimated repair price range for the diagnosed issue, so that I can negotiate that amount off the vehicle purchase price.

**Acceptance Criteria**:
1. Given a diagnosis (e.g., 'Serpentine Belt'), when the user views details, then a price range (e.g., '$150 - $250') is displayed based on national averages.
2. Given the user has not entered vehicle details, when viewing costs, then the app prompts for Make/Model/Year to refine the estimate.
3. Given a critical engine failure diagnosis, when the cost is displayed, then a disclaimer appears stating 'Major Repair - Professional Inspection Required'.

**Dependencies**: CSD-04

---

### Local Partner Shop Locator

**ID**: CSD-07
**Persona**: Unknown User
**Priority**: must-have
**Complexity**: medium
**Status**: draft

**Story**:
As a Non-technical Owner, I want to see a list of top-rated local mechanics who specialize in my specific problem, so that I can book an appointment immediately.

**Acceptance Criteria**:
1. Given a diagnosis is displayed, when the user taps 'Fix This', then a map view loads showing partner repair shops within a 10-mile radius.
2. Given the list of shops, when displayed, then shops are sorted by user rating and include a 'Partner' badge for verified service centers.
3. Given a specific shop card, when tapped, then the user can directly call or navigate to the shop via their default map app.

**Dependencies**: CSD-06

---

### Shareable Diagnostic Report

**ID**: CSD-08
**Persona**: Unknown User
**Priority**: should-have
**Complexity**: low
**Status**: draft

**Story**:
As a Non-technical Owner, I want to generate a shareable link of the diagnosis and audio, so that I can send it to a mechanic before I arrive.

**Acceptance Criteria**:
1. Given a completed diagnosis, when the user selects 'Share', then a unique web link is generated containing the fault name, severity, and audio clip.
2. Given the recipient opens the link, when the page loads, then they see the 'Car Sound Detector' branding and the specific diagnostic details without needing to install the app.
3. Given the user wants to keep it private, when sharing, then no personal user location data is included in the shared report.

**Dependencies**: CSD-04

---

## Session Management & History

### Scan History Log

**ID**: CSD-09
**Persona**: Unknown User
**Priority**: should-have
**Complexity**: low
**Status**: draft

**Story**:
As a Used Car Buyer, I want to save scans with custom labels (e.g., '2018 Ford Focus'), so that I can compare different cars I test drove later in the day.

**Acceptance Criteria**:
1. Given a scan is complete, when prompted, then the user can enter a custom text label for the session.
2. Given the user navigates to the 'History' tab, when the list loads, then previous scans are displayed chronologically with their labels and urgency colors.
3. Given a saved scan, when tapped, then the full diagnostic report and audio recording are reloaded.

**Dependencies**: CSD-04

---


*Generated by ASLA Product Agent*
