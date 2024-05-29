
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Underrated%2FIron%20man%2FIron%20Man-%20The%20Ultimate%20Guide%20to%20the%20Armored%20Super%20Hero_text.pdf?alt=media&token=53cca00d-bba4-4412-b2be-ac8d1a70dbd1",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FHorimiya%2FVol.1%20Chapter%202%20_%20Page%202.pdf?alt=media&token=3e906cab-d6e9-47d0-ad0b-a9331ccf3dd8",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FHorimiya%2FVol.1%20Chapter%203%20_%20Page%203.pdf?alt=media&token=0e18cade-5a21-4f4b-8a5f-8870ade03e86",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FHorimiya%2FVol.1%20Chapter%204%20_%20Page%204.pdf?alt=media&token=7045bafa-9f29-495e-a0f0-01b4ed954c07",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FHorimiya%2FVol.1%20Chapter%205%20_%20Page%205.pdf?alt=media&token=8cc1a329-6ea0-4efb-8978-0cf377e9b317",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FHorimiya%2FVol.1%20Chapter%206%2BExtra%20_%20Page%206%20%2B%20Omake%20Manga%20Myamura.pdf?alt=media&token=e5dd0072-3a0d-4255-9b88-ee04f244a524",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FHorimiya%2FVol.2%20Chapter%207.pdf?alt=media&token=cf64ad3c-2653-48af-8dd5-aaaf08dcc736",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FHorimiya%2FVol.2%20Chapter%208.pdf?alt=media&token=04be7bbe-4f21-48c2-acf2-740670ad1166",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FHorimiya%2FVol.2%20Chapter%209.pdf?alt=media&token=46eadc94-ebb8-46f5-9473-d7cbb70e1bca",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FHorimiya%2FVol.2%20Chapter%2010%20_%20Page%2010.pdf?alt=media&token=2e46a686-b61f-41cf-a61a-9bb3df44f2d5",
                
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
        

        
