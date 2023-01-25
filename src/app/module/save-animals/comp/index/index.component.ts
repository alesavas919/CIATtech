import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  deforestCoordinates = new FormGroup({
    latGr:new FormControl('',[Validators.required]),
    latMin:new FormControl('',[Validators.required]),
    latOr:new FormControl('',[Validators.required]),
    lonGr:new FormControl('',[Validators.required]),
    lonMin:new FormControl('',[Validators.required]),
    lonOr:new FormControl('',[Validators.required]),
    zoneGr:new FormControl(''),
    zoneMin:new FormControl('')
  })

  data = [{
    "id": 1,
    "lonGr": 77,
    "lonMin": 24,
    "lonOr": "E",
    "latGr": 50,
    "latMin": 42,
    "latOr": "O",
    "owner": "Ketty Claiden"
  }, {
    "id": 2,
    "lonGr": 67,
    "lonMin": 41,
    "lonOr": "O",
    "latGr": 83,
    "latMin": 26,
    "latOr": "E",
    "owner": "Auberon Blaxland"
  }, {
    "id": 3,
    "lonGr": 152,
    "lonMin": 47,
    "lonOr": "E",
    "latGr": 2,
    "latMin": 56,
    "latOr": "O",
    "owner": "Rodrigo Turfin"
  }, {
    "id": 4,
    "lonGr": 148,
    "lonMin": 30,
    "lonOr": "O",
    "latGr": 78,
    "latMin": 8,
    "latOr": "S",
    "owner": "Daisie Hazeldene"
  }, {
    "id": 5,
    "lonGr": 10,
    "lonMin": 24,
    "lonOr": "S",
    "latGr": 36,
    "latMin": 14,
    "latOr": "S",
    "owner": "Boonie Poulgreen"
  }, {
    "id": 6,
    "lonGr": 16,
    "lonMin": 56,
    "lonOr": "E",
    "latGr": 163,
    "latMin": 35,
    "latOr": "E",
    "owner": "Mel Dalglish"
  }, {
    "id": 7,
    "lonGr": 86,
    "lonMin": 28,
    "lonOr": "S",
    "latGr": 148,
    "latMin": 32,
    "latOr": "S",
    "owner": "Slade Burgill"
  }, {
    "id": 8,
    "lonGr": 169,
    "lonMin": 8,
    "lonOr": "N",
    "latGr": 35,
    "latMin": 10,
    "latOr": "N",
    "owner": "Joela Mervyn"
  }, {
    "id": 9,
    "lonGr": 67,
    "lonMin": 42,
    "lonOr": "O",
    "latGr": 174,
    "latMin": 36,
    "latOr": "N",
    "owner": "Nessa Calbreath"
  }, {
    "id": 10,
    "lonGr": 136,
    "lonMin": 8,
    "lonOr": "N",
    "latGr": 18,
    "latMin": 8,
    "latOr": "N",
    "owner": "Van Bispham"
  }, {
    "id": 11,
    "lonGr": 131,
    "lonMin": 34,
    "lonOr": "S",
    "latGr": 15,
    "latMin": 42,
    "latOr": "O",
    "owner": "Isidoro Randlesome"
  }, {
    "id": 12,
    "lonGr": 141,
    "lonMin": 41,
    "lonOr": "O",
    "latGr": 102,
    "latMin": 45,
    "latOr": "O",
    "owner": "Ty Bostock"
  }, {
    "id": 13,
    "lonGr": 142,
    "lonMin": 24,
    "lonOr": "S",
    "latGr": 133,
    "latMin": 4,
    "latOr": "S",
    "owner": "Virginie Mandry"
  }, {
    "id": 14,
    "lonGr": 3,
    "lonMin": 29,
    "lonOr": "E",
    "latGr": 11,
    "latMin": 40,
    "latOr": "N",
    "owner": "Inesita Matyas"
  }, {
    "id": 15,
    "lonGr": 6,
    "lonMin": 41,
    "lonOr": "N",
    "latGr": 177,
    "latMin": 45,
    "latOr": "E",
    "owner": "Bethanne Griggs"
  }, {
    "id": 16,
    "lonGr": 75,
    "lonMin": 31,
    "lonOr": "S",
    "latGr": 127,
    "latMin": 42,
    "latOr": "O",
    "owner": "Amber Yuille"
  }, {
    "id": 17,
    "lonGr": 80,
    "lonMin": 23,
    "lonOr": "E",
    "latGr": 97,
    "latMin": 20,
    "latOr": "S",
    "owner": "Helsa Callender"
  }, {
    "id": 18,
    "lonGr": 85,
    "lonMin": 48,
    "lonOr": "N",
    "latGr": 127,
    "latMin": 35,
    "latOr": "E",
    "owner": "Dionne Simonds"
  }, {
    "id": 19,
    "lonGr": 124,
    "lonMin": 30,
    "lonOr": "N",
    "latGr": 166,
    "latMin": 38,
    "latOr": "E",
    "owner": "Emmit Ogers"
  }, {
    "id": 20,
    "lonGr": 127,
    "lonMin": 25,
    "lonOr": "E",
    "latGr": 114,
    "latMin": 12,
    "latOr": "S",
    "owner": "Cornell Zemler"
  }, {
    "id": 21,
    "lonGr": 145,
    "lonMin": 33,
    "lonOr": "S",
    "latGr": 110,
    "latMin": 18,
    "latOr": "O",
    "owner": "Robinette Huyge"
  }, {
    "id": 22,
    "lonGr": 38,
    "lonMin": 1,
    "lonOr": "N",
    "latGr": 134,
    "latMin": 31,
    "latOr": "E",
    "owner": "Frants Sievewright"
  }, {
    "id": 23,
    "lonGr": 78,
    "lonMin": 51,
    "lonOr": "N",
    "latGr": 57,
    "latMin": 18,
    "latOr": "N",
    "owner": "Waite Ronchi"
  }, {
    "id": 24,
    "lonGr": 20,
    "lonMin": 51,
    "lonOr": "N",
    "latGr": 174,
    "latMin": 54,
    "latOr": "N",
    "owner": "Harrison Heintzsch"
  }, {
    "id": 25,
    "lonGr": 40,
    "lonMin": 22,
    "lonOr": "N",
    "latGr": 88,
    "latMin": 4,
    "latOr": "E",
    "owner": "Guendolen Metheringham"
  }, {
    "id": 26,
    "lonGr": 119,
    "lonMin": 44,
    "lonOr": "O",
    "latGr": 108,
    "latMin": 33,
    "latOr": "E",
    "owner": "Eduino Stockbridge"
  }, {
    "id": 27,
    "lonGr": 31,
    "lonMin": 58,
    "lonOr": "E",
    "latGr": 173,
    "latMin": 11,
    "latOr": "E",
    "owner": "Carri Oldnall"
  }, {
    "id": 28,
    "lonGr": 68,
    "lonMin": 8,
    "lonOr": "N",
    "latGr": 80,
    "latMin": 25,
    "latOr": "S",
    "owner": "Joeann Trask"
  }, {
    "id": 29,
    "lonGr": 139,
    "lonMin": 35,
    "lonOr": "E",
    "latGr": 134,
    "latMin": 12,
    "latOr": "E",
    "owner": "Ham Athelstan"
  }, {
    "id": 30,
    "lonGr": 125,
    "lonMin": 17,
    "lonOr": "E",
    "latGr": 115,
    "latMin": 32,
    "latOr": "O",
    "owner": "Bran Hirsthouse"
  }, {
    "id": 31,
    "lonGr": 120,
    "lonMin": 12,
    "lonOr": "N",
    "latGr": 47,
    "latMin": 49,
    "latOr": "O",
    "owner": "Maria Gutman"
  }, {
    "id": 32,
    "lonGr": 117,
    "lonMin": 33,
    "lonOr": "S",
    "latGr": 133,
    "latMin": 26,
    "latOr": "N",
    "owner": "Benedicto Geldard"
  }, {
    "id": 33,
    "lonGr": 160,
    "lonMin": 14,
    "lonOr": "S",
    "latGr": 46,
    "latMin": 11,
    "latOr": "O",
    "owner": "Arni Arlott"
  }, {
    "id": 34,
    "lonGr": 99,
    "lonMin": 10,
    "lonOr": "E",
    "latGr": 52,
    "latMin": 24,
    "latOr": "O",
    "owner": "Adriane Lupson"
  }, {
    "id": 35,
    "lonGr": 39,
    "lonMin": 4,
    "lonOr": "N",
    "latGr": 128,
    "latMin": 15,
    "latOr": "E",
    "owner": "Brandi Amberson"
  }, {
    "id": 36,
    "lonGr": 70,
    "lonMin": 24,
    "lonOr": "O",
    "latGr": 60,
    "latMin": 25,
    "latOr": "O",
    "owner": "Aguistin Zaple"
  }, {
    "id": 37,
    "lonGr": 116,
    "lonMin": 36,
    "lonOr": "N",
    "latGr": 7,
    "latMin": 3,
    "latOr": "N",
    "owner": "Risa Teresia"
  }, {
    "id": 38,
    "lonGr": 65,
    "lonMin": 23,
    "lonOr": "S",
    "latGr": 120,
    "latMin": 60,
    "latOr": "E",
    "owner": "Blinny de'-Ancy Willis"
  }, {
    "id": 39,
    "lonGr": 92,
    "lonMin": 57,
    "lonOr": "O",
    "latGr": 126,
    "latMin": 16,
    "latOr": "N",
    "owner": "Olympe Lavens"
  }, {
    "id": 40,
    "lonGr": 14,
    "lonMin": 13,
    "lonOr": "E",
    "latGr": 45,
    "latMin": 52,
    "latOr": "E",
    "owner": "Farrel Sinnett"
  }, {
    "id": 41,
    "lonGr": 4,
    "lonMin": 9,
    "lonOr": "N",
    "latGr": 38,
    "latMin": 54,
    "latOr": "E",
    "owner": "Tildie Carrett"
  }, {
    "id": 42,
    "lonGr": 112,
    "lonMin": 9,
    "lonOr": "N",
    "latGr": 131,
    "latMin": 36,
    "latOr": "E",
    "owner": "Jo-ann Worsham"
  }, {
    "id": 43,
    "lonGr": 149,
    "lonMin": 50,
    "lonOr": "S",
    "latGr": 128,
    "latMin": 18,
    "latOr": "N",
    "owner": "Robby Spadoni"
  }, {
    "id": 44,
    "lonGr": 148,
    "lonMin": 9,
    "lonOr": "N",
    "latGr": 153,
    "latMin": 22,
    "latOr": "N",
    "owner": "Barrie Jerg"
  }, {
    "id": 45,
    "lonGr": 92,
    "lonMin": 48,
    "lonOr": "E",
    "latGr": 38,
    "latMin": 38,
    "latOr": "E",
    "owner": "Myrtice Tattersfield"
  }, {
    "id": 46,
    "lonGr": 172,
    "lonMin": 12,
    "lonOr": "O",
    "latGr": 145,
    "latMin": 2,
    "latOr": "S",
    "owner": "Neall Harroway"
  }, {
    "id": 47,
    "lonGr": 88,
    "lonMin": 27,
    "lonOr": "E",
    "latGr": 22,
    "latMin": 33,
    "latOr": "N",
    "owner": "Ruth Grumley"
  }, {
    "id": 48,
    "lonGr": 164,
    "lonMin": 12,
    "lonOr": "S",
    "latGr": 30,
    "latMin": 49,
    "latOr": "S",
    "owner": "Blondell Sugden"
  }, {
    "id": 49,
    "lonGr": 163,
    "lonMin": 3,
    "lonOr": "S",
    "latGr": 26,
    "latMin": 11,
    "latOr": "E",
    "owner": "Bobbi Martinec"
  }, {
    "id": 50,
    "lonGr": 70,
    "lonMin": 13,
    "lonOr": "O",
    "latGr": 30,
    "latMin": 22,
    "latOr": "O",
    "owner": "Evangelia Ramalho"
  }, {
    "id": 51,
    "lonGr": 44,
    "lonMin": 18,
    "lonOr": "S",
    "latGr": 154,
    "latMin": 4,
    "latOr": "E",
    "owner": "Clarke Rusling"
  }, {
    "id": 52,
    "lonGr": 36,
    "lonMin": 45,
    "lonOr": "S",
    "latGr": 34,
    "latMin": 55,
    "latOr": "N",
    "owner": "Gibb Cline"
  }, {
    "id": 53,
    "lonGr": 36,
    "lonMin": 6,
    "lonOr": "O",
    "latGr": 139,
    "latMin": 15,
    "latOr": "O",
    "owner": "Dacy Bhar"
  }, {
    "id": 54,
    "lonGr": 32,
    "lonMin": 3,
    "lonOr": "E",
    "latGr": 106,
    "latMin": 46,
    "latOr": "N",
    "owner": "Ritchie Cosgry"
  }, {
    "id": 55,
    "lonGr": 37,
    "lonMin": 30,
    "lonOr": "N",
    "latGr": 143,
    "latMin": 1,
    "latOr": "E",
    "owner": "Octavius Kirkpatrick"
  }, {
    "id": 56,
    "lonGr": 1,
    "lonMin": 5,
    "lonOr": "O",
    "latGr": 4,
    "latMin": 46,
    "latOr": "S",
    "owner": "Dallas Arnow"
  }, {
    "id": 57,
    "lonGr": 137,
    "lonMin": 29,
    "lonOr": "N",
    "latGr": 69,
    "latMin": 43,
    "latOr": "S",
    "owner": "Jeralee Porker"
  }, {
    "id": 58,
    "lonGr": 172,
    "lonMin": 13,
    "lonOr": "E",
    "latGr": 32,
    "latMin": 18,
    "latOr": "S",
    "owner": "Archibald Redwin"
  }, {
    "id": 59,
    "lonGr": 85,
    "lonMin": 21,
    "lonOr": "O",
    "latGr": 169,
    "latMin": 25,
    "latOr": "E",
    "owner": "Amabelle Ivankov"
  }, {
    "id": 60,
    "lonGr": 153,
    "lonMin": 33,
    "lonOr": "S",
    "latGr": 28,
    "latMin": 20,
    "latOr": "S",
    "owner": "Meghan Jorn"
  }, {
    "id": 61,
    "lonGr": 47,
    "lonMin": 28,
    "lonOr": "N",
    "latGr": 92,
    "latMin": 24,
    "latOr": "E",
    "owner": "Arlin Fagan"
  }, {
    "id": 62,
    "lonGr": 139,
    "lonMin": 42,
    "lonOr": "N",
    "latGr": 135,
    "latMin": 12,
    "latOr": "E",
    "owner": "Correna Hendrik"
  }, {
    "id": 63,
    "lonGr": 161,
    "lonMin": 36,
    "lonOr": "E",
    "latGr": 138,
    "latMin": 10,
    "latOr": "O",
    "owner": "Rickie Driscoll"
  }, {
    "id": 64,
    "lonGr": 67,
    "lonMin": 4,
    "lonOr": "E",
    "latGr": 38,
    "latMin": 30,
    "latOr": "N",
    "owner": "Cy Shurey"
  }, {
    "id": 65,
    "lonGr": 43,
    "lonMin": 17,
    "lonOr": "N",
    "latGr": 171,
    "latMin": 23,
    "latOr": "S",
    "owner": "Tonnie Castles"
  }, {
    "id": 66,
    "lonGr": 92,
    "lonMin": 43,
    "lonOr": "S",
    "latGr": 129,
    "latMin": 35,
    "latOr": "N",
    "owner": "Guendolen Charsley"
  }, {
    "id": 67,
    "lonGr": 46,
    "lonMin": 59,
    "lonOr": "S",
    "latGr": 135,
    "latMin": 36,
    "latOr": "O",
    "owner": "Amble Pick"
  }, {
    "id": 68,
    "lonGr": 21,
    "lonMin": 27,
    "lonOr": "E",
    "latGr": 147,
    "latMin": 4,
    "latOr": "O",
    "owner": "Gae Ambrois"
  }, {
    "id": 69,
    "lonGr": 117,
    "lonMin": 58,
    "lonOr": "O",
    "latGr": 134,
    "latMin": 41,
    "latOr": "N",
    "owner": "Ashley Keal"
  }, {
    "id": 70,
    "lonGr": 86,
    "lonMin": 53,
    "lonOr": "O",
    "latGr": 19,
    "latMin": 23,
    "latOr": "O",
    "owner": "Sibbie Grinyov"
  }, {
    "id": 71,
    "lonGr": 87,
    "lonMin": 29,
    "lonOr": "N",
    "latGr": 137,
    "latMin": 33,
    "latOr": "O",
    "owner": "Karlen Pedlar"
  }, {
    "id": 72,
    "lonGr": 16,
    "lonMin": 51,
    "lonOr": "O",
    "latGr": 168,
    "latMin": 24,
    "latOr": "N",
    "owner": "Leesa Cowburn"
  }, {
    "id": 73,
    "lonGr": 71,
    "lonMin": 4,
    "lonOr": "O",
    "latGr": 43,
    "latMin": 53,
    "latOr": "O",
    "owner": "Arnoldo McQuie"
  }, {
    "id": 74,
    "lonGr": 113,
    "lonMin": 31,
    "lonOr": "E",
    "latGr": 160,
    "latMin": 57,
    "latOr": "N",
    "owner": "Griselda Padginton"
  }, {
    "id": 75,
    "lonGr": 145,
    "lonMin": 36,
    "lonOr": "N",
    "latGr": 167,
    "latMin": 14,
    "latOr": "N",
    "owner": "Aileen Risbrough"
  }, {
    "id": 76,
    "lonGr": 123,
    "lonMin": 13,
    "lonOr": "S",
    "latGr": 84,
    "latMin": 19,
    "latOr": "S",
    "owner": "Michail Pagitt"
  }, {
    "id": 77,
    "lonGr": 151,
    "lonMin": 17,
    "lonOr": "E",
    "latGr": 167,
    "latMin": 54,
    "latOr": "S",
    "owner": "Alla Rubinov"
  }, {
    "id": 78,
    "lonGr": 108,
    "lonMin": 3,
    "lonOr": "O",
    "latGr": 67,
    "latMin": 28,
    "latOr": "N",
    "owner": "Eulalie Maghull"
  }, {
    "id": 79,
    "lonGr": 23,
    "lonMin": 8,
    "lonOr": "O",
    "latGr": 3,
    "latMin": 23,
    "latOr": "N",
    "owner": "Malia Gooddy"
  }, {
    "id": 80,
    "lonGr": 13,
    "lonMin": 56,
    "lonOr": "O",
    "latGr": 32,
    "latMin": 4,
    "latOr": "N",
    "owner": "Alfonso Dugdale"
  }, {
    "id": 81,
    "lonGr": 20,
    "lonMin": 29,
    "lonOr": "O",
    "latGr": 89,
    "latMin": 31,
    "latOr": "S",
    "owner": "Harold Whitington"
  }, {
    "id": 82,
    "lonGr": 148,
    "lonMin": 17,
    "lonOr": "S",
    "latGr": 25,
    "latMin": 53,
    "latOr": "O",
    "owner": "Lora Shortt"
  }, {
    "id": 83,
    "lonGr": 81,
    "lonMin": 8,
    "lonOr": "N",
    "latGr": 168,
    "latMin": 18,
    "latOr": "S",
    "owner": "Rubin Print"
  }, {
    "id": 84,
    "lonGr": 15,
    "lonMin": 54,
    "lonOr": "O",
    "latGr": 163,
    "latMin": 15,
    "latOr": "E",
    "owner": "Murry Corzor"
  }, {
    "id": 85,
    "lonGr": 68,
    "lonMin": 6,
    "lonOr": "S",
    "latGr": 35,
    "latMin": 48,
    "latOr": "N",
    "owner": "Daveen Doubrava"
  }, {
    "id": 86,
    "lonGr": 49,
    "lonMin": 2,
    "lonOr": "O",
    "latGr": 132,
    "latMin": 27,
    "latOr": "E",
    "owner": "Brucie Storch"
  }, {
    "id": 87,
    "lonGr": 171,
    "lonMin": 13,
    "lonOr": "O",
    "latGr": 149,
    "latMin": 34,
    "latOr": "S",
    "owner": "Gaylor Tolefree"
  }, {
    "id": 88,
    "lonGr": 108,
    "lonMin": 28,
    "lonOr": "S",
    "latGr": 30,
    "latMin": 32,
    "latOr": "S",
    "owner": "Skip Tibbotts"
  }, {
    "id": 89,
    "lonGr": 100,
    "lonMin": 52,
    "lonOr": "S",
    "latGr": 110,
    "latMin": 18,
    "latOr": "N",
    "owner": "Cinda Winters"
  }, {
    "id": 90,
    "lonGr": 21,
    "lonMin": 35,
    "lonOr": "S",
    "latGr": 42,
    "latMin": 5,
    "latOr": "S",
    "owner": "Syd Meineck"
  }, {
    "id": 91,
    "lonGr": 132,
    "lonMin": 15,
    "lonOr": "O",
    "latGr": 117,
    "latMin": 25,
    "latOr": "N",
    "owner": "Gauthier Lorenz"
  }, {
    "id": 92,
    "lonGr": 76,
    "lonMin": 40,
    "lonOr": "O",
    "latGr": 52,
    "latMin": 15,
    "latOr": "N",
    "owner": "Verne Stanlake"
  }, {
    "id": 93,
    "lonGr": 172,
    "lonMin": 16,
    "lonOr": "E",
    "latGr": 147,
    "latMin": 3,
    "latOr": "E",
    "owner": "Cherilyn Newick"
  }, {
    "id": 94,
    "lonGr": 164,
    "lonMin": 36,
    "lonOr": "O",
    "latGr": 128,
    "latMin": 13,
    "latOr": "E",
    "owner": "Carin Hafford"
  }, {
    "id": 95,
    "lonGr": 3,
    "lonMin": 57,
    "lonOr": "E",
    "latGr": 66,
    "latMin": 17,
    "latOr": "O",
    "owner": "Nehemiah Heathfield"
  }, {
    "id": 96,
    "lonGr": 167,
    "lonMin": 16,
    "lonOr": "O",
    "latGr": 138,
    "latMin": 56,
    "latOr": "N",
    "owner": "Mariejeanne Shurrocks"
  }, {
    "id": 97,
    "lonGr": 18,
    "lonMin": 24,
    "lonOr": "N",
    "latGr": 6,
    "latMin": 5,
    "latOr": "O",
    "owner": "Juliet Willstrop"
  }, {
    "id": 98,
    "lonGr": 83,
    "lonMin": 40,
    "lonOr": "E",
    "latGr": 2,
    "latMin": 30,
    "latOr": "O",
    "owner": "Elsy Biasi"
  }, {
    "id": 99,
    "lonGr": 172,
    "lonMin": 58,
    "lonOr": "O",
    "latGr": 147,
    "latMin": 33,
    "latOr": "S",
    "owner": "Edsel O'Scollain"
  }, {
    "id": 100,
    "lonGr": 166,
    "lonMin": 41,
    "lonOr": "S",
    "latGr": 2,
    "latMin": 5,
    "latOr": "E",
    "owner": "Frederik Dahlgren"
  }]

  resultSend:any = []

  constructor() { }

  ngOnInit(): void {
  }

  find(){
    //lat&long S(W) == - && S(W) != +
    //this.deforestCoordinates.getRawValue().zoneMin = this.deforestCoordinates.getRawValue().zoneMin! == null?0:this.deforestCoordinates.getRawValue().zoneMin
    

    if(this.deforestCoordinates.valid){
      let result = this.deforestCoordinates.value;
      result.zoneGr = result.zoneGr==null?"0":result.zoneGr
      result.zoneMin = result.zoneMin==null?"0":result.zoneMin
      this.resultSend = this.data.filter((i:any,arr)=>{
        if(i.latGr <= (Number.parseFloat(result.latGr!) + Number.parseFloat(result.zoneGr!)) && i.latGr >= (Number.parseFloat(result.latGr!) - Number.parseFloat(result.zoneGr!)) 
        && i.lonGr <= (Number.parseFloat(result.lonGr!) + Number.parseFloat(result.zoneGr!)) && i.lonGr >= (Number.parseFloat(result.lonGr!) - Number.parseFloat(result.zoneGr!))
        && i.latOr == result.latOr && i.lonOr == result.lonOr)return i
        //&& i.latMin <= (Number.parseFloat(result.latMin!) + Number.parseFloat(result.zoneMin!)) && i.latMin >= (Number.parseFloat(result.latMin!) - Number.parseFloat(result.zoneMin!)) 
        //&& i.lonMin <= (Number.parseFloat(result.lonMin!) + Number.parseFloat(result.zoneMin!)) && i.lonMin >= (Number.parseFloat(result.lonMin!) - Number.parseFloat(result.zoneMin!)))
      })
    }else{
      console.log("no se hizo nada");
    }
  }

  testData(){//32
    this.resultSend = this.data.filter((i:any,arr)=>{
      if(i.latGr <= (20+15) && i.latGr >= (20-15) && i.lonGr <= (20+15) && i.lonGr >= (20-15))return i
    })
  }

}
