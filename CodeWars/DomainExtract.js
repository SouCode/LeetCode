/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){
    //if the url does not start with 'http://' or 'https://'.
    // Prepend 'http://' to the URL if it doesn't have a protocol
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'http://' + url;
    }

    const hostname = new URL(url).hostname; //Creates a URL object, Get the hostname from the URL
    const domain = hostname.startsWith('www.') ? hostname.slice(4) : hostname; // Remove www. if it exists


    // Split the domain string into an array of substrings using '.' as the separator
    // This results in the array ["example", "com"]
    // Then, access the first element of the array, which is "example"
    return domain.split('.')[0]; // This will return "example"

  }
  
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));         
console.log(domainName("https://www.cnet.com"));  

//simpler way lol
function simplerDomainName(url){
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
  }

console.log(simplerDomainName("http://github.com/carbonfive/raygun"));
console.log(simplerDomainName("http://www.zombie-bites.com"));         
console.log(simplerDomainName("https://www.cnet.com"));  
  

  