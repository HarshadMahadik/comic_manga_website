
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.1%20Ch.1%20-%20School%20Building%20Ascension.pdf?alt=media&token=3bff9443-8078-442a-befe-105f54148339",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.1%20Ch.2%20-%20Rope%20Partner.pdf?alt=media&token=4c90e5b5-a510-44c6-a70a-b184cab5cf67",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.1%20Ch.3%20-%20Climbing%20Shoes.pdf?alt=media&token=77c7c862-4bd9-496d-9ca7-96fcde25d443",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.1%20Ch.4%20-%20Image%20Climbing.pdf?alt=media&token=328c46f7-fbdd-40a6-9182-64ea448b56ed",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.1%20Ch.5%20-%20Onsite.pdf?alt=media&token=06f86902-e9e8-4ac7-b433-f98d0b09474f",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.1%20Ch.6%20-%20Climb%20Observation!.pdf?alt=media&token=d88baecc-721b-4b57-b02b-abf4465b9a04",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.1%20Ch.7%20-%20Moves!.pdf?alt=media&token=dc9fb446-6094-4787-a8a5-8c7f738cccf6",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.1%20Ch.8%20-%20Takatori%20Mountain.pdf?alt=media&token=4b0b4ee5-2298-422b-bdb0-dd1e830910b1",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.1%20Ch.9%20-%20Climb%20Vision.pdf?alt=media&token=3210f0b3-9ce8-4260-aadf-ac28507dbe70",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FAscension%2FBakana%20Haven_Vol.2%20Ch.10%20-%20Solo%20Climber.pdf?alt=media&token=1061a7f6-e843-4574-95a9-096830402446",
                
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
        

        
