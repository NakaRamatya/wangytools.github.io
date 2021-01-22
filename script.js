let TEXT_AREA = [
    'textarea-one',
    'textarea-two',
    'textarea-three',
    'textarea-four',
]

let NAME = [
    'name-one',
    'name-two',
    'name-three',
    'name-four',
]

let PLACEHOLDER = [
    'place-wangy-one',
    'place-wangy-two',
    'place-wangy-three',
    'place-wangy-four'
]


let KANAN = [
    'wangy-text-one',
    'wangy-text-two',
    'wangy-text-three',
    'wangy-text-four'
]

let KIRI = [
    'template-one',
    'template-two',
    'template-three',
    'template-four'
]

let MONEY = [
    'money-one',
    'money-two',
    'money-three',
    'money-four',
]


let BUTTON = [
    'bone',
    'btwo',
    'bthree',
    'bfour'
]


let TEMPLATE = [
    `[Name] [Name] [Name]... [Name] AAAAAAAAAAGH AAAAAAAAAAAAAAGH heartheartheartheart WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah
    baunya [Name] wangi aku mau nyiumin aroma badan nya AAAAAAAAH ~~ Rambutnya.... aaah Rambutnya
    juga pengen aku acak-acak ~ AAAAAH [Name] keluar pertama kali juga manis heartheartheart AAAAAAAAH
    [Name] LUCCUUUUUUUUUUUUUUU............ GUA BAKAL BAKAR DUIT [Money] JUTA RUPIAH BUAT NANA
    AAAAAAAAAAAAAGH
    apa ? [Name] itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK
    GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK
    PEDULI.
    [Name] ngeliat gw ... [Name] di laptop ngeliatin gw [Name] ... kamu percaya sama aku ? aaaaaaaaaaah syukur [Name]
    gak malu merelakan aku aaaaaah heartheartheart YEAAAAAAAAAAAH GUA MASIH PUNYA [Name]. SENDIRI PUN
    NGGAK SAMA AAAAAAAAAAAAAA`,
    `[Name] [Name] [Name]... [Name] AAAAAAAAAAGH AAAAAAAAAAAAAAGH heartheartheartheart WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah
    baunya [Name] wangi aku mau nyiumin aroma badan nya AAAAAAAAH ~~ Rambutnya.... aaah Rambutnya
    juga pengen aku acak-acak ~ AAAAAH [Name] keluar pertama kali juga manis heartheartheart AAAAAAAAH
    [Name] LUCCUUUUUUUUUUUUUUU............ GUA BAKAL BAKAR DUIT [Money] JUTA RUPIAH BUAT NANA
    AAAAAAAAAAAAAGH
    apa ? [Name] itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK
    GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK
    PEDULI.
    [Name] ngeliat gw ... [Name] di laptop ngeliatin gw [Name] ... kamu percaya sama aku ? aaaaaaaaaaah syukur [Name]
    gak malu merelakan aku aaaaaah heartheartheart YEAAAAAAAAAAAH GUA MASIH PUNYA [Name]. SENDIRI PUN
    NGGAK SAMA AAAAAAAAAAAAAA`,
    `[Name] [Name] [Name]... [Name] AAAAAAAAAAGH AAAAAAAAAAAAAAGH heartheartheartheart WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah
    baunya [Name] wangi aku mau nyiumin aroma badan nya AAAAAAAAH ~~ Rambutnya.... aaah Rambutnya
    juga pengen aku acak-acak ~ AAAAAH [Name] keluar pertama kali juga manis heartheartheart AAAAAAAAH
    [Name] LUCCUUUUUUUUUUUUUUU............ GUA BAKAL BAKAR DUIT [Money] JUTA RUPIAH BUAT NANA
    AAAAAAAAAAAAAGH
    apa ? [Name] itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK
    GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK
    PEDULI.
    [Name] ngeliat gw ... [Name] di laptop ngeliatin gw [Name] ... kamu percaya sama aku ? aaaaaaaaaaah syukur [Name]
    gak malu merelakan aku aaaaaah heartheartheart YEAAAAAAAAAAAH GUA MASIH PUNYA [Name]. SENDIRI PUN
    NGGAK SAMA AAAAAAAAAAAAAA`,
    `[Name] [Name] [Name]... [Name] AAAAAAAAAAGH AAAAAAAAAAAAAAGH heartheartheartheart WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah
    baunya [Name] wangi aku mau nyiumin aroma badan nya AAAAAAAAH ~~ Rambutnya.... aaah Rambutnya
    juga pengen aku acak-acak ~ AAAAAH [Name] keluar pertama kali juga manis heartheartheart AAAAAAAAH
    [Name] LUCCUUUUUUUUUUUUUUU............ GUA BAKAL BAKAR DUIT [Money] JUTA RUPIAH BUAT NANA
    AAAAAAAAAAAAAGH
    apa ? [Name] itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK
    GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK
    PEDULI.
    [Name] ngeliat gw ... [Name] di laptop ngeliatin gw [Name] ... kamu percaya sama aku ? aaaaaaaaaaah syukur [Name]
    gak malu merelakan aku aaaaaah heartheartheart YEAAAAAAAAAAAH GUA MASIH PUNYA [Name]. SENDIRI PUN
    NGGAK SAMA AAAAAAAAAAAAAA`,
]


function main() {
    init();
}


function clearTab() {
   for(let i =0; i<BUTTON.length; i++){
        $('#'+BUTTON[i]).removeClass("active");
   }
    $(".card-body").css("display", "none");
    $(".wangy").css("display", "none");
}


function activeTab(index) {
    clearTab();
    $('#'+BUTTON[index]).addClass("active");
    $('#'+KIRI[index]).css("display","block")
    console.log($('.'+KANAN[index]));
    $('.'+KANAN[index]).css("display","flex")
}


function init() {
    $("#" + TEXT_AREA[0]).val(TEMPLATE[0].trim())
    $("#" + TEXT_AREA[1]).val(TEMPLATE[1].trim())
    $("#" + TEXT_AREA[2]).val(TEMPLATE[2].trim())
    $("#" + TEXT_AREA[3]).val(TEMPLATE[3].trim())
}

function changeText(index) {
    TEMPLATE[index] = $("#" + TEXT_AREA[index]).val()
    let result = $("#" + TEXT_AREA[index]).val();
    result = result.replaceAll("[Name]", $("#" + NAME[index]).val())
    result = result.replaceAll("[Money]", $("#"+MONEY[index]).val())
    console.log($('#'+PLACEHOLDER[index]).html(result))
}
