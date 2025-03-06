import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      common: {
        dashboard: 'Dashboard',
        marketplace: 'Marketplace',
        contracts: 'Contracts',
        notifications: 'Notifications',
        settings: 'Settings',
        search: 'Search',
        apply: 'Apply Now',
        sign: 'Sign Contract',
        loading: 'Loading...',
      },
      auth: {
        login: 'Login',
        register: 'Register',
        email: 'Email',
        password: 'Password',
      },
      sponsorship: {
        opportunities: 'Sponsorship Opportunities',
        location: 'Location',
        type: 'Type',
        price: 'Price',
        status: 'Status',
        available: 'Available',
        pending: 'Pending',
        taken: 'Taken',
      },
      contract: {
        startDate: 'Start Date',
        endDate: 'End Date',
        value: 'Value',
        status: 'Status',
      },
    },
  },
  fr: {
    translation: {
      common: {
        dashboard: 'Tableau de bord',
        marketplace: 'Marché',
        contracts: 'Contrats',
        notifications: 'Notifications',
        settings: 'Paramètres',
        search: 'Rechercher',
        apply: 'Postuler',
        sign: 'Signer le contrat',
        loading: 'Chargement...',
      },
      auth: {
        login: 'Connexion',
        register: 'Inscription',
        email: 'Email',
        password: 'Mot de passe',
      },
      sponsorship: {
        opportunities: 'Opportunités de parrainage',
        location: 'Emplacement',
        type: 'Type',
        price: 'Prix',
        status: 'Statut',
        available: 'Disponible',
        pending: 'En attente',
        taken: 'Pris',
      },
      contract: {
        startDate: 'Date de début',
        endDate: 'Date de fin',
        value: 'Valeur',
        status: 'Statut',
      },
    },
  },
  it: {
    translation: {
      common: {
        dashboard: 'Dashboard',
        marketplace: 'Mercato',
        contracts: 'Contratti',
        notifications: 'Notifiche',
        settings: 'Impostazioni',
        search: 'Cerca',
        apply: 'Candidati ora',
        sign: 'Firma contratto',
        loading: 'Caricamento...',
      },
      auth: {
        login: 'Accedi',
        register: 'Registrati',
        email: 'Email',
        password: 'Password',
      },
      sponsorship: {
        opportunities: 'Opportunità di sponsorizzazione',
        location: 'Posizione',
        type: 'Tipo',
        price: 'Prezzo',
        status: 'Stato',
        available: 'Disponibile',
        pending: 'In attesa',
        taken: 'Occupato',
      },
      contract: {
        startDate: 'Data inizio',
        endDate: 'Data fine',
        value: 'Valore',
        status: 'Stato',
      },
    },
  },
  de: {
    translation: {
      common: {
        dashboard: 'Dashboard',
        marketplace: 'Marktplatz',
        contracts: 'Verträge',
        notifications: 'Benachrichtigungen',
        settings: 'Einstellungen',
        search: 'Suchen',
        apply: 'Jetzt bewerben',
        sign: 'Vertrag unterschreiben',
        loading: 'Laden...',
      },
      auth: {
        login: 'Anmelden',
        register: 'Registrieren',
        email: 'E-Mail',
        password: 'Passwort',
      },
      sponsorship: {
        opportunities: 'Sponsoring-Möglichkeiten',
        location: 'Standort',
        type: 'Typ',
        price: 'Preis',
        status: 'Status',
        available: 'Verfügbar',
        pending: 'Ausstehend',
        taken: 'Vergeben',
      },
      contract: {
        startDate: 'Startdatum',
        endDate: 'Enddatum',
        value: 'Wert',
        status: 'Status',
      },
    },
  },
  ar: {
    translation: {
      common: {
        dashboard: 'لوحة التحكم',
        marketplace: 'السوق',
        contracts: 'العقود',
        notifications: 'الإشعارات',
        settings: 'الإعدادات',
        search: 'بحث',
        apply: 'تقدم الآن',
        sign: 'توقيع العقد',
        loading: 'جاري التحميل...',
      },
      auth: {
        login: 'تسجيل الدخول',
        register: 'التسجيل',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
      },
      sponsorship: {
        opportunities: 'فرص الرعاية',
        location: 'الموقع',
        type: 'النوع',
        price: 'السعر',
        status: 'الحالة',
        available: 'متاح',
        pending: 'قيد الانتظار',
        taken: 'محجوز',
      },
      contract: {
        startDate: 'تاريخ البدء',
        endDate: 'تاريخ الانتهاء',
        value: 'القيمة',
        status: 'الحالة',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;