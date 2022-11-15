import {data1} from "../common/data";
import 'jquery';

import '../../style/front-style.css';
import '../../images/letsGO.png';
import imageSrc from '../../images/letsGO.png';

console.log("hello webpack");
console.log(data1);

data1.describe();

const i = document.createElement('img');
i.src = imageSrc;