let links_elements_id = ['link-dosug', 'link-vakansiy', 'link-archive', 'link-svyaz', 'link-jur-info'];
let scroll_elements_id = ['1', 'sect-3', '3', '4', '5'];

document.getElementById(links_elements_id[0]).addEventListener("mouseenter", dosug); function dosug() { document.getElementById(scroll_elements_id[0]).scrollIntoView ({ behavior: 'smooth' })}
document.getElementById(links_elements_id[1]).addEventListener("click", two); function two() { document.getElementById(scroll_elements_id[1]).scrollIntoView ({ behavior: 'smooth' })}
document.getElementById(links_elements_id[2]).addEventListener("click", three); function three() { document.getElementById(scroll_elements_id[2]).scrollIntoView ({ behavior: 'smooth' })}
document.getElementById(links_elements_id[3]).addEventListener("click", four); function four() { document.getElementById(scroll_elements_id[3]).scrollIntoView ({ behavior: 'smooth' })}
document.getElementById(links_elements_id[4]).addEventListener("click", five); function five() { document.getElementById(scroll_elements_id[4]).scrollIntoView ({ behavior: 'smooth' })}