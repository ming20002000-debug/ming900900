// ============================================================
// 아이돌 안무 월드컵 후보 데이터 (v1)
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값
//   name      : 화면에 표시될 이름 (그룹명)
//   group     : 비고 (표시용, 비워둬도 됨)
//   song      : 곡 제목 (표시용)
//   gender    : "female"(여돌) 또는 "male"(남돌) — 이 값으로 구분합니다
//   youtubeId : 유튜브 영상 주소의 v= (또는 /shorts/, youtu.be/) 뒤에 오는 11자리 코드
//   start     : 영상이 몇 초부터 재생될지 (기본 0)
//
// 사용자가 준 링크 목록 그대로 채웠고, 각 영상은 유튜브 oEmbed(title/author_name)로
// 실제 그룹·곡과 일치하는지 전부 확인했습니다. 확인 중 발견된 문제는 항목 끝 주석에 표시:
//
//   - 스트레이 키즈(스키즈) 항목에 섞여 있던 "WONDERLAND"·"BOUNCY" 링크는 oEmbed 확인 결과
//     둘 다 ATEEZ 소속이었고, 바로 아래 '에이티즈' 항목(Guerrilla·BOUNCY)과 BOUNCY가 중복이라
//     제외했습니다. 스트레이 키즈는 실제로 확인된 "Back Door"·"특(S-Class)" 2곡만 넣었습니다.
//   - 제로베이스원(ZB1) 쪽에 처음 적어주신 "Get A Guitar" 링크는 oEmbed로 확인해보니 실제로는
//     RIIZE(라이즈) 공식 채널의 곡이라 제외했고, ZB1의 두 번째 곡은 새로 주신 "ICONIK" 링크로
//     채웠습니다. RIIZE는 다시 2곡(Siren, Impossible)으로 정리했습니다.
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) — 32개 ----
  { id: "f01", name: "(여자)아이들 ((G)I-DLE)", group: "", song: "퀸카 (Queencard)", gender: "female", youtubeId: "pKCaXYYwGjw", start: 0 },
  { id: "f02", name: "(여자)아이들 ((G)I-DLE)", group: "", song: "Nxde", gender: "female", youtubeId: "R9UsmrVEWYY", start: 0 },
  { id: "f03", name: "ITZY (있지)", group: "", song: "THAT'S A NO NO", gender: "female", youtubeId: "MrOXMFHWcQY", start: 0 },
  { id: "f04", name: "ITZY (있지)", group: "", song: "LOCO", gender: "female", youtubeId: "jr9lqsHUS-o", start: 0 },
  { id: "f05", name: "STAYC (스테이씨)", group: "", song: "ASAP", gender: "female", youtubeId: "ljLn5QFnGyQ", start: 0 }, // 링크가 STAYC 공식 채널이 아닌 미러(재업로드) 채널 영상입니다
  { id: "f06", name: "STAYC (스테이씨)", group: "", song: "RUN2U", gender: "female", youtubeId: "JRGy08dQaZ8", start: 0 },
  { id: "f07", name: "aespa (에스파)", group: "", song: "WDA (Whole Different Animal)", gender: "female", youtubeId: "rAE2y9Y3EV8", start: 0 },
  { id: "f08", name: "aespa (에스파)", group: "", song: "Armageddon", gender: "female", youtubeId: "yS0nP3YlbOM", start: 0 },
  { id: "f09", name: "NewJeans (뉴진스)", group: "", song: "Hype Boy", gender: "female", youtubeId: "9JcJ5E1BloU", start: 0 },
  { id: "f10", name: "NewJeans (뉴진스)", group: "", song: "Super Shy", gender: "female", youtubeId: "wU2siJ2c5TA", start: 0 },
  { id: "f11", name: "BABYMONSTER (베이비몬스터)", group: "", song: "DRIP", gender: "female", youtubeId: "cxhqqpVk65Q", start: 0 },
  { id: "f12", name: "BABYMONSTER (베이비몬스터)", group: "", song: "춤 (CHOOM)", gender: "female", youtubeId: "wqSHogLRtJI", start: 0 },
  { id: "f13", name: "NMIXX (엔믹스)", group: "", song: "O.O", gender: "female", youtubeId: "DJYYqCl7emc", start: 0 },
  { id: "f14", name: "NMIXX (엔믹스)", group: "", song: "DASH", gender: "female", youtubeId: "3SW3yPR4RK0", start: 0 },
  { id: "f15", name: "LE SSERAFIM (르세라핌)", group: "", song: "ANTIFRAGILE", gender: "female", youtubeId: "8x43gsnkBH8", start: 0 },
  { id: "f16", name: "LE SSERAFIM (르세라핌)", group: "", song: "이브, 프시케 그리고 푸른 수염의 아내", gender: "female", youtubeId: "i8aa9aR8srg", start: 0 },
  { id: "f17", name: "ILLIT (아일릿)", group: "", song: "Magnetic", gender: "female", youtubeId: "6KIuzXYR16Y", start: 0 },
  { id: "f18", name: "ILLIT (아일릿)", group: "", song: "It's Me", gender: "female", youtubeId: "LM875jeR-PM", start: 0 },
  { id: "f19", name: "IVE (아이브)", group: "", song: "ELEVEN", gender: "female", youtubeId: "EzyWv-eiABA", start: 0 },
  { id: "f20", name: "IVE (아이브)", group: "", song: "LOVE DIVE", gender: "female", youtubeId: "Bo2aD_I7-1U", start: 0 },
  { id: "f21", name: "KISS OF LIFE (키스오브라이프)", group: "", song: "Igloo", gender: "female", youtubeId: "dCBsFUnyXl0", start: 0 },
  { id: "f22", name: "KISS OF LIFE (키스오브라이프)", group: "", song: "Sticky", gender: "female", youtubeId: "4LJgnaTmROk", start: 0 },
  { id: "f23", name: "RESCENE (리센느)", group: "", song: "Pinball", gender: "female", youtubeId: "wXn4OfIqzrs", start: 0 },
  { id: "f24", name: "RESCENE (리센느)", group: "", song: "LOVE ATTACK", gender: "female", youtubeId: "sC5Ue2Tir9c", start: 0 },
  { id: "f25", name: "MEOVV (미야오)", group: "", song: "Hit 'Em", gender: "female", youtubeId: "iuxEdIszWkw", start: 0 },
  { id: "f26", name: "MEOVV (미야오)", group: "", song: "띠로리 (DDI RO RI)", gender: "female", youtubeId: "04W8KR6Bxik", start: 0 },
  { id: "f27", name: "KiiiKiii (키키)", group: "", song: "404 (New Era)", gender: "female", youtubeId: "-w8FunR1L0g", start: 0 }, // 공식 KiiiKiii 채널이 아닌 'ARTBEAT' 채널 업로드 영상입니다
  { id: "f28", name: "KiiiKiii (키키)", group: "", song: "Pop Off Pop Off", gender: "female", youtubeId: "hjcG58y_Fyc", start: 0 },
  { id: "f29", name: "Hearts2Hearts (하츠투하츠)", group: "", song: "Lemon Tang", gender: "female", youtubeId: "Mp6phSXWv-U", start: 0 },
  { id: "f30", name: "Hearts2Hearts (하츠투하츠)", group: "", song: "STYLE", gender: "female", youtubeId: "NLjMZJKMOIc", start: 0 },
  { id: "f31", name: "izna (이즈나)", group: "", song: "BEEP", gender: "female", youtubeId: "-p2LpwfxLdc", start: 0 },
  { id: "f32", name: "izna (이즈나)", group: "", song: "SIGN", gender: "female", youtubeId: "1tZJIl9bofY", start: 0 },

  // ---- 남돌 (male) — 32개 ----
  { id: "m01", name: "Stray Kids (스트레이 키즈)", group: "", song: "Back Door", gender: "male", youtubeId: "WAGlb7u9nqE", start: 0 },
  { id: "m02", name: "Stray Kids (스트레이 키즈)", group: "", song: "특 (S-Class)", gender: "male", youtubeId: "Dd6Jxk5Kgws", start: 0 },
  { id: "m03", name: "TXT (투모로우바이투게더)", group: "", song: "Sugar Rush Ride", gender: "male", youtubeId: "paL62pifsbc", start: 0 },
  { id: "m04", name: "TXT (투모로우바이투게더)", group: "", song: "Good Boy Gone Bad", gender: "male", youtubeId: "rxMwUwqGp40", start: 0 },
  { id: "m05", name: "ENHYPEN (엔하이픈)", group: "", song: "Bloody Paradise", gender: "male", youtubeId: "bPjrHu60278", start: 0 },
  { id: "m06", name: "ENHYPEN (엔하이픈)", group: "", song: "FEVER", gender: "male", youtubeId: "Q345ZZbXGME", start: 0 },
  { id: "m07", name: "ATEEZ (에이티즈)", group: "", song: "Guerrilla", gender: "male", youtubeId: "iiGWZUYmcnQ", start: 0 },
  { id: "m08", name: "ATEEZ (에이티즈)", group: "", song: "BOUNCY (K-HOT CHILI PEPPERS)", gender: "male", youtubeId: "smLc012VUts", start: 0 },
  { id: "m09", name: "ZEROBASEONE (제로베이스원)", group: "", song: "In Bloom", gender: "male", youtubeId: "lD4IcYiF2aM", start: 0 },
  { id: "m33", name: "ZEROBASEONE (제로베이스원)", group: "", song: "ICONIK", gender: "male", youtubeId: "a5_mjB_Ha6w", start: 0 },
  { id: "m10", name: "NCT WISH (엔시티 위시)", group: "", song: "Steady", gender: "male", youtubeId: "sRJdi0wrU8Y", start: 0 },
  { id: "m11", name: "NCT WISH (엔시티 위시)", group: "", song: "poppop", gender: "male", youtubeId: "L0QIuPZL20M", start: 0 },
  { id: "m12", name: "RIIZE (라이즈)", group: "", song: "Siren", gender: "male", youtubeId: "QqPGIrLeWGQ", start: 0 },
  { id: "m13", name: "RIIZE (라이즈)", group: "", song: "Impossible", gender: "male", youtubeId: "KBY5k__89As", start: 0 },
  { id: "m15", name: "CORTIS (코르티스)", group: "", song: "REDRED", gender: "male", youtubeId: "kuVNutQeBBA", start: 0 },
  { id: "m16", name: "CORTIS (코르티스)", group: "", song: "FaSHioN", gender: "male", youtubeId: "u5IhtyOsEzE", start: 0 },
  { id: "m17", name: "&TEAM", group: "", song: "War Cry", gender: "male", youtubeId: "P9QCeDYKoO0", start: 0 },
  { id: "m18", name: "&TEAM", group: "", song: "FIREWORK", gender: "male", youtubeId: "eP2euzGmVGQ", start: 0 },
  { id: "m19", name: "BOYNEXTDOOR (보이넥스트도어)", group: "", song: "One and Only", gender: "male", youtubeId: "YesxqgVVrSQ", start: 0 },
  { id: "m20", name: "BOYNEXTDOOR (보이넥스트도어)", group: "", song: "Hollywood Action", gender: "male", youtubeId: "e07N-HFoF2Y", start: 0 },
  { id: "m21", name: "TWS (투어스)", group: "", song: "첫 만남은 계획대로 되지 않아", gender: "male", youtubeId: "rbyhrcLD5fQ", start: 0 },
  { id: "m22", name: "TWS (투어스)", group: "", song: "OVERDRIVE", gender: "male", youtubeId: "hPs5roxthqg", start: 0 },
  { id: "m23", name: "NEXZ (넥스지)", group: "", song: "NALLINA", gender: "male", youtubeId: "gb4htyIiKnw", start: 0 },
  { id: "m24", name: "NEXZ (넥스지)", group: "", song: "SAUCIN'", gender: "male", youtubeId: "ruLQVo5Kkm8", start: 0 },
  { id: "m25", name: "TREASURE (트레저)", group: "", song: "ZOOM ZOOM", gender: "male", youtubeId: "nSKPJ2UmnqU", start: 0 },
  { id: "m26", name: "TREASURE (트레저)", group: "", song: "BONA BONA", gender: "male", youtubeId: "SkyQR3Tdl_E", start: 0 },
  { id: "m27", name: "ALPHA DRIVE ONE (알파드라이브원)", group: "", song: "OMG!", gender: "male", youtubeId: "lQrH4yyxDhw", start: 0 },
  { id: "m28", name: "ALPHA DRIVE ONE (알파드라이브원)", group: "", song: "FORMULA", gender: "male", youtubeId: "ehpKJRsqecE", start: 0 },
  { id: "m29", name: "KickFlip (킥플립)", group: "", song: "FREEZE", gender: "male", youtubeId: "Pb488MTHdr4", start: 0 },
  { id: "m30", name: "KickFlip (킥플립)", group: "", song: "응 그래 (Umm Great)", gender: "male", youtubeId: "i7ceUM9R45o", start: 0 },
  { id: "m31", name: "P1Harmony (피원하모니)", group: "", song: "때깔 (Killin' It)", gender: "male", youtubeId: "-DHmdP1PrB0", start: 0 },
  { id: "m32", name: "P1Harmony (피원하모니)", group: "", song: "Back Down", gender: "male", youtubeId: "cdnxst5Li-A", start: 0 },
];
