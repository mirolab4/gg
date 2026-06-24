// ==================== قاعدة بيانات الدول ====================
const COUNTRIES = {
    "1": { name: "السعودية", code: "+966", flag: "🇸🇦", length: 9, region: "arab",
        operators: { "1": ["STC", "5"], "2": ["Mobily", "5"], "3": ["Zain", "5"], "0": ["جميع المقدمات", "all"] }},
    "2": { name: "مصر", code: "+20", flag: "🇪🇬", length: 10, region: "arab",
        operators: { "1": ["Vodafone", "10"], "2": ["Etisalat", "11"], "3": ["Orange", "12"], "4": ["WE", "15"], "0": ["جميع المقدمات", "all"] }},
    "3": { name: "الإمارات", code: "+971", flag: "🇦🇪", length: 9, region: "arab",
        operators: { "1": ["Etisalat", "50"], "2": ["Du", "55"], "0": ["جميع المقدمات", "all"] }},
    "4": { name: "الكويت", code: "+965", flag: "🇰🇼", length: 8, region: "arab",
        operators: { "1": ["Zain", "6"], "2": ["Ooredoo", "5"], "3": ["Etisalat", "9"], "0": ["جميع المقدمات", "all"] }},
    "5": { name: "قطر", code: "+974", flag: "🇶🇦", length: 8, region: "arab",
        operators: { "1": ["Ooredoo", "3"], "2": ["Vodafone", "5"], "0": ["جميع المقدمات", "all"] }},
    "6": { name: "البحرين", code: "+973", flag: "🇧🇭", length: 8, region: "arab",
        operators: { "1": ["Batelco", "3"], "2": ["Zain", "6"], "3": ["STC", "5"], "0": ["جميع المقدمات", "all"] }},
    "7": { name: "عمان", code: "+968", flag: "🇴🇲", length: 8, region: "arab",
        operators: { "1": ["Omantel", "9"], "2": ["Ooredoo", "7"], "0": ["جميع المقدمات", "all"] }},
    "8": { name: "الأردن", code: "+962", flag: "🇯🇴", length: 9, region: "arab",
        operators: { "1": ["Zain", "79"], "2": ["Orange", "77"], "3": ["Umniah", "78"], "0": ["جميع المقدمات", "all"] }},
    "9": { name: "العراق", code: "+964", flag: "🇮🇶", length: 10, region: "arab",
        operators: { "1": ["Zain", "78"], "2": ["Asiacell", "77"], "3": ["Korek", "75"], "0": ["جميع المقدمات", "all"] }},
    "10": { name: "لبنان", code: "+961", flag: "🇱🇧", length: 8, region: "arab",
        operators: { "1": ["Alfa", "3"], "2": ["Touch", "7"], "0": ["جميع المقدمات", "all"] }},
    "11": { name: "سوريا", code: "+963", flag: "🇸🇾", length: 9, region: "arab",
        operators: { "1": ["Syriatel", "9"], "2": ["MTN", "9"], "0": ["جميع المقدمات", "all"] }},
    "12": { name: "فلسطين", code: "+970", flag: "🇵🇸", length: 9, region: "arab",
        operators: { "1": ["Jawwal", "59"], "2": ["Ooredoo", "56"], "0": ["جميع المقدمات", "all"] }},
    "13": { name: "اليمن", code: "+967", flag: "🇾🇪", length: 9, region: "arab",
        operators: { "1": ["Yemen Mobile", "71"], "2": ["MTN", "77"], "0": ["جميع المقدمات", "all"] }},
    "14": { name: "ليبيا", code: "+218", flag: "🇱🇾", length: 9, region: "arab",
        operators: { "1": ["Libyana", "91"], "2": ["Madar", "92"], "0": ["جميع المقدمات", "all"] }},
    "15": { name: "تونس", code: "+216", flag: "🇹🇳", length: 8, region: "arab",
        operators: { "1": ["Orange", "9"], "2": ["Tunisie Telecom", "2"], "3": ["Ooredoo", "5"], "0": ["جميع المقدمات", "all"] }},
    "16": { name: "الجزائر", code: "+213", flag: "🇩🇿", length: 9, region: "arab",
        operators: { "1": ["Mobilis", "6"], "2": ["Djezzy", "7"], "3": ["Ooredoo", "5"], "0": ["جميع المقدمات", "all"] }},
    "17": { name: "المغرب", code: "+212", flag: "🇲🇦", length: 9, region: "arab",
        operators: { "1": ["Maroc Telecom", "6"], "2": ["Orange", "7"], "3": ["Inwi", "5"], "0": ["جميع المقدمات", "all"] }},
    "18": { name: "السودان", code: "+249", flag: "🇸🇩", length: 9, region: "africa",
        operators: { "1": ["Zain", "91"], "2": ["MTN", "96"], "3": ["Sudani", "99"], "0": ["جميع المقدمات", "all"] }},
    "19": { name: "موريتانيا", code: "+222", flag: "🇲🇷", length: 8, region: "africa",
        operators: { "1": ["Mattel", "2"], "2": ["Chinguitel", "3"], "3": ["Mauritel", "4"], "0": ["جميع المقدمات", "all"] }},
    "20": { name: "الصومال", code: "+252", flag: "🇸🇴", length: 8, region: "africa",
        operators: { "1": ["Hormuud", "61"], "2": ["Somtel", "63"], "0": ["جميع المقدمات", "all"] }},
    "21": { name: "الولايات المتحدة", code: "+1", flag: "🇺🇸", length: 10, region: "americas",
        operators: { "1": ["AT&T", "2"], "2": ["Verizon", "3"], "3": ["T-Mobile", "4"], "0": ["جميع المقدمات", "all"] }},
    "22": { name: "المملكة المتحدة", code: "+44", flag: "🇬🇧", length: 10, region: "europe",
        operators: { "1": ["EE", "77"], "2": ["Vodafone", "78"], "3": ["Three", "79"], "4": ["O2", "74"], "0": ["جميع المقدمات", "all"] }},
    "23": { name: "فرنسا", code: "+33", flag: "🇫🇷", length: 9, region: "europe",
        operators: { "1": ["Orange", "6"], "2": ["SFR", "7"], "3": ["Bouygues", "6"], "4": ["Free", "7"], "0": ["جميع المقدمات", "all"] }},
    "24": { name: "ألمانيا", code: "+49", flag: "🇩🇪", length: 11, region: "europe",
        operators: { "1": ["Telekom", "15"], "2": ["Vodafone", "17"], "3": ["O2", "16"], "0": ["جميع المقدمات", "all"] }},
    "25": { name: "إيطاليا", code: "+39", flag: "🇮🇹", length: 10, region: "europe",
        operators: { "1": ["TIM", "33"], "2": ["Vodafone", "34"], "3": ["WindTre", "32"], "0": ["جميع المقدمات", "all"] }},
    "26": { name: "إسبانيا", code: "+34", flag: "🇪🇸", length: 9, region: "europe",
        operators: { "1": ["Movistar", "6"], "2": ["Vodafone", "7"], "3": ["Orange", "6"], "0": ["جميع المقدمات", "all"] }},
    "27": { name: "كندا", code: "+1", flag: "🇨🇦", length: 10, region: "americas",
        operators: { "1": ["Bell", "4"], "2": ["Rogers", "6"], "3": ["Telus", "5"], "0": ["جميع المقدمات", "all"] }},
    "28": { name: "أستراليا", code: "+61", flag: "🇦🇺", length: 9, region: "asia",
        operators: { "1": ["Telstra", "4"], "2": ["Optus", "4"], "3": ["Vodafone", "4"], "0": ["جميع المقدمات", "all"] }},
    "29": { name: "تركيا", code: "+90", flag: "🇹🇷", length: 10, region: "europe",
        operators: { "1": ["Turkcell", "53"], "2": ["Vodafone", "54"], "3": ["Türk Telekom", "55"], "0": ["جميع المقدمات", "all"] }},
    "30": { name: "هولندا", code: "+31", flag: "🇳🇱", length: 9, region: "europe",
        operators: { "1": ["KPN", "6"], "2": ["Vodafone", "6"], "3": ["T-Mobile", "6"], "0": ["جميع المقدمات", "all"] }},
    "31": { name: "بلجيكا", code: "+32", flag: "🇧🇪", length: 9, region: "europe",
        operators: { "1": ["Proximus", "47"], "2": ["Orange", "48"], "3": ["Base", "49"], "0": ["جميع المقدمات", "all"] }},
    "32": { name: "سويسرا", code: "+41", flag: "🇨🇭", length: 9, region: "europe",
        operators: { "1": ["Swisscom", "79"], "2": ["Sunrise", "76"], "3": ["Salt", "78"], "0": ["جميع المقدمات", "all"] }},
    "33": { name: "النمسا", code: "+43", flag: "🇦🇹", length: 10, region: "europe",
        operators: { "1": ["A1", "66"], "2": ["Magenta", "67"], "3": ["Drei", "66"], "0": ["جميع المقدمات", "all"] }},
    "34": { name: "السويد", code: "+46", flag: "🇸🇪", length: 9, region: "europe",
        operators: { "1": ["Telia", "70"], "2": ["Tele2", "72"], "3": ["Telenor", "73"], "0": ["جميع المقدمات", "all"] }},
    "35": { name: "النرويج", code: "+47", flag: "🇳🇴", length: 8, region: "europe",
        operators: { "1": ["Telenor", "4"], "2": ["Telia", "9"], "0": ["جميع المقدمات", "all"] }},
    "36": { name: "الدنمارك", code: "+45", flag: "🇩🇰", length: 8, region: "europe",
        operators: { "1": ["TDC", "2"], "2": ["Telenor", "3"], "0": ["جميع المقدمات", "all"] }},
    "37": { name: "فنلندا", code: "+358", flag: "🇫🇮", length: 9, region: "europe",
        operators: { "1": ["Elisa", "50"], "2": ["DNA", "44"], "3": ["Telia", "40"], "0": ["جميع المقدمات", "all"] }},
    "38": { name: "بولندا", code: "+48", flag: "🇵🇱", length: 9, region: "europe",
        operators: { "1": ["Orange", "5"], "2": ["T-Mobile", "6"], "3": ["Plus", "6"], "4": ["Play", "7"], "0": ["جميع المقدمات", "all"] }},
    "39": { name: "البرتغال", code: "+351", flag: "🇵🇹", length: 9, region: "europe",
        operators: { "1": ["MEO", "9"], "2": ["NOS", "9"], "3": ["Vodafone", "9"], "0": ["جميع المقدمات", "all"] }},
    "40": { name: "اليونان", code: "+30", flag: "🇬🇷", length: 10, region: "europe",
        operators: { "1": ["Cosmote", "69"], "2": ["Vodafone", "69"], "3": ["Wind", "69"], "0": ["جميع المقدمات", "all"] }},
    "41": { name: "روسيا", code: "+7", flag: "🇷🇺", length: 10, region: "europe",
        operators: { "1": ["MTS", "91"], "2": ["MegaFon", "92"], "3": ["Beeline", "90"], "4": ["Tele2", "95"], "0": ["جميع المقدمات", "all"] }},
    "42": { name: "أوكرانيا", code: "+380", flag: "🇺🇦", length: 9, region: "europe",
        operators: { "1": ["Kyivstar", "67"], "2": ["Vodafone", "50"], "3": ["Lifecell", "63"], "0": ["جميع المقدمات", "all"] }},
    "43": { name: "الصين", code: "+86", flag: "🇨🇳", length: 11, region: "asia",
        operators: { "1": ["China Mobile", "13"], "2": ["China Unicom", "15"], "3": ["China Telecom", "18"], "0": ["جميع المقدمات", "all"] }},
    "44": { name: "اليابان", code: "+81", flag: "🇯🇵", length: 10, region: "asia",
        operators: { "1": ["NTT Docomo", "90"], "2": ["SoftBank", "80"], "3": ["au KDDI", "70"], "0": ["جميع المقدمات", "all"] }},
    "45": { name: "كوريا الجنوبية", code: "+82", flag: "🇰🇷", length: 10, region: "asia",
        operators: { "1": ["SKT", "10"], "2": ["KT", "10"], "3": ["LG U+", "10"], "0": ["جميع المقدمات", "all"] }},
    "46": { name: "الهند", code: "+91", flag: "🇮🇳", length: 10, region: "asia",
        operators: { "1": ["Jio", "7"], "2": ["Airtel", "9"], "3": ["Vi", "8"], "4": ["BSNL", "9"], "0": ["جميع المقدمات", "all"] }},
    "47": { name: "باكستان", code: "+92", flag: "🇵🇰", length: 10, region: "asia",
        operators: { "1": ["Jazz", "30"], "2": ["Telenor", "34"], "3": ["Zong", "31"], "4": ["Ufone", "33"], "0": ["جميع المقدمات", "all"] }},
    "48": { name: "إندونيسيا", code: "+62", flag: "🇮🇩", length: 11, region: "asia",
        operators: { "1": ["Telkomsel", "81"], "2": ["Indosat", "85"], "3": ["XL", "87"], "0": ["جميع المقدمات", "all"] }},
    "49": { name: "ماليزيا", code: "+60", flag: "🇲🇾", length: 9, region: "asia",
        operators: { "1": ["Maxis", "12"], "2": ["Celcom", "19"], "3": ["Digi", "14"], "4": ["U Mobile", "18"], "0": ["جميع المقدمات", "all"] }},
    "50": { name: "تايلاند", code: "+66", flag: "🇹🇭", length: 9, region: "asia",
        operators: { "1": ["AIS", "8"], "2": ["TrueMove", "6"], "3": ["DTAC", "9"], "0": ["جميع المقدمات", "all"] }},
    "51": { name: "الفلبين", code: "+63", flag: "🇵🇭", length: 10, region: "asia",
        operators: { "1": ["Globe", "91"], "2": ["Smart", "92"], "3": ["Sun", "93"], "0": ["جميع المقدمات", "all"] }},
    "52": { name: "فيتنام", code: "+84", flag: "🇻🇳", length: 9, region: "asia",
        operators: { "1": ["Viettel", "9"], "2": ["Mobifone", "7"], "3": ["Vinaphone", "8"], "0": ["جميع المقدمات", "all"] }},
    "53": { name: "سنغافورة", code: "+65", flag: "🇸🇬", length: 8, region: "asia",
        operators: { "1": ["Singtel", "8"], "2": ["StarHub", "9"], "3": ["M1", "8"], "0": ["جميع المقدمات", "all"] }},
    "54": { name: "نيوزيلندا", code: "+64", flag: "🇳🇿", length: 9, region: "asia",
        operators: { "1": ["Vodafone", "21"], "2": ["Spark", "27"], "3": ["2degrees", "22"], "0": ["جميع المقدمات", "all"] }},
    "55": { name: "جنوب أفريقيا", code: "+27", flag: "🇿🇦", length: 9, region: "africa",
        operators: { "1": ["Vodacom", "82"], "2": ["MTN", "83"], "3": ["Cell C", "84"], "4": ["Telkom", "81"], "0": ["جميع المقدمات", "all"] }},
    "56": { name: "نيجيريا", code: "+234", flag: "🇳🇬", length: 10, region: "africa",
        operators: { "1": ["MTN", "80"], "2": ["Airtel", "90"], "3": ["Glo", "80"], "4": ["9mobile", "81"], "0": ["جميع المقدمات", "all"] }},
    "57": { name: "كينيا", code: "+254", flag: "🇰🇪", length: 9, region: "africa",
        operators: { "1": ["Safaricom", "71"], "2": ["Airtel", "73"], "0": ["جميع المقدمات", "all"] }},
    "58": { name: "غانا", code: "+233", flag: "🇬🇭", length: 9, region: "africa",
        operators: { "1": ["MTN", "24"], "2": ["Vodafone", "20"], "3": ["AirtelTigo", "26"], "0": ["جميع المقدمات", "all"] }},
    "59": { name: "البرازيل", code: "+55", flag: "🇧🇷", length: 11, region: "americas",
        operators: { "1": ["Vivo", "11"], "2": ["Claro", "12"], "3": ["TIM", "13"], "4": ["Oi", "14"], "0": ["جميع المقدمات", "all"] }},
    "60": { name: "المكسيك", code: "+52", flag: "🇲🇽", length: 10, region: "americas",
        operators: { "1": ["Telcel", "55"], "2": ["AT&T", "55"], "3": ["Movistar", "55"], "0": ["جميع المقدمات", "all"] }},
    "61": { name: "الأرجنتين", code: "+54", flag: "🇦🇷", length: 10, region: "americas",
        operators: { "1": ["Claro", "11"], "2": ["Movistar", "11"], "3": ["Personal", "11"], "0": ["جميع المقدمات", "all"] }},
    "62": { name: "تشيلي", code: "+56", flag: "🇨🇱", length: 9, region: "americas",
        operators: { "1": ["Entel", "9"], "2": ["Movistar", "9"], "3": ["Claro", "9"], "0": ["جميع المقدمات", "all"] }},
    "63": { name: "كولومبيا", code: "+57", flag: "🇨🇴", length: 10, region: "americas",
        operators: { "1": ["Claro", "31"], "2": ["Movistar", "31"], "3": ["Tigo", "31"], "0": ["جميع المقدمات", "all"] }},
    "64": { name: "بيرو", code: "+51", flag: "🇵🇪", length: 9, region: "americas",
        operators: { "1": ["Claro", "9"], "2": ["Movistar", "9"], "3": ["Entel", "9"], "0": ["جميع المقدمات", "all"] }},
    "65": { name: "إيران", code: "+98", flag: "🇮🇷", length: 10, region: "asia",
        operators: { "1": ["Irancell", "93"], "2": ["Hamrah Aval", "91"], "3": ["Rightel", "92"], "0": ["جميع المقدمات", "all"] }},
    "66": { name: "أفغانستان", code: "+93", flag: "🇦🇫", length: 9, region: "asia",
        operators: { "1": ["Roshan", "79"], "2": ["Etisalat", "78"], "3": ["AWCC", "70"], "0": ["جميع المقدمات", "all"] }},
    "67": { name: "أذربيجان", code: "+994", flag: "🇦🇿", length: 9, region: "asia",
        operators: { "1": ["Azercell", "50"], "2": ["Bakcell", "55"], "3": ["Nar", "70"], "0": ["جميع المقدمات", "all"] }},
    "68": { name: "جورجيا", code: "+995", flag: "🇬🇪", length: 9, region: "asia",
        operators: { "1": ["Magti", "55"], "2": ["Geocell", "57"], "3": ["Silknet", "59"], "0": ["جميع المقدمات", "all"] }},
    "69": { name: "كازاخستان", code: "+7", flag: "🇰🇿", length: 10, region: "asia",
        operators: { "1": ["Beeline", "77"], "2": ["Kcell", "70"], "3": ["Tele2", "77"], "0": ["جميع المقدمات", "all"] }},
    "70": { name: "أوزبكستان", code: "+998", flag: "🇺🇿", length: 9, region: "asia",
        operators: { "1": ["Beeline", "90"], "2": ["Ucell", "91"], "3": ["Uzmobile", "97"], "0": ["جميع المقدمات", "all"] }},
    "71": { name: "ألبانيا", code: "+355", flag: "🇦🇱", length: 9, region: "europe",
        operators: { "1": ["Vodafone", "67"], "2": ["ALBtelecom", "68"], "0": ["جميع المقدمات", "all"] }},
    "72": { name: "صربيا", code: "+381", flag: "🇷🇸", length: 9, region: "europe",
        operators: { "1": ["MTS", "64"], "2": ["Telenor", "63"], "3": ["VIP", "60"], "0": ["جميع المقدمات", "all"] }},
    "73": { name: "كرواتيا", code: "+385", flag: "🇭🇷", length: 9, region: "europe",
        operators: { "1": ["T-Mobile", "91"], "2": ["A1", "92"], "3": ["Tele2", "95"], "0": ["جميع المقدمات", "all"] }},
    "74": { name: "رومانيا", code: "+40", flag: "🇷🇴", length: 9, region: "europe",
        operators: { "1": ["Orange", "74"], "2": ["Vodafone", "72"], "3": ["Telekom", "76"], "4": ["Digi", "77"], "0": ["جميع المقدمات", "all"] }},
    "75": { name: "المجر", code: "+36", flag: "🇭🇺", length: 9, region: "europe",
        operators: { "1": ["T-Mobile", "30"], "2": ["Vodafone", "70"], "3": ["Telekom", "20"], "0": ["جميع المقدمات", "all"] }},
    "76": { name: "التشيك", code: "+420", flag: "🇨🇿", length: 9, region: "europe",
        operators: { "1": ["O2", "60"], "2": ["T-Mobile", "60"], "3": ["Vodafone", "60"], "0": ["جميع المقدمات", "all"] }},
    "77": { name: "آيرلندا", code: "+353", flag: "🇮🇪", length: 9, region: "europe",
        operators: { "1": ["Vodafone", "86"], "2": ["Three", "83"], "3": ["Eir", "87"], "0": ["جميع المقدمات", "all"] }},
    "78": { name: "آيسلندا", code: "+354", flag: "🇮🇸", length: 7, region: "europe",
        operators: { "1": ["Siminn", "6"], "2": ["Nova", "7"], "0": ["جميع المقدمات", "all"] }},
    "79": { name: "لوكسمبورغ", code: "+352", flag: "🇱🇺", length: 9, region: "europe",
        operators: { "1": ["POST", "62"], "2": ["Tango", "66"], "3": ["Orange", "69"], "0": ["جميع المقدمات", "all"] }},
    "80": { name: "مالطا", code: "+356", flag: "🇲🇹", length: 8, region: "europe",
        operators: { "1": ["Melita", "79"], "2": ["GO", "99"], "0": ["جميع المقدمات", "all"] }},
    "81": { name: "قبرص", code: "+357", flag: "🇨🇾", length: 8, region: "europe",
        operators: { "1": ["Cyta", "9"], "2": ["Epic", "9"], "0": ["جميع المقدمات", "all"] }},
    "82": { name: "الإكوادور", code: "+593", flag: "🇪🇨", length: 9, region: "americas",
        operators: { "1": ["Claro", "9"], "2": ["Movistar", "9"], "3": ["CNT", "9"], "0": ["جميع المقدمات", "all"] }},
    "83": { name: "بنغلاديش", code: "+880", flag: "🇧🇩", length: 10, region: "asia",
        operators: { "1": ["Grameenphone", "17"], "2": ["Robi", "18"], "3": ["Banglalink", "19"], "4": ["Teletalk", "15"], "0": ["جميع المقدمات", "all"] }},
    "84": { name: "سريلانكا", code: "+94", flag: "🇱🇰", length: 9, region: "asia",
        operators: { "1": ["Dialog", "77"], "2": ["Mobitel", "71"], "3": ["Hutch", "78"], "0": ["جميع المقدمات", "all"] }},
    "85": { name: "نيبال", code: "+977", flag: "🇳🇵", length: 10, region: "asia",
        operators: { "1": ["Ncell", "98"], "2": ["NTC", "98"], "0": ["جميع المقدمات", "all"] }},
    "86": { name: "كمبوديا", code: "+855", flag: "🇰🇭", length: 8, region: "asia",
        operators: { "1": ["Smart", "10"], "2": ["Cellcard", "12"], "3": ["Metfone", "97"], "0": ["جميع المقدمات", "all"] }},
    "87": { name: "منغوليا", code: "+976", flag: "🇲🇳", length: 8, region: "asia",
        operators: { "1": ["MobiCom", "8"], "2": ["Skytel", "9"], "0": ["جميع المقدمات", "all"] }},
    "88": { name: "باراغواي", code: "+595", flag: "🇵🇾", length: 9, region: "americas",
        operators: { "1": ["Tigo", "98"], "2": ["Claro", "97"], "3": ["Personal", "96"], "0": ["جميع المقدمات", "all"] }},
    "89": { name: "بنما", code: "+507", flag: "🇵🇦", length: 8, region: "americas",
        operators: { "1": ["Cable & Wireless", "6"], "2": ["Digicel", "6"], "0": ["جميع المقدمات", "all"] }},
    "90": { name: "كوستاريكا", code: "+506", flag: "🇨🇷", length: 8, region: "americas",
        operators: { "1": ["Kolbi", "8"], "2": ["Claro", "8"], "0": ["جميع المقدمات", "all"] }},
    "91": { name: "غواتيمالا", code: "+502", flag: "🇬🇹", length: 8, region: "americas",
        operators: { "1": ["Tigo", "5"], "2": ["Claro", "4"], "3": ["Movistar", "4"], "0": ["جميع المقدمات", "all"] }},
    "92": { name: "السلفادور", code: "+503", flag: "🇸🇻", length: 8, region: "americas",
        operators: { "1": ["Claro", "7"], "2": ["Tigo", "7"], "3": ["Movistar", "7"], "0": ["جميع المقدمات", "all"] }},
    "93": { name: "هندوراس", code: "+504", flag: "🇭🇳", length: 8, region: "americas",
        operators: { "1": ["Tigo", "9"], "2": ["Claro", "9"], "0": ["جميع المقدمات", "all"] }},
    "94": { name: "جامايكا", code: "+1876", flag: "🇯🇲", length: 7, region: "americas",
        operators: { "1": ["Digicel", "4"], "2": ["Flow", "5"], "0": ["جميع المقدمات", "all"] }},
    "95": { name: "ترينيداد وتوباغو", code: "+1868", flag: "🇹🇹", length: 7, region: "americas",
        operators: { "1": ["Digicel", "7"], "2": ["bmobile", "6"], "0": ["جميع المقدمات", "all"] }},
    "96": { name: "إثيوبيا", code: "+251", flag: "🇪🇹", length: 9, region: "africa",
        operators: { "1": ["Ethio Telecom", "91"], "2": ["Safaricom", "92"], "0": ["جميع المقدمات", "all"] }},
    "97": { name: "تنزانيا", code: "+255", flag: "🇹🇿", length: 9, region: "africa",
        operators: { "1": ["Vodacom", "71"], "2": ["Airtel", "78"], "3": ["Tigo", "71"], "0": ["جميع المقدمات", "all"] }},
    "98": { name: "أوغندا", code: "+256", flag: "🇺🇬", length: 9, region: "africa",
        operators: { "1": ["MTN", "77"], "2": ["Airtel", "78"], "3": ["Africell", "70"], "0": ["جميع المقدمات", "all"] }},
    "99": { name: "المغرب", code: "+212", flag: "🇲🇦", length: 9, region: "africa",
        operators: { "1": ["Maroc Telecom", "6"], "2": ["Orange", "7"], "0": ["جميع المقدمات", "all"] }},
    "100": { name: "الأوروغواي", code: "+598", flag: "🇺🇾", length: 8, region: "americas",
        operators: { "1": ["Antel", "94"], "2": ["Claro", "99"], "3": ["Movistar", "98"], "0": ["جميع المقدمات", "all"] }}
};

