const Menu = [{
  section: "Cafetaria",
  icon: "local_cafe",
  content: [
    {
      subSection: "SUMOS NATURAIS",
      menu: [
      { name: "Laranja", info: "", price: 4.5 },
      { name: "Laranja-Morango", info: "", price: 6 },
      { name: "Morango", info: "", price: 6 },
      { name: "Frutos Vermelhos", description: "(banana, morango, amoras, framboesas, mirtilos)", price: 6.5 },
      { name: "Banana-Manga", info: "", price: 6.5 },
      { name: "Banana-Laranja", info: "", price: 6 },
      { name: "Limonada", info: "", price: 4.5 },
      { name: "Limonada Menta", info: "", price: 5 },
      { name: "Limonada Morango", info: "", price: 6 },
    ]},
    {
      subSection: "BATIDOS",
      menu: [
      { name: "Morango", info: "", price: 5.5 },
      { name: "Banana-Morango", info: "", price: 6 },
      { name: "Frutos Vermelhos", description: "(morangos, framboesas, amoras, mirtilos)", price: 6.5 },
    ]},
    {
      subSection: "SUMOS/REFRIGERANTES",
      menu: [
      { name: "Água tónica Schweppes", info: "", price: 2.5 },
      { name: "Água tónica Fever Three", info: "", price: 4 },
      { name: "Água tónica Nordic", info: "", price: 3.5 },
      { name: "Ginger Ale", info: "", price: 2.5 },
      { name: "Coca-cola", info: "", price: 2.5 },
      { name: "Coca-cola zero", info: "", price: 2.5 },
      { name: "7up", info: "", price: 2.5 },
      { name: "Sumol", description: "(ananás; laranja)", price: 2.5 },
      { name: "Red Bull", info: "", price: 4.5 },
      { name: "Guaraná", info: "", price: 2.5 },
      { name: "Ice tea", description: "(limão; pêssego; manga-ananás)", price: 2.5 },
      { name: "Néctar Compal", description: "(maçã; pera; frutos vermelhos; manga-laranja, pêssego)", price: 2.5 },
    ]},
    {
      subSection: "CAFETARIA",
      menu: [
      { name: "Café", info: "", price: 1 },
      { name: "Café Bombom", description: "(café com leite condensado)", price: 2 },
      { name: "Descafeinado", info: "", price: 1 },
      { name: "Abatanado", info: "", price: 1.5 },
      { name: "Café duplo", info: "", price: 2 },
      { name: "Café c/Natas", info: "", price: 3 },
      { name: "Meia de Leite", info: "", price: 2.5 },
      { name: "Galão", info: "", price: 2.5 },
      { name: "Capuccino", info: "", price: 3.5 },
      { name: "Mazagran", description: "(café, sumo limão, açúcar)", price: 4.5 },
      { name: "Irish coffee", description: "(café, whisky irlandês, natas)", price: 6.5 },
      { name: "Carioca de Limão", info: "", price: 1.5 },
      { name: "Chá", description: "(camomila; cidreira; cidreira-mel; gengibre-limão; lúcia-lima; tília; verde; preto; frutos vermelhos; menta; príncipe; baunilha-caramelo; limão)", price: 2.5 },
      { name: "Chá", info: "(duas chávenas)", price: 3.5 },
      { name: "Chocolate Quente", info: "(clássico)", price: 4 },
      { name: "Chocolate Quente", description: "(chocolate branco; chocolate menta; chocolate caramelo; chocolate maçã-pinhões; chocolate avelã; branco avelã)", price: 4.5 },
    ]},
    {
      subSection: "ÁGUAS",
      menu: [
      { name: "Água Luso s/gás", info: "(0.50L)", price: 1.5 },
      { name: "Pedras Salgadas", info: "", price: 2 },
      { name: "Pedras Salgadas", description: "(limão; frutos vermelhos; maracujá; tangerina)", price: 2.5 },
      { name: "Castelo", info: "", price: 2 },
      { name: "Frize", description: "(limão; groselha; pepino)", price: 2.5 },
    ]},
  ]
}, {
  section: "Cervejas",
  icon: "sports_bar",
  content: [
    {
      subSection: "PRESSÃO",
      menu: [
        { name: "Heineken", info: "(0.20L)", price: 1.50 },
        { name: "Heineken", info: "(0.30L)", price: 2.00 },
        { name: "Heineken", info: "(0.50L)", price: 3.50 },
        { name: "Bandida do Pomar cidra", info: "(0.40L)", price: 4.00 },
    ]},
    {
      subSection: "GARRAFA",
      menu: [
        { name: "Heineken s/ álcool", price: 2.00 },
        { name: "Sagres Branca", info: "(0.33L)", price: 2.50 }, 
        { name: "Sagres Radler", price: 2.50 },
        { name: "Sagres Bohemia", price: 2.50 },
        { name: "Sagres Bohemia bock", price: 2.50 },
        { name: "Sagres Bohemia puro malte", price: 2.50 },
        { name: "Sagres s/álcool", price: 2.00 },
        { name: "Somersby", description: "(maçã; frutos vermelhos)", price: 4.00 }, 
        { name: "Guinness", info: "(0.44L)", price:5.00 },
        { name: "Desperados", price: 4.00 },
        { name: "Corona", price: 4.00 },
        { name: "Budvar", price: 3.00 },
        { name: "Peroni Nastro", price: 4.00 },
        { name: "1906 Reserva Especial", price: 3.00 },
        { name: "Stella ARTOIS", price: 5.00 },
        { name: "Nortada", price: 3.50 },
        { name: "Estrella GALICIA", price: 2.00 },
        { name: "Oharas STOUT", price: 4.50 },
        { name: "Oharas IPA", price: 4.50 },
        { name: "Fullers", info: "(0.50L)", price: 5.00 },
    ]},
  ]
}, {
  section: "Vinhos",
  icon: "liquor",
  content: [
    {
      subSection: "DOURO TINTO",
      menu: [
        { name: "Papa Figos", info: "(copo/garrafa)", price: "4.5 €/17" },
        { name: "Esteva", info: "(copo/garrafa)", price: "3.5 €/13" },
        { name: "Duas Quintas", info: "(copo/garrafa)", price: "6 €/22" },
    ]},
    {
      subSection: "DOURO BRANCO",
      menu: [
        { name: "Papa Figos", info: "(copo/garrafa)", price: "4.5 €/15" },
        { name: "Planalto", info: "(copo/garrafa)", price: "3.5 €/12" },
        { name: "Vinha Grande", info: "(copo/garrafa)", price: "5 €/18" },
        { name: "Quinta dos Carvalhais", info: "(copo/garrafa)", price: "4.5 €/16" },
    ]},
    {
      subSection: "ALENTEJO TINTO",
      menu: [
        { name: "Herdade do Peso", info: "(copo/garrafa)", price: "5 €/17" },
        { name: "Herdade de Grous", info: "(copo/garrafa)", price: "6 €/22" },
        { name: "Chaminé", info: "(copo/garrafa)", price: "4 €/15" },
    ]},
    {
      subSection: "ALENTEJO BRANCO",
      menu: [
        { name: "Borba", info: "(copo/garrafa)", price: "3 €/11" },
        { name: "Vinha das lebres", info: "(copo/garrafa)", price: "3.5 €/13" },
    ]},
    {
      subSection: "DÃO TINTO",
      menu: [
        { name: "Fonte do Ouro", info: "(copo/garrafa)", price: "3.5 €/13" },
    ]},
    {
      subSection: "VINHO VERDE",
      menu: [
        { name: "Alvarinho Azevedo", info: "(garrafa)", price: 16.00 },
        { name: "Casal Garcia", info: "(garrafa)", price: 13.00 },
        { name: "Muralhas", info: "(garrafa)", price: 15.00 },
    ]},
    {
      subSection: "ROSÉS",
      menu: [
        { name: "Mateus", info: "(garrafa)", price: 12.00 },
        { name: "Quinta dos Carvalhais", info: "(garrafa)", price: 16.00 },
    ]},
    {
      subSection: "PORTO",
      menu: [
        { name: "Offley branco/tinto", price: 4.00 },
        { name: "D. Antónia Reserva branco/tinto", price: 5.50 },
        { name: "Porto Tónico branco", price: 5.00 },
        { name: "Offley 10A", price: 6.00 },
    ]},
  ]
}, {
  section: "Bebidas",
  icon: "local_bar",
  content: [
    {
      subSection: "COCKTAIL'S",
      menu: [
        { name: "Caipirinha", description: "(cachaça, lima, açúcar amarelo)", price: 6 },
        { name: "Caipiroska", description: "(vodka, lima, açúcar amarelo)", price: 6 },
        { name: "Caipiblack", description: "(vodka black, lima)", price: 6 },
        { name: "Caipirão", description: "(beirão e lima)", price: 6 },
        { name: "Morangoska", description: "(vodka, morango, açúcar amarelo)", price: 6.5 },
        { name: "Kiwiroska", description: "(vodka, kiwi, açúcar amarelo)", price: 6.5 },
        { name: "Cuba Livre", description: "(rum, coca-cola) ", price: 7 },
        { name: "Mojito", description: "(rum especial, sumo limão, hortelã, água c/gás, açúcar)", price: 8 },
        { name: "Margarita", description: "(tequila, cointreau, sumo limão, sal no copo)", price: 8 },
        { name: "Pinã-Colada", description: "(rum, sumo de ananás, batida de côco)", price: 8 },
        { name: "Tequila Sunrise", description: "(tequila, sumo laranja, groselha)", price: 8 },
        { name: "Blue Lagoon", description: "(vodka, blue coracão, sumo de limão)", price: 8.5 },
        { name: "Expresso Martini", description: "(licor de café, vodka, café expresso)", price: 8 },
        { name: "Sex on the Beach", description: "(vodka, licor de morango, sumo de laranja)", price: 9.5 },
        { name: "Aperol Spritz", description: "", price: 8 },
        { name: "Dry Martini", description: "(vermute seco, gin London dry)", price: 6 },
        { name: "Negroni", description: "(gin, campari, vermute tinto)", price: 8 }, // TODO: rever preço
        { name: "Cosmopolitan", description: "(vodka, cointreau, sumo de arando, sumo de lima)", price: 8 },
        { name: "Alexander Sister", description: "(gin, menta, natas)", price: 7.5 },
        { name: "Long Island Iced Tea", description: "(vodka, tequila, rum, triple sec, gin, sumo limão, cola)", price: 10 },
    ]},
    {
      subSection: "VERMUTES",
      menu: [
        { name: "Martini Rosso/Bianco", info: "", price: 4 },
        { name: "Martini Tónico", info: "", price: 6 },
    ]},
    {
      subSection: "TEQUILA'S",
      menu: [
        { name: "Olmeca", info: "", price: 7 },
        { name: "Mezcal", info: "", price: 7 },
    ]},
    {
      subSection: "SANGRIAS",
      menu: [
        { name: "Tinto/branca", info: "(1L/2L)", price: "13 €/23" },
        { name: "Cidra com frutos vermelhos", info: "(1L/2L)", price: "14 €/22" },
        { name: "Espumante com frutos vermelhos", info: "(1L/2L)", price: "17 €/32" },
        { name: "Espumante Asti Gancia com frutos vermelhos", info: "(1L/2L)", price: "20 €/38" },
    ]},
    {
      subSection: "GIN'S",
      subSectionInfo: "(nota: com água tónica premium acresce 2.00€)",
      menu: [
        { name: "Bombay Saphire", description: "(limão, pau de canela)", price: 7.50 },
        { name: "Bulldog", description: "(bagas de zimbro, limão)", price: 8.00 },
        { name: "Nao", description: "(laranja, vagem de baunilha)", price: 8.50 },
        { name: "Beefeater 24", description: "(laranja, pau de canela)", price:8.50 },
        { name: "Caorunn", description: "(maçã)", price:8.00 },
        { name: "Gordons", description: "(limão, pau de canela)", price:6.50 },
        { name: "Gordons pink", description: "(morangos e amora)", price: 7.50 },
        { name: "Hendrick's", description: "(pepino, hortelã)", price:8.50 },
        { name: "Vigne", description: "(uva)", price: 9.50 },
        { name: "Mare", description: "(tomilho, alecrim)", price:9.00 },
        { name: "Nordés", description: "(uva, louro)", price:8.50 },
        { name: "Monkey 47", description: "(amora, morango)", price:15.00 },
        { name: "Martin Miller's", description: "(laranja, limão, pau de canela)", price: 8.50 },
        { name: "Sharish", description: "(maçã)", price: 9.00 },
        { name: "Sharish Blue", description: "(morango, amora)", price: 10.50 },
        { name: "Tanqueray", description: "(limão, lima)", price:7.50 },
        { name: "Tanqueray Ten", description: "(maçã, lima)", price:10.50 },
        { name: "Tanqueray Sevilha", description: "(laranja, canela)", price:8.00 },
        { name: "Saffron", description: "(café, laranja)", price:9.50 },
        { name: "Jodhpur Reserve", description: "(café, laranja)", price: 14.50 },
        { name: "Larios 12", description: "(limão, lima)", price: 8.00 },
        { name: "Macronesian", description: "(gengibre, limão)", price:9.50 },
        { name: "Mombasa Club", description: "(morango, hortelã)", price: 11.00 },
        { name: "London Nº 1", description: "(limão, vagem de baunilha)", price:11.50 },
        { name: "London Nº 3", description: "(lima)", price:  9.50 },
        { name: "Bloom", description: "(laranja, canela)", price: 9.50 },
        { name: "Azor", description: "(gengibre, limão)", price:9.00 },
    ]},
    {
      subSection: "RUM'S",
      menu: [
        { name: "Bacardi", price: 5.50 },
        { name: "Bacardi Lemon", price: 6.00 },
        { name: "Havanna Club 3 anos", price: 5.50 },
        { name: "Havanna Club 7 anos", price: 8.50 },
        { name: "Pampero Anejo Especial", price: 9.00 },
        { name: "Zacapa 23", price: 17.00 },
        { name: "Kraken", price: 9.00 },
        { name: "Diplomatico", price: 11.00 },
    ]},
    {
      subSection: "LICORES",
      menu: [
        { name: "Amêndoa Amarga", price: 4.00 },
        { name: "Safari", price: 6.00 },
        { name: "Pisang Ambom", price: 6.00 },
        { name: "Batida de Côco", price: 6.00 },
        { name: "Cointreau", price: 6.00 },
        { name: "Sheridan's", price: 10.00 },
        { name: "Drambuie", price: 9.00 },
        { name: "Tia Maria", price: 6.00 },
        { name: "Beirão", price: 5.00 },
        { name: "Baileys Original", price: 6.00 },
        { name: "Carolans", price: 6.00 },
        { name: "Malibu", price: 6.00 },
        { name: "Frangélico", price: 6.00 },
        { name: "Bols", description: "(blue/banana/strawberry)", price: 6.50 },
        { name: "Moscatel Favaios", price: 4.00 },
    ]},
    {
      subSection: "AGUARDENTES",
      menu: [
        { name: "CRF Reserva", price: 6.00 },
        { name: "Ferreirinha Velha", price: 15.00 },
    ]},
    {
      subSection: "CONHAQUES",
      menu: [
        { name: "Courvoisier VS", price: 10.00 },
        { name: "Remy Martin VSOP", price: 14.00 }, 
    ]},
    {
      subSection: "VODKAS",
      menu: [
        { name: "Smirnoff", price: 5.50 },
        { name: "Eristoff", price: 5.50 },
        { name: "Eristoff Black", price: 6.00 },
        { name: "Absolut", price: 7.00 },
        { name: "Ciroc", price: 11.00 },
        { name: "Grey Goose", price: 13.00 },
        { name: "Artic Morango/Melão", price: 6.00 },
        { name: "Smirnoff ice", price: 4.50 },
    ]},
    {
      subSection: "BRANDY",
      menu: [
        { name: "Croft", price: 5.00 },
        { name: "Macieira", price: 5.00 },
    ]},
    {
      subSection: "WHISKIES",
      menu: [
        { name: "Cutty Sark", price: 5.00 },
        { name: "J&B", price: 5.00 },
        { name: "Famous Grouse", price: 5.50 },
        { name: "Ballantine's", price: 5.50 },
        { name: "Red Label", price: 5.50 },
        { name: "Jameson", price: 6.00 },
        { name: "Bushmills", price: 6.00 },
        { name: "Jack Daniel's", price: 7.00 },
        { name: "Bulleit Bourbon", price: 9.00 },
        { name: "Nikka from the Barrel", price: 16.00 },
        { name: "Black Label 12A", price: 9.00 },
        { name: "Old Parr 12A", price: 10.00 },
        { name: "Cutty Sark 15A", price: 11.00 },
        { name: "Bushmills 10A", price: 11.00 },
        { name: "The Balvenie 12A", price: 13.00 },
        { name: "The Glenrothes select reserve", price: 14.00 },
        { name: "Lagavulin", price: 16.00 },
        { name: "Glenlivet", price: 12.00 },
        { name: "Chivas Regal 18A", price: 20.00 },
        { name: "Chivas Regal 25A", price: 60.00 },
        { name: "Royal Salut 21A", price: 35.00 },
    ]},
    {
      subSection: "CHAMPANHES",
      menu: [
        { name: "Moet Chandon", info: "(garrafa)", price: 80 },
    ]},
    {
      subSection: "ESPUMANTES",
      menu: [
        { name: "Asti Gancia", info: "", price: 18 },
    ]},
  ]
}, {
  section: "Comidas",
  icon: "lunch_dining",
  content: [
    {
      subSection: "PARA PARTILHAR",
      menu: [
        { name: "Camarão ao alhinho", info: "(150gr)", price: 13.50 },
        { name: "Queijo de cabra fundido com mel e nozes", price: 9.00 },
        { name: "Asinhas de frango", price: 5.00 },
        { name: "Pica-Pau vaca", price: 13.00 },
        { name: "Pão de alho", price: 4.00 },
        { name: "Pasta de atum", price: 4.50 },
        { name: "Tâmaras com bacon", price: 5.50 },
        { name: "Tomate com queijo mozarela búfala", price: 6.00 },
        { name: "Tábua de presunto ibérico", price: 8.00 },
        { name: "Tábua de 2 queijos", price: 10.00 },
        { name: "Tábua de 5 queijos", price: 20.00 },
        { name: "Couvert", description: "(azeitonas, pasta atum, manteiga de alho, pão)", price:  6.00 },
        { name: "Cesto pão", price: 1.50 },
        { name: "Pão Torrado", price: 2.00 },
        { name: "Azeitonas", price: 2.00 },
        { name: "Caracóis", info: "(época)", price: 8.50 },
    ]},
    {
      subSection: "CARNE",
      subSectionInfo: "(NOTA: Informamos que a cozinha encerra às 22:30)",
      menu: [
        { name: "Picanha", description: "(arroz, batata frita, feijão preto, farófia)", price:  15.50 },
        { name: "Bife da vazia", info: "(250gr)", price: 14.50 },
        { info: "• Opção: molho cervejeiro" },
        { info: "• Opções de acompanhamento: Risoto cogumelos/Linguine/Batata frita palito" },
        { name: "Peito de Frango marinado", price: 10.50 },
        { info: "• Opções de acompanhamento: Risoto cogumelos/Linguine/Batata frita palito" },
        { name: "Bifana no prato", description: "(fruta, queijo, presunto, tomate, batata frita palito)", price:  10.00 },
    ]},
    {
      subSection: "PASTA",
      menu: [
        { name: "Linguine de polvo e camarão", price: 18.90 },
        { name: "Linguine Mediterrâneo", description: "(espargos, tomate cherry, mozarela, bacon, presunto)", price: 11.50 },
        { name: "Penne de frango, espinafres e tomate cherry", price: 9.90 },
        { name: "Penne de frango com cogumelos", price: 11.50 },
    ]},
    {
      subSection: "RISOTOS",
      menu: [
        { name: "Risoto de Camarão e limão com manjericão", price: 14.50 },
        { name: "Risoto de espargos com queijo brie", price: 11.50 },
        { name: "Risoto de cogumelos", price: 11.50 },
    ]},
    {
      subSection: "OMELETES",
      subSectionInfo: "(Acompanhamento: batata frita palito, tomate)",
      menu: [
        { name: "Omelete Simples", description: "(cebola, salsa)", price: 6.00 },
        { name: "Omelete de Queijo ou Fiambre", description: "(cebola, salsa, queijo ou fiambre)", price:  7.00 },
        { name: "Omelete Mista", description: "(cebola, salsa, queijo, fiambre)", price: 8.00 },
        { name: "Omelete de Presunto", description: "(cebola, salsa, queijo, presunto)", price: 11.00 },
        { name: "Omelete de Frango", description: "(cebola, salsa, queijo, frango)", price: 11.00 },
        { name: "Omelete de Camarão", description: "(cebola, salsa, queijo, camarão)", price: 12.00 },
    ]},
    {
      subSection: "EXTRAS",
      menu: [
        { name: "Salada mista", price: 1.50 },
        { name: "Ovo estrelado", price: 1.50 },
        { name: "Batata frita pacote", price: 1.00 },
        { name: "Batata frita palito", price: 3.00 },
        { name: "Tremoços", price: 0.50 },
    ]},
    {
      subSection: "SOBREMESAS",
      menu: [
        { name: "Tiramisù", price: 4.50 },
        { name: "Panna Cotta com calda de frutos vermelhos", price: 4.50 }, 
        { name: "Salada de frutas", price: 4.50 }, 
    ]},
    {
      subSection: "NO PÃO",
      menu: [
        { name: "Prego em Bolo do Caco", price: 8.00 },
        { name: "Prego especial em Bolo do caco", price: 9.00 },
        { name: "Prego", price: 7.00 },
        { name: "Prego Especial", description: "(c/ queijo e presunto)", price:  8.00 },
        { name: "Bifana", price: 5.00 },
        { name: "Bifana Especial", description: "(c/ queijo e presunto)", price: 6.00 },
        { name: "Sandes de Ovo mexido", price: 4.00 },
        { name: "Cachorro em pão frade", price: 5.00 },
        { name: "Cachorro em pão de cachorro", price: 4.00 },
    ]},
    {
      subSection: "TOSTAS",
      menu: [
        { name: "Tosta de Atum", description: "(atum, maionaise, queijo, manteiga e orégãos)", price:  7.00 },
        { name: "Tosta de Frango", description: "(frango, maionaise, tomate, queijo, manteiga e orégãos)", price: 7.00 },
        { name: "Tosta de Molho Pesto", description: "(molho pesto, presunto, tomate, queijo, manteiga e orégãos)", price: 6.50 },
        { name: "Tosta Mista", description: "(queijo, fiambre, manteiga e orégãos)", price: 5.00 },
        { name: "Tosta de Queijo e Tomate", price: 5.50 },
        { name: "Tosta de Queijo e Presunto", price: 6.50 },
        { name: "Tosta de Queijo ou Fiambre", price: 4.50 },
    ]},
    {
      subSection: "TORRADAS",
      menu: [
        { name: "Torrada", price: 2.50 },
        { name: "½ Torrada", price: 2.00 },
        { name: "Torrada c/ Doce ou Mel", price: 3.50 },
        { name: "½ Torrada c/ Doce ou Mel", price: 3.00 },
    ]},
  ]
},
];
