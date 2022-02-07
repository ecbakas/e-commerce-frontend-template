$.getJSON("mod.json", function (data) {
	var items = [];
	$.each(data, function (key, menuItem) {
		var html =`
			<li class="nav-item nav-expand">
				<a class="nav-link nav-expand-link" href="#">
					`+ menuItem.name +`
					<i class="bx bx-chevron-right"></i>
					</a>
					<ul class="nav-items nav-expand-content">
					${(() => {
						if((menuItem.children).length>0){
							$.each(menuItem.children, function (key, subMenuItem) {
								html = html +`<li class='nav-item nav-expand'>
										<a class="nav-link nav-expand-link" href="#">
											`+ subMenuItem.name +`
											<i class="bx bx-chevron-right"></i>
										</a>
										<ul class="nav-items nav-expand-content">
										${(() => {
											if((subMenuItem.children).length>0){
												console.log((subMenuItem.children).length)
												var childLenght= (subMenuItem.children).length;
												for(a=0;a<childLenght;a++){
													html = html + `<li class="nav-item">
															<a class="nav-link" href="`+ menuItem.slug + "/" + subMenuItem.slug + "/" + subMenuItem.children[a].slug + `">
																`+ subMenuItem.children[a].name +`
															</a>
														</li>`
												}
											}
											return html;
										})()};
										</ul>
									</li>`
							})
						}
						return html;
					})()}
				</ul>
			</li>`
		items.push(html);
	})
	$("<ul/>", {
        html: items.join("")
    }).addClass("nav-items nav-level-1").appendTo(".nav-mobile");
})