// ==================== قوائم الأسماء ====================
const ARABIC_MALE_NAMES = ["أحمد", "محمد", "علي", "عمر", "خالد", "يوسف", "إبراهيم", 
                           "عبدالله", "سعد", "فهد", "ناصر", "سلطان", "بندر", "تركي", "ماجد",
                           "عبدالرحمن", "حسن", "حسين", "سالم", "راشد", "سعود", "مشعل", "وليد"];
const ARABIC_FEMALE_NAMES = ["فاطمة", "عائشة", "مريم", "نورة", "سارة", "هند", "لمى",
                             "ريم", "دانة", "الجوهرة", "منيرة", "لطيفة", "شيخة", "أسماء",
                             "ليلى", "رنا", "جوري", "لينا", "هيا", "نوف", "أمل", "شهد"];
const ARABIC_LAST_NAMES = ["العتيبي", "الشمري", "القحطاني", "الحربي", "الدوسري", "المطيري",
                           "الغامدي", "الزهراني", "السبيعي", "البقمي", "الجهني", "الرشيدي",
                           "البلوي", "الحسيني", "القرشي", "الأنصاري", "المالكي", "الأحمدي"];

const ENGLISH_MALE_NAMES = ["John", "James", "Robert", "Michael", "David", "William", 
                            "Thomas", "Daniel", "Paul", "Mark", "Steven", "Andrew",
                            "Christopher", "Matthew", "Anthony", "Donald", "Kevin"];
