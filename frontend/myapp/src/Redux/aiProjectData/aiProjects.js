const AI_projects = [
  {
    title: "Lung Cancer Prediction using Machine Learning",
    image: "/lungCancer.jpg",
    price: 299,
    introduction: `Lung cancer is one of the leading causes of death globally, making early detection critical for improving patient outcomes. Traditional methods for lung cancer diagnosis involve imaging techniques and biopsies, which can be time-consuming and invasive. Machine learning offers a non-invasive and faster alternative by analyzing patterns in patient data to predict the likelihood of lung cancer. This project leverages machine learning algorithms, specifically Support Vector Machines (SVM), to predict lung cancer based on medical and patient data, improving early detection rates.`,
    technology: `<b>Support Vector Machine (SVM)</b> is the machine learning technique used in this project. SVM is a powerful supervised learning algorithm well-suited for binary classification tasks, such as predicting whether a patient has lung cancer based on input features. By finding an optimal boundary (hyperplane) between classes, SVM can effectively classify patients with or without cancer based on various medical inputs like tumor size, age, smoking history, and more.`,
    importance: {
      benefit: `This lung cancer prediction model will primarily benefit:`,
      list: [
        {
          "Healthcare Providers":
            "Assists in quicker diagnosis and treatment planning.",
        },
        {
          Patients:
            "Enables early-stage lung cancer detection, increasing survival rates and improving treatment success.",
        },
        {
          "Medical Researchers":
            "Provides insights into factors contributing to lung cancer, aiding further medical research.",
        },
      ],
      limitations: `This project will not be able to predict if patients with no cancer will have cancer. It will only predict if patients with cancer will have cancer.`,
    },
    prediction: {
      Output: `The output of the prediction model will be a binary classification`,
      list: {
        "Positive(1)": `Lung cancer detected. Additionally, the model can output the probability of cancer presence, offering a confidence score for further investigation and decision-making by medical professionals.`,
        "Negative(0)": "No lung cancer detected.",
      },
    },
  },
  {
    title: "Fake News Detection using Machine Learning",
    price: 299,
    image: "/fakeNews.jpg",
    introduction: `Fake news detection is an essential machine learning application used to distinguish between legitimate and fraudulent news articles. This project aims to classify news as real or fake using text analysis techniques and machine learning models.`,
    technology: `Logistic Regression is used for binary classification, with text features processed using techniques like TF-IDF (Term Frequency-Inverse Document Frequency) and stemming via NLTK.`,
    importance: {
      description: `This solution is vital in combating misinformation and ensuring the integrity of news content on various platforms`,
      benefit: `Journalists, media companies, social platforms, and the general public will benefit from more reliable news sources.`,
    },
    prediction: {
      Output: `The model predicts whether a given news article is real (0) or fake (1) based on its content.`,
    },
  },
  {
    title: "skin cancer prediction using machine learning",
    price: 299,
    image: "/skinCancer.jpg",
    introduction:
      "Skin cancer is one of the most common types of cancer, and early detection is crucial for effective treatment. With the advancements in machine learning, predictive models are now being used to detect skin cancer at an early stage using image-based data. These models can analyze skin lesions and differentiate between malignant and benign forms of skin cancer.",
    technology: `Convolutional Neural Networks (CNNs) are typically used for skin cancer prediction due to their ability to process image data. The model is trained on a large dataset of skin lesion images, where it learns to detect patterns associated with cancerous cells. Support Vector Machines (SVM) and deep learning frameworks like TensorFlow are also commonly used.`,
    importance: {
      benefit: `This technology will primarily benefit dermatologists, healthcare providers, and patients. It can help doctors with faster and more accurate diagnoses, enabling them to prioritize patient care. In remote areas with limited access to dermatologists, it can serve as a valuable diagnostic tool.`,
    },
    prediction: {
      details: `The integration of machine learning models for skin cancer prediction can lead to early detection, significantly improving patient outcomes. By aiding healthcare professionals with accurate predictions, this technology reduces diagnostic errors and supports timely treatment interventions.`,
      Output: `The model predicts whether a given skin lesion is benign (0) or malignant (1) based on its features.`,
    },
  },
  {
    title: "House Price Prediction",
    price: 299,
    image: "/housePrice.jpg",
    introduction:
      "House Price Prediction is a machine learning application used to estimate the price of residential properties. This tool leverages historical data and specific property features, allowing stakeholders to make informed decisions. The prediction of house prices is essential in real estate to maintain transparency, ensure fair pricing, and assist with financial planning for both buyers and sellers.",
    technology:
      "Built with Flask for the backend and HTML/CSS for the frontend, this web-based tool offers a seamless interface. Users can input property details, such as location, size, and other features, and receive accurate price predictions generated by machine learning models like linear regression or decision trees.",
    importance: {
      description: `This prediction tool is beneficial for real estate agents, buyers, investors, and financial institutions, enabling them to understand market dynamics, forecast property values, and make decisions based on data-driven insights.`,
    },
    prediction: {
      details: `Accurately predicting house prices can significantly enhance decision-making in the real estate industry. By integrating machine learning models with a user-friendly interface, this tool empowers users to navigate the market more efficiently and confidently.`,
      Output: `The model predicts the price of a given property based on its features.`,
    },
  },
  {
    title: "Fake URL detection",
    price: 299,
    image: "/fakeUrl.jpg",
    introduction:
      "Fake URL detection is essential to combat phishing, fraud, and malicious websites that trick users into sharing sensitive information. Cybercriminals create fake URLs that mimic legitimate websites, making it crucial to identify and block such URLs to ensure online safety.",
    technology: `<b>Machine Learning and NLP </b> <br> 
            <b>Feature Analysis:</b> Models analyze features like domain length, special characters, and URL structure to identify fake URLs.
            <b>Supervised Learning:</b> Algorithms like Decision Trees and Random Forest are trained on datasets of legitimate and fake URLs for accurate classification.
        `,
    importance: {
      list: [
        {
          "Feature Analysis":
            "Models analyze features like domain length, special characters, and URL structure to identify fake URLs.",
        },
        {
          "Supervised Learning":
            "Algorithms like Decision Trees and Random Forest are trained on datasets of legitimate and fake URLs for accurate classification.",
        },
      ],
    },
    prediction: {
      details:
        "Fake URL detection using machine learning and NLP provides a powerful defense against phishing and online fraud. By analyzing URL features, these technologies help detect and block malicious websites, protecting users from potential cyber threats.",
    },
  },
];

export default AI_projects;
