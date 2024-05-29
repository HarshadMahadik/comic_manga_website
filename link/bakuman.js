
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.1%20Ch.1%20-%20Dreams%20and%20Reality.pdf?alt=media&token=ab9f17d0-e592-4961-9640-e404dec3a873",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.1%20Ch.2%20-%20The%20Fool%20and%20the%20Wiseman.pdf?alt=media&token=a5b2224c-e8f8-429f-a850-730b54569d3f",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.1%20Ch.3%20-%20Pens%20and%20Names.pdf?alt=media&token=37e2a8ca-b6fa-4458-8ce2-8c548662ac00",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.1%20Ch.4%20-%20Parent%20and%20Child.pdf?alt=media&token=1977d06c-223f-4d83-a630-bae0b628d46a",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.1%20Ch.5%20-%20The%20Rules%20of%20the%20Mangaka.pdf?alt=media&token=c0cf1e65-0811-4781-ab19-83c0355dfb51",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.1%20Ch.6%20-%20Best%20and%20Worst.pdf?alt=media&token=c2f27d99-a45c-4834-9758-adda0580c007",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.1%20Ch.7%20-%20A%20Smile%20and%20a%20Blush.pdf?alt=media&token=48deac63-d6b4-4826-9baf-dbed9a364f42",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.2%20Ch.8%20-%20The%20Carrot%20and%20The%20Stick.pdf?alt=media&token=df0fb52f-224e-4e63-9f39-ebbc08463eed",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.2%20Ch.9%20-%20Conditions%20and%20Moving%20to%20Tokyo.pdf?alt=media&token=250989a2-9b6d-45a2-877d-6dc32689419e",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBakuman%2FSleepyFans_Vol.2%20Ch.10%20-%20Anxiety%20and%20Anticipation.pdf?alt=media&token=03c1caf9-3c59-4ee4-8994-cc36add7b582",
                
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
        

        