const ENGLISH_FEMALE_NAMES = ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara",
                              "Susan", "Jessica", "Sarah", "Karen", "Lisa", "Nancy",
                              "Betty", "Margaret", "Sandra", "Ashley", "Emily"];
const ENGLISH_LAST_NAMES = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia",
                            "Miller", "Davis", "Rodriguez", "Martinez", "Anderson",
                            "Taylor", "Thomas", "Hernandez", "Moore", "Martin"];

// ==================== الحالة العامة ====================
const state = {
    currentStep: 1,
    selectedCountry: null,
    selectedOperator: null,
    generatedContacts: [],
    currentFilter: 'all'
};

// ==================== التهيئة ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCountries();
    setupEventListeners();
});

// ==================== الثيم ====================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// ==================== عرض الدول ====================
function renderCountries() {
    const grid = document.getElementById('countriesGrid');
    grid.innerHTML = '';
    
    Object.entries(COUNTRIES)
        .filter(([_, c]) => state.currentFilter === 'all' || c.region === state.currentFilter)
        .forEach(([key, country]) => {
            const card = document.createElement('div');
            card.className = 'country-card';
            card.dataset.key = key;
            card.innerHTML = `
                <div class="country-flag">${country.flag}</div>
                <div class="country-info">
                    <div class="country-name">${country.name}</div>
                    <div class="country-code">${country.code}</div>
                </div>
            `;
            card.addEventListener('click', () => selectCountry(key));
            grid.appendChild(card);
        });
}

