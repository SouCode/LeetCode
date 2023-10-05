/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){
    // Prepend 'http://' to the URL if it doesn't have a protocol
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'http://' + url;
    }
  
    const hostname = new URL(url).hostname; // Get the hostname from the URL
    const domain = hostname.startsWith('www.') ? hostname.slice(4) : hostname; // Remove www if it exists
    return domain.split('.')[0]; // Take the first part of the domain
  }
  
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));         
console.log(domainName("https://www.cnet.com"));  