
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.1%20Ch.1%20-%20Promise.pdf?alt=media&token=63e7b566-bd22-4610-bd38-4145dfb68f47",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.1%20Ch.2%20-%20Question.pdf?alt=media&token=f18aab8a-1a11-4795-bf31-62414e175c0a",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.1%20Ch.3%20-%20First.pdf?alt=media&token=a68df4da-3ce7-41ff-9b4b-e802c9a81939",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.1%20Ch.4%20-%20Encounter.pdf?alt=media&token=fca195e8-d59c-46d9-88a7-601ea84091ac",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.1%20Ch.5%20-%20Plenty.pdf?alt=media&token=33880fea-85f1-4376-af60-216eaf3af731",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.1%20Ch.6%20-%20Similar.pdf?alt=media&token=20b472e6-5267-4b8c-a701-294fef427221",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.1%20Ch.7%20-%20Handmade.pdf?alt=media&token=0a26a2ac-b3e1-4e3d-bb6b-7a62e649d7c9",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.2%20Ch.8%20-%20Home%20Visit.pdf?alt=media&token=f48390e5-f30a-4e68-810a-3948c9ff2902",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.2%20Ch.9%20-%20Getting%20Closer.pdf?alt=media&token=93afa171-ca76-417e-8bc3-07d819875794",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNisekoi%2FImperial%20Scans_Vol.2%20Ch.10%20-%20Swimming.pdf?alt=media&token=820ff03a-81f9-40bc-a6d2-63de70affec7",
                
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
        

        
