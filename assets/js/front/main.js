import {data1} from "../common/data";
import 'jquery';

import '../../style/front-style.css';
import '../../style/images/téléchargement.jpg';
import imageSrc from '../../style/images/téléchargement.jpg';

console.log("hello webpack");
console.log(data1);

data1.describe();

const i = document.createElement('img');
i.src = imageSrc;