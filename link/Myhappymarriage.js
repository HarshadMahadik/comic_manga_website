
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2FTapioca%20Scans_Vol.1%20Ch.1%20-%20Betrothal.pdf?alt=media&token=ef152e59-9051-4130-bdeb-d96661bdc348",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2FTapioca%20Scans_Vol.1%20Ch.2%20-%20The%20First%20Breakfast.pdf?alt=media&token=89206786-2531-4d80-a168-424615d5ed94",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2FTapioca%20Scans_Vol.1%20Ch.3%20-%20The%20First%20Dinner.pdf?alt=media&token=d4be8e60-fcb0-4fee-a1a3-962ebfe1bd7e",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2FTapioca%20Scans_Vol.1%20Ch.4%20-%20A%20Very%20Peculiar%20Fianc%C3%A9e.pdf?alt=media&token=e0f59366-07fd-437b-9faf-9ddc84fca76e",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2FTapioca%20Scans_Vol.1%20Ch.5%20-%20A%20Conflicted%20Heart.pdf?alt=media&token=e5bd2252-d0a1-4de5-ab22-34be344ee97d",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2FTapioca%20Scans_Vol.1%20Ch.6%20-%20The%20First%20Date.pdf?alt=media&token=897e86c8-7e56-4b05-a972-1a621f895290",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2FTapioca%20Scans_Vol.1%20Ch.7%20-%20The%20First%20Date%20Part%202.pdf?alt=media&token=199936fe-024e-44f7-a92d-b3bf08fe0b14",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2FTapioca%20Scans_Vol.2%20Ch.8%20-%20A%20Present%20for%20Danna-sama.pdf?alt=media&token=6feefd33-c441-4fc9-aee5-ce6d292dec98",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2FTapioca%20Scans_Vol.2%20Ch.9%20-%20What%20I%20Hate%E2%80%A6.pdf?alt=media&token=2488299b-49b7-459e-9de9-277d9c388d04",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FMy%20happy%20marriage%2Fkuri____Vol.2%20Ch.9%20-%20The%20most%20hateful%20thing%20is.pdf?alt=media&token=1dc844a6-87e2-40c3-8973-a9d77d1fba41",
                
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
        

        
