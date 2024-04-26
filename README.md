# Geniality: Generative AI for Personalized Marketing using Google Cloud

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
Due to confidential materials in our spring boot backend and Android POS, we cannot provide the source code of our backend and Android POS. In this hackathon, we will try to simulate our backend by using the google cloud function and integrating it with our Android POS.

# Data model
We create a very simple model containing 3 collections.

geniality_store
storeCode the code identifier of store
weather the weather code. There are 3 codes (SUNNY, RAINY, CLOUDY).
region the region code There are 3 codes (NORTH, CENTER, NORTH_EAST).

geniality_member
memberId the member identifier
memberName the member name
phoneNo the phone number 
gender the code of the member gender. There are 3 codes (MALE, FEMALE, UNDEFINED).
age the code of the member age. There are 3 codes (YOUTH, ADULT, ELDER).
job the code of the member job. There are 3 codes (WHITE_COLLAR, BLUE_COLLAR, OTHER).

geniality_advertisement
advertisementId the advertisement identifier
storeagePath the path to google cloud storage
articleNo our product article no
barcode our product barcode
weather the weather code. There are 3 codes (SUNNY, RAINY, CLOUDY). 
region the region code There are 3 codes (NORTH, CENTER, NORTH_EAST).
gender the code of the member gender. There are 3 codes (MALE, FEMALE, UNDEFINED). 
age the code of the member age. There are 3 codes (YOUTH, ADULT, ELDER).
job the code of the member job. There are 3 codes (WHITE_COLLAR, BLUE_COLLAR, OTHER).
description a description text that is shown on an advertisement

# Cloud Storage
In this hackathon, we will create a bucket called "geniality.appspot.com". The management of our files will be like the following convention. 

```
    advertisement/{advertisementId}/{file}
```

All files will be in the advertisement folder and followed by advertisementId where the advertisementId is the advertisement identifier.
The files with extensions .jpg or .png will be considered advertisement images.
The files with extensions .mp3 will be considered advertisement audio.

# Cloud function Overview
There are four functions that we will want to simulate our process.
genialityUpdateWeather
genialityGetMember
genialityRecommender
genialityGetAdvertisement

# Setup Cloud function
1. Install firebase console
2. Enter to "geniality_functions" folder
3. firebase login
4. firebase deploy --only functions
More info -> https://firebase.google.com/docs/functions/get-started?gen=2nd

# Android POS Integration.
Unfortunately, we cannot provide the source code of our Android POS. We will discuss only the process and how we integrate the POS with the cloud function.
1. Find member. It is very simple. A store cashier asks customer's mobile phone. The POS calls genialityGetMember to get member information including memberId. 
2. The POS will get an advertisement using genialityGetAdvertisement by providing storeCode, memberId, and basket information. The genialityGetAdvertisement cloud function will return the advertisement description, a downloadable link to a list of advertisement images, and a downloadable link to an advertisement audio (if exists)


## Team Name
Geniality

## Problem Statement
In today's fast-paced digital marketing world, creating engaging and customized content rapidly across multiple platforms can be challenging. Our prototype addresses this issue by automating the generation of advertisement content, including text, images and audio, leveraging AI technologies. This allows businesses to scale their marketing efforts efficiently, reduce the time to market, and maintain relevance in various demographic segments.

## Team Leader Email
nattakarn.ph@tdshop.io

## A Brief of the Ideas
Our project aims to revolutionize the offline retail experience by developing an intelligent system that leverages customer purchase history and profiles to generate accurate personalized recommendations. The system will not only suggest products tailored to individual preferences but will also dynamically create personalized marketing content using GenAI to enhance sales and improve overall customer experience creatively.

### Prototype Description
Our prototype, a comprehensive AI-driven marketing tool, automatically generates tailored advertisement content. It integrates with Google Cloud services like Vertex AI, Imagen, Gemini Pro for Content Generation, Firebase for application data handling, and Google Cloud Storage for storing generated contents. The system extracts relevant text, processes images, and generates engaging multimedia content suited for diverse marketing campaigns.

## Future Scope
The potential for future development of our AI-driven marketing platform is substantial. Key areas for enhancement and expansion include:

1. **External Factors**: Incorporate additional external factors and emerging trends into the recommendation system to elevate the overall customer experience and satisfaction.
2. **Enhanced Interactivity in Content**: Developing interactive content such as quizzes, polls, and dynamic infographics that engage users directly within advertisements can improve user engagement metrics.
3. **Refine Prompt Engineering**: Refine prompts and parameter settings for output consistency and tailor to match individual customer profiles accurately.
4. **Feedback Loop**: Implement feedback loops based on customer reactions and purchase decisions to continually refine recommendations and enhance the GenAI engines.
