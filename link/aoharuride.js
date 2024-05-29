
        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAQFFD0msPus55mE55_JIZP4sl_BZsu6A8",
            authDomain: "mangadb-86f0e.firebaseapp.com",
            projectId: "mangadb-86f0e",
            storageBucket: "mangadb-86f0e.appspot.com",
            messagingSenderId: "372940836103",
            appId: "1:372940836103:web:ff4456fd9370f5e050c9a2"
        };
        
        
        // // Firebase Storage URL for One Piece Chapter 0 PDF
        // const onePieceChapter0Url = "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%200.pdf?alt=media&token=45883182-182a-4afb-98a0-045faf790c7e";

        // // Function to retrieve and display PDF from Firebase Storage in a new tab
        // function openPDFInNewTab(url) {
        //     window.open(url, '_blank');
        // }

        // // Add event listener to the chapter link
        // const chapterLink = document.getElementById("One1");
        // chapterLink.addEventListener("click", (event) => {
        //     event.preventDefault();
        //     openPDFInNewTab(onePieceChapter0Url);
        // });

        // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);

        // Function to retrieve and display PDF from Firebase Storage in a new tab
        function openPDFInNewTab(url) {
            window.open(url, '_blank');
        }

        // Firebase Storage URLs for One Piece Chapters
        const chapterUrls = {
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.1%20Ch.0.pdf?alt=media&token=cf5d9ef0-07c4-4c0a-9833-409a1e350ae2",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.1%20Ch.1.pdf?alt=media&token=49e1def2-a08b-413b-9cf0-03748cf4d39e",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.1%20Ch.2.pdf?alt=media&token=78df8a0e-3f46-4ca4-9c3a-6c2716c86bf3",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.1%20Ch.3.pdf?alt=media&token=0619bdef-f117-4c85-bcc5-cdfec59de7f2",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.2%20Ch.4.pdf?alt=media&token=acb8f785-e9aa-460f-bad6-f37d50dee15c",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.2%20Ch.5.pdf?alt=media&token=b521998d-1fa0-4220-8239-a60efbe9442d",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.2%20Ch.6.pdf?alt=media&token=c56599ec-0c30-4fed-bbcd-f54a2cd7cc51",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.2%20Ch.7.pdf?alt=media&token=ebbb83f6-5991-41e7-86cd-f990d6ff83bb",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.3%20Ch.8.pdf?alt=media&token=cbc6605c-86e9-4110-ade7-176f44c494e3",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAo%20haru%20ride%2FChibi%20Manga%20%26%20Anime-tion%20Scanlation_Vol.3%20Ch.9.pdf?alt=media&token=2e83e1a6-d68e-46d3-989b-43245085efc0",
                
        };

        

       




        
        // Add event listeners for one piece chapter links
        document.getElementById("One1").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch1);
        });

        document.getElementById("One2").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch2);
        });

        document.getElementById("One3").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch3);
        });
        document.getElementById("One4").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch4);
        });
        document.getElementById("One5").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch5);
        });
        document.getElementById("One6").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch6);
        });
        document.getElementById("One7").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch7);
        });
        document.getElementById("One8").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch8);
        });
        document.getElementById("One9").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch9);
        });
        document.getElementById("One10").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch10);
        });
        

        
