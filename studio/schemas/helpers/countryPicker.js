export default {
  name: 'countryPicker',
  title: 'Country',
  type: 'string',
  options: {
    list: [
      { title: 'Earth', value: '' },
      { title: 'Andorra', value: 'andorra' },
      { title: 'United Arab Emirates', value: 'united-arab-emirates' },
      { title: 'Afghanistan', value: 'afghanistan' },
      { title: 'Antigua and Barbuda', value: 'antigua-and-barbuda' },
      { title: 'Anguilla', value: 'anguilla' },
      { title: 'Albania', value: 'albania' },
      { title: 'Armenia', value: 'armenia' },
      { title: 'Angola', value: 'angola' },
      { title: 'Antarctica', value: 'antarctica' },
      { title: 'Argentina', value: 'argentina' },
      { title: 'American Samoa', value: 'american-samoa' },
      { title: 'Austria', value: 'austria' },
      { title: 'Australia', value: 'australia' },
      { title: 'Aruba', value: 'aruba' },
      { title: 'Åland Islands', value: 'åland-islands' },
      { title: 'Azerbaijan', value: 'azerbaijan' },
      { title: 'Bosnia and Herzegovina', value: 'bosnia-and-herzegovina' },
      { title: 'Barbados', value: 'barbados' },
      { title: 'Bangladesh', value: 'bangladesh' },
      { title: 'Belgium', value: 'belgium' },
      { title: 'Burkina Faso', value: 'burkina-faso' },
      { title: 'Bulgaria', value: 'bulgaria' },
      { title: 'Bahrain', value: 'bahrain' },
      { title: 'Burundi', value: 'burundi' },
      { title: 'Benin', value: 'benin' },
      { title: 'Saint Barthélemy', value: 'saint-barthélemy' },
      { title: 'Bermuda', value: 'bermuda' },
      { title: 'Brunei Darussalam', value: 'brunei-darussalam' },
      { title: 'Bolivia, Plurinational State of', value: 'bolivia-plurinational-state-of' },
      { title: 'Bonaire, Sint Eustatius and Saba', value: 'bonaire-sint-eustatius-and-saba' },
      { title: 'Brazil', value: 'brazil' },
      { title: 'Bahamas', value: 'bahamas' },
      { title: 'Bhutan', value: 'bhutan' },
      { title: 'Bouvet Island', value: 'bouvet-island' },
      { title: 'Botswana', value: 'botswana' },
      { title: 'Belarus', value: 'belarus' },
      { title: 'Belize', value: 'belize' },
      { title: 'Canada', value: 'canada' },
      { title: 'Cocos (Keeling) Islands', value: 'cocos-(keeling)-islands' },
      { title: 'Congo, Democratic Republic of the', value: 'congo-democratic-republic-of-the' },
      { title: 'Central African Republic', value: 'central-african-republic' },
      { title: 'Congo', value: 'congo' },
      { title: 'Switzerland', value: 'switzerland' },
      { title: "Côte d'Ivoire", value: 'côte-divoire' },
      { title: 'Cook Islands', value: 'cook-islands' },
      { title: 'Chile', value: 'chile' },
      { title: 'Cameroon', value: 'cameroon' },
      { title: 'China', value: 'china' },
      { title: 'Colombia', value: 'colombia' },
      { title: 'Costa Rica', value: 'costa-rica' },
      { title: 'Cuba', value: 'cuba' },
      { title: 'Cabo Verde', value: 'cabo-verde' },
      { title: 'Curaçao', value: 'curaçao' },
      { title: 'Christmas Island', value: 'christmas-island' },
      { title: 'Cyprus', value: 'cyprus' },
      { title: 'Czechia', value: 'czechia' },
      { title: 'Germany', value: 'germany' },
      { title: 'Djibouti', value: 'djibouti' },
      { title: 'Denmark', value: 'denmark' },
      { title: 'Dominica', value: 'dominica' },
      { title: 'Dominican Republic', value: 'dominican-republic' },
      { title: 'Algeria', value: 'algeria' },
      { title: 'Ecuador', value: 'ecuador' },
      { title: 'Estonia', value: 'estonia' },
      { title: 'Egypt', value: 'egypt' },
      { title: 'Western Sahara', value: 'western-sahara' },
      { title: 'Eritrea', value: 'eritrea' },
      { title: 'Spain', value: 'spain' },
      { title: 'Ethiopia', value: 'ethiopia' },
      { title: 'Finland', value: 'finland' },
      { title: 'Fiji', value: 'fiji' },
      { title: 'Falkland Islands (Malvinas)', value: 'falkland-islands-(malvinas)' },
      { title: 'Micronesia, Federated States of', value: 'micronesia-federated-states-of' },
      { title: 'Faroe Islands', value: 'faroe-islands' },
      { title: 'France', value: 'france' },
      { title: 'Gabon', value: 'gabon' },
      {
        title: 'United Kingdom of Great Britain and Northern Ireland',
        value: 'united-kingdom-of-great-britain-and-northern-ireland',
      },
      { title: 'Grenada', value: 'grenada' },
      { title: 'Georgia', value: 'georgia' },
      { title: 'French Guiana', value: 'french-guiana' },
      { title: 'Guernsey', value: 'guernsey' },
      { title: 'Ghana', value: 'ghana' },
      { title: 'Gibraltar', value: 'gibraltar' },
      { title: 'Greenland', value: 'greenland' },
      { title: 'Gambia', value: 'gambia' },
      { title: 'Guinea', value: 'guinea' },
      { title: 'Guadeloupe', value: 'guadeloupe' },
      { title: 'Equatorial Guinea', value: 'equatorial-guinea' },
      { title: 'Greece', value: 'greece' },
      {
        title: 'South Georgia and the South Sandwich Islands',
        value: 'south-georgia-and-the-south-sandwich-islands',
      },
      { title: 'Guatemala', value: 'guatemala' },
      { title: 'Guam', value: 'guam' },
      { title: 'Guinea-Bissau', value: 'guinea-bissau' },
      { title: 'Guyana', value: 'guyana' },
      { title: 'Hong Kong', value: 'hong-kong' },
      { title: 'Heard Island and McDonald Islands', value: 'heard-island-and-mcdonald-islands' },
      { title: 'Honduras', value: 'honduras' },
      { title: 'Croatia', value: 'croatia' },
      { title: 'Haiti', value: 'haiti' },
      { title: 'Hungary', value: 'hungary' },
      { title: 'Indonesia', value: 'indonesia' },
      { title: 'Ireland', value: 'ireland' },
      { title: 'Israel', value: 'israel' },
      { title: 'Isle of Man', value: 'isle-of-man' },
      { title: 'India', value: 'india' },
      { title: 'British Indian Ocean Territory', value: 'british-indian-ocean-territory' },
      { title: 'Iraq', value: 'iraq' },
      { title: 'Iran, Islamic Republic of', value: 'iran-islamic-republic-of' },
      { title: 'Iceland', value: 'iceland' },
      { title: 'Italy', value: 'italy' },
      { title: 'Jersey', value: 'jersey' },
      { title: 'Jamaica', value: 'jamaica' },
      { title: 'Jordan', value: 'jordan' },
      { title: 'Japan', value: 'japan' },
      { title: 'Kenya', value: 'kenya' },
      { title: 'Kyrgyzstan', value: 'kyrgyzstan' },
      { title: 'Cambodia', value: 'cambodia' },
      { title: 'Kiribati', value: 'kiribati' },
      { title: 'Comoros', value: 'comoros' },
      { title: 'Saint Kitts and Nevis', value: 'saint-kitts-and-nevis' },
      {
        title: "Korea, Democratic People's Republic of",
        value: 'korea-democratic-peoples-republic-of',
      },
      { title: 'Korea, Republic of', value: 'korea-republic-of' },
      { title: 'Kuwait', value: 'kuwait' },
      { title: 'Cayman Islands', value: 'cayman-islands' },
      { title: 'Kazakhstan', value: 'kazakhstan' },
      { title: "Lao People's Democratic Republic", value: 'lao-peoples-democratic-republic' },
      { title: 'Lebanon', value: 'lebanon' },
      { title: 'Saint Lucia', value: 'saint-lucia' },
      { title: 'Liechtenstein', value: 'liechtenstein' },
      { title: 'Sri Lanka', value: 'sri-lanka' },
      { title: 'Liberia', value: 'liberia' },
      { title: 'Lesotho', value: 'lesotho' },
      { title: 'Lithuania', value: 'lithuania' },
      { title: 'Luxembourg', value: 'luxembourg' },
      { title: 'Latvia', value: 'latvia' },
      { title: 'Libya', value: 'libya' },
      { title: 'Morocco', value: 'morocco' },
      { title: 'Monaco', value: 'monaco' },
      { title: 'Moldova, Republic of', value: 'moldova-republic-of' },
      { title: 'Montenegro', value: 'montenegro' },
      { title: 'Saint Martin, (French part)', value: 'saint-martin-(french-part)' },
      { title: 'Madagascar', value: 'madagascar' },
      { title: 'Marshall Islands', value: 'marshall-islands' },
      { title: 'North Macedonia', value: 'north-macedonia' },
      { title: 'Mali', value: 'mali' },
      { title: 'Myanmar', value: 'myanmar' },
      { title: 'Mongolia', value: 'mongolia' },
      { title: 'Macao', value: 'macao' },
      { title: 'Northern Mariana Islands', value: 'northern-mariana-islands' },
      { title: 'Martinique', value: 'martinique' },
      { title: 'Mauritania', value: 'mauritania' },
      { title: 'Montserrat', value: 'montserrat' },
      { title: 'Malta', value: 'malta' },
      { title: 'Mauritius', value: 'mauritius' },
      { title: 'Maldives', value: 'maldives' },
      { title: 'Malawi', value: 'malawi' },
      { title: 'Mexico', value: 'mexico' },
      { title: 'Malaysia', value: 'malaysia' },
      { title: 'Mozambique', value: 'mozambique' },
      { title: 'Namibia', value: 'namibia' },
      { title: 'New Caledonia', value: 'new-caledonia' },
      { title: 'Niger', value: 'niger' },
      { title: 'Norfolk Island', value: 'norfolk-island' },
      { title: 'Nigeria', value: 'nigeria' },
      { title: 'Nicaragua', value: 'nicaragua' },
      { title: 'Netherlands', value: 'netherlands' },
      { title: 'Norway', value: 'norway' },
      { title: 'Nepal', value: 'nepal' },
      { title: 'Nauru', value: 'nauru' },
      { title: 'Niue', value: 'niue' },
      { title: 'New Zealand', value: 'new-zealand' },
      { title: 'Oman', value: 'oman' },
      { title: 'Panama', value: 'panama' },
      { title: 'Peru', value: 'peru' },
      { title: 'French Polynesia', value: 'french-polynesia' },
      { title: 'Papua New Guinea', value: 'papua-new-guinea' },
      { title: 'Philippines', value: 'philippines' },
      { title: 'Pakistan', value: 'pakistan' },
      { title: 'Poland', value: 'poland' },
      { title: 'Saint Pierre and Miquelon', value: 'saint-pierre-and-miquelon' },
      { title: 'Pitcairn', value: 'pitcairn' },
      { title: 'Puerto Rico', value: 'puerto-rico' },
      { title: 'Palestine, State of', value: 'palestine-state-of' },
      { title: 'Portugal', value: 'portugal' },
      { title: 'Palau', value: 'palau' },
      { title: 'Paraguay', value: 'paraguay' },
      { title: 'Qatar', value: 'qatar' },
      { title: 'Réunion', value: 'réunion' },
      { title: 'Romania', value: 'romania' },
      { title: 'Serbia', value: 'serbia' },
      { title: 'Russian Federation', value: 'russian-federation' },
      { title: 'Rwanda', value: 'rwanda' },
      { title: 'Saudi Arabia', value: 'saudi-arabia' },
      { title: 'Solomon Islands', value: 'solomon-islands' },
      { title: 'Seychelles', value: 'seychelles' },
      { title: 'Sudan', value: 'sudan' },
      { title: 'Sweden', value: 'sweden' },
      { title: 'Singapore', value: 'singapore' },
      {
        title: 'Saint Helena, Ascension and Tristan da Cunha',
        value: 'saint-helena-ascension-and-tristan-da-cunha',
      },
      { title: 'Slovenia', value: 'slovenia' },
      { title: 'Svalbard and Jan Mayen', value: 'svalbard-and-jan-mayen' },
      { title: 'Slovakia', value: 'slovakia' },
      { title: 'Sierra Leone', value: 'sierra-leone' },
      { title: 'San Marino', value: 'san-marino' },
      { title: 'Senegal', value: 'senegal' },
      { title: 'Somalia', value: 'somalia' },
      { title: 'Suriname', value: 'suriname' },
      { title: 'South Sudan', value: 'south-sudan' },
      { title: 'Sao Tome and Principe', value: 'sao-tome-and-principe' },
      { title: 'El Salvador', value: 'el-salvador' },
      { title: 'Sint Maarten, (Dutch part)', value: 'sint-maarten-(dutch-part)' },
      { title: 'Syrian Arab Republic', value: 'syrian-arab-republic' },
      { title: 'Eswatini', value: 'eswatini' },
      { title: 'Turks and Caicos Islands', value: 'turks-and-caicos-islands' },
      { title: 'Chad', value: 'chad' },
      { title: 'French Southern Territories', value: 'french-southern-territories' },
      { title: 'Togo', value: 'togo' },
      { title: 'Thailand', value: 'thailand' },
      { title: 'Tajikistan', value: 'tajikistan' },
      { title: 'Tokelau', value: 'tokelau' },
      { title: 'Timor-Leste', value: 'timor-leste' },
      { title: 'Turkmenistan', value: 'turkmenistan' },
      { title: 'Tunisia', value: 'tunisia' },
      { title: 'Tonga', value: 'tonga' },
      { title: 'Turkey', value: 'turkey' },
      { title: 'Trinidad and Tobago', value: 'trinidad-and-tobago' },
      { title: 'Tuvalu', value: 'tuvalu' },
      { title: 'Taiwan, Province of China', value: 'taiwan-province-of-china' },
      { title: 'Tanzania, United Republic of', value: 'tanzania-united-republic-of' },
      { title: 'Ukraine', value: 'ukraine' },
      { title: 'Uganda', value: 'uganda' },
      {
        title: 'United States Minor Outlying Islands',
        value: 'united-states-minor-outlying-islands',
      },
      { title: 'United States of America', value: 'united-states-of-america' },
      { title: 'Uruguay', value: 'uruguay' },
      { title: 'Uzbekistan', value: 'uzbekistan' },
      { title: 'Holy See', value: 'holy-see' },
      { title: 'Saint Vincent and the Grenadines', value: 'saint-vincent-and-the-grenadines' },
      { title: 'Venezuela, Bolivarian Republic of', value: 'venezuela-bolivarian-republic-of' },
      { title: 'Virgin Islands, British', value: 'virgin-islands-british' },
      { title: 'Virgin Islands, U.S.', value: 'virgin-islands-u.s.' },
      { title: 'Viet Nam', value: 'viet-nam' },
      { title: 'Vanuatu', value: 'vanuatu' },
      { title: 'Wallis and Futuna', value: 'wallis-and-futuna' },
      { title: 'Samoa', value: 'samoa' },
      { title: 'Yemen', value: 'yemen' },
      { title: 'Mayotte', value: 'mayotte' },
      { title: 'South Africa', value: 'south-africa' },
      { title: 'Zambia', value: 'zambia' },
      { title: 'Zimbabwe', value: 'zimbabwe' },
    ],
  },
}
