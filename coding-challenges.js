/*
Create a function that takes in a body of text and any number of keywords. The function
should return all sentences from the text containing the keywords. The sentences should
return in descending order from "best" to "worst" match (i.e. sentences matching all
keywords should return first and those matching only one should be last).
*/

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
        matchedKeys.push(keyword);
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
    results[key].forEach((sentence) => {
      console.log(sentence + "\n")
    })
  })
}

//console.log(searchFunction(txt, "iPhone", "sales", "new"));


////////////////////////////////////////////////////////////////////////////////


/*
1.) Reproduce a dictionary structure represented by certificates_grouped_by_date_and_share_class_id.

class Certificate:
    def __init__(self, unique_label, date, share_class_id):
        self.unique_label = unique_label
        self.date = date
        self.share_class_id = share_class_id


certificate_1 = Certificate('CS-1', date(2016, 5, 10), 7)
certificate_2 = Certificate('CS-2', date(2015, 1, 1), 7)
certificate_3 = Certificate('CS-3', date(2016, 5, 10), 9)
certificate_4 = Certificate('CS-4', date(2016, 5, 10), 9);

certificates = [certificate_1, certificate_2, certificate_3]


2.) Create a function that takes an array of certificate instances and returns
the following structure:

def group_certificates(certificates):

Should look like this after:
certificates_grouped_by_date_and_share_class_id = {
    date(2016, 5, 10): {
        7: [
            'CS-1',
        ],
        9: [
            'CS-3'
        ]
    },
    date(2015, 1, 1): {
        7: [
            'CS-2',
        ]
    }
}

*/

class Certificate {
 constructor(unique_label, date, share_class_id){
   this.unique_label = unique_label;
   this.share_class_id = share_class_id
   this.date = date;
 }
}

var certificate_1 =  new Certificate('CS-1', "date(2016, 5, 10)", 7);
var certificate_2 =  new Certificate('CS-2', "date(2015, 1, 1)", 7);
var certificate_3 =  new Certificate('CS-3', "date(2016, 5, 10)", 9);
var certificate_4 =  new Certificate('CS-4', "date(2016, 5, 10)", 9);



var certificates = [certificate_1, certificate_2, certificate_3, certificate_4]


function groupCertificates(certificates){
   var group = {};

   certificates.forEach((cert) => {
     if(group[cert.date]){
        var dateObj = group[cert.date];

        if(dateObj[cert.share_class_id]){
          var certArr = dateObj[cert.share_class_id];
          certArr.push(cert.unique_label)
        } else {
          dateObj[cert.share_class_id] = [cert.unique_label];
        }
     } else {
       var newEntry = {};

       newEntry[cert.share_class_id] = [cert.unique_label];
       group[cert.date] = newEntry;
     }
   });

 return group;
};

console.log(groupCertificates(certificates));


///////////////////////////////////////////////////////////////////////////////
