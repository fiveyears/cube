/*eslint-env jquery*/
var gdr1 = "(oraD'; R' D R) (D F oraD'; F')";
var gdr2 = "(U F R) U (R' U' F')";
var gdr3 = "(R E)4 U ...<br/>alle Kanten an der gleichen Stelle kippen";
var gdr4 = "(R D R2 D2 R2 D' R' U) (R D R2 D2 R2 D' R' U')";
var gdr5 = "(R F' R' F)2 U ...<br/>alle Ecken an der gleichen Stelle drehen";
var pll1 = " 1. oraM'2; U  oraM; U2 oraM'; U  oraM'2;<br/><br/>";
// 2. (R bluU'; R) (U R)2 (bluU'; R' bluU'; R'2)";
var pll2 = " 1. oraM'2; bluU'; oraM; U2 oraM'; bluU'; oraM'2; <br/><br/>";
// 2. (R2 U) (R U) (R' bluU';)2 (R' U R')";
var pll3 = "oraM'2; U  oraM'2; U2 oraM'2; U  oraM'2;";
var pll4 = "oraM'; U (oraM'2; U)2 oraM'; U2 oraM'2; bluU';";
var pll5 = "x' R2 oraD2; (R' bluU'; R) oraD2; (R' U R')";
var pll6 = "x' (R bluU'; R) oraD2; (R' U R) oraD2; R'2";
var pll7 = "x' (R bluU'; R' oraD;) (R U R' oraD';)<br/>(R U R' oraD;) " +
	"(R bluU' R' oraD';)";
var pll8 = "<u>(R U R' bluU';) (R' F) (R2 bluU'; R' bluU';)</u> " +
	"(R U R' redF';)";
var pll9 = "(R' bluU'; redF';) <u>(R U R' bluU';) (R' F) (R2 bluU'; R' bluU';)"+
	"</u> (R U R' U R)";
var pll10 = "(R' U R' d') (R' redF'; R2 bluU';) (R' U R' F R F)";
var pll11 = "F (R bluU'; R' bluU';) (R U R' redF';) (R U R' bluU';)" +
	" (R' F R redF';)";
var pll12 = "z (bluU'; R oraD';) (R2 U R' bluU';) (R2 U) (oraD; R')";
var pll13 = "(R U R' redF';) <u>(R U R' bluU';) (R' F) (R2 bluU'; " +
	"R' bluU';)</u>";
var pll14 = "(R'  redU'; bluU';) (R redU'; bluU';) (R' F R U R' bluU';) " +
	"(R' redF'; R2 bluU';)";
var pll15 = "(R bluU'; R' bluU';) (R U R oraD;) (R' bluU'; R oraD';) " +
	"(R' U2 R' bluU';)";
var pll16 = "(R'2 bluu'; R redU'; R) (U R' u) (R2 f R' redf';)";
var pll17 = "(R U R') y' (R2 redu'; R bluU';) (R' U R' u R2)";
var pll18 = "(R2 u R' U R') (bluU'; R bluu';) (R'2 redF'; U redF;)";
var pll19 = "(R' d' F) (R2 u) (R' U) (R redU'; R bluu'; R'2)";
var pll20 = "(R' U R bluU';) (R' redF'; bluU';) (F R U R' F) " +
	"(R' redF'; R bluU'; R)";
// var pll21 = "(R U R' U) (R U R' redF';) <u>(R U R' bluU';)
// (R' F) (R2 bluU'; R' redU';</u> bluU';) (R bluU'; R')";
var pll21 = "(R U R' U) PLL 13 (bluU'; R bluU'; R')";
var oll1 = "(R redU'; bluU';) (R'2 F R redF';)<br/>U2 (R' F R redF';)";
var oll2 = "F (R U G bluU';)<br/>  S (R U R' bluU';) redf';";
//"F (R U G bluU';) redF';<br/>f (R U R' bluU';) redf';";
var oll3 = "f (R U R' bluU';) redf'; bluU'; F (R U G bluU';) redF'; ";
var oll4 = "f (R U R' bluU';) redf'; U F (R U G bluU';) redF'; ";
var oll5 = "(r' U2) (R U R' U) r";
var oll6 = "(r redU'; bluU';) (R' bluU'; R bluU'; r')";
var oll7 = "(r U R' U) (R redU'; bluU'; r')";
var oll8 = "(r' bluU'; R bluU';) (R' U2 r)";
var oll9 = "(R U R' bluU';) (R' F) (R2 U R' bluU';) redF';";
var oll10 = "(R U R' U) (R' F R redF';) (R redU'; bluU'; R')";
var oll11 = "(M R U R' U) (R redU'; bluU'; R' U) oraM';";
var oll12 = "oraM'; (R' bluU'; R bluU';) (R' U2 R bluU';) M";
var oll13 = "f (R U) (R2 bluU';) (R' U R bluU';) redf';";
var oll14 = "(R' F) (R U R' redF'; R) (F bluU'; redF';)";
var oll15 = "(r' bluU'; r) (R' bluU'; R U) (r' U r)";
var oll16 = "(r U r') (R U R' bluU';) (r bluU'; r')";
var oll17 = "(l bluU'; l') f (R2 B R' U R' bluU'; redf';)";
var oll18 = "(r U R' U) (R redU'; bluU'; r')<br/>(r' bluU'; R bluU';) " +
	"(R' U2 r)";
