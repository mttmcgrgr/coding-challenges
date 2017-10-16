var txt = `Early sales of Apple's new iPhones have lived up to high expectations.

The strong sales mirror growing consumer demand for smartphones with bigger
screens. IDC, a research firm, estimated that at least 20 percent of all
smartphones shipped last year in China, the largest smartphone market in
the world, were five inches or larger. It also predicted that manufacturers
this year would ship more "phablets," or smartphones with screens measuring
at least 5-point-5 diagonal inches, than laptops.

The company on Monday said it sold more than 10 million of the iPhone 6 and
6 Plus models in the first three days they were available in stores. That
is higher than the nine million new iPhones it sold last year in their
first weekend on sale. But some analysts, like Gene Munster of Piper
Jaffray, wondered whether first-weekend sales were still a reliable measure
for consumer demand.

The iPhone sales were on the upper end of financial analysts' expectations,
which ranged from 6 million to the "low teens" of millions of sales.`


function searchFunction(text, ...keywords){
  var results = {};
  var sentences = text.split(".");

  for(var i = 0; i < sentences.length; i++){
    var sentence = sentences[i].toLowerCase();
    var matchedKeys = [];

    for(var k = 0; k < keywords.length; k++){
      var keyword = keywords[k].toLowerCase();

      if(sentence.indexOf(keyword) !== -1){
         if(matchedKeys.includes(keyword)){
           continue;
         } else {
           matchedKeys.push(keyword);
         }
      }
    }

    if(matchedKeys.length === 0){
      continue;
    }

    if(results[matchedKeys.length]){
      results[matchedKeys.length].push(sentences[i]);
    } else {
      results[matchedKeys.length] = [sentences[i]];
    }

  }

  var keysRanked = Object.keys(results).sort().reverse();

  keysRanked.forEach((key) => {
    console.log(key);
    results[key].forEach((sentence) => {
      console.log(sentence + "\n")
    })
  })
}


console.log(searchFunction(txt, "iPhone", "sales", "new"));