function selectCountry(key) {
    state.selectedCountry = key;
    state.selectedOperator = null;
    
    document.querySelectorAll('.country-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.country-card[data-key="${key}"]`).classList.add('selected');
    
    updateStepIndicator();
    showToast('success', `تم اختيار ${COUNTRIES[key].name}`);
    
    setTimeout(() => goToStep(2), 300);
}

// ==================== البحث والفلترة ====================
document.getElementById('countrySearch').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.country-card').forEach(card => {
        const name = card.querySelector('.country-name').textContent.toLowerCase();
        const code = card.querySelector('.country-code').textContent.toLowerCase();
        card.style.display = (name.includes(query) || code.includes(query)) ? '' : 'none';
    });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentFilter = btn.dataset.region;
        renderCountries();
    });
});

// ==================== عرض الموزعين ====================
function renderOperators() {
    if (!state.selectedCountry) return;
    
    const country = COUNTRIES[state.selectedCountry];
    const infoDiv = document.getElementById('selectedCountryInfo');
    infoDiv.innerHTML = `
        <div class="flag">${country.flag}</div>
        <div class="info">
            <h3>${country.name}</h3>
            <p>مقدمة الدولة: ${country.code}</p>
        </div>
    `;
    
    const listDiv = document.getElementById('operatorsList');
    listDiv.innerHTML = '';
    
    Object.entries(country.operators).forEach(([key, [name, prefix]]) => {
        const card = document.createElement('div');
        card.className = 'operator-card';
        card.dataset.key = key;
        card.innerHTML = `
            <div class="operator-icon">
                <i class="fas ${prefix === 'all' ? 'fa-globe' : 'fa-broadcast-tower'}"></i>
            </div>
            <div class="operator-name">${name}</div>
            <div class="operator-prefix">${prefix === 'all' ? 'عشوائي' : '0' + prefix}</div>
        `;
        card.addEventListener('click', () => selectOperator(key));
        listDiv.appendChild(card);
    });
}

