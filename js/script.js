
document.getElementById("linkedin-btn").onclick = function() {
    window.open("https://www.linkedin.com/in/carl-jacobson-03a554172/", "_blank");
};

document.getElementById("github-btn").onclick = function() {
    window.open("https://github.com/Zazixxs", "_blank");
};

document.getElementById("cv-btn").onclick = function() {
    var link = document.createElement('a');
    link.href = 'Downloads\Carl Jacobson__CV.pdf';
    link.download = 'Carl Jacobson__CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

