import Fungsi1 from "./aFungsibiasaNonParam.js";
import Fungsi2 from "./bFungsiArrowNonParam.js";
import Fungsi3 from "./cFungsiArrowNonParam.js";
import Fungsi4 from "./dFungsiBiasa1Param.js";
import Fungsi5 from "./eFungsiArrow1Param.js";
import Fungsi6 from "./fFungsiBiasa2Params.js";
import Fungsi7 from "./gFungsiArrow2Params.js";
import Fungsi8 from "./hFungsiArrow2Params.js";

function Tampilkan() {
  console.log(Fungsi1());

  console.log(Fungsi2());

  console.log(Fungsi3("Andi"));

  console.log(Fungsi4("Andi"));

  console.log(Fungsi5("Andi", 21));

  console.log(Fungsi6("Andi", 21));

  console.log(Fungsi7("Fatih", "4"));

  console.log(Fungsi8("Fatih", "4"));
}

Tampilkan();
