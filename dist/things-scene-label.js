!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@hatiolab/things-scene"),require("bwip-js"),require("underscore")):"function"==typeof define&&define.amd?define(["@hatiolab/things-scene","bwip-js","underscore"],e):(a=a||self)["things-scene-label"]=e(a.scene,a.bwipjs,a.underscore)}(this,function(a,e,d){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;const i={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"select",label:"symbol",name:"symbol",property:{options:[{value:"auspost",display:"AusPost 4 State Customer Code"},{value:"azteccode",display:"Aztec Code"},{value:"azteccodecompact",display:"Compact Aztec Code"},{value:"aztecrune",display:"Aztec Runes"},{value:"bc412",display:"BC412"},{value:"channelcode",display:"Channel Code"},{value:"codablockf",display:"Codablock F"},{value:"code11",display:"Code 11"},{value:"code128",display:"Code 128"},{value:"code16k",display:"Code 16K"},{value:"code2of5",display:"Code 25"},{value:"code32",display:"Italian Pharmacode"},{value:"code39",display:"Code 39"},{value:"code39ext",display:"Code 39 Extended"},{value:"code49",display:"Code 49"},{value:"code93",display:"Code 93"},{value:"code93ext",display:"Code 93 Extended"},{value:"codeone",display:"Code One"},{value:"coop2of5",display:"COOP 2 of 5"},{value:"daft",display:"Custom 4 state symbology"},{value:"databarexpanded",display:"GS1 DataBar Expanded"},{value:"databarexpandedcomposite",display:"GS1 DataBar Expanded Composite"},{value:"databarexpandedstacked",display:"GS1 DataBar Expanded Stacked"},{value:"databarexpandedstackedcomposite",display:"GS1 DataBar Expanded Stacked Composite"},{value:"databarlimited",display:"GS1 DataBar Limited"},{value:"databarlimitedcomposite",display:"GS1 DataBar Limited Composite"},{value:"databaromni",display:"GS1 DataBar Omnidirectional"},{value:"databaromnicomposite",display:"GS1 DataBar Omnidirectional Composite"},{value:"databarstacked",display:"GS1 DataBar Stacked"},{value:"databarstackedcomposite",display:"GS1 DataBar Stacked Composite"},{value:"databarstackedomni",display:"GS1 DataBar Stacked Omnidirectional"},{value:"databarstackedomnicomposite",display:"GS1 DataBar Stacked Omnidirectional Composite"},{value:"databartruncated",display:"GS1 DataBar Truncated"},{value:"databartruncatedcomposite",display:"GS1 DataBar Truncated Composite"},{value:"datalogic2of5",display:"Datalogic 2 of 5"},{value:"datamatrix",display:"Data Matrix"},{value:"datamatrixrectangular",display:"Data Matrix Rectangular"},{value:"dotcode",display:"DotCode"},{value:"ean13",display:"EAN-13"},{value:"ean13composite",display:"EAN-13 Composite"},{value:"ean14",display:"GS1-14"},{value:"ean2",display:"EAN-2 (2 digit addon)"},{value:"ean5",display:"EAN-5 (5 digit addon)"},{value:"ean8",display:"EAN-8"},{value:"ean8composite",display:"EAN-8 Composite"},{value:"flattermarken",display:"Flattermarken"},{value:"gs1-128",display:"GS1-128"},{value:"gs1-128composite",display:"GS1-128 Composite"},{value:"gs1-cc",display:"GS1 Composite 2D Component"},{value:"gs1datamatrix",display:"GS1 Data Matrix"},{value:"gs1datamatrixrectangular",display:"GS1 Data Matrix Rectangular"},{value:"gs1northamericancoupon",display:"GS1 North American Coupon"},{value:"gs1qrcode",display:"GS1 QR Code"},{value:"hanxin",display:"Han Xin Code"},{value:"hibcazteccode",display:"HIBC Aztec Code"},{value:"hibccodablockf",display:"HIBC Codablock F"},{value:"hibccode128",display:"HIBC Code 128"},{value:"hibccode39",display:"HIBC Code 39"},{value:"hibcdatamatrix",display:"HIBC Data Matrix"},{value:"hibcdatamatrixrectangular",display:"HIBC Data Matrix Rectangular"},{value:"hibcmicropdf417",display:"HIBC MicroPDF417"},{value:"hibcpdf417",display:"HIBC PDF417"},{value:"hibcqrcode",display:"HIBC QR Code"},{value:"iata2of5",display:"IATA 2 of 5"},{value:"identcode",display:"Deutsche Post Identcode"},{value:"industrial2of5",display:"Industrial 2 of 5"},{value:"interleaved2of5",display:"Interleaved 2 of 5 (ITF)"},{value:"isbn",display:"ISBN"},{value:"ismn",display:"ISMN"},{value:"issn",display:"ISSN"},{value:"itf14",display:"ITF-14"},{value:"japanpost",display:"Japan Post 4 State Customer Code"},{value:"kix",display:"Royal Dutch TPG Post KIX"},{value:"leitcode",display:"Deutsche Post Leitcode"},{value:"matrix2of5",display:"Matrix 2 of 5"},{value:"maxicode",display:"MaxiCode"},{value:"micropdf417",display:"MicroPDF417"},{value:"microqrcode",display:"Micro QR Code"},{value:"msi",display:"MSI Modified Plessey"},{value:"onecode",display:"USPS Intelligent Mail"},{value:"pdf417",display:"PDF417"},{value:"pdf417compact",display:"Compact PDF417"},{value:"pharmacode",display:"Pharmaceutical Binary Code"},{value:"pharmacode2",display:"Two-track Pharmacode"},{value:"planet",display:"USPS PLANET"},{value:"plessey",display:"Plessey UK"},{value:"posicode",display:"PosiCode"},{value:"postnet",display:"USPS POSTNET"},{value:"pzn",display:"Pharmazentralnummer (PZN)"},{value:"qrcode",display:"QR Code"},{value:"rationalizedCodabar",display:"Codabar"},{value:"raw",display:"Custom 1D symbology"},{value:"royalmail",display:"Royal Mail 4 State Customer Code"},{value:"sscc18",display:"SSCC-18"},{value:"symbol",display:"Miscellaneous symbols"},{value:"telepen",display:"Telepen"},{value:"telepennumeric",display:"Telepen Numeric"},{value:"ultracode",display:"Ultracode"},{value:"upca",display:"UPC-A"},{value:"upcacomposite",display:"UPC-A Composite"},{value:"upce",display:"UPC-E"},{value:"upcecomposite",display:"UPC-E Composite"}]}},{type:"number",label:"paddingwidth",name:"paddingwidth"},{type:"number",label:"paddingheight",name:"paddingheight"},{type:"checkbox",label:"monochrome",name:"monochrome"},{type:"checkbox",label:"show-text",name:"showText"}],"value-property":"text"},t=["symbol","text","showText","height","width","paddingwidth","paddingheight"];class l extends(a.RectPath(a.Shape)){static get nature(){return i}get canvas(){return this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.style.display="none",this._canvas.height=1,this._canvas.width=1),this._canvas}get debouncer(){return this._debouncer||(this._debouncer=d.debounce(this.buildImage.bind(this),200,!1)),this._debouncer}dispose(){super.dispose()}ready(){super.ready(),this.buildImage()}buildImage(){var{symbol:d,text:i,width:t,height:l,includetext:s,textAlign:o,paddingwidth:p=0,paddingheight:c=0}=this.state;this.canvas.width=t,this.canvas.height=l,e(this.canvas,{bcid:d,text:i,height:l,width:t,includetext:s,textxalign:o,paddingwidth:p,paddingheight:c},(e,d)=>{e?(delete this._image,this.invalidate(),a.error(e)):(this._image=d,this.invalidate())})}render(e){var{left:d,top:i,width:t,height:l}=this.state;try{this._image&&e.drawImage(this._image,d,i,t,l)}catch(e){a.error(e)}}drawText(){}onchange(a){t.every(e=>!(e in a)||(this.debouncer(),!1))}}return a.Component.register("barcode",l),[l]});