function selectOperator(key) {
    state.selectedOperator = key;
    document.querySelectorAll('.operator-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.operator-card[data-key="${key}"]`).classList.add('selected');
    
    const country = COUNTRIES[state.selectedCountry];
    const opName = country.operators[key][0];
    showToast('success', `تم اختيار ${opName}`);
    
    updateSummary();
    setTimeout(() => goToStep(3), 300);
}

// ==================== الأزرار السريعة للعدد ====================
document.querySelectorAll('.quick-counts button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('countInput').value = btn.dataset.count;
    });
});

// ==================== التنقل بين الخطوات ====================
function goToStep(step) {
    if (step < 1 || step > 4) return;
    
    // التحقق من صحة الانتقال
    if (step > state.currentStep) {
        if (state.currentStep === 1 && !state.selectedCountry) {
            showToast('warning', 'الرجاء اختيار دولة أولاً');
            return;
        }
        if (state.currentStep === 2 && !state.selectedOperator) {
            showToast('warning', 'الرجاء اختيار موزع أولاً');
            return;
        }
    }
    
    state.currentStep = step;
    
    document.querySelectorAll('.step-content').forEach(s => s.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
    
    updateStepIndicator();
    updateNavigationButtons();
    
    if (step === 2) renderOperators();
    if (step === 3) updateSummary();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepIndicator() {
    document.querySelectorAll('.step').forEach((step, idx) => {
        const stepNum = idx + 1;
        step.classList.remove('active', 'completed');
        if (stepNum === state.currentStep) {
            step.classList.add('active');
        } else if (stepNum < state.currentStep) {
            step.classList.add('completed');
        }
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.style.display = state.currentStep > 1 ? '' : 'none';
    
    if (state.currentStep === 4) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = '';
        nextBtn.innerHTML = state.currentStep === 3 
            ? '<span>إنهاء</span><i class="fas fa-check"></i>'
            : '<span>التالي</span><i class="fas fa-arrow-left"></i>';
    }
}

document.getElementById('prevBtn').addEventListener('click', () => {
    goToStep(state.currentStep - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (state.currentStep === 3) {
        goToStep(4);
    } else {
        goToStep(state.currentStep + 1);
    }
});

// ==================== ملخص الإعدادات ====================
function updateSummary() {
    const summary = document.getElementById('summaryCard');
    if (!state.selectedCountry || !state.selectedOperator) {
        summary.innerHTML = '<p style="text-align:center;color:var(--text-muted)">أكمل الخطوات السابقة</p>';
        return;
    }
    
    const country = COUNTRIES[state.selectedCountry];
    const opName = country.operators[state.selectedOperator][0];
    const count = document.getElementById('countInput').value;
    const group = document.getElementById('groupName').value || 'myContacts';
    
    summary.innerHTML = `
        <div class="summary-item">
            <span class="summary-label"><i class="fas fa-flag"></i> الدولة</span>
            <span class="summary-value">${country.flag} ${country.name}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label"><i class="fas fa-signal"></i> الموزع</span>
            <span class="summary-value">${opName}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label"><i class="fas fa-hashtag"></i> العدد</span>
            <span class="summary-value">${count} رقم</span>
        </div>
        <div class="summary-item">
            <span class="summary-label"><i class="fas fa-users"></i> المجموعة</span>
            <span class="summary-value">${group}</span>
        </div>
    `;
}

// ==================== توليد الأرقام ====================
document.getElementById('generateBtn').addEventListener('click', generateContacts);

function generateContacts() {
    if (!state.selectedCountry || !state.selectedOperator) {
        showToast('error', 'الرجاء إكمال الخطوات السابقة');
        return;
    }
    
    const count = parseInt(document.getElementById('countInput').value);
    if (isNaN(count) || count < 1) {
        showToast('error', 'الرجاء إدخال عدد صحيح');
        return;
    }
    
    const options = {
        useRandomNames: document.getElementById('useRandomNames').checked,
        addEmail: document.getElementById('addEmail').checked,
        useLuhn: document.getElementById('useLuhn').checked,
        uniqueNumbers: document.getElementById('uniqueNumbers').checked,
        namePrefix: document.getElementById('namePrefix').value,
        groupName: document.getElementById('groupName').value || 'myContacts',
        notes: document.getElementById('notes').value
    };
    
    const progressContainer = document.getElementById('progressContainer');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const progressPercent = document.getElementById('progressPercent');
    
    progressContainer.style.display = 'block';
    document.getElementById('generateBtn').disabled = true;
    document.getElementById('exportFormats').style.display = 'none';
    
    state.generatedContacts = [];
    const usedNumbers = new Set();
    const country = COUNTRIES[state.selectedCountry];
    
    let current = 0;
    const batchSize = Math.max(1, Math.floor(count / 50));
    
    const interval = setInterval(() => {
        for (let i = 0; i < batchSize && current < count; i++) {
            let attempts = 0;
            let contact;
            
            do {
                contact = generateOneContact(country, state.selectedOperator, options, current);
                attempts++;
                if (attempts > 100) break;
            } while (options.uniqueNumbers && usedNumbers.has(contact.phone));
            
            usedNumbers.add(contact.phone);
            state.generatedContacts.push(contact);
            current++;
        }
        
        const percent = Math.floor((current / count) * 100);
        progressFill.style.width = percent + '%';
        progressPercent.textContent = percent + '%';
        progressText.textContent = `تم توليد ${current} من ${count}`;
        
        if (current >= count) {
            clearInterval(interval);
            setTimeout(() => {
                progressContainer.style.display = 'none';
                document.getElementById('generateBtn').disabled = false;
                document.getElementById('exportFormats').style.display = 'block';
                showStats();
                showPreview();
                showToast('success', `تم توليد ${count} جهة اتصال بنجاح!`);
            }, 500);
        }
    }, 30);
}

function generateOneContact(country, opKey, options, index) {
    const [, [opName, opPrefix]] = Object.entries(country.operators).find(([k]) => k === opKey);
    
    let prefix;
    if (opPrefix === 'all') {
        const validOps = Object.entries(country.operators).filter(([_, v]) => v[1] !== 'all');
        const [, [, randomPrefix]] = validOps[Math.floor(Math.random() * validOps.length)];
        prefix = randomPrefix;
    } else {
        prefix = opPrefix;
    }
    
    const remaining = country.length - prefix.length;
    let randomPart = '';
    for (let i = 0; i < remaining; i++) {
        randomPart += Math.floor(Math.random() * 10);
    }
    
    const phone = `${country.code}${prefix}${randomPart}`;
    
    let name;
    if (options.useRandomNames) {
        name = generateRandomName(country.region);
        if (options.namePrefix) name = options.namePrefix + ' ' + name;
    } else {
        name = `${opName} ${index + 1}`;
    }
    
    const parts = name.split(' ');
    const givenName = parts[0];
    const familyName = parts.slice(1).join(' ') || '';
    
    const contact = {
        name,
        givenName,
        familyName,
        phone,
        operator: opName,
        country: country.name,
        group: options.groupName,
        notes: options.notes
    };
    
    if (options.addEmail) {
        contact.email = `${givenName.toLowerCase()}${index}@example.com`;
    }
    
    return contact;
}

function generateRandomName(region) {
    const isArabic = region === 'arab';
    const gender = Math.random() > 0.5 ? 'male' : 'female';
    
    let firstName, lastName;
    if (isArabic) {
        firstName = gender === 'male' 
            ? ARABIC_MALE_NAMES[Math.floor(Math.random() * ARABIC_MALE_NAMES.length)]
            : ARABIC_FEMALE_NAMES[Math.floor(Math.random() * ARABIC_FEMALE_NAMES.length)];
        lastName = ARABIC_LAST_NAMES[Math.floor(Math.random() * ARABIC_LAST_NAMES.length)];
    } else {
        firstName = gender === 'male'
            ? ENGLISH_MALE_NAMES[Math.floor(Math.random() * ENGLISH_MALE_NAMES.length)]
            : ENGLISH_FEMALE_NAMES[Math.floor(Math.random() * ENGLISH_FEMALE_NAMES.length)];
        lastName = ENGLISH_LAST_NAMES[Math.floor(Math.random() * ENGLISH_LAST_NAMES.length)];
    }
    
    return `${firstName} ${lastName}`;
}

// ==================== الإحصائيات ====================
function showStats() {
    const container = document.getElementById('statsContainer');
    const grid = document.getElementById('statsGrid');
    container.style.display = 'block';
    
    const operators = {};
    state.generatedContacts.forEach(c => {
        operators[c.operator] = (operators[c.operator] || 0) + 1;
    });
    
    grid.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">${state.generatedContacts.length}</div>
            <div class="stat-label">إجمالي الأرقام</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${Object.keys(operators).length}</div>
            <div class="stat-label">عدد الموزعين</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${new Set(state.generatedContacts.map(c => c.phone)).size}</div>
            <div class="stat-label">أرقام فريدة</div>
        </div>
    `;
}

// ==================== المعاينة ====================
function showPreview() {
    const container = document.getElementById('previewContainer');
    const list = document.getElementById('previewList');
    container.style.display = 'block';
    
    const preview = state.generatedContacts.slice(0, 10);
    list.innerHTML = preview.map(c => `
        <div class="preview-item">
            <div class="preview-avatar">${c.givenName[0]}</div>
            <div class="preview-info">
                <div class="preview-name">${c.name}</div>
                <div class="preview-phone">${c.phone}</div>
            </div>
        </div>
    `).join('');
}

document.getElementById('togglePreview').addEventListener('click', () => {
    const list = document.getElementById('previewList');
    const icon = document.querySelector('#togglePreview i');
    if (list.style.display === 'none') {
        list.style.display = 'block';
        icon.className = 'fas fa-chevron-down';
    } else {
        list.style.display = 'none';
        icon.className = 'fas fa-chevron-up';
    }
});

// ==================== التصدير ====================
document.getElementById('exportVcf').addEventListener('click', () => exportAs('vcf'));
document.getElementById('exportCsv').addEventListener('click', () => exportAs('csv'));
document.getElementById('exportJson').addEventListener('click', () => exportAs('json'));
document.getElementById('exportAll').addEventListener('click', () => {
    exportAs('vcf');
    setTimeout(() => exportAs('csv'), 300);
    setTimeout(() => exportAs('json'), 600);
});

function exportAs(format) {
    if (state.generatedContacts.length === 0) {
        showToast('error', 'لا توجد بيانات للتصدير');
        return;
    }
    
    let content, filename, mimeType;
    const timestamp = new Date().toISOString().slice(0, 10);
    const countryName = COUNTRIES[state.selectedCountry].name;
    
    switch (format) {
        case 'vcf':
            content = generateVCF(state.generatedContacts);
            filename = `contacts_${countryName}_${timestamp}.vcf`;
            mimeType = 'text/vcard';
            break;
        case 'csv':
            content = generateCSV(state.generatedContacts);
            filename = `contacts_${countryName}_${timestamp}.csv`;
            mimeType = 'text/csv;charset=utf-8';
            break;
        case 'json':
            content = JSON.stringify(state.generatedContacts, null, 2);
            filename = `contacts_${countryName}_${timestamp}.json`;
            mimeType = 'application/json';
            break;
    }
    
    const blob = new Blob(['\ufeff' + content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('success', `تم تصدير ${filename} بنجاح`);
}

function generateVCF(contacts) {
    return contacts.map(c => {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\n`;
        vcard += `N:${c.familyName};${c.givenName};;;\n`;
        vcard += `FN:${c.name}\n`;
        vcard += `TEL;TYPE=CELL:${c.phone}\n`;
        if (c.email) vcard += `EMAIL:${c.email}\n`;
        if (c.notes) vcard += `NOTE:${c.notes}\n`;
        if (c.group) vcard += `CATEGORIES:${c.group}\n`;
        vcard += `END:VCARD`;
        return vcard;
    }).join('\n');
}

function generateCSV(contacts) {
    const headers = ['Name', 'Given Name', 'Family Name', 'Phone 1 - Type', 'Phone 1 - Value',
                     'E-mail 1 - Type', 'E-mail 1 - Value', 'Notes', 'Group Membership'];
    const rows = [headers.join(',')];
    
    contacts.forEach(c => {
        const row = [
            escapeCSV(c.name),
            escapeCSV(c.givenName),
            escapeCSV(c.familyName),
            'Mobile',
            c.phone,
            c.email ? '*' : '',
            c.email ? escapeCSV(c.email) : '',
            escapeCSV(c.notes || ''),
            c.group || '* myContacts'
        ];
        rows.push(row.join(','));
    });
    
    return rows.join('\n');
}

function escapeCSV(value) {
    if (!value) return '';
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
        return '"' + value.replace(/"/g, '""') + '"';
    }
    return value;
}

// ==================== Toast ====================
function showToast(type, message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideInLeft 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== اختصارات لوحة المفاتيح ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        if (state.currentStep < 4) goToStep(state.currentStep + 1);
    } else if (e.key === 'ArrowRight') {
        if (state.currentStep > 1) goToStep(state.currentStep - 1);
    } else if (e.key === 'Escape') {
        if (state.currentStep > 1) goToStep(state.currentStep - 1);
    }
});

// ==================== حفظ الحالة ====================
window.addEventListener('beforeunload', () => {
    localStorage.setItem('lastState', JSON.stringify({
        selectedCountry: state.selectedCountry,
        selectedOperator: state.selectedOperator
    }));
});
