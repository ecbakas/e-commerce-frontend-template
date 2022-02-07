$.getJSON("categories.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        var html ='';
        if(val.multiple==true){
            console.log((val.name))
            console.log((val.children).length)
            for(z=0;z<((val.children).length);z++){
                if(val.children[z].multiple==true){
                    html = html + `
                    <li class='has-submenu'>
                    <a href='#' data-submenu="`+ val.children[z].dataSub +`">` + val.children[z].name + `<i class='bx bx-chevron-right'></i></a>
                        <div class='submenu' id='`+ val.children[z].dataSub +`'>
                        <div class='submenu-header'>
                            <a href='#' data-submenu-close='`+ val.children[z].dataSub +`'><i class='bx bx-chevron-left'></i>Geri dön</a>
                        </div>
                        <label style='background-image: url(`+ val.children[z].image +`);'>`+ val.children[z].name +`</label>
                        <ul>
                        ${(() => {
                            console.log(">"+val.children[z].name)
                            console.log((((val.children[z]).children).length))
                            for(x=0;x<(((val.children[z]).children).length);x++){
                                if(val.children[z].children[x].multiple==true){
                                    html = html + `
                                    <li class='has-submenu'>
                                      <a href='#' data-submenu="`+ val.children[z].children[x].dataSub +`">` + val.children[z].children[x].name + `<i class='bx bx-chevron-right'></i></a>
                                        <div class='submenu' id='`+ val.children[z].children[x].dataSub +`'>
                                        <div class='submenu-header'>
                                            <a href='#' data-submenu-close='`+ val.children[z].children[x].dataSub +`'><i class='bx bx-chevron-left'></i>Geri dön</a>
                                        </div>
                                        <label style='background-image: url(`+ val.children[z].children[x].image +`);'>`+ val.children[z].children[x].name +`</label>
                                        <ul>
                                        ${(() => {
                                            console.log(">>"+val.children[z].children[x].name)
                                            console.log((((val.children[z]).children[x]).children.length))
                                            for(c=0;c<(((val.children[z]).children[x]).children.length);c++){
                                                if(val.children[z].children[x].children[c].multiple==true){
                                                    html = html + `
                                                    <li class='has-submenu'>
                                                    <a href='#' data-submenu="`+ val.children[z].children[x].children[c].dataSub +`">` + val.children[z].children[x].children[c].name + `<i class='bx bx-chevron-right'></i></a>
                                                        <div class='submenu' id='`+ val.children[z].children[x].children[c].dataSub +`'>
                                                        <div class='submenu-header'>
                                                            <a href='#' data-submenu-close='`+ val.children[z].children[x].children[c].dataSub +`'><i class='bx bx-chevron-left'></i>Geri dön</a>
                                                        </div>
                                                        <label style='background-image: url(`+ val.children[z].children[x].children[c].image +`);'>`+ val.children[z].children[x].children[c].name +`</label>
                                                        <ul>
                                                        ${(() => {
                                                            console.log(">>>"+val.children[z].children[x].children[c].name)
                                                            console.log((((val.children[z]).children[x]).children[c]).children.length)
                                                            for(v=0;v<((((val.children[z]).children[x]).children[c]).children.length);v++){
                                                                if(val.children[z].children[x].children[c].children[v].multiple==false){
                                                                    console.log("maksimum derinlik")
                                                                }else{
                                                                    html = html + `
                                                                    <li ><a href='#' '>` + val.children[z].children[x].children[c].children[v].name + `</a></li>
                                                                    `
                                                                    console.log(">>>>"+val.children[z].children[x].children[c].children[v].name);
                                                                }
                                                            }
                                                            return html;
                                                        })()}
                                                        </ul>
                                                        </div>
                                                    </li>`
                                                }
                                                else{
                                                    html = html + `<li ><a href='#' '>` + val.children[z].children[x].children[c].name + `</a></li>`
                                                    console.log(">>>"+val.children[z].children[x].children[c].name);
                                                }
                                            }
                                            return html;
                                        })()}
                                        </ul>
                                        </div>
                                    </li>`
                                }
                                else{
                                    html = html + `<li ><a href='#' '>` + val.children[z].children[x].name + `</a></li>`
                                    console.log(">>"+val.children[z].children[x].name);
                                }
                            }
                        return html;
                        })()}
                        </ul>
                        </div>
                </li>`
                }
                else{
                    html = html + `<li ><a href='#' '>` + val.children[z].name + `</a></li>`
                    console.log(">"+val.children[z].name)
                }
            }
        }
        else{
            console.log("bozuk yerleşim")
        }
        items.push(html);
    });

    $("<ul/>", {
        html: items.join("")
    }).appendTo(".nav-mobile");
});