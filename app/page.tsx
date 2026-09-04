'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Check, ChevronDown, Globe2, LockKeyhole, Menu, MessageCircle, Play, ShieldCheck, Sparkles, X } from 'lucide-react'

const logo = '/vertragflow-wordmark.png'
const navLogo = '/vertragflow-icon.png'
const heroImage = '/vertragflow-hero-travel.png'
const whatsapp = '212612211235'
type Locale = 'ar' | 'fr' | 'en' | 'de'
type Copy = typeof translations.ar

const translations = {
  ar: {
    nav: ['كيفاش خدام', 'الحلول', 'الأثمنة', 'الأسئلة'],
    badge: 'طريقك للكونترا فألمانيا كيبدا هنا',
    title: 'ماتقلبش على الكونترا ..خليها تجي لعندك',
    sub: 'واش عييتي من صيفط الإيميلات بوحدك للشركات الألمانية؟ VertragFlow كيدير ليك هاد الخدمة — كيصيفط الوثائق ديالك لأكثر من 1000 شركة، بإيميلات مختلفة وبروفيسيونال، بلا ما يبان سبام.',
    primary: 'تواصل معنا',
    secondary: 'شوف كيفاش خدام',
    trusted: 'اختيار المرشحين الطموحين',
    systemTitle: 'كيفاش خدام النظام؟',
    systemBody: 'استعمال المنصة بسيط بزاف: كافي تطلع السيرة الذاتية ديالك مرة وحدة، والباقي كيتدبر بوحدو. كل إيميل كيتكتب بطريقة مختلفة على حساب اسم الشركة، اسم المسؤول اللي غادي يقراه إلا كان متوفر، والمطالب ديال الوظيفة. هادشي كيخلي كل رسالة تبان مكتوبة خصيصا لهاد الشركة، ماشي رسالة معممة، وهادشي علاش ما كتتحسبش سبام.',
    privacy: 'الجيميل ديالك كيتربط بطريقة آمنة عبر OAuth وكيتستعمل غير لصيفط الإيميلات اللي وافقتي عليها؛ VertragFlow ما كيقراش ولا كيخزن محتوى الإيميلات ديالك. عناوين الشركات كيجيو غير من اللائحة اللي طلعتي، بلا جمع ولا بيع للبيانات. السيرة الذاتية والرسائل والإيميلات المولدة كيتخزنو غير باش تخدم المنصة، وتقدر تمحيهم نهائيا فأي وقت من الإعدادات. المعطيات ديالك ما كتبعش لحتى طرف ثالث.',
    privacyLink: 'قرا سياسة الخصوصية كاملة',
    workflow: 'من الوثائق حتى للكونترا، كلشي منظم',
    workflowSub: 'نتا عطينا المعلومات والوثائق ديالك، VertragFlow كيتكلف بالباقي.',
    steps: [
      ['01', 'عطينا الوثائق ديالك', 'بعتي السيرة الذاتية ديالك PDF ولائحة الشركات لي باغي توصل ليهم.'],
      ['02', 'كل شركة كتوصلها إيميل خاص بيها', 'الذكاء الاصطناعي كيكتب إيميل مختلف لكل شركة، مبني على السيرة الذاتية ديالك والوظيفة المطلوبة.'],
      ['03', 'نتا كتصادق، حنا كنصيفطو بلا سبام', 'ما كنصيفطو والو غير بموافقتك. من بعد كيتصيفطو بشوية من جيميل ديالك.'],
    ],
    agency: 'حل عملي للمرشحين والوكالات',
    agencySub: 'من فرد باغي فرصة وحدة حتى لوكالة كتخدم مع عشرات المرشحين.',
    cards: [
      ['للأفراد', 'أرسل لائحة الشركات كاملة بلا ما تضيع الوقت فالإيميلات.'],
      ['للوكالات', 'دبر حملات الترشح ديال المرشحين ديالك من بلاصة وحدة.'],
      ['بشكل آمن', 'كل إرسال كيتراجع ويتصادق عليه قبل ما يخرج.'],
    ],
    pricing: 'أثمنة واضحة، فرص أكثر',
    priceSub: 'اختار الخطة لي مناسبة ليك وبدا توسع الوصول ديالك.',
    individual: 'للأفراد',
    agency: 'للوكالات',
    individualPrice: '199',
    agencyPrice: 'تواصل معنا',
    month: 'درهم / شهر',
    candidates: '',
    included: ['أكثر من 10 مستفيدين', 'إيميل مختلف لكل شركة', 'موافقة قبل كل إرسال', 'رسائل مناسبة لكل طلب'],
    start: 'بدا دابا',
    faq: 'الأسئلة لي كيتعاودو بزاف',
    faqs: [
      ['شنو هو VertragFlow؟', 'منصة كتعاونك تصيفط ملفات الترشح للشركات الألمانية بطريقة منظمة ومهنية.'],
      ['واش كيتصيفط نفس الإيميل للجميع؟', 'لا. كيتكتب إيميل مختلف لكل شركة، حسب البروفايل والوظيفة.'],
      ['واش نقدر نراجع الإيميلات؟', 'نعم، والو ما كيمشي بلا موافقتك.'],
      ['شحال ديال المرشحين فخطة الوكالة؟', 'الخطة كتدعم حتى 50 مرشح. تواصل معنا باش نحددو العرض المناسب.'],
    ],
    cta: 'ركز على المقابلات، وخلي الإرسال علينا.',
    ctaSub: 'عطينا المعلومات ديالك وغادي نرجعو ليك مباشرة عبر واتساب.',
    formTitle: 'خليونا نهضرو على المشروع ديالك',
    name: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    email: 'الإيميل',
    goal: 'شنو باغي تحسن؟',
    send: 'كمل عبر واتساب',
    close: 'سد',
    footer: 'الطريق للكونترا ولى أسهل.',
    sendLabel: 'VertragFlow lead',
  },
  fr: {
    nav: ['Fonctionnement', 'Solutions', 'Tarifs', 'FAQ'],
    badge: 'Votre chemin vers le contrat commence ici',
    title: 'Trouvez votre Ausbildung ou votre emploi en Allemagne',
    sub: "Marre d'envoyer des e-mails un par un ? VertragFlow le fait pour vous — vos documents sont envoyés à plus de 1000 entreprises, avec des messages professionnels et différents, sans spam.",
    primary: 'Parler à un expert',
    secondary: 'Voir comment ça marche',
    trusted: 'Choisi par des candidats ambitieux',
    systemTitle: 'Comment fonctionne le système ?',
    systemBody: 'La plateforme est très simple : téléchargez votre CV une seule fois et le reste est automatisé. Chaque e-mail est rédigé différemment selon le nom de l’entreprise, le nom du responsable RH lorsqu’il est disponible et les exigences précises du poste. Chaque message semble ainsi écrit à la main pour cette entreprise, jamais comme un envoi générique — ce qui protège votre compte contre le spam.',
    privacy: 'Votre Gmail est connecté de façon sécurisée via OAuth et sert uniquement à envoyer les e-mails que vous avez approuvés ; VertragFlow ne lit ni ne stocke le contenu de votre boîte de réception. Les adresses proviennent uniquement de votre liste importée, sans collecte ni revente. Les CV, lettres et e-mails générés sont conservés uniquement pour faire fonctionner le service et peuvent être supprimés à tout moment depuis les Paramètres. Vos données ne sont jamais vendues à des tiers.',
    privacyLink: 'Lire la politique de confidentialité',
    workflow: 'Des documents au contrat, tout est organisé',
    workflowSub: 'Vous fournissez vos informations, VertragFlow s’occupe du reste.',
    steps: [
      ['01', 'Envoyez vos documents', 'Votre CV PDF et la liste des entreprises ciblées.'],
      ['02', 'Un e-mail unique par entreprise', 'L’IA rédige un message adapté à votre CV et au poste.'],
      ['03', 'Vous approuvez, nous envoyons', 'Rien ne part sans votre accord, depuis votre Gmail.'],
    ],
    agency: 'Pour les candidats et les agences',
    agencySub: 'D’une candidature individuelle à la gestion de dizaines de profils.',
    cards: [
      ['Individuels', 'Contactez plus d’entreprises sans perdre vos journées.'],
      ['Agences', 'Gérez les campagnes de vos candidats depuis un seul espace.'],
      ['Sécurisé', 'Chaque envoi est contrôlé avant de partir.'],
    ],
    pricing: 'Des tarifs simples, plus de chances',
    priceSub: 'Choisissez l’offre adaptée à votre volume.',
    individual: 'Individuels',
    agency: 'Agences',
    individualPrice: '199',
    agencyPrice: 'Jusqu’à 2 990',
    month: 'MAD / mois',
    candidates: '',
    included: ['1000+ entreprises', 'Un e-mail unique par entreprise', 'Approbation avant envoi', 'Envoi progressif anti-spam'],
    start: 'Commencer maintenant',
    faq: 'Questions fréquentes',
    faqs: [
      ['Qu’est-ce que VertragFlow ?', 'Une plateforme pour envoyer vos candidatures aux entreprises allemandes de façon professionnelle.'],
      ['Le même e-mail est-il envoyé partout ?', 'Non, chaque entreprise reçoit un message adapté.'],
      ['Puis-je relire les e-mails ?', 'Oui, aucun envoi ne part sans votre approbation.'],
      ['Combien de candidats pour une agence ?', 'Jusqu’à 50 candidats. Contactez-nous pour une offre adaptée.'],
    ],
    cta: 'Concentrez-vous sur les entretiens, nous gérons les envois.',
    ctaSub: 'Partagez vos informations et recevez une réponse sur WhatsApp.',
    formTitle: 'Parlons de votre projet',
    name: 'Nom complet',
    phone: 'Téléphone',
    email: 'E-mail',
    goal: 'Que souhaitez-vous améliorer ?',
    send: 'Continuer sur WhatsApp',
    close: 'Fermer',
    footer: 'Le chemin vers le contrat, simplifié.',
    sendLabel: 'VertragFlow lead',
  },
  en: {
    nav: ['How it works', 'Solutions', 'Pricing', 'FAQ'],
    badge: 'Your path to a German contract starts here',
    title: 'Find your Ausbildung or job in Germany — faster',
    sub: 'Tired of manually emailing German companies? VertragFlow sends your documents to 1000+ companies with unique, professional messages — without looking like spam.',
    primary: 'Talk to us',
    secondary: 'See how it works',
    trusted: 'Chosen by ambitious candidates',
    systemTitle: 'How the system works',
    systemBody: 'The platform is remarkably easy to use: upload your CV once and the rest is handled automatically. Every email is written differently based on the company name, the hiring contact’s name when available, and the role’s specific requirements. Each message feels hand-written for that company, never like a generic blast — which is exactly why it avoids spam flags.',
    privacy: 'Your Gmail is connected securely via OAuth and is only used to send emails you explicitly approve; VertragFlow never reads or stores your inbox contents. Company addresses come only from the list you upload, with no scraping or data reselling. Uploaded CVs, cover letters, and generated emails are stored only to run the service and can be permanently deleted anytime from Settings. Your data is never sold to third parties.',
    privacyLink: 'Read the full privacy policy',
    workflow: 'From documents to contract, organized',
    workflowSub: 'You provide the details. VertragFlow handles the outreach.',
    steps: [
      ['01', 'Give us your documents', 'Upload your CV PDF and target company list.'],
      ['02', 'Every company gets its own email', 'AI writes a tailored message based on your CV and role.'],
      ['03', 'You approve, we send safely', 'Nothing goes out without approval, from your Gmail.'],
    ],
    agency: 'Built for candidates and agencies',
    agencySub: 'From one personal application to dozens of candidate profiles.',
    cards: [
      ['Individuals', 'Reach more companies without spending your days emailing.'],
      ['Agencies', 'Manage candidate outreach from one focused workspace.'],
      ['Safe by design', 'Every send is reviewed and approved first.'],
    ],
    pricing: 'Clear pricing. More chances.',
    priceSub: 'Choose the plan that fits your volume.',
    individual: 'Individuals',
    agency: 'Agencies',
    individualPrice: '199',
    agencyPrice: 'Up to 2,990',
    month: 'MAD / month',
    candidates: '',
    included: ['1000+ companies', 'Unique email per company', 'Approval before sending', 'Gradual anti-spam sending'],
    start: 'Get started',
    faq: 'Questions, answered',
    faqs: [
      ['What is VertragFlow?', 'A platform for professional outreach to German companies.'],
      ['Is the same email sent everywhere?', 'No. Every company receives a tailored message.'],
      ['Can I review emails first?', 'Yes. Nothing sends without your approval.'],
      ['How many candidates for an agency?', 'Up to 50 candidates. Contact us for the right offer.'],
    ],
    cta: 'Focus on interviews. We handle the outreach.',
    ctaSub: 'Share your details and we’ll reply directly on WhatsApp.',
    formTitle: 'Let’s talk about your goals',
    name: 'Full name',
    phone: 'Phone number',
    email: 'Email',
    goal: 'What do you want to improve?',
    send: 'Continue on WhatsApp',
    close: 'Close',
    footer: 'A simpler path to the contract.',
    sendLabel: 'VertragFlow lead',
  },
  de: {
    nav: ['So funktioniert es', 'Lösungen', 'Preise', 'FAQ'],
    badge: 'Dein Weg zum Vertrag in Deutschland beginnt hier',
    title: 'Finde deine Ausbildung oder deinen Job in Deutschland — schneller',
    sub: 'VertragFlow sendet deine Unterlagen an über 1000 Unternehmen — individuell und professionell, ohne Spam-Eindruck.',
    primary: 'Kontakt aufnehmen',
    secondary: 'So funktioniert es',
    trusted: 'Für ambitionierte Bewerber',
    systemTitle: 'So funktioniert das System',
    systemBody: 'Die Plattform ist sehr einfach: Lebenslauf einmal hochladen, den Rest übernimmt das System automatisch. Jede E-Mail wird individuell verfasst — anhand des Unternehmensnamens, der zuständigen Ansprechperson (sofern verfügbar) und der konkreten Anforderungen der Stelle. So wirkt jede Nachricht persönlich für dieses Unternehmen geschrieben, nie wie eine Massen-Nachricht — und schützt das Konto vor Spam-Markierungen.',
    privacy: 'Ihr Gmail-Konto wird sicher über OAuth verbunden und ausschließlich zum Versenden ausdrücklich genehmigter E-Mails verwendet; VertragFlow liest oder speichert niemals Ihren Posteingang. Firmenadressen stammen nur aus Ihrer hochgeladenen Liste, ohne Scraping oder Weiterverkauf. Lebensläufe, Schreiben und generierte E-Mails werden nur zum Betrieb des Dienstes gespeichert und können jederzeit in den Einstellungen dauerhaft gelöscht werden. Ihre Daten werden niemals an Dritte verkauft.',
    privacyLink: 'Vollständige Datenschutzerklärung lesen',
    workflow: 'Von den Unterlagen zum Vertrag',
    workflowSub: 'Du lieferst die Informationen. VertragFlow übernimmt den Versand.',
    steps: [
      ['01', 'Unterlagen senden', 'Lade deinen Lebenslauf und deine Zielfirmen hoch.'],
      ['02', 'Eine eigene E-Mail pro Unternehmen', 'Die KI erstellt individuelle Nachrichten für jede Stelle.'],
      ['03', 'Du bestätigst, wir senden', 'Nichts wird ohne deine Zustimmung versendet.'],
    ],
    agency: 'Für Bewerber und Agenturen',
    agencySub: 'Von einer Bewerbung bis zur Verwaltung vieler Profile.',
    cards: [
      ['Einzelpersonen', 'Erreiche mehr Unternehmen ohne manuelle E-Mails.'],
      ['Agenturen', 'Verwalte deine Kandidaten zentral.'],
      ['Sicher', 'Jeder Versand wird zuerst geprüft.'],
    ],
    pricing: 'Klare Preise. Mehr Chancen.',
    priceSub: 'Wähle den passenden Umfang.',
    individual: 'Einzelpersonen',
    agency: 'Agenturen',
    individualPrice: '199',
    agencyPrice: 'Bis 2.990',
    month: 'MAD / Monat',
    candidates: '',
    included: ['1000+ Unternehmen', 'Individuelle E-Mail', 'Freigabe vor Versand', 'Schrittweiser Versand'],
    start: 'Jetzt starten',
    faq: 'Häufige Fragen',
    faqs: [
      ['Was ist VertragFlow?', 'Eine Plattform für professionelle Bewerbungsansprache in Deutschland.'],
      ['Wird überall dieselbe E-Mail gesendet?', 'Nein, jede Nachricht wird angepasst.'],
      ['Kann ich E-Mails prüfen?', 'Ja, ohne deine Zustimmung wird nichts gesendet.'],
      ['Wie viele Kandidaten für Agenturen?', 'Bis zu 50 Kandidaten.'],
    ],
    cta: 'Konzentriere dich auf Gespräche. Wir übernehmen den Versand.',
    ctaSub: 'Sende uns deine Daten und erhalte eine Antwort über WhatsApp.',
    formTitle: 'Sprechen wir über dein Ziel',
    name: 'Vollständiger Name',
    phone: 'Telefon',
    email: 'E-Mail',
    goal: 'Was möchtest du verbessern?',
    send: 'Über WhatsApp fortfahren',
    close: 'Schließen',
    footer: 'Ein einfacher Weg zum Vertrag.',
    sendLabel: 'VertragFlow lead',
  },
} satisfies Record<Locale, unknown> as Record<Locale, Copy>

