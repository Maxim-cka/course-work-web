function getInfoPage(title, text) {
    return `<!DOCTYPE html>
    <html lang="">
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
    
        <link rel="stylesheet" href="css/linearicons.css">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/owl.carousel.css">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <section class="home-about-area">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-12 home-about-right no-padding">
                        <h1>${title}</h1>
                        <div>${text}</div>
                    </div>
                </div>
            </div>
        </section>
    </body>
    </html>`;
}

