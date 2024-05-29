
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Underrated%2FSpiderman%2F3%20amazing%20spider%20man_text%20(1).pdf?alt=media&token=2c79cba1-d80e-44c9-9f4b-035bce253fcc",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%202%20_%20Konohamaru!.pdf?alt=media&token=a3490519-2b38-4d3b-b94b-26c603b3b53d",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%203%20_%20Uchiha%20Sasuke.pdf?alt=media&token=2e47ce07-4b3e-4296-87c3-ef22eaf62762",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%204%20_%20Hatake%20Kakashi.pdf?alt=media&token=93a8151b-29d7-4b0a-b250-a7e3c88866c6",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%205%20_%20Carelessness%20Is%20Your%20Worst%20Enemy.pdf?alt=media&token=bbcf3311-979f-4437-8c0b-bdde7474dd79",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%206%20_%20Not%20Sasuke-Kun.pdf?alt=media&token=9bc6da9a-aca3-47e1-b546-11313ac280d7",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.1%20Chapter%207%20_%20Kakashi's%20Conclusion.pdf?alt=media&token=9cad4162-db13-4b36-b12c-5072735c4191",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%208%20_%20That's%20Why%20You're%20Failures.pdf?alt=media&token=a1e18db7-2505-4558-a4ed-aa7534b696bf",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%209%20_%20The%20Worst%20Possible%20Client.pdf?alt=media&token=0436eabf-bb6c-4999-9ac5-ecbacf029408", 
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNaruto%2FVol.2%20Chapter%2010%20_%20Two%20Down.pdf?alt=media&token=a609404d-3532-44e1-82ce-67889bb95203",
             
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
      

        