const featureSections = {
  ar: {
    problem: ['وقف تصيفط الترشيحات يدويا للشركات.', 'الترشيح اليدوي كياخد وقت بزاف، وهادشي كيخليك تصيفط لعدد قليل من الشركات — وكلما قل عدد الترشيحات، طلعت نسبة الرفض.'],
    databaseSub: 'آلاف Arbeitgeber كيتسناوك.',
    database: ['قاعدة بيانات ديال المشغلين واجدة', 'قرّب لمليون إعلان خدمة وتكوين من وكالات التشغيل الألمانية والنمساوية، مع أكثر من 330,000 إيميل مباشر وموثوق. كتقدر تقلب بالمهنة والمدينة والجهة، والإعلانات ديال الوسطاء كتكون معلّمة.'],
    application: ['كل طلب مكتوب على حساب الوظيفة', 'الذكاء الاصطناعي كيقرا CV ديالك ونص الإعلان وكيكتب Bewerbung ألمانية موجهة لهاد المشغل بالضبط، مع الوثائق مرفقة باسم منظم.'],
    sending: ['كيتصيفط بالطريقة الصحيحة', 'الإيميلات كتمشي من Gmail ديالك، متفرقة مع الوقت، ونفس المشغل ما كيتعاودش يتواصل معاه على نفس المرشح.'],
    approval: ['والو ما كيمشي بلا موافقتك', 'راجع، عدّل، صادق أو رفض كل مسودة بوحدها، أو دير موافقة جماعية ملي تكون الدفعة واجدة.'],
    replies: ['الردود كترجع لعندك', 'المنصة كترصد غير الردود على الطلبات المرسلة وكتطلعها ليك تلقائيا، والوكالات كتشوف المرشحين اللي جاوبو بسرعة.'],
    agencyFeature: ['مبني للوكالات اللي كتدبر بزاف ديال المرشحين', 'Dashboard واحد كيبين شكون خاصو المراجعة، شكون واجد للإرسال، وشكون توصل برد. كل مرشح عندو pipeline وتاريخ ديالو، والواجهة خدامة بالعربية والألمانية والإنجليزية.'],
    quote: 'بلا ما يضيع الفريق ديالك الساعات فالبحث وكتابة الطلبات، كل مرشح كيوصلو عشرات الطلبات الألمانية الحقيقية من Gmail ديالو — ونتوما غير راجعو وصادقو.'
  },
  fr: {
    problem: ['Arrêtez de postuler manuellement auprès des Unternehmen.', "Les candidatures manuelles prennent beaucoup plus de temps, ce qui réduit le nombre d'entreprises contactées — et moins de candidatures signifie un taux de refus plus élevé."],
    databaseSub: 'Des milliers d’Arbeitgeber vous attendent.',
    database: ['Une base employeurs prête à l’emploi', 'Près d’un million d’offres issues des agences fédérales allemandes et autrichiennes, dont plus de 330 000 avec un e-mail direct vérifié. Recherchez par métier, ville ou région, avec les recruteurs signalés.'],
    application: ['Une candidature par poste, pas un modèle', 'L’IA lit votre CV et l’annonce réelle pour rédiger une Bewerbung allemande adressée à cet employeur précis, avec vos documents joints sous un nom propre.'],
    sending: ['Envoyé de la bonne façon', 'Les e-mails partent de votre Gmail, espacés dans le temps, et le même employeur ne sera jamais contacté deux fois pour le même candidat.'],
    approval: ['Rien ne part sans votre accord', 'Relisez, modifiez, approuvez ou refusez chaque brouillon, ou validez toute une série quand elle est prête.'],
    replies: ['Les réponses vous reviennent', 'La plateforme détecte uniquement les réponses aux candidatures envoyées et les remonte automatiquement. Les agences voient immédiatement les candidats qui ont reçu une réponse.'],
    agencyFeature: ['Pensé pour gérer beaucoup de candidats', 'Un tableau de bord montre qui doit être relu, qui est prêt à envoyer et qui a reçu une réponse. Pipeline et historique par candidat, avec interface arabe, allemande et anglaise.'],
    quote: 'Au lieu de faire passer des heures à votre équipe à chercher des employeurs et rédiger chaque candidature, chaque candidat reçoit des dizaines de demandes allemandes authentiques depuis sa boîte — vous n’avez plus qu’à relire et approuver.'
  },
  en: {
    problem: ['Stop applying to Unternehmen manually.', 'Manual applications take far more time, so you end up sending to fewer companies — and fewer applications means a higher rejection rate.'],
    databaseSub: 'Thousands of Arbeitgeber are waiting.',
    database: ['A ready employer database', 'Nearly one million listings collected from German and Austrian federal employment agencies, with 330,000+ direct, verified employer emails. Search by profession, city, or region, with recruiters flagged separately.'],
    application: ['Applications written per job, not per template', 'AI reads the candidate’s CV and the actual job post to draft a German Bewerbung addressed to that employer, with documents attached using a proper filename.'],
    sending: ['Sent the right way', 'Emails go from the candidate’s own Gmail, spaced out over time, and the same employer is never contacted twice for the same candidate.'],
    approval: ['Nothing sends without approval', 'Review, edit, approve, or reject every draft individually — or bulk-approve a batch when it looks good.'],
    replies: ['Replies come back to them', 'The platform watches only for replies to sent applications and surfaces them automatically. Agencies instantly see which candidates got responses.'],
    agencyFeature: ['Built for running many candidates at once', 'One dashboard shows who needs review, who is ready to send, and who got replies. Per-candidate pipeline and history, with Arabic, German, and English interfaces.'],
    quote: 'Instead of your team spending hours finding employers and writing applications one by one, each candidate gets dozens of genuine German applications from their own inbox — and you just review and approve.'
  },
  de: {
    problem: ['Hör auf, dich manuell bei Unternehmen zu bewerben.', 'Manuelle Bewerbungen dauern deutlich länger, wodurch du an weniger Unternehmen schickst — und weniger Bewerbungen bedeuten eine höhere Ablehnungsquote.'],
    databaseSub: 'Tausende Arbeitgeber warten auf dich.',
    database: ['Eine fertige Arbeitgeber-Datenbank', 'Fast eine Million Stellen aus deutschen und österreichischen Arbeitsagenturen, davon über 330.000 mit direkter, verifizierter Arbeitgeber-E-Mail. Suche nach Beruf, Stadt oder Region; Vermittler werden markiert.'],
    application: ['Eine Bewerbung pro Stelle, kein Template', 'Die KI liest Lebenslauf und echte Stellenanzeige und schreibt eine deutsche Bewerbung an genau diesen Arbeitgeber. Dokumente werden sauber benannt angehängt.'],
    sending: ['Auf die richtige Weise versendet', 'E-Mails kommen aus dem eigenen Gmail-Postfach, werden zeitlich verteilt und derselbe Arbeitgeber wird pro Kandidat nie doppelt kontaktiert.'],
    approval: ['Nichts geht ohne Freigabe raus', 'Jeden Entwurf prüfen, bearbeiten, freigeben oder ablehnen — oder eine gute Serie gesammelt freigeben.'],
    replies: ['Antworten kommen direkt zurück', 'Die Plattform erkennt nur Antworten auf gesendete Bewerbungen und zeigt sie automatisch. Agenturen sehen sofort, welche Kandidaten Rückmeldungen erhalten haben.'],
    agencyFeature: ['Für viele Kandidaten gleichzeitig gebaut', 'Ein Dashboard zeigt offene Prüfungen, versandbereite Bewerbungen und Antworten. Pipeline und Verlauf pro Kandidat, mit arabischer, deutscher und englischer Oberfläche.'],
    quote: 'Statt dass Ihr Team stundenlang Arbeitgeber sucht und Bewerbungen einzeln schreibt, erhält jeder Kandidat Dutzende echte deutsche Bewerbungen aus dem eigenen Postfach — Sie prüfen und geben nur noch frei.'
  }
} satisfies Record<Locale, Record<string, string | string[]>>

