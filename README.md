# Geniality: Generative AI for Offline Personalized Marketing using Google Cloud

## Overview
This repository contains a Python-based application designed to demonstrate the capabilities of Google Cloud's AI and generative AI services in generating dynamic marketing content. It automates the creation of advertisements including text, images and audio, leveraging services such as Gemini, Imagen, Text-to-Speech, Vertex AI, Firebase, and Google Cloud Storage. The application is particularly suited for creating customized marketing campaigns based on specific product attributes and environmental factors.

![Showcase](images/showcase.gif "Example Generated Images")

## Architecture
- **Geniality Architecture**:
![Geniality Architecture](images/GenAI-Architecture.png "Geniality Architecture")
- **Geniality Core Engine Architecture**:
![Geniality Core Engine Architecture](images/GenAI-GenialityCoreEngine.png "Geniality Core Engine Architecture")

## Repository Structure

```
.
├── GenAI # Contains the main generative logic (ad_generator.py)
├── images # Architecture diagrams, showcase images, and other related visuals
```
- [`GenAI/ad_generator.py`](GenAI/ad_generator.py): Main Python script containing the logic for generating and managing marketing content.
- [`GenAI/template.env`](GenAI/template.env): Configuration file to manage environment variables.
- [`GenAI/requirements.txt`](GenAI/requirements.txt): Contains all Python dependencies required for the project.
- [`GenAI/README.md`](GenAI/README.md): `.env` Configuration Details.

## Features
- **Content Generation**: Utilize Vertex AI, Imagen, Gemini Pro to generate text and image content.
- **Customer Profiling with External Signals**: Employ external data for detailed customer profiling to enhance targeting.
- **Personalized Real-time Recommendation**: Manage real-time personalized user recommendations.
- **Firebase Integration**: Store and manage advertisement data in Firestore.
- **Google Cloud Storage**: Upload generated images and audio content to Google Cloud Storage.

## Installation and Setup
1. **Environment Setup**:
   - Install Python 3.10 or higher.
   - Install all required Python libraries using:
     ```bash
     pip install -r requirements.txt
     ```
   - Rename the `template.env` to `.env`
   - Configure environment variables in the `.env` file (e.g., `PROJECT_ID`, `FIREBASE_CRED_PATH`).

2. **Firebase Configuration**:
   - Set up a Firebase project and download the credentials file.
   - Update the `FIREBASE_CRED_PATH` in the `.env` file to point to your Firebase credentials file.

3. **Google Cloud Services**:
   - Enable the required APIs (Vertex AI, Google Cloud Storage) on your Google Cloud project.
   - Set up a Google Cloud Storage bucket and update the `BUCKET_NAME` in the `.env` file.

## Usage
Run the `ad_generator.py` script in the GenAI folder to start the generation process:
```bash
python ad_generator.py
```

## Integration with our POS 
In this section, 

## Team Name
Geniality

## Problem Statement
In today's fast-paced digital marketing world, creating engaging and customized content rapidly across multiple platforms can be challenging. Our prototype addresses this issue by automating the generation of advertisement content, including text, images and audio, leveraging AI technologies. This allows businesses to scale their marketing efforts efficiently, reduce the time to market, and maintain relevance in various demographic segments.

## Team Leader Email
nattakarn.ph@tdshop.io

## A Brief of the Prototype
This section provides an overview of our prototype which utilizes Google Cloud's AI and generative AI services to generate dynamic and personalized marketing content.

### Prototype Description
Our prototype, a comprehensive AI-driven marketing tool, automatically generates tailored advertisement content. It integrates with Google Cloud services like Vertex AI, Imagen, Gemini Pro for Content Generation, Firebase for application data handling, and Google Cloud Storage for storing generated contents. The system extracts relevant text, processes images, and generates engaging multimedia content suited for diverse marketing campaigns.

## Future Scope
The potential for future development of our AI-driven marketing platform is substantial. Key areas for enhancement and expansion include:

1. **Advanced Personalization Algorithms**: By integrating more sophisticated AI algorithms, the system can learn from user interactions and feedback to further personalize content, thereby increasing engagement and conversion rates.
2. **Enhanced Interactivity in Content**: Developing interactive content such as quizzes, polls, and dynamic infographics that engage users directly within advertisements can improve user engagement metrics.