var oll19 = "(M U) (R U R' bluU'; r) (R'2 F R redF';)";
var oll20 = "(r U R' bluU';) oraM'2; U<br/>(R bluU'; R' bluU';) oraM';";
var oll21 = "(R redU'; bluU';) (R' bluU'; R U R' bluU';) (R bluU'; R')";
var oll22 = "(R redU'; bluU';) (R'2 bluU';) (R2 bluU';)<br/>(R'2 bluU';) " +
	"(bluU'; R)";
var oll23 = "(R2 oraD';) (R redU'; bluU'; R' oraD;) (R redU'; bluU'; R)";
var oll24 = "(r U R' bluU';) (r' F R  redF';)";
var oll25 = "redF'; (r U R' bluU';) (r' F R )";
var oll26 = "(R redU'; bluU';)  (R' bluU'; R bluU'; R')";
var oll27 = "(R U R' oraU;) (R redU'; bluU'; R')";
var oll28 = "(r U R' bluU';) M (U R bluU'; R')";
var oll29 = "(R U R' bluU';) (R bluU'; R' redF'; bluU'; F)<br/>(R U R')";
var oll30 = "f (R U) (R2 bluU'; R' U) (R2 bluU'; R') redf';";
var oll31 = "(r' redF'; redU; redF;) (r bluU'; r' bluU'; r)";
var oll32 = "(R U) (redB'; bluU';) (R' U R B R')";
var oll33 = "(R U R' bluU';) (R' F R redF';)";
var oll34 = "(R U R2 bluU';) (R' F) (R U R bluU'; redF';)";
var oll35 = "(R redU'; bluU';) (R'2 F R redF';) (R redU'; bluU'; R')";
var oll36 = "(R' bluU'; R bluU';) (R' U R U) (l bluU'; R' U)";
var oll37 = "F (R bluU'; R' bluU';) (R U R' redF';)";
var oll38 = "(R U R' U) (R bluU'; R' bluU';) (R' F R redF';)";
var oll39 = "(R U R' redF'; bluU'; F) U (R U2 R')";
var oll40 = "(R' F) (R U R' bluU';) redF'; (U R)";
var oll41 = "(R U R' oraU;) (R redU'; bluU'; R') F (R U R' bluU';) redF';";
var oll42 = "(R' bluU'; R bluU';) (R' U2 R) F (R U R' bluU';) redF'; ";
var oll43 = "(redB'; bluU';) (R' U R B)";
var oll44 = "f (R U R' bluU';) redf';";
var oll45 = "F (R U R' bluU';) redF';";
var oll46 = "(R' bluU';) (R' F R redF';) (U R)";
var oll47 = "redb'; (bluU'; R' U R)2 b";
var oll48 = "F (R U R' bluU';)2  redF';";
var oll49 = "(R redB';) (R'2 F R2 B) (R'2 redF'; R)";
var oll50 = "(r' U) (r2 bluU'; R'2 bluU';) (r2 U r')";
var oll51 = "f (R U R' bluU';)2 redf';";
var oll52 = "(R' redF'; bluU'; F bluU';) (R U R' oraU; R)";
var oll53 = "(r' U2) (R U R' bluU';) (R U R' U r)";
var oll54 = "(r redU'; bluU';) (R' bluU'; R U) (R' bluU'; R bluU'; r')";
var oll55 = "(r redU'; bluU'; R' bluU';) (M R U R' bluU';) (r bluU'; r')";
var oll56 = "(r bluU; r') (U R bluU'; R')2 (r bluU'; r')";
var oll57 = "(R U R' bluU';) oraM'; (U R bluU'; r')";
var f2l1 =  "(R bluU'; R' U) y' (R' U2 R redU'; bluU';) (R' U R)";
var f2l2 =  "(U R bluU'; R' bluU';) y' (R' U R)";
var f2l3 =  "(R' redF'; R U) (R bluU'; R' F)";
var f2l4 =  "(R U R' bluU';) (R U2 R' bluU';) (R U R')";
var f2l5 =  "(R F) U (R bluU'; R' redF';) (bluU'; R')";
var f2l6 =  "y' (R' bluU'; R U) (R' bluU'; R)";
var f2l7 =  "(R bluU'; R' U) (R bluU'; R')";
var f2l8 =  "(R bluU'; R' U) (R redU'; bluU'; R' U) (R bluU'; R')";
var f2l9 =  "(R U) F (R U R' bluU';) redF'; R'";
var f2l10 =  "y' (R' U R bluU';) (R' U R)";
var f2l11 =  "(R U R' bluU';) (R U R')";
var f2l12 =  "(R U R' bluU';)2 (R U R')";
var f2l13 =  "(R bluU'; R' U) y' (R' U R)";
var f2l14 =  "y' (R' U2) (R U R' bluU'; R)";
var f2l15 =  "y' bluU'; (R' U2) (R bluU'; R' U R)";
var f2l16 =  "y' (R' U R redU'; bluU';) (R' bluU'; R)";
var f2l17 =  "F U (R bluU'; R' redF';) (R bluU'; R')";
var f2l18 =  "U (R bluU'; R' bluU';) (R bluU'; R' u) (R bluU'; R')";
var f2l19 =  "(R bluU'; R' U2) (R U R')";
var f2l20 =  "U (R redU'; bluU';) (R' U R bluU'; R')";
var f2l21 =  "(R redU'; bluU';) (R' bluU'; R U R')";
var f2l22 =  "bluU'; (R bluU'; R' U2) (R bluU'; R')";
var f2l23 =  "bluU'; (R U R') y' (U R' bluU'; R)";
var f2l24 =  "y' U (R' U R bluU';) (R' bluU'; R)";
var f2l25 =  "y' (R' bluU'; R)";
var f2l26 =  "y' U (R' bluU'; R bluU';) (R' bluU'; R)";
var f2l27 =  "y' (R redU'; bluU';) (R'2 bluU';) (R2 bluU'; R')";
var f2l28 =  "(l U) (r bluU'; r' bluU';) l'";
var f2l29 =  "bluU'; (R redU'; bluU';) (R' U2) (R bluU'; R')";
var f2l30 =  "bluU'; (R U R' bluU';) (R redU'; bluU'; R')";
var f2l31 =  "U R bluU'; R'";
var f2l32 =  "bluU'; (R redU'; bluU'; R' U) (R U R')";
var f2l33 =  "y' U (R' bluU'; R) d' (R U R')";
var f2l34 =  "y' bluU'; (R' U R)";
var f2l35 =  "y' U (R' bluU'; R redU'; bluU';) ( R' U R)";
var f2l36 =  "y' U (R' U2 R redU'; bluU';) (R' U R)";
var f2l37 =  "(R bluU'; R' U2) y' (R' bluU'; R)";
var f2l38 =  "(R bluU'; R' U) (R bluU'; R' U2) (R bluU'; R')";
var f2l39 =  "bluU'; (R U R' U) (R U R')";
var f2l40 =  "(R U R')";
var f2l41 =  "bluU'; (R bluU'; R' U) (R U R')";

