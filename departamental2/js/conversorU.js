function cambiaContenido(){
    var inputLongitud_1 = document.getElementById("input_longitud_1");
    var inputLongitud_2 = document.getElementById("input_longitud_2");
    var muestraFormula = document.getElementById("muestra_formula");
    var selectLongitud_1 = document.getElementById("select_longitud_1").value;
    var selectLongitud_2 = document.getElementById("select_longitud_2").value;
    switch (selectLongitud_1) {
        case "kilometro":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value;
                            muestraFormula.innerHTML="El valor de la longitud por 1";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*1000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1000";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*100000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 100,000";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*1000000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,000,000";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*1000000000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,000,000,000";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*1000000000000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,000,000,000,000";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*0.621371;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.621371";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*1093.61;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1093.61";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*3280.84;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 3280.84";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*39370.1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 39370.1";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*0.539957;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.539957";
                        break;
                    default:
                        break;
                }    
            break;
        case "metro":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*0.001;
                            muestraFormula.innerHTML="El valor de la longitud por 0.001";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*100;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 100";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*1000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,000";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*1,000,000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,000,000";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*1000000000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,000,000,000";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*0.000621371;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000621371";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*1.09361;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1.09361";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*3.28084;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 3.28084";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*39.3701;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 39.3701";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*0.000539957;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000539957";
                        break;
                    default:
                        break;
                }    
            break;
            case "centimetro":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*0.00001;
                            muestraFormula.innerHTML="El valor de la longitud por 0.00001";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*0.01;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .001";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*10;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 10";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*10000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 10,000";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*10000000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 10,000,000";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*0.00000621371;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.00000621371";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*1.0009361;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1.0009361";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*.0328084;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .0328084";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*.393701;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .393701";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*0.00000539957;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.00000539957";
                        break;
                    default:
                        break;
                }    
            break;
            case "milimetro":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*0.000001;
                            muestraFormula.innerHTML="El valor de la longitud por 0.000001";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*0.001;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .001";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*0.1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.1";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*1000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,000";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*1000000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,000,000";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*.000000621371;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000000621371";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*.10009361;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.10009361";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*.00328084;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .00328084";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*.0393701;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .0393701";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*0.000000539957;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000000539957";
                        break;
                    default:
                        break;
                }    
            break;
            case "micrometro":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*0.000000001;
                            muestraFormula.innerHTML="El valor de la longitud por 0.000000001";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*0.000001;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .000001";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*0.0001;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.0001";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*.001;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .001";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*1000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,000";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*.000000000621371;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000000000621371";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*.00010009361;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.00010009361";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*.00000328084;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .00000328084";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*.0000393701;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .0000393701";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*0.000000000539957;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000000000539957";
                        break;
                    default:
                        break;
                }    
            break;
            case "nanometro":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*0.000000001;
                            muestraFormula.innerHTML="El valor de la longitud por 0.000000001";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*0.000000001;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .000000001";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*0.0000001;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.0000001";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*.000001;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .000001";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*.001;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.001";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*.000000000000621371;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000000000000621371";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*.00000010009361;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.00000010009361";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*.00000000328084;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .00000000328084";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*.0000000393701;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .0000000393701";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*0.000000000000539957;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.0000000000000539957";
                        break;
                    default:
                        break;
                }    
            break;
            case "milla":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*1.6093;
                            muestraFormula.innerHTML="El valor de la longitud por 1.6093";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*1609.34;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,609.34";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*160934;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 160,934";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*16093400;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,609,340";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*16093400000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,609,340,000";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*16093400000000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,609,340,000,000";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*1760;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1760";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*5280;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 5280";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*63360;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 63,360";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*0.868976;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.868976";
                        break;
                    default:
                        break;
                }    
            break;
            case "yarda":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*0.0009144;
                            muestraFormula.innerHTML="El valor de la longitud por 0.0009144";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*0.9144;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.9144";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*91.44;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 91.44";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*914.4;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 914.4";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*914400;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 914400";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*914400000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 914,400,000";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*0.000568182;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000568182";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*3;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 3";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*36;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 36";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*0.000493737;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000493737";
                        break;
                    default:
                        break;
                }    
            break;
            case "pie":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*0.000304800308000003793;
                            muestraFormula.innerHTML="El valor de la longitud por 0.000304800308000003793";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*0.30480030800000379454;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.30480030800000379454";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*30.480030800000378122;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 30.480030800000378122";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*304.80030800000378122;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 304.80030800000378122";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*304800.30800000380259;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 304800.30800000380259";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*304800308.00000375509;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 914,400,000";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*0.000189;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000189";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*0.333333;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.333333";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*12;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 12";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*0.000164579;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000164579";
                        break;
                    default:
                        break;
                }    
            break;
            case "pulgada":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*.0000254;
                            muestraFormula.innerHTML="El valor de la longitud por 0.0000254";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*0.0254;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.0254";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*2.54;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 2.54";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*25.4;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 25.4";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*25400.02;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 25,400.02";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*25400025;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 25,400,025";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*.00001578;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por .0000157";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*0.02777;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.02777";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*0.0833333;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.0833333";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*.000013715;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 0.000013715";
                        break;
                    default:
                        break;
                }    
            break;
            case "millanautica":
                switch (selectLongitud_2) {
                    case "kilometro":
                            inputLongitud_2.value= inputLongitud_1.value*1.852;
                            muestraFormula.innerHTML="El valor de la longitud por 1.852";
                        break;
                    case "metro":
                            inputLongitud_2.value = inputLongitud_1.value*1852;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,852";
                        break;
                    case "centimetro":
                            inputLongitud_2.value = inputLongitud_1.value*185200;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 185,200";
                        break;
                    case "milimetro":
                            inputLongitud_2.value = inputLongitud_1.value*1852000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,852,000";
                        break;
                    case "micrometro":
                            inputLongitud_2.value = inputLongitud_1.value*1852000000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,852,000,000";
                        break;
                    case "nanometro":
                            inputLongitud_2.value = inputLongitud_1.value*1852000000000;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1,852,000,000,000";
                        break;
                    case "milla":
                            inputLongitud_2.value = inputLongitud_1.value*1.15078;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1.15078";
                        break;
                    case "yarda":
                            inputLongitud_2.value = inputLongitud_1.value*2025.37;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 2,025.37";
                        break;
                    case "pie":
                            inputLongitud_2.value = inputLongitud_1.value*6076.12;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 6,076.12";
                        break;
                     case "pulgada":
                            inputLongitud_2.value = inputLongitud_1.value*72913.4;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 72,913.4";
                        break;
                    case "millanautica":
                            inputLongitud_2.value = inputLongitud_1.value*1;
                            muestraFormula.innerHTML="El valor de la longitud multiplicado por 1";
                        break;
                    default:
                        break;
                }    
            break;
        default:
            break;
    }
}
function cambiaContenidoT(){
    var inputTemperatura_1 = document.getElementById("input_temperatura_1");
    var inputTemperatura_2 = document.getElementById("input_temperatura_2");
    var muestraFormula = document.getElementById("muestra_formula");
    var selectTemperatura_1 = document.getElementById("select_temperatura_1").value;
    var selectTemperatura_2 = document.getElementById("select_temperatura_2").value;
    switch (selectTemperatura_1) {
        case "celsius":
                switch (selectTemperatura_2) {
                    case "celsius":
                            inputTemperatura_2.value=inputTemperatura_1.value;
                            muestraFormula.innerHTML="Es igual";
                    break;
                    case "fahrenheit":
                        inputTemperatura_2.value= parseFloat(inputTemperatura_1.value*1.8)+parseFloat(32);
                        muestraFormula.innerHTML="ÂºF = ÂºC x 1.8 + 32";
                    break;
                    case "kelvin":
                        inputTemperatura_2.value= parseFloat(inputTemperatura_1.value)+parseFloat(273.15);
                        muestraFormula.innerHTML="K = ÂºC + 273.15";
                    break;
                    default:
                        break;
                }
        break;
        case "fahrenheit":
                switch (selectTemperatura_2) {
                    case "celsius":
                            inputTemperatura_2.value= (inputTemperatura_1.value-32)/1.8;
                            muestraFormula.innerHTML="ÂºC = (ÂºF-32) Ã· 1.8";
                    break;
                    case "fahrenheit":
                        inputTemperatura_2.value= inputTemperatura_1.value;
                        muestraFormula.innerHTML="Es igual";
                    break;
                    case "kelvin":
                        inputTemperatura_2.value= parseFloat((5/9)*(inputTemperatura_1.value-32))+parseFloat(273.15);
                        muestraFormula.innerHTML="K = 5/9 (ÂºF â€“ 32) + 273.15";
                    break;
                    default:
                        break;
                }
            break;
        case "kelvin":
                switch (selectTemperatura_2) {
                    case "celsius":
                            inputTemperatura_2.value= inputTemperatura_1.value-273.15;
                            muestraFormula.innerHTML="ÂºC = K â€“ 273.15";
                    break;
                    case "fahrenheit":
                        inputTemperatura_2.value= parseFloat((1.8)*(inputTemperatura_1.value-273.15))+parseFloat(32);
                        muestraFormula.innerHTML="ÂºF = 1.8*(K â€“ 273.15) + 32";
                    break;
                    case "kelvin":
                        inputTemperatura_2.value = inputTemperatura_1.value;
                        muestraFormula.innerHTML="Es igual";
                    break;
                    default:
                        break;
                }
        break;
        default:
            break;
    }
}
function cambiaContenidoM(){
    var inputMasa_1 = document.getElementById("input_masa_1");
    var inputMasa_2 = document.getElementById("input_masa_2");
    var muestraFormula = document.getElementById("muestra_formula");
    var selectMasa_1 = document.getElementById("select_masa_1").value;
    var selectMasa_2 = document.getElementById("select_masa_2").value;
    switch (selectMasa_1) {
        case "kilogramo":
                switch (selectMasa_2) {
                    case "kilogramo":
                            inputMasa_2.value = inputMasa_1.value;
                            muestraFormula.innerHTML = "Es igual";
                        break;
                        case "tonelada":
                            inputMasa_2.value = inputMasa_1.value*0.001;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.001";
                        break;
                        case "onza":
                            inputMasa_2.value = inputMasa_1.value*35.27;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 35.27";
                        break;
                        case "libra":
                            inputMasa_2.value = inputMasa_1.value*2.2;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 2.2";
                        break;
                        case "long_ton":
                            inputMasa_2.value = inputMasa_1.value*0.000984;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.000984";
                        break;
                        case "short_ton":
                            inputMasa_2.value = inputMasa_1.value*0.001102;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.001102";
                        break;
                    default:
                        break;
                }
        break;
        case "tonelada":
                switch (selectMasa_2) {
                    case "kilogramo":
                            inputMasa_2.value = inputMasa_1.value*1000;
                            muestraFormula.innerHTML = "1000";
                        break;
                        case "tonelada":
                            inputMasa_2.value = inputMasa_1.value*1;
                            muestraFormula.innerHTML = "Es igual";
                        break;
                        case "onza":
                            inputMasa_2.value = inputMasa_1.value*35274;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 35274";
                        break;
                        case "libra":
                            inputMasa_2.value = inputMasa_1.value*2204.62;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 2204.62";
                        break;
                        case "long_ton":
                            inputMasa_2.value = inputMasa_1.value*0.98421
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.98421";
                        break;
                        case "short_ton":
                            inputMasa_2.value = inputMasa_1.value*1.10231;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 1.10231";
                        break;
                    default:
                        break;
                }
        break;
        case "onza":
                switch (selectMasa_2) {
                    case "kilogramo":
                            inputMasa_2.value = inputMasa_1.value*0.028349;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.028349";
                        break;
                        case "tonelada":
                            inputMasa_2.value = inputMasa_1.value*0.000028;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.000028";
                        break;
                        case "onza":
                            inputMasa_2.value = inputMasa_1.value*1;
                            muestraFormula.innerHTML = "Es igual";
                        break;
                        case "libra":
                            inputMasa_2.value = inputMasa_1.value*0.0625;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.0625";
                        break;
                        case "long_ton":
                            inputMasa_2.value = inputMasa_1.value*0.000028;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.000028";
                        break;
                        case "short_ton":
                            inputMasa_2.value = inputMasa_1.value*0.000031;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.000031";
                        break;
                    default:
                        break;
                }
        break;
        case "libra":
                switch (selectMasa_2) {
                    case "kilogramo":
                            inputMasa_2.value = inputMasa_1.value*0.45359;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.45359";
                        break;
                        case "tonelada":
                            inputMasa_2.value = inputMasa_1.value*0.000454;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.000454";
                        break;
                        case "onza":
                            inputMasa_2.value = inputMasa_1.value*16;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 16";
                        break;
                        case "libra":
                            inputMasa_2.value = inputMasa_1.value*1;
                            muestraFormula.innerHTML = "Es igual";
                        break;
                        case "long_ton":
                            inputMasa_2.value = inputMasa_1.value*0.000446;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.000446";
                        break;
                        case "short_ton":
                            inputMasa_2.value = inputMasa_1.value*0.0005;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.0005";
                        break;
                    default:
                        break;
                }
        break;
        case "long_ton":
                switch (selectMasa_2) {
                    case "kilogramo":
                            inputMasa_2.value = inputMasa_1.value*1016.05;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 1016.05";
                        break;
                        case "tonelada":
                            inputMasa_2.value = inputMasa_1.value*1.01605;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 1.01605";
                        break;
                        case "onza":
                            inputMasa_2.value = inputMasa_1.value*35840;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 35840";
                        break;
                        case "libra":
                            inputMasa_2.value = inputMasa_1.value*2240;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 2240";
                        break;
                        case "long_ton":
                            inputMasa_2.value = inputMasa_1.value*1;
                            muestraFormula.innerHTML = "Es igual";
                        break;
                        case "short_ton":
                            inputMasa_2.value = inputMasa_1.value*1,12;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 1,12";
                        break;
                    default:
                        break;
                }
        break;
        case "short_ton":
                switch (selectMasa_2) {
                    case "kilogramo":
                            inputMasa_2.value = inputMasa_1.value*907.185;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 907.185";
                        break;
                        case "tonelada":
                            inputMasa_2.value = inputMasa_1.value*0.90718;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0.90718";
                        break;
                        case "onza":
                            inputMasa_2.value = inputMasa_1.value*32000;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 32000";
                        break;
                        case "libra":
                            inputMasa_2.value = inputMasa_1.value*2000;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 2000";
                        break;
                        case "long_ton":
                            inputMasa_2.value = inputMasa_1.value*0,89286;
                            muestraFormula.innerHTML = "El valor de la masa multiplicado por 0,89286";
                        break;
                        case "short_ton":
                            inputMasa_2.value = inputMasa_1.value*1;
                            muestraFormula.innerHTML = "Es igual";
                        break;
                    default:
                        break;
                }
        break;
        default:
            break;
    }
}