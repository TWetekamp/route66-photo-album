// Load common New Mexico site nav bar

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
            <li><strong>New Mexico Route 66</strong></li>
            <li><a href="./endee.html">Endee</a></li>
            <li><a href="./road2sanjon.html">Road to San Jon</a></li>
            <li><a href="./tucumcari.html">Tucumcari</a></li>
            <li><a href="./road2cuervo.html">Road to Cuervo</a></li>    
            <li><a href="./cuervocutoff.html">Cuervo Cutoff</a></li>
            <li><a href="./santarosa.html">Santa Rosa</a></li>
            <li><a href="./road2santafe.html">Road to Santa Fe</a></li>
            <li><a href="./santafe.html">Santa Fe</a></li>
            <li><a href="./road2gallup.html">Road to Gallup</a></li>
            <li><a href="./gallup.html">Gallup</a></li>
            <li><a href="./road2lupton.html">Road to Lupton</a></li>
            <li><a href="./lupton.html"><strong>Arizona Route 66</strong></a></li>
            <li><a href="./amboy.html"><strong>California Route 66</strong></a></li> 
        </ul>  
        `;