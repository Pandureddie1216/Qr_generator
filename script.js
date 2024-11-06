function generateQRCode() {
    const qrCodeContainer = document.getElementById("qrCode");
    const link = document.getElementById("linkInput").value.trim();
    const downloadButton = document.getElementById("downloadButton");

    // Clear any previous QR code and hide download button
    qrCodeContainer.innerHTML = "";
    downloadButton.style.display = "none";

    if (link === "") {
        alert("Please enter a valid link.");
        return;
    }

    // Generate QR code as a data URL
    QRCode.toDataURL(link, { width: 200 }, function (error, url) {
        if (error) {
            console.error("Error generating QR code:", error);
            return;
        }
        
        // Create an image element to display the QR code
        const img = document.createElement("img");
        img.src = url;
        img.alt = "QR Code";
        img.id = "qrCodeImage";

        // Append the QR code to the container
        qrCodeContainer.appendChild(img);

        // Enable and configure the download button
        downloadButton.style.display = "inline-block";
        downloadButton.setAttribute("data-url", url);
    });
}

function downloadQRCode() {
    const url = document.getElementById("downloadButton").getAttribute("data-url");
    const link = document.createElement("a");
    link.href = url;
    link.download = "QRCode.png";
    link.click();
}