export default function Page() {
  const [locale, setLocale] = useState<Locale>('ar')
  const [menu, setMenu] = useState(false)
  const [modal, setModal] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [form, setForm] = useState({ name: '', phone: '', email: '', goal: '' })
  const t = useMemo(() => translations[locale], [locale])
  const f = featureSections[locale]
  const renderProblemTitle = () => {
    const [before, after] = f.problem[0].split('Unternehmen')
    if (after !== undefined) return <>{before}<em className="font-serif not-italic text-primary">Unternehmen</em>{after}</>
    return f.problem[0]
  }

  useEffect(() => {
    const saved = window.localStorage.getItem('vertrag-locale') as Locale | null
    if (saved && saved in translations) setLocale(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    window.localStorage.setItem('vertrag-locale', locale)
  }, [locale])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `${t.sendLabel}%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AGoal: ${form.goal}`
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
    setModal(false)
  }

  return (
    <main
      id="top"
      className={`min-h-screen overflow-hidden bg-background text-foreground ${locale === 'ar' ? '[&_h1]:font-arabic-title [&_h2]:font-arabic-title [&_h3]:font-arabic-title' : ''}`}
    >
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src={navLogo} alt="VertragFlow logo" className="size-9 rounded-lg object-cover" />
            <span className="font-mono text-sm font-bold tracking-[0.12em]">VertragFlow</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {t.nav.map((x, i) => (
              <a key={x} href={['#workflow', '#solutions', '#pricing', '#faq'][i]} className="transition-colors hover:text-foreground">
                {x}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <label className="hidden items-center gap-2 rounded-full border border-border px-3 py-2 text-xs md:flex">
              <Globe2 className="size-3.5" />
              <select aria-label="Language" value={locale} onChange={(e) => setLocale(e.target.value as Locale)} className="bg-transparent outline-none">
                <option value="ar">دارجة</option>
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
              </select>
            </label>

            <div className="hidden items-center gap-2 md:flex">
              <a href="https://vertragflow.com/login" className="rounded-full border border-border px-4 py-2 text-sm font-semibold">{t.start}</a>
              <button onClick={() => setModal(true)} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">{t.primary}</button>
            </div>

            <button aria-label="Open menu" onClick={() => setMenu(!menu)} className="rounded-full border border-border p-2 md:hidden">
              {menu ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {menu && (
          <div className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden">
            {t.nav.map((x, i) => (
              <a key={x} href={['#workflow', '#solutions', '#pricing', '#faq'][i]} onClick={() => setMenu(false)}>
                {x}
              </a>
            ))}
            <div className="flex flex-col gap-2">
              <a href="https://vertragflow.com/login" onClick={() => setMenu(false)} className="rounded-full border border-border px-4 py-3 text-center font-semibold">{t.start}</a>
              <button onClick={() => { setMenu(false); setModal(true) }} className="rounded-full bg-primary px-4 py-3 font-semibold text-primary-foreground">{t.primary}</button>
            </div>
          </div>
        )}
      </header>

      <section className="mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-20 pt-36 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground">
              <span className="size-2 rounded-full bg-accent" />
              {t.badge}
            </div>

            <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-[-0.06em] sm:text-7xl lg:text-[5.6rem] font-roboto">
              {t.title}
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">{t.sub}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://vertragflow.com/login" className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground">
                {t.start}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button onClick={() => setModal(true)} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-semibold">
                <MessageCircle className="size-4 text-accent" />
                {t.primary}
              </button>
              <a href="#workflow" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-semibold">
                <Play className="size-4 fill-current" />
                {t.secondary}
              </a>
            </div>
          </div>

          {/* Image above card, tightly stacked */}
          <div className="relative mx-auto flex w-full max-w-[420px] flex-col items-center">
            <img
              src={heroImage}
              alt="شاب مغربي يحمل جواز سفر وعقد عمل ألماني"
              className="relative z-10 -mb-2 h-auto w-full max-w-[300px] object-contain"
            />

            <div className="relative z-20 w-full overflow-hidden rounded-[1.5rem] border border-border bg-card p-3">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-[10px] text-muted-foreground">VERTRAGFLOW / OUTREACH</span>
                <Sparkles className="size-4 text-accent" />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="rounded-xl bg-muted p-3">
                  <p className="text-xs text-muted-foreground">{locale === 'ar' ? 'الشركات المستهدفة' : 'Target companies'}</p>
                  <p className="mt-1.5 text-2xl font-black">
                    1,000<span className="text-accent">+</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-primary p-3 text-primary-foreground">
                    <ShieldCheck className="size-4 text-accent" />
                    <p className="mt-5 text-sm font-semibold">{locale === 'ar' ? 'بلا سبام' : 'Spam-safe'}</p>
                  </div>

                  <div className="rounded-xl border border-border p-3">
                    <MessageCircle className="size-4 text-accent" />
                    <p className="mt-5 text-sm font-semibold">إيميل خاص بكل شركة</p>
                  </div>
                </div>

                <div className="rounded-xl border border-border p-3">
                  <div className="flex items-center justify-between text-xs">
                    <span>{locale === 'ar' ? 'حالة الإرسال' : 'Sending status'}</span>
                    <span className="text-accent">LIVE</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-3/4 rounded-full bg-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/ the bottleneck</p><h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">{renderProblemTitle()}</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">{f.problem[1]}</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">{[f.problem[1], f.sending[1], f.replies[1]].map((item, i) => <article key={i} className="rounded-2xl border border-border bg-card p-6"><span className="font-mono text-sm text-primary">0{i + 1}</span><p className="mt-8 leading-7 text-muted-foreground">{item}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="rounded-3xl bg-primary-dark p-8 text-primary-foreground sm:p-12"><h2 className="text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">{f.database[0]}</h2><p className="mt-4 text-xl font-bold text-primary-foreground">{f.databaseSub}</p><p className="mt-5 max-w-3xl text-lg leading-8 text-primary-foreground/75">{f.database[1]}</p><div className="mt-10 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-primary p-6"><div className="text-5xl font-black tracking-[-0.06em]">1,000,000+</div><p className="mt-2 text-sm text-primary-foreground/80">{locale === 'ar' ? 'إعلان خدمة وتكوين' : locale === 'fr' ? 'offres et formations' : locale === 'de' ? 'Stellen und Ausbildungen' : 'jobs and apprenticeships'}</p></div><div className="rounded-2xl border border-primary-foreground/20 p-6"><div className="text-5xl font-black tracking-[-0.06em]">330,000+</div><p className="mt-2 text-sm text-primary-foreground/80">{locale === 'ar' ? 'إيميل مشغل موثوق' : locale === 'fr' ? 'e-mails employeurs vérifiés' : locale === 'de' ? 'verifizierte Arbeitgeber-E-Mails' : 'verified employer emails'}</p></div></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/ per job</p><h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-5xl">{f.application[0]}</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">{f.application[1]}</p></div><div className="rounded-3xl border border-border bg-card p-5"><div className="rounded-2xl border border-dashed border-primary/60 bg-background p-6"><div className="flex items-center justify-between border-b border-border pb-4 text-sm font-semibold"><span>Review / Bewerbung</span><span className="text-primary">PDF attached</span></div><div className="mt-6 flex flex-col gap-3"><div className="h-3 w-2/3 rounded bg-muted"/><div className="h-3 w-full rounded bg-muted"/><div className="h-3 w-5/6 rounded bg-muted"/><div className="mt-4 rounded-xl bg-primary/10 p-4 text-sm text-primary">Bewerbung_Name_Rolle.pdf</div></div></div></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="grid gap-4 md:grid-cols-3">{[f.sending, f.approval, f.replies].map(([title, body]) => <article key={title} className="rounded-2xl border border-border bg-card p-7"><Check className="size-5 text-primary"/><h3 className="mt-8 text-2xl font-black">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{body}</p></article>)}</div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="rounded-3xl border border-border bg-card p-8 sm:p-12"><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/ agency mode</p><h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">{f.agencyFeature[0]}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{f.agencyFeature[1]}</p><div className="mt-10 rounded-2xl border border-dashed border-primary/60 bg-background p-5"><div className="grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-primary p-5 text-primary-foreground">Review queue<br/><strong className="text-2xl">24</strong></div><div className="rounded-xl border border-border p-5">Ready to send<br/><strong className="text-2xl">18</strong></div><div className="rounded-xl border border-border p-5">Replies<br/><strong className="text-2xl">07</strong></div></div></div></div></section>

      <section className="mx-auto max-w-5xl px-5 py-16 text-center lg:px-8"><blockquote className="text-balance text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">“{f.quote}”</blockquote></section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/ simple by design</p>
            <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-5xl">{t.systemTitle}</h2>
            <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">{t.systemBody}</p>
          </div>
          <div className="flex flex-col gap-3" aria-label={t.systemTitle}>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"><span className="font-mono text-sm">CV</span></div>
              <span className="font-semibold">{locale === 'ar' ? 'السيرة الذاتية مرة وحدة' : locale === 'fr' ? 'CV téléchargé une fois' : locale === 'de' ? 'Lebenslauf einmal hochladen' : 'Upload your CV once'}</span>
            </div>
            <div className="flex justify-center text-2xl text-accent" aria-hidden="true">↓</div>
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-background p-4 text-sm font-semibold">
              <span className="rounded-full bg-muted px-3 py-2">{locale === 'ar' ? 'اسم الشركة' : locale === 'fr' ? 'Entreprise' : locale === 'de' ? 'Unternehmen' : 'Company name'}</span>
              <span className="rounded-full bg-muted px-3 py-2">{locale === 'ar' ? 'المسؤول' : locale === 'fr' ? 'Responsable' : locale === 'de' ? 'Ansprechperson' : 'Contact name'}</span>
              <span className="rounded-full bg-muted px-3 py-2">{locale === 'ar' ? 'متطلبات الوظيفة' : locale === 'fr' ? 'Exigences du poste' : locale === 'de' ? 'Stellenanforderungen' : 'Job requirements'}</span>
            </div>
            <div className="flex justify-center text-2xl text-accent" aria-hidden="true">↓</div>
            <div className="flex items-center gap-3 rounded-2xl border border-accent/50 bg-accent/10 p-4">
              <MessageCircle className="size-5 shrink-0 text-accent" />
              <span className="font-semibold">{locale === 'ar' ? 'إيميل فريد مكتوب لهاد الشركة' : locale === 'fr' ? 'Un e-mail unique pour cette entreprise' : locale === 'de' ? 'Eine einzigartige E-Mail für dieses Unternehmen' : 'A unique email for that company'}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/ 3 steps</p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">{t.workflow}</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{t.workflowSub}</p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {t.steps.map(([n, title, body]) => (
            <div key={n} className="bg-background p-7 transition-colors hover:bg-muted/50">
              <span className="font-mono text-xs text-accent">{n}</span>
              <h3 className="mt-16 text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="bg-primary py-28 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/ built for momentum</p>
          <div className="mt-5 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">{t.agency}</h2>
            <p className="max-w-xl text-lg leading-8 text-primary-foreground/65">{t.agencySub}</p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {t.cards.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
                <div className="mb-16 flex justify-between">
                  <span className="text-sm font-semibold">{title}</span>
                  <ArrowRight className="size-5 text-accent" />
                </div>
                <p className="text-xl leading-8 text-primary-foreground/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/ pricing</p>
            <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">{t.pricing}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t.priceSub}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PriceCard title={t.individual} price={t.individualPrice} month={t.month} candidates={t.candidates} items={t.included} onClick={() => window.open('https://vertragflow.com/login', '_blank', 'noopener,noreferrer')} button={t.start} />
            <PriceCard title={t.agency} price={t.agencyPrice} month={t.month} candidates={t.candidates} items={t.included} onClick={() => window.open('https://vertragflow.com/login', '_blank', 'noopener,noreferrer')} button={t.start} featured />
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-muted/35 py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">/ faq</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">{t.faq}</h2>

          <div className="mt-12 flex flex-col">
            {t.faqs.map(([q, a], i) => (
              <div key={q} className="border-b border-border">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-6 text-start text-lg font-semibold">
                  <span>{q}</span>
                  <ChevronDown className={`size-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="max-w-2xl pb-6 leading-7 text-muted-foreground">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-accent p-8 text-accent-foreground sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">{t.cta}</h2>
            <p className="mt-3 max-w-xl text-accent-foreground/75">{t.ctaSub}</p>
          </div>
          <button onClick={() => setModal(true)} className="inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground">
            {t.primary}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-muted/30 p-6 text-sm leading-7 text-muted-foreground">
          <LockKeyhole className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <p>{t.privacy}</p>
            <a href="/privacy" className="mt-3 inline-flex items-center gap-2 font-semibold text-foreground underline underline-offset-4">{t.privacyLink} <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="VertragFlow" className="size-7 rounded-md object-cover" />
            <span className="font-mono text-xs font-bold tracking-[0.12em] text-foreground">VertragFlow</span>
          </div>
          <p>{t.footer}</p>
          <p>© 2026 VertragFlow</p>
        </div>
      </footer>

      <button onClick={() => setModal(true)} className="fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:scale-105">
        <MessageCircle className="size-4 text-accent" />
        {t.primary}
      </button>

      {modal && (
        <div role="dialog" aria-modal="true" aria-labelledby="lead-title" className="fixed inset-0 z-50 flex items-end justify-center bg-primary/60 p-0 backdrop-blur-sm sm:items-center sm:p-5">
          <div className="w-full max-w-lg rounded-t-3xl bg-background p-6 shadow-2xl sm:rounded-3xl sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">/ hello</p>
                <h2 id="lead-title" className="mt-3 text-2xl font-black tracking-[-0.04em]">{t.formTitle}</h2>
              </div>
              <button aria-label={t.close} onClick={() => setModal(false)} className="rounded-full border border-border p-2">
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={submit} className="mt-7 flex flex-col gap-4">
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={t.name} className="rounded-xl border border-input bg-card px-4 py-3 outline-none placeholder:text-muted-foreground" />
              <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder={t.phone} className="rounded-xl border border-input bg-card px-4 py-3 outline-none placeholder:text-muted-foreground" />
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder={t.email} className="rounded-xl border border-input bg-card px-4 py-3 outline-none placeholder:text-muted-foreground" />
              <textarea required value={form.goal} onChange={e => setForm({ ...form, goal: e.target.value })} placeholder={t.goal} rows={3} className="resize-none rounded-xl border border-input bg-card px-4 py-3 outline-none placeholder:text-muted-foreground" />
              <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-5 py-3.5 font-semibold text-primary-foreground">
                <MessageCircle className="size-4 text-accent" />
                {t.send}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}

function PriceCard({
  title, price, month, candidates, items, button, onClick, featured = false
}: {
  title: string
  price: string
  month: string
  candidates: string
  items: string[]
  button: string
  onClick: () => void
  featured?: boolean
}) {
  return (
    <div className={`rounded-2xl border-2 p-6 ${featured ? 'border-primary bg-card' : 'border-border bg-muted/30'}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{title}</p>
          <div className="mt-5 text-4xl font-black tracking-[-0.06em]">
            <span>{price}</span>
            <span className={`text-sm font-medium tracking-normal text-muted-foreground ${price === 'تواصل معنا' ? 'hidden' : ''}`}>
              {month}
            </span>
          </div>
        </div>

      </div>

      {candidates ? <p className="mt-3 text-sm font-semibold text-accent">{candidates}</p> : null}

      <ul className="my-7 flex flex-col gap-3">
        {items.map(item => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>

      <button onClick={onClick} className="w-full rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground">{button}</button>
    </div>
  )
}

export {}