function better (s) {
	s = s.replace (/L'/g, "T");
	s = s.replace (/l'/g, "Tw");
	s = s.replace (/l\b/g, "Lw");
	s = s.replace (/B'/g, "K");
	s = s.replace (/b'/g, "Kw");
	s = s.replace (/b\b/g, "Bw");
	s = s.replace (/R'/g, "G");
	s = s.replace (/U'/g, "O");
	s = s.replace (/u'/g, "Ow");
	s = s.replace (/u>/g, "pppp");
	s = s.replace (/u\b/g, "Uw");
	s = s.replace (/pppp/g, "u>");
	s = s.replace (/M'/g, "N");
	s = s.replace (/D'/g, "Ä");
	s = s.replace (/d'/g, "Äw");
	s = s.replace (/r'/g, "Gw");
	s = s.replace (/r\//g, "hhhh");
	s = s.replace (/r2\b/g, "Rw2");
	s = s.replace (/r\b/g, "Rw");
	s = s.replace (/hhhh/g, "r/");
	s = s.replace (/F'/g, "Ö");
	s = s.replace (/f'/g, "Öw");
	s = s.replace (/f\b/g, "Fw");
	s = s.replace (/x'/g, "[L]");
	s = s.replace (/x\b/g, "[R]");
	s = s.replace (/y'/g, "[D]");
	s = s.replace (/y\b/g, "[U]");
	s = s.replace (/z'/g, "[B]");
	s = s.replace (/z\b/g, "[F]");
	return s;
}

function color (s) {
	s = s.replace(/red/g, '<span style="color: red">');
	s = s.replace(/ora/g, '<span style="color: orange">');
	s = s.replace(/blu/g, '<span style="color: blue">');
	s = s.replace(/;/g, '<\/span>');
	return s;
}

function fillf2l(what = "original") {
	for(var i=1; i<=41; i++) {
		if (document.getElementById("f2l" + i)) {
			var sF2l = "<b>" + window['f2l'+i] + "</b>";
			if (what == "empty" ) {
				sF2l = "";
			}
			else
			{
				if (what == "better" ) {
					sF2l = better(sF2l)
				}
				sF2l = color(sF2l);
			}
			document.getElementById("f2l" + i).innerHTML = sF2l;
		}
	}
	if (what == "original" ) {
		$(".better").attr ("onclick", "fillf2l('better')");
	}
	else if (what == "better" ) {
		$(".better").attr ("onclick", "fillf2l('empty')");
	}
	else if (what == "empty" ) {
			$(".better").attr ("onclick", "fillf2l('original')");
	}
}
function filloll(what = "original") {
	for(var i=1; i<=57; i++) {
		if (document.getElementById("oll" + i)) {
			var sOll = "<b>" + window['oll'+i] + "</b>";
			if (what == "empty" ) {
				sOll = "";
			}
			else
			{
				if (what == "better" ) {
					sOll = better(sOll)
				}
				sOll = color(sOll);
			}
			document.getElementById("oll" + i).innerHTML = sOll;
		}
	}
	if (what == "original" ) {
		$(".better").attr ("onclick", "filloll('better')");
	}
	else if (what == "better" ) {
		$(".better").attr ("onclick", "filloll('empty')");
	}
	else if (what == "empty" ) {
			$(".better").attr ("onclick", "filloll('original')");
	}
}
function fill(what = "original") {
	for(var i=1; i<=21; i++) {
		if (document.getElementById("pll" + i)) {
			var sPll = "<b>" + window['pll'+i] + "</b>";
			if (what == "empty" ) {
				sPll = "";
			}
			else
			{
				if (what == "better" ) {
					sPll = better(sPll)
				}
				sPll = color(sPll);
			}
			document.getElementById("pll" + i).innerHTML = sPll;
		}
	}
	if (what == "original" ) {
		$(".better").attr ("onclick", "fill('better')");
	}
	else if (what == "better" ) {
		$(".better").attr ("onclick", "fill('empty')");
	}
	else if (what == "empty" ) {
			$(".better").attr ("onclick", "fill('original')");
	}
}
function fillgdr(what = "original") {
	for(var i=1; i<=5; i++) {
		if (document.getElementById("gdr" + i)) {
			var sgdr = "<b>" + window['gdr'+i] + "</b>";
			if (what == "empty" ) {
				sgdr = "";
			}
			else
			{
				if (what == "better" ) {
					sgdr = better(sgdr)
				}
				sgdr = color(sgdr);
			}
			sgdr = sgdr.replace (/Rw /g, "r ");
			document.getElementById("gdr" + i).innerHTML = sgdr;
		}
	}
	if (what == "original" ) {
		$(".better").attr ("onclick", "fillgdr('better')");
	}
	else if (what == "better" ) {
		$(".better").attr ("onclick", "fillgdr('empty')");
	}
	else if (what == "empty" ) {
			$(".better").attr ("onclick", "fillgdr('original')");
	}
}
