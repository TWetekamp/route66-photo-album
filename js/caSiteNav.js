// Load common California site nav bar

console.log("js loading");

var navLinks = document.getElementById("siteNav");
  
    navLinks.innerHTML = 
        `
        <ul>
            <li><a href="./chicago.html"><strong>Illinois Route 66</strong></li>
            <li><a href="./stlouis.html"><strong>Missouri Route 66</strong></a></li>
            <li><a href="./baxtersprings.html"><strong>Kansas Route 66</strong></a></li>     
            <li><a href="./miami.html"><strong>Oklahoma Route 66</strong></a></li>
            <li><a href="./shamrock.html"><strong>Texas Route 66</strong></a></li>
            <li><a href="./endee.html"><strong>New Mexico Route 66</strong></a></li>
            <li><a href="./lupton.html"><strong>Arizona Route 66</strong></a></li>
            <li><strong>California Route 66</strong></a></li>  
            <li><a href="./amboy.html">Amboy</a></li>
            <li><a href="./ludlow.html">Ludlow</a></li>
            <li><a href="./newberrysprings.html">Newberry Springs</a></li>
            <li><a href="./barstow.html">Barstow</a></li>
            <li><a href="./victorville.html">Victorville</a></li>
            <li><a href="./sanbernardino.html">San Bernardino</a></li>
            <li><a href="./rialto.html">Rialto</a></li>    
            <li><a href="./ranchocucamonga.html">Rancho Cucamonga</a></li>
            <li><a href="./arcadia-ca.html">Arcadia</a></li>
            <li><a href="./santamonica.html">Santa Monica</a></li>
        </ul>  
        `;