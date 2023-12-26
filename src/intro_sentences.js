const sentences = [
    {
        "en": "I’m twenty-four",
        "ar": "أنا في الرابعة والعشرين",
        "tr": "'ana fi alraabieat waleishrin",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I%E2%80%99m+twenty-four%0A&op=translate"
    },
    {
        "en": "I’m twenty-four years old",
        "ar": "عمري أربعة وعشرون عامًا",
        "tr": "eumri 'arbaeat waeishrun eaman",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I%E2%80%99m+twenty-four+years+old%0A&op=translate"
    },
    {
        "en": "My sister is eighteen",
        "ar": "أختي في الثامنة عشرة من عمرها",
        "tr": "'ukhti fi althaaminat eashrat min eumriha",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=My+sister+is+eighteen+%0A&op=translate"
    },
    {
        "en": "My sister is eighteen years old",
        "ar": "أختي عمرها ثمانية عشر عاما",
        "tr": "'ukhti eumruha thamaniat eashar eaman",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=My+sister+is+eighteen+years+old%0A&op=translate"
    },
    {
        "en": "I’m a student",
        "ar": "أنا طالب",
        "tr": "'ana talib",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I%E2%80%99m+a+student%0A&op=translate"
    },
    {
        "en": "I study",
        "ar": "أنا أدرس",
        "tr": "'ana 'adrus",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+study%0A&op=translate"
    },
    {
        "en": "I study Computer Science",
        "ar": "اتعلم علم الحاسوب",
        "tr": "atealam ealam alhasub",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+study+Computer+Science%0A&op=translate"
    },
    {
        "en": "I study Design",
        "ar": "أنا أدرس التصميم",
        "tr": "'ana 'adrus altasmim",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+study+Design%0A&op=translate"
    },
    {
        "en": "I study Computer Science and Design",
        "ar": "أدرس علوم الكمبيوتر والتصميم",
        "tr": "'adrus eulum alkumbuyutar waltasmim",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+study+Computer+Science+and+Design%0A&op=translate"
    },
    {
        "en": "I study Design and Computer Science",
        "ar": "أدرس التصميم وعلوم الكمبيوتر",
        "tr": "'adrus altasmim waeulum alkumbuyutar",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+study+Design+and+Computer+Science%0A&op=translate"
    },
    {
        "en": "I am a student of Computer Science and Design",
        "ar": "أنا طالب في علوم الكمبيوتر والتصميم",
        "tr": "'ana talib fi eulum alkumbuyutar waltasmim",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+am+a+student+of+Computer+Science+and+Design%0A&op=translate"
    },
    {
        "en": "I’m a university student",
        "ar": "أنا طالب جامعي",
        "tr": "'ana talib jamieiun",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I%E2%80%99m+a+university+student%0A&op=translate"
    },
    {
        "en": "I also study Arabic",
        "ar": "أنا أيضا أدرس اللغة العربية",
        "tr": "'ana 'aydan 'adrus allughat alearabia",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+also+study+Arabic%0A&op=translate"
    },
    {
        "en": "I’m studying Arabic, too",
        "ar": "أنا أدرس اللغة العربية أيضا",
        "tr": "'ana 'adrus allughat alearabiat 'aydan",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I%27m+studying+Arabic%2C+too&op=translate"
    },
    {
        "en": "I am learning Arabic for fun",
        "ar": "أنا أتعلم اللغة العربية من أجل المتعة",
        "tr": "'ana 'ataealam allughat alearabiat min 'ajl almutea",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+am+learning+Arabic+for+fun%0A&op=translate"
    },
    {
        "en": "I’m from Northern Germany",
        "ar": "أنا من شمال ألمانيا",
        "tr": "'ana min shamal 'almania",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I%E2%80%99m+from+Northern+Germany&op=translate"
    },
    {
        "en": "I’m German",
        "ar": "انا الماني",
        "tr": "ana almani",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I%E2%80%99m+German%0A&op=translate"
    },
    {
        "en": "I grew up in Northern Germany",
        "ar": "لقد نشأت في شمال ألمانيا",
        "tr": "laqad nasha'at fi shamal 'almanya",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+grew+up+in+Northern+Germany%0A&op=translate"
    },
    {
        "en": "I was born in Germany",
        "ar": "لقد ولدت في المانيا",
        "tr": "laqad wulidat fi almania",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+was+born+in+Germany%0A&op=translate"
    },
    {
        "en": "I’m from Germany",
        "ar": "أنا من ألمانيا",
        "tr": "'ana min 'almania",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I%E2%80%99m+from+Germany+%0A&op=translate"
    },
    {
        "en": "I grew up in this house",
        "ar": "لقد نشأت في هذا المنزل",
        "tr": "laqad nashat fi hadha almanzil",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+grew+up+in+this+house%0A&op=translate"
    },
    {
        "en": "This was our house",
        "ar": "كان هذا منزلنا",
        "tr": "kan hadha manziluna",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+was+our+house%0A&op=translate"
    },
    {
        "en": "This is my house",
        "ar": "هذا منزلي",
        "tr": "hadha manzili",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+my+house%0A&op=translate"
    },
    {
        "en": "Here is my house",
        "ar": "هنا منزلي.",
        "tr": "huna manzili.",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Here+is+my+house.&op=translate"
    },
    {
        "en": "This is a picture of my house",
        "ar": "هذه صورة لمنزلي",
        "tr": "hadhih surat limanzili",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+a+picture+of+my+house%0A&op=translate"
    },
    {
        "en": "Here is a picture",
        "ar": "هنا صورة",
        "tr": "huna sura",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Here+is+a+picture%0A&op=translate"
    },
    {
        "en": "Here you can see our house",
        "ar": "هنا يمكنك رؤية منزلنا",
        "tr": "huna yumkinuk ruyat manzilina",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Here+you+can+see+our+house%0A&op=translate"
    },
    {
        "en": "This is my family’s house",
        "ar": "هذا هو منزل عائلتي",
        "tr": "hadha hu manzil eayilati",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+my+family%E2%80%99s+house%0A&op=translate"
    },
    {
        "en": "This was our house in Germany",
        "ar": "كان هذا منزلنا في ألمانيا",
        "tr": "kan hadha manziluna fi 'almania",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+was+our+house+in+Germany%0A&op=translate"
    },
    {
        "en": "Now I live in Egypt",
        "ar": "والآن أعيش في مصر",
        "tr": "walan 'aeish fi misr",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Now+I+live+in+Egypt%0A&op=translate"
    },
    {
        "en": "Of course I live in Egypt now",
        "ar": "طبعا أنا أعيش في مصر الآن",
        "tr": "tabean 'ana 'aeish fi misr alan",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Of+course+I+live+in+Egypt+now%0A&op=translate"
    },
    {
        "en": "Now I live in Cairo",
        "ar": "والآن أعيش في القاهرة",
        "tr": "walan 'aeish fi alqahira",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Now+I+live+in+Cairo%0A&op=translate"
    },
    {
        "en": "I am living in Cairo for five months",
        "ar": "أنا أعيش في القاهرة لمدة خمسة أشهر",
        "tr": "'ana 'aeish fi alqahirat limudat khamsat 'ashhur",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+am+living+in+Cairo+for+five+months%0A&op=translate"
    },
    {
        "en": "I am living in Egypt for half a year",
        "ar": "أنا أعيش في مصر لمدة نصف عام",
        "tr": "'ana 'aeish fi misr limudat nisf eam",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+am+living+in+Egypt+for+half+a+year%0A&op=translate"
    },
    {
        "en": "I live in Cairo for half a year",
        "ar": "أعيش في القاهرة منذ نصف عام",
        "tr": "'aeish fi alqahirat mundh nisf eam",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+live+in+Cairo+for+half+a+year%0A&op=translate"
    },
    {
        "en": "Now I live here",
        "ar": "الآن أنا أعيش هنا",
        "tr": "alan 'ana 'aeish huna",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Now+I+live+here%0A&op=translate"
    },
    {
        "en": "I live here for five months",
        "ar": "أعيش هنا لمدة خمسة أشهر",
        "tr": "'aeish huna limudat khamsat 'ashhur",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+live+here+for+five+months%0A&op=translate"
    },
    {
        "en": "I like bicycling",
        "ar": "أنا أحب ركوب الدراجات",
        "tr": "'ana 'uhibu rukub aldaraajat",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+like+bicycling%0A&op=translate"
    },
    {
        "en": "I like riding my bike",
        "ar": "أحب ركوب دراجتي",
        "tr": "'uhibu rukub daraajati",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+like+riding+my+bike%0A&op=translate"
    },
    {
        "en": "I like camping",
        "ar": "أنا أحب التخييم",
        "tr": "'ana 'uhibu altakhyim",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+like+camping%0A&op=translate"
    },
    {
        "en": "I like hiking",
        "ar": "أنا أحب المشي لمسافات طويلة",
        "tr": "'ana 'uhibu almashy limasafat tawila",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+like+hiking%0A&op=translate"
    },
    {
        "en": "I love hiking in nature",
        "ar": "أحب التنزه في الطبيعة",
        "tr": "'uhibu altanazuh fi altabiea",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+love+hiking+in+nature%0A&op=translate"
    },
    {
        "en": "I love nature",
        "ar": "انا احب الطبيعة",
        "tr": "ana ahib altabiea",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+love+nature%0A&op=translate"
    },
    {
        "en": "I love camping in nature",
        "ar": "أحب التخييم في الطبيعة",
        "tr": "'uhibu altakhyim fi altabiea",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+love+camping+in+nature%0A&op=translate"
    },
    {
        "en": "This is my bike",
        "ar": "هذه دراجتي",
        "tr": "hadhih daraajati",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+my+bike%0A&op=translate"
    },
    {
        "en": "Here is a picture of my bike",
        "ar": "هنا صورة لدراجتي",
        "tr": "huna surat lidaraajati",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Here+is+a+picture+of+my+bike%0A&op=translate"
    },
    {
        "en": "I also enjoy painting",
        "ar": "أنا أستمتع أيضًا بالرسم",
        "tr": "'ana 'astamtie aydan bialrasm",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+also+enjoy+painting%0A&op=translate"
    },
    {
        "en": "I love hiking as well",
        "ar": "أنا أحب المشي لمسافات طويلة كذلك",
        "tr": "'ana 'uhibu almashy limusafat tawilat kadhalik",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+love+hiking+as+well%0A&op=translate"
    },
    {
        "en": "I love camping, too",
        "ar": "أنا أحب التخييم أيضا",
        "tr": "'ana 'uhibu altakhyim 'aydan",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+love+camping%2C+too%0A&op=translate"
    },
    {
        "en": "I am a painter",
        "ar": "أنا رسام",
        "tr": "'ana risaam",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+am+a+painter%0A&op=translate"
    },
    {
        "en": "I paint sometimes",
        "ar": "أرسم في بعض الأحيان",
        "tr": "'arsum fi baed al'ahyan",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+paint+sometimes%0A&op=translate"
    },
    {
        "en": "This is my family",
        "ar": "هذه عائلتي",
        "tr": "hadhih eayilati",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+my+family+%0A&op=translate"
    },
    {
        "en": "Here you can see my family",
        "ar": "هنا يمكنك رؤية عائلتي",
        "tr": "huna yumkinuk ruyat eayilati",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Here+you+can+see+my+family%0A&op=translate"
    },
    {
        "en": "Here is my family",
        "ar": "هنا عائلتي",
        "tr": "huna eayilati",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Here+is+my+family%0A&op=translate"
    },
    {
        "en": "This is a picture of my family",
        "ar": "هذه صورة لعائلتي",
        "tr": "hadhih surat lieayilati",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+a+picture+of+my+family&op=translate"
    },
    {
        "en": "This is my dad",
        "ar": "هذا هو والدي",
        "tr": "hadha hu walidi",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+my+dad&op=translate"
    },
    {
        "en": "This is my mom",
        "ar": "هذه أمي",
        "tr": "hadhih 'umiy",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+my+mom%0A&op=translate"
    },
    {
        "en": "This is my sister",
        "ar": "هذه أختي",
        "tr": "hadhih 'ukhti",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+my+sister%0A&op=translate"
    },
    {
        "en": "This is my mom’s horse",
        "ar": "هذا هو حصان أمي",
        "tr": "hadha hu hisan 'umiy",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=This+is+my+mom%E2%80%99s+horse%0A&op=translate"
    },
    {
        "en": "I have a sister",
        "ar": "لدي أخت",
        "tr": "ladaya 'ukht",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+have+a+sister%0A&op=translate"
    },
    {
        "en": "I have a baby sister",
        "ar": "عندي اخت صغيرة",
        "tr": "eindi akht saghiratan",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+have+a+younger+sister%0A&op=translate"
    },
    {
        "en": "My sister is younger than me",
        "ar": "أختي أصغر مني",
        "tr": "'ukhti 'asghar miniy",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=My+sister+is+younger+than+me%0A&op=translate"
    },
    {
        "en": "I hope they will visit me in Cairo",
        "ar": "وأتمنى أن يزوروني في القاهرة",
        "tr": "wa'atamanaa 'an yazuruni fi alqahira",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+hope+they+will+visit+me+in+Cairo%0A&op=translate"
    },
    {
        "en": "Maybe they will visit me in Egypt",
        "ar": "ربما سيزورونني في مصر",
        "tr": "rubama sayazurunani fi misr",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Maybe+they+will+visit+me+in+Egypt%0A&op=translate"
    },
    {
        "en": "Maybe my family will come to Egypt",
        "ar": "ربما ستأتي عائلتي إلى مصر",
        "tr": "rubama satati eayilati 'iilaa misr",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=Maybe+my+family+will+come+to+Egypt%0A&op=translate"
    },
    {
        "en": "I hope so",
        "ar": "أتمنى ذلك",
        "tr": "'atamanaa dhalik",
        "link": "https://translate.google.com/?sl=auto&tl=ar&text=I+hope+so%0A&op=translate"
    }
]

export default sentences;