const heaterData = [
    {
        "county": "کیار",
        "station": "شلمزار",
        "volume": 5000
    },
    {
        "county": "کیار",
        "station": "تشنیز",
        "volume": 1700
    },
    {
        "county": "کیار",
        "station": "موسی آباد",
        "volume": 1200
    },
    {
        "county": "کیار",
        "station": "دزک",
        "volume": 8000
    },
    {
        "county": "کیار",
        "station": "گهرو",
        "volume": 5000
    },
    {
        "county": "کیار",
        "station": "علی آباد",
        "volume": 2000
    },
    {
        "county": "کیار",
        "station": "خمیر مایه",
        "volume": 1700
    },
    {
        "county": "کیار",
        "station": "ناغان",
        "volume": 5000
    },
    {
        "county": "کیار",
        "station": "باجگیران",
        "volume": 1700
    },
    {
        "county": "کیار",
        "station": "دوپلان",
        "volume": 1700
    },
    {
        "county": "لردگان",
        "station": "لردگان منجر موئی شماره یک",
        "volume": 8000
    },
    {
        "county": "لردگان",
        "station": "لردگان منجر موئی شماره دو",
        "volume": 13000
    },
    {
        "county": "لردگان",
        "station": "کهیان",
        "volume": 1200
    },
    {
        "county": "لردگان",
        "station": "کلواری ",
        "volume": 5000
    },
    {
        "county": "لردگان",
        "station": "گنج و گرداب",
        "volume": 1200
    },
    {
        "county": "لردگان",
        "station": "باغ بهزاد",
        "volume": 1200
    },
    {
        "county": "لردگان",
        "station": "ریگ",
        "volume": 8000
    },
    {
        "county": "لردگان",
        "station": "سلح چین 10000",
        "volume": 5000
    },
    {
        "county": "لردگان",
        "station": "سلح چین 50000",
        "volume": 13000
    },
    {
        "county": "لردگان",
        "station": "سندگان",
        "volume": 1700
    },
    {
        "county": "اردل",
        "station": "رستم آباد",
        "volume": 8000
    },
    {
        "county": "اردل",
        "station": "کاج",
        "volume": 1700
    },
    {
        "county": "اردل",
        "station": "اردل",
        "volume": 5000
    },
    {
        "county": "اردل",
        "station": "گندمکار",
        "volume": 1700
    },
    {
        "county": "اردل",
        "station": "تلمبه خانه گندمکار",
        "volume": 5000
    },
    {
        "county": "اردل",
        "station": "سرخون",
        "volume": 5000
    },
    {
        "county": "اردل",
        "station": "شلیل",
        "volume": 1700
    },
    {
        "county": "شهرکرد",
        "station": "شهرکرد 1",
        "volume": 36000
    },
    {
        "county": "شهرکرد",
        "station": "شهرکرد 2",
        "volume": 36000
    },
    {
        "county": "شهرکرد",
        "station": "شهرک  صنعتی",
        "volume": 10000
    },
    {
        "county": "شهرکرد",
        "station": "طاقانک",
        "volume": 5000
    },
    {
        "county": "شهرکرد",
        "station": "هفشجان",
        "volume": 8000
    },
    {
        "county": "شهرکرد",
        "station": "سورشجان",
        "volume": 7500
    },
    {
        "county": "شهرکرد",
        "station": "سورک",
        "volume": 1200
    },
    {
        "county": "شهرکرد",
        "station": "فرخ شهر",
        "volume": 10000
    },
    {
        "county": "شهرکرد",
        "station": "فولاد فرخ شهر",
        "volume": 1500
    },
    {
        "county": "شهرکرد",
        "station": "سودجان",
        "volume": 6000
    },
    {
        "county": "شهرکرد",
        "station": "نافچ",
        "volume": 1200
    },
    {
        "county": "بن وسامان",
        "station": "بن",
        "volume": 13000
    },
    {
        "county": "بن وسامان",
        "station": "سامان",
        "volume": 10000
    },
    {
        "county": "بن وسامان",
        "station": "تومانک",
        "volume": 1500
    },
    {
        "county": "بن وسامان",
        "station": "بارده",
        "volume": 1500
    },
    {
        "county": "کوهرنگ",
        "station": "دره نمک",
        "volume": 9000
    },
    {
        "county": "کوهرنگ",
        "station": "غلام آباد",
        "volume": 5000
    },
    {
        "county": "کوهرنگ",
        "station": "صفا آباد",
        "volume": 9000
    },
    {
        "county": "فارسان",
        "station": "فارسان",
        "volume": 9000
    },
    {
        "county": "جونقان",
        "station": "فارسان",
        "volume": 5000
    },
    {
        "county": "چلیچه",
        "station": "فارسان",
        "volume": 5000
    },
    {
        "county": "صنعتی جونقان",
        "station": "فارسان",
        "volume": 1700
    },
    {
        "county": "کشتارگاه جونقان",
        "station": "فارسان",
        "volume": 1100
    },
    {
        "county": "بروجن",
        "station": "بروجن CGS",
        "volume": 12000
    },
    {
        "county": "بروجن",
        "station": "گندمان",
        "volume": 4000
    },
    {
        "county": "بروجن",
        "station": "بیژگرد",
        "volume": 5000
    },
    {
        "county": "بروجن",
        "station": "بلداجی",
        "volume": 5000
    },
    {
        "county": "بروجن",
        "station": "فرادنبه",
        "volume": 1700
    },
    {
        "county": "بروجن",
        "station": "بروجن CT",
        "volume": 9000
    },
    {
        "county": "بروجن",
        "station": "دوراهان",
        "volume": 1500
    },
    {
        "county": "بروجن",
        "station": "گدارکبک",
        "volume": 1700
    },
    {
        "county": "بروجن",
        "station": "دهنو",
        "volume": 1700
    },
    {
        "county": "بروجن",
        "station": "شهری سفیددشت",
        "volume": 1700
    },
    {
        "county": "بروجن",
        "station": "صنعتی  سفید دشت",
        "volume": 1700
    },
    {
        "county": "بروجن",
        "station": "ورق خودرو",
        "volume": 1700
    },
    {
        "county": "بروجن",
        "station": "کارخانه سیمان",
        "volume": 5000
    },
    {
        "county": "بروجن",
        "station": "بلداجی CT",
        "volume": 5000
    }
];