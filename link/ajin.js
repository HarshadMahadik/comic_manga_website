
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAjin%2FOuterworld%20Scans_Vol.1%20Ch.1%20-%20Detection%20and%20Subsequent%20Action.pdf?alt=media&token=dcaf9d07-81a9-4e16-ba29-2585fec18918",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAjin%2FOuterworld%20Scans_Vol.1%20Ch.2%20-%20Event%20on%20the%20First%20Night.pdf?alt=media&token=3f5e1c59-04c6-4f6a-b9f3-6d5a09095cc4",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAjin%2FPsylocke%20Scans%20%26%20Outerworld%20Scans_Vol.1%20Ch.3%20-%20Escape%20and%20Threat.pdf?alt=media&token=ab0b91d8-662c-4ff1-b9ff-3000286605f6",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAjin%2FPsylocke%20Scans%20%26%20Outerworld%20Scans_Vol.1%20Ch.4%20-%20Interrogation%20and%20Conspirator.pdf?alt=media&token=36395ad7-645d-4b52-be4f-f17331652251",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAjin%2FPsylocke%20Scans%20%26%20Outerworld%20Scans_Vol.1%20Ch.5%20-%20Appearance%20and%20Organization.pdf?alt=media&token=4fcfd073-9f21-444c-b922-18018e8a431a",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAjin%2FPsylocke%20Scans%20%26%20Outerworld%20Scans_Vol.2%20Ch.6%20-%20Fresh%20Star.pdf?alt=media&token=6074af6e-5619-4c96-9794-fca2039609cf",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAjin%2FPsylocke%20Scans%20%26%20Outerworld%20Scans_Vol.2%20Ch.8%20-%20Blindness.pdf?alt=media&token=906a10d7-21b3-41e9-8bd5-86bf2bee6405",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAjin%2FPsylocke%20Scans%20%26%20Outerworld%20Scans_Vol.2%20Ch.9%20-%20Killtacular.pdf?alt=media&token=5e92e2bd-838a-4f61-a251-1cfc3979366e",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAjin%2Fblackinque_Vol.3%20Ch.10%20-%20The%20Real%20Nagai%20Kei%20(1).pdf?alt=media&token=1ea2127a-ceaa-423a-9a08-8431afae7e84",
                
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
        

        
