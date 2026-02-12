function showCertificate(certificateId) {
    const certificate = document.getElementById(certificateId);
    if (certificate.style.display === "none") {
        certificate.style.display = "block";
    } else {
        certificate.style.display = "none";
    }
}