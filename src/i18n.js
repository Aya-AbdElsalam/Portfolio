import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Projects: "Projects",
      Contact: "Contact",
      Setting: "Setting",
      Colors: "Colors",
      lan: "lan",
      EN: "EN",
      AR: "AR",
      homeTitle: "HI, I'M AYA AbdElsalam!",
      "CREATIVE CODER": "CREATIVE CODER",
      "FRONTEND DEVELOPER": "FRONTEND DEVELOPER",
      homeP:
        "I am a front-end developer with good knowledge of HTML5, CSS3,  JAVASCRIPT, REACT.I can build a Responsive Website so that your website will look perfect on all devices. ",

      ///////About//////////////
      personalInformationTitle: "PERSONAL INFORMATION",
      FirstName: "First Name:",
      FirstNameValue: "Aya",
      LastName: "Last Name:",
      LastNameValue: "Abdelsalam",
      Address: "Address:",
      AddressValue: "Egypt",
      Phone: "Phone:",
      PhoneValue: "01062371568",
      Age: "Age: ",
      AgeValue: "24 years",
      Langages: "Langages: ",
      LangagesValue: "Arabic,English ",
      Nationality: "Nationality: ",
      NationalityValue: "Egyptian",
      Freelance: "Freelance: ",
      FreelanceValue: "Available",
      Email: "Email: ",
      DOWNLOADCV: "DOWNLOAD CV",
      MYSKILLS: "MY SKILLS",
      "90%": "90%",
      "85%": "85%",
      "80%": "80%",
      "70%": "70%",
      "60%": "60%",
      /////projects////////
      projects_page_title: "projects",
      projectDetailsTitle: "Project/",
      livepreview: "live preview",
      code: "code",
      PAGES: "PAGES",
      FEATURES: "FEATURES",
      Using: "Using :",
      toStoreData: "to store data",
      backToProjects: "back to projects",
      //////GET IN TOUCH//////
      contactPageTitle: "GET IN TOUCH",
      YourName: "Your Name",
      YourEmail: "Your Email",
      Subject: "Subject",
      YourMessage: "Your Message",
      SendMessage: "Send Message",
      contactMethodTitle: "DON'T BE SHY!",
      contactMethodP:
        "Don't be shy to contact me. I am always available to discuss new projects and creative ideas to be part of your vision",
      MailMe: "Mail Me: ",
      CallMe: "Call Me: ",
      msgTitle: "THANK YOU",
      msgP: "Your message has been sent",
    },
  },
  ar: {
    translation: {
      Home: "الصفحه الرئيسية",
      About: "معلومات عني",
      Projects: "مشاريع",
      Contact: "اتصل بنا",
      Setting: "الاعدادات",
      Colors: "الألوان",
      lan: "اللغة",
      EN: "الانجليزيه",
      AR: "العربية",
      homeTitle: "مرحبا , انا ايه عبد السلام!",
      "CREATIVE CODER": "البرمجه  بطريقة  ابداعية",
      "FRONTEND DEVELOPER": "مطورة  واجهات ويب أمامية",
      homeP:
        "أنا مطورة واجهات ويب أمامية ولدي معرفة جيدة بـ HTML5 وCSS3 وJAVASCRIPT وREACT. كما يمكنني إنشاء موقع ويب سريع الاستجابة بحيث يبدو موقع الويب الخاص بك مثاليًا على جميع الأجهزة.",
      "More about me": "للمزيد من المعلومات",
      ///////About//////////////
      personalInformationTitle: "معلومات شخصية",
      FirstName: "الأسم الأول: ",
      FirstNameValue: "آية",
      LastName: "الأسم الأخير: ",
      LastNameValue: "عبد السلام",
      Address: "العنوان: ",
      AddressValue: "مصر",
      Phone: "الهاتف:",
      PhoneValue: "٠١٠٦٢٣٧١٥٦٨",
      Age: "العمر: ",
      AgeValue: "٢٤ سنة",
      Langages: "اللغة: ",
      LangagesValue: "العربية و الإنجليزية",
      Nationality: "الجنسية: ",
      NationalityValue: "مصرية",
      Freelance: "العمل المستقل: ",
      FreelanceValue: "متاح",
      Email: "البريد الإلكتروني: ",
      DOWNLOADCV: "تحميل السيرة الذاتية",
      MYSKILLS: "مهاراتي",
      msgTitle: "شكراً لتواصلك",
      msgP: "لقد تم إرسال رسالتك",
      "90%": "٩٠٪",
      "85%": "٨٥٪",
      "80%": "٨٠٪",
      "70%": "٧٠٪",
      "60%": "٦٠٪",
      /////projects////////
      projects_page_title: "مشاريع",
      ///project details////
      projectDetailsTitle: "مشروع/",
      livepreview: "للمعاينة",
      code: "الكود",
      PAGES: "الصفحات",
      FEATURES: "السمات",
      Using: "تم استخدام",
      toStoreData: "لتخزين البيانات",
      backToProjects: "العودة للمشاريع",

      //////GET IN TOUCH//////
      contactPageTitle: "لنبقى على تواصل",
      YourName: "الأسم",
      YourEmail: "البريد الإلكتروني",
      Subject: "الموضوع",
      YourMessage: "الرسالة",
      SendMessage: "إرسال",
      contactMethodTitle: "لا تتردد!",
      contactMethodP:
        "لا تتردد في التواصل معي. أنا متاحة دائمًا لمناقشة المشاريع الجديدة و الأفكار الإبداعية لأكون جزءاً من رؤيتك",
      MailMe: "البريد الإلكتروني: ",
      CallMe: " رقم الهاتف: ",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
