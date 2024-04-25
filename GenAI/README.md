### `.env` Configuration Details

#### General Project Configuration
- **`PROJECT_ID`**: The unique identifier for your Google Cloud project, essential for all API interactions.
- **`LOCATION`**: Specifies the Google Cloud region where the project's resources are deployed, important for latency reduction and legal compliance.

#### Firebase and Logging Configurations
- **`FIREBASE_CRED_PATH`**: Path to the JSON file containing your Firebase service account credentials, crucial for authenticating and accessing Firebase services.
- **`FIREBASE_COLLECTION`**: The name of the Firestore collection used to store advertisement data, vital for organizing and retrieving project data efficiently.
- **`LOG_FILE_PATH`**: Designates the file path where application logs are written, aiding in troubleshooting and monitoring application behavior.

#### Model Configuration
- **`IMAGEN_MODEL`**: Identifier for the image generation model used by Vertex AI to generate images, integral for automated visual content creation.
- **`GEMINI_MODEL`**: Specifies the version of the Gemini model used for generating text content, essential for producing engaging and relevant text outputs.

#### Product Data and Storage Configuration
- **`PRODUCT_FILE_PATH`**: Path to the Excel file containing product data, used to populate product details in the application, fundamental for data-driven content generation.
- **`BUCKET_NAME`**: The name of the Google Cloud Storage bucket used for storing generated images and other outputs, crucial for content management and distribution.
- **`N_IMAGES`**: Defines the number of images to generate for each variation in the content generation process, important for creating diverse and appealing visual content.

#### Product Variables
- **`WEATHER_CONDITIONS`**: Lists the weather conditions to consider when generating targeted marketing content, enhancing the relevance of advertisements.
- **`REGIONS`**: Specifies the geographical regions targeted for personalized advertising, key to market segmentation strategies.
- **`GENDERS`**: Sets the gender categories of the target audience for the marketing campaigns, vital for demographic targeting.
- **`AGE_GROUPS`**: Defines the age groups targeted by the advertisements, important for age-specific marketing.
- **`JOB_TYPES`**: Lists the types of job categories to consider when creating job-specific advertising content, enhancing the personalization of the ads.
- **`AGE_RANGE_YOUTH`**: Specifies the age range for the 'Youth' category, tailoring content to younger audiences.
- **`AGE_RANGE_ADULT`**: Specifies the age range for the 'Adult' category, focusing on a core demographic.
- **`AGE_RANGE_ELDER`**: Specifies the age range for the 'Elder' category, ensuring inclusivity of older audiences in marketing efforts.
