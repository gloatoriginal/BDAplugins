/**
 * @name VarietyMimic
 * @author Gloat
 * @version 0.0.1
 * @description Background changer named after the Linux BG Changer Variety
 */
/*https://apod.nasa.gov/apod/image/2003/Dolphin_Pleiades_3495.jpg
https://apod.nasa.gov/apod/image/2007/N6188_Cappelletti_4508.jpg
https://www.nasa.gov/sites/default/files/thumbnails/image/eta-carinae-hubble20thpic.jpg
https://apod.nasa.gov/apod/image/1810/M16_Klinger_3595.jpg*/


function change_bg(url) {
    let css = `body:before { background: url('${url}');
            background-position: center; 
            background-size: cover;}`;
    let style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}

async function get_jq() {
    var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);
}
async function main(){
    if(!window.jQuery) {
        document.onload = await get_jq();
        window.$ = window.jQuery;
    }
    let url_i = 0;
    let url_array = 
    ["https://apod.nasa.gov/apod/image/1810/M16_Klinger_3595.jpg",
    "https://www.nasa.gov/sites/default/files/thumbnails/image/eta-carinae-hubble20thpic.jpg",
    "https://apod.nasa.gov/apod/image/2007/N6188_Cappelletti_4508.jpg",
    "https://apod.nasa.gov/apod/image/2003/Dolphin_Pleiades_3495.jpg"];
    change_bg(url_array[url_i]);
	url_i++;
	let my_timer = setInterval(function(){
        if(url_i==url_array.length) url_i = 0;
        change_bg(url_array[url_i]);
        console.log(`we are on -> ${url_i}`)
        url_i++;
    }, 10000);
	return my_timer;
    

}
module.exports = class VarietyMimic {
    old_bg = "https://files.wallpaperpass.com/2019/10/outer%20space%20wallpaper%20028%20-%201920x1080.jpg";
	interval;
    start () {
       main().then((interval)=>{
		this.interval = interval;
	});
	   //console.log(this.interval);
    }
    stop () {
	clearInterval(this.interval);
        change_bg(this.old_bg);
    }

 
}
