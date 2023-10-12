// Load common Arizona site nav bar

console.log("js loading");

var navLinks = document.getElementById("siteNav");
  
    navLinks.innerHTML = 
        `
        <ul>
            <li><a href="./chicago.html"><strong>Illinois Route 66</strong></a></li>
            <li><a href="./stlouis.html"><strong>Missouri Route 66</strong></a></li>
            <li><a href="./baxtersprings.html"><strong>Kansas Route 66</strong></a></li>     
            <li><a href="./miami.html"><strong>Oklahoma Route 66</strong></a></li>
            <li><a href="./shamrock.html"><strong>Texas Route 66</strong></a></li>
            <li><a href="./endee.html"><strong>New Mexico Route 66</strong></a></li>
            <li><strong>Arizona Route 66</strong></a></li>
            <li><a href="./lupton.html">Lupton</a></li>
            <li><a href="./querino.html">Querino</a></li>
            <li><a href="./painteddesert.html">Painted Desert</a></li>
            <li><a href="./petrifiedforest.html">Petrified Forest</a></li>    
            <li><a href="./road2holbrook.html">Petrified Forest to Holbrook</a></li>
            <li><a href="./holbrook.html">Holbrook</a></li>
            <li><a href="./jackrabbit.html">Jackrabbit</a></li>
            <li><a href="./winslow.html">Winslow</a></li>    
            <li><a href="./flagstaff.html">Flagstaff</a></li>
            <li><a href="./road2williams.html">Parks to Williams</a></li>
            <li><a href="./williams.html">Williams</a></li>
            <li><a href="./road2ashfork.html">Road to Ash Fork</a></li>    
            <li><a href="./ashfork.html">Ash Fork</a></li>
            <li><a href="./road2seligman.html">Road to Seligman</a></li>
            <li><a href="./seligman.html">Seligman</a></li>
            <li><a href="./road2hackberry.html">Road to Hackberry</a></li>    
            <li><a href="./hackberry.html">Hackberry</a></li>
            <li><a href="./road2kingman.html">Road to Kingman</a></li>
            <li><a href="./kingman.html">Kingman</a></li>
            <li><a href="./road2oatman.html">Road to Oatman</a></li>
            <li><a href="./oatman.html">Oatman</a></li>
            <li><a href="./road2amboy.html">Road to Amboy, CA</a></li>
            <li><a href="./amboy.html"><strong>California Route 66</strong></a></li>   
        </ul>  
        `;