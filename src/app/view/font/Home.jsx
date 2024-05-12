import {  ar_one_sans,  advent_pro,  afacad,  akshar,  albert_sans,  algereya,  aleo,  alexandria,  alumini_sans,  andada_pro,  anek_bangla,  anek_gujarati,  anek_devanagari,  anek_gurmukhi,  anek_latin,  anek_kannada,  anek_malayalam,  anek_odia,  anek_tamil,  anek_telugu,  antonio,  anuphan,  anybody,  archivo,  archivo_narrow,  arima,  arimo,  asap,  assistant,  azeret_mono,  ballet,  baloo_2,  baloo_bhai_2,  baloo_bhaijaan_2,  baloo_bhaina_2,  baloo_chettan_2,  baloo_da_2,  baloo_paaji_2,  baloo_tamma_2,  baloo_tammudu_2,  baloo_thambi_2,  besley,  big_shoulders_display,  big_shoulders_inline_display,  big_shoulders_inline_text,  big_shoulders_text,  bitter,  bodoni_moda,  brygada_1918,  cabin,  cairo,  cairo_play,  catamaran,  caveat,  changa,  chivo,  chivo_mono,  cinzel,  climate_crisis,  comme,  commissioner,  cormorant,  crimson_pro,  cuprum,  dm_sans,  dancing_script,  darker_grotesque,  domine,  dosis,eb_garamond,
  eczar,
  edu_nsw_act_foundation,
  edu_qld_beginner,
  edu_sa_beginner,
  edu_tas_beginner,
  edu_vic_wa_nt_beginner,
  encode_sans,
  encode_sans_sc,
  epilogue,
  exo,
  exo_2,
  expletus_sans,familjen_grotesk,
  faustina,
  figtree,
  finlandica,
  fira_code,
  foldit,
  frank_ruhl_libre,
  fraunces,
  fredoka,
  gabarito,
  gantari,
  gelasio,
  gemunu_libre,
  genos,
  geologica,
  georama,
  glory,
  gluten,
  golos_text,
  grandstander,
  grenze_gotisch,
  hahmlet,
  handjet,
  hanken_grotesk,
  hedvig_letters_serif,
  heebo,
  hepta_slab,
  honk} from "../../style/fonts";

const fontName = {  ar_one_sans,  advent_pro,  afacad,  akshar,  albert_sans,  algereya,  aleo,  alexandria,  alumini_sans,  andada_pro,  anek_bangla,  anek_gujarati,  anek_devanagari,  anek_gurmukhi,  anek_latin,  anek_kannada,  anek_malayalam,  anek_odia,  anek_tamil,  anek_telugu,  antonio,  anuphan,  anybody,  archivo,  archivo_narrow,  arima,  arimo,  asap,  assistant,  azeret_mono,  ballet,  baloo_2,  baloo_bhai_2,  baloo_bhaijaan_2,  baloo_bhaina_2,  baloo_chettan_2,  baloo_da_2,  baloo_paaji_2,  baloo_tamma_2,  baloo_tammudu_2,  baloo_thambi_2,  besley,  big_shoulders_display,  big_shoulders_inline_display,  big_shoulders_inline_text,  big_shoulders_text,  bitter,  bodoni_moda,  brygada_1918,  cabin,  cairo,  cairo_play,  catamaran,  caveat,  changa,  chivo,  chivo_mono,  cinzel,  climate_crisis,  comme,  commissioner,  cormorant,  crimson_pro,  cuprum,  dm_sans,  dancing_script,  darker_grotesque,  domine,  dosis,eb_garamond,
  eczar,
  edu_nsw_act_foundation,
  edu_qld_beginner,
  edu_sa_beginner,
  edu_tas_beginner,
  edu_vic_wa_nt_beginner,
  encode_sans,
  encode_sans_sc,
  epilogue,
  exo,
  exo_2,
  expletus_sans,familjen_grotesk,
  faustina,
  figtree,
  finlandica,
  fira_code,
  foldit,
  frank_ruhl_libre,
  fraunces,
  fredoka,
  gabarito,
  gantari,
  gelasio,
  gemunu_libre,
  genos,
  geologica,
  georama,
  glory,
  gluten,
  golos_text,
  grandstander,
  grenze_gotisch,
  hahmlet,
  handjet,
  hanken_grotesk,
  hedvig_letters_serif,
  heebo,
  hepta_slab,
  honk};

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col gap-5 p-5 pt-24">
          <div className="border w-[93%] md:w-[78%] bg-gray-100 p-5 rounded-md shadow-sm shadow-gray-600 fixed top-1 z-50 flex justify-between">
            <p>Font Name</p>
            <p>Weight:400</p>
            <p>Copy The Font</p>
          </div>
          {Object.keys(fontName).map((key,index) => (
            <div
              key={key}
              className={`${fontName[key].className} text-2xl border p-5 rounded-md shadow-sm shadow-gray-600 hover:scale-105 transition-all flex justify-between md:w-[70%] w-[100%]`}>
              <div className="flex gap-2">
                <p>[ {index} ]</p>
              <p>{key}</p>
              </div>
              <button className={`border border-gray-600 px-2 rounded-md bg-black text-white  text-center font-serif`}>Copy</button>
            </div>
          ))}
      </div>
    </>
  );
}
