
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%201.pdf?alt=media&token=36eed150-2c71-4339-a6fc-006fb35de576",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%202.pdf?alt=media&token=80e19a38-7d6b-42b4-a76b-31bb14e32d40",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%203.pdf?alt=media&token=7cb34ba4-dd27-4b38-9fab-66c3d33762a8",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%204.pdf?alt=media&token=bb19132c-ef18-422e-bfac-0c4a72129a1f",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%205.pdf?alt=media&token=00a11cfb-9dd5-492b-bbc9-033ae3f574a6",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%206.pdf?alt=media&token=3a67e868-5a36-48dc-b7f0-2beb007f16c2",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%207.pdf?alt=media&token=29409daf-919f-4e89-b0e3-3b13bf1f3197",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%208.pdf?alt=media&token=d5d2e6fe-4b33-4140-9806-3ba1bad6b2e5",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%209.pdf?alt=media&token=f08a7a80-5779-4295-abbb-d4ad28c3a50a",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FWind%20breaker%2FChapter%2010.pdf?alt=media&token=49268153-8848-4864-873f-ec43dc8575aa",
                
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
        

        